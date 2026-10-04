let db;
let currentClassId = null;

function openAttendance() {
    window.location.href = "attendance.html";
}

function initAttendance() {
    db = initDatabase();
    populateAttendanceGrades();

    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById("date");
    if (dateInput) dateInput.value = today;
}

function populateAttendanceGrades() {
    const gradeSelect = document.getElementById("gradeSelect");
    if (!gradeSelect) return;

    gradeSelect.innerHTML = '<option value="">اختر الصف</option>';
    db.grades.forEach(grade => {
        const option = document.createElement("option");
        option.value = grade.id;
        option.textContent = grade.name;
        gradeSelect.appendChild(option);
    });
}

function populateAttendanceClasses() {
    const gradeSelect = document.getElementById("gradeSelect");
    const classSelect = document.getElementById("classSelect");
    if (!classSelect) return;

    const gradeId = parseInt(gradeSelect.value);
    classSelect.innerHTML = '<option value="">اختر الفصل</option>';
    currentClassId = null;

    if (!gradeId) {
        displayAttendanceStudents();
        return;
    }

    const classes = getClassesByGrade(gradeId);
    classes.forEach(cls => {
        const option = document.createElement("option");
        option.value = cls.id;
        option.textContent = `فصل ${cls.name}`;
        classSelect.appendChild(option);
    });

    displayAttendanceStudents();
}

function getCurrentAttendanceStudents() {
    const classSelect = document.getElementById("classSelect");
    currentClassId = classSelect ? parseInt(classSelect.value) : null;

    if (currentClassId) {
        return getStudentsByClass(currentClassId);
    }

    const gradeSelect = document.getElementById("gradeSelect");
    const gradeId = gradeSelect ? parseInt(gradeSelect.value) : null;

    if (gradeId) {
        const allStudents = getAllStudentsWithClassInfo();
        return allStudents.filter(s => getGradeIdByClass(s.classId) === gradeId);
    }

    return [];
}

function displayAttendanceStudents() {
    const table = document.getElementById("studentsTable");
    if (!table) return;

    table.innerHTML = "";
    const students = getCurrentAttendanceStudents();
    const date = document.getElementById("date")?.value || "";
    let savedData = null;

    if (date) {
        const saved = localStorage.getItem(getAttendanceKey(date, currentClassId));
        if (saved) savedData = JSON.parse(saved);
    }

    const searchInput = document.getElementById("search");
    let filteredStudents = students;
    if (searchInput && searchInput.value.trim()) {
        const searchText = searchInput.value.trim().toLowerCase();
        filteredStudents = students.filter(s =>
            s.name.toLowerCase().includes(searchText) ||
            s.nationalId.includes(searchText)
        );
    }

    if (filteredStudents.length === 0) {
        table.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:24px;color:#888;font-size:15px;">اختر الصف والفصل أولاً لعرض الطلاب</td></tr>';
        updateStats();
        return;
    }

    filteredStudents.forEach(function(student, index) {
        const row = document.createElement("tr");
        row.dataset.studentId = student.id;
        row.dataset.nationalId = student.nationalId;

        let status = "لم يتم التسجيل";
        let rowBg = "";
        let statusColor = "#64748b";

        if (savedData) {
            const record = savedData.find(r => r.nationalId === student.nationalId);
            if (record) {
                status = record.status;
                if (status === "حاضر") {
                    rowBg = "#f0fdf4";
                    statusColor = "#16a34a";
                } else if (status === "غائب") {
                    rowBg = "#fef2f2";
                    statusColor = "#dc2626";
                }
            }
        }

        row.style.backgroundColor = rowBg;

        const studentData = encodeURIComponent(JSON.stringify(student));

        row.innerHTML =
            "<td>" + (index + 1) + "</td>" +
            '<td dir="ltr" style="font-family:monospace;font-size:13px;">' + student.nationalId + "</td>" +
            "<td>" + student.name + "</td>" +
            '<td class="status" style="color:' + statusColor + ';">' + status + "</td>" +
            "<td>" +
            '<button class="present-btn" onclick="markPresent(this)">حاضر</button>' +
            '<button class="absent-btn" onclick="markAbsent(this)">غائب</button>' +
            '<button class="barcode-btn" onclick="showAttendanceBarcode(' + studentData + ')" title="عرض الباركود">🏷️</button>' +
            "</td>";

        table.appendChild(row);
    });

    updateStats();
}

function showAttendanceBarcode(student) {
    openBarcodeModal(student);
}

function getAttendanceKey(date, classId) {
    if (classId) {
        return "attendance_" + date + "_class_" + classId;
    }
    return "attendance_" + date;
}

function markPresent(button) {
    const row = button.closest("tr");
    const statusCell = row.querySelector(".status");

    row.style.backgroundColor = "#f0fdf4";
    statusCell.textContent = "حاضر";
    statusCell.style.color = "#16a34a";

    updateStats();
}

function markAbsent(button) {
    const row = button.closest("tr");
    const statusCell = row.querySelector(".status");

    row.style.backgroundColor = "#fef2f2";
    statusCell.textContent = "غائب";
    statusCell.style.color = "#dc2626";

    updateStats();
}

function updateStats() {
    const rows = document.querySelectorAll("#studentsTable tr");

    let present = 0;
    let absent = 0;
    let pending = 0;

    rows.forEach(function(row) {
        const status = row.querySelector(".status");
        if (!status) return;

        if (status.textContent.trim() === "حاضر") {
            present++;
        } else if (status.textContent.trim() === "غائب") {
            absent++;
        } else if (status.textContent.trim() === "لم يتم التسجيل") {
            pending++;
        }
    });

    const totalEl = document.getElementById("totalCount");
    const presentEl = document.getElementById("presentCount");
    const absentEl = document.getElementById("absentCount");
    const pendingEl = document.getElementById("pendingCount");

    if (totalEl) totalEl.textContent = present + absent + pending;
    if (presentEl) presentEl.textContent = present;
    if (absentEl) absentEl.textContent = absent;
    if (pendingEl) pendingEl.textContent = pending;
}

function saveAttendance() {
    const date = document.getElementById("date").value;

    if (!date) {
        showToast("من فضلك اختاري تاريخ الرصد أولاً", "warning");
        return;
    }

    if (!currentClassId) {
        showToast("من فضلك اختاري الفصل أولاً", "warning");
        return;
    }

    const rows = document.querySelectorAll("#studentsTable tr");
    const attendanceData = [];

    rows.forEach(function(row) {
        if (!row.dataset.nationalId) return;

        const nationalId = row.dataset.nationalId;
        const studentId = row.dataset.studentId;
        const name = row.cells[2].textContent.trim();
        const status = row.querySelector(".status").textContent.trim();

        attendanceData.push({
            studentId: parseInt(studentId),
            nationalId: nationalId,
            name: name,
            status: status,
            classId: currentClassId
        });
    });

    localStorage.setItem(
        getAttendanceKey(date, currentClassId),
        JSON.stringify(attendanceData)
    );

    const clsName = getClassName(currentClassId);
    showToast("✅ تم حفظ رصد يوم " + date + " (" + clsName + ") بنجاح", "success");
}

function loadAttendance() {
    displayAttendanceStudents();
}

function printAttendance() {
    const date = document.getElementById("date")?.value || new Date().toISOString().split('T')[0];
    const classId = currentClassId;
    if (!classId) {
        showToast("من فضلك اختاري الفصل أولاً", "warning");
        return;
    }
    printSection("attendanceSection", `سجل الحضور - ${getClassName(classId)} - ${date}`);
}

function exportAttendanceExcel() {
    const date = document.getElementById("date")?.value || new Date().toISOString().split('T')[0];
    const rows = document.querySelectorAll("#studentsTable tr");
    const data = [];

    rows.forEach(function(row, idx) {
        if (!row.dataset.nationalId) return;
        data.push({
            "م": idx + 1,
            "id": row.dataset.nationalId,
            "اسم الطالب": row.cells[2].textContent.trim(),
            "الحالة": row.querySelector(".status").textContent.trim(),
            "التاريخ": date,
            "الفصل": currentClassId ? getClassName(currentClassId) : ""
        });
    });

    if (data.length === 0) {
        showToast("لا توجد بيانات للتصدير", "warning");
        return;
    }

    exportToExcel(data, `سجل_الحضور_${date}`, "الحضور");
}

function printCurrentClassBarcodes() {
    const students = getCurrentAttendanceStudents();
    if (students.length === 0) {
        showToast("لا توجد طلاب في الفصل الحالي", "warning");
        return;
    }
    const barcodeData = students.map(s => ({ name: s.name, nationalId: s.nationalId }));
    printAllBarcodes(barcodeData);
}

function startQrScanner() {
    if (!document.getElementById("reader")) return;

    const scanner = new Html5QrcodeScanner("reader", {
        fps: 10,
        qrbox: { width: 250, height: 250 }
    }, false);

    scanner.render((decodedText) => {
        markStudentPresentByQR(decodedText.trim());
    }, (error) => {
    });
}

function markStudentPresentByQR(studentCode) {
    const rows = document.querySelectorAll("#studentsTable tr");
    let found = false;
    let matchedStudent = null;

    studentCode = studentCode.trim();

    const student = findStudentByNationalId(studentCode);
    if (!student) {
        const byName = findStudentByName(studentCode);
        if (byName) matchedStudent = byName;
    } else {
        matchedStudent = student;
    }

    rows.forEach(function(row) {
        const rowNationalId = row.dataset.nationalId;

        if (rowNationalId === studentCode ||
            (matchedStudent && rowNationalId === matchedStudent.nationalId)) {

            const studentName = row.cells[2].textContent.trim();
            const statusCell = row.querySelector(".status");

            row.style.backgroundColor = "#f0fdf4";
            statusCell.textContent = "حاضر";
            statusCell.style.color = "#16a34a";

            updateStats();

            const resultMsg = document.getElementById("scan-result");
            if (resultMsg) {
                resultMsg.style.color = "#16a34a";
                resultMsg.style.background = "#f0fdf4";
                resultMsg.textContent = `✅ تم تسجيل حضور: ${studentName} (${rowNationalId})`;
            }
            found = true;

            setTimeout(() => {
                if (resultMsg) resultMsg.textContent = "";
            }, 3000);
        }
    });

    if (!found) {
        const resultMsg = document.getElementById("scan-result");
        if (resultMsg) {
            if (matchedStudent) {
                resultMsg.style.color = "#f59e0b";
                resultMsg.style.background = "#fffbeb";
                resultMsg.textContent = `⚠️ الطالب موجود لكنه ليس في الفصل الحالي: ${matchedStudent.name}`;
            } else {
                resultMsg.style.color = "#dc2626";
                resultMsg.style.background = "#fef2f2";
                resultMsg.textContent = `❌ غير موجود: (${studentCode})`;
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("studentsTable") || document.getElementById("reader")) {
        initAttendance();
    }

    const searchInput = document.getElementById("search");
    if (searchInput) {
        searchInput.addEventListener("input", function() {
            displayAttendanceStudents();
        });
    }

    const dateInput = document.getElementById("date");
    if (dateInput) {
        dateInput.addEventListener("change", loadAttendance);
    }

    if (document.getElementById("studentsTable")) {
        displayAttendanceStudents();
    }

    startQrScanner();

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeBarcodeModal();
    });
});
