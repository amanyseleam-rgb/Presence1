let db;
let currentStudents = [];

function init() {
    db = initDatabase();
    populateGrades();
    displayStudents();
}

function populateGrades() {
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

function populateClasses() {
    const gradeSelect = document.getElementById("gradeSelect");
    const classSelect = document.getElementById("classSelect");
    if (!classSelect) return;

    const gradeId = parseInt(gradeSelect.value);
    classSelect.innerHTML = '<option value="">اختر الفصل</option>';

    if (!gradeId) {
        displayStudents();
        return;
    }

    const classes = getClassesByGrade(gradeId);
    classes.forEach(cls => {
        const option = document.createElement("option");
        option.value = cls.id;
        option.textContent = `فصل ${cls.name}`;
        classSelect.appendChild(option);
    });

    displayStudents();
}

function getFilteredStudents() {
    const classSelect = document.getElementById("classSelect");
    const classId = classSelect ? parseInt(classSelect.value) : null;

    let students = getAllStudentsWithClassInfo();

    if (classId) {
        students = students.filter(s => s.classId === classId);
    } else {
        const gradeSelect = document.getElementById("gradeSelect");
        const gradeId = gradeSelect ? parseInt(gradeSelect.value) : null;
        if (gradeId) {
            students = students.filter(s => s.gradeId === gradeId);
        }
    }

    return students.sort((a, b) => {
        if (a.gradeLevel !== b.gradeLevel) return a.gradeLevel - b.gradeLevel;
        if (a.classId !== b.classId) return a.classId - b.classId;
        return a.name.localeCompare(b.name, 'ar');
    });
}

function displayStudents() {
    const table = document.getElementById("studentsList");
    if (!table) return;

    table.innerHTML = "";
    currentStudents = getFilteredStudents();

    const searchInput = document.getElementById("studentSearch");
    let list = currentStudents;

    if (searchInput && searchInput.value.trim()) {
        const searchText = searchInput.value.trim().toLowerCase();
        list = currentStudents.filter(s =>
            s.name.toLowerCase().includes(searchText) ||
            s.nationalId.includes(searchText)
        );
    }

    if (list.length === 0) {
        table.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:24px;color:#888;font-size:15px;">لا يوجد طلاب</td></tr>';
        return;
    }

    list.forEach(function(student, index) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td dir="ltr" style="font-family:monospace;font-size:13px;">${student.nationalId}</td>
            <td>${student.name}</td>
            <td>${student.gender || '-'}</td>
            <td>${student.gradeName} - ${student.className}</td>
            <td>
                <button class="barcode-btn" onclick='showStudentBarcode(${JSON.stringify(student)})' title="عرض الباركود">
                    🏷️ باركود
                </button>
                <button class="edit-btn" onclick="editStudent(${student.id})">
                    ✏️ تعديل
                </button>
                <button class="delete-btn" onclick="removeStudent(${student.id})">
                    🗑️ حذف
                </button>
            </td>
        `;

        table.appendChild(row);
    });
}

function showStudentBarcode(student) {
    openBarcodeModal({
        id: student.id,
        name: student.name,
        nationalId: student.nationalId
    });
}

function addNewStudent() {
    const nameInput = document.getElementById("studentName");
    const nationalIdInput = document.getElementById("studentNationalId");
    const classSelect = document.getElementById("classSelect");
    const genderSelect = document.getElementById("studentGender");

    const name = nameInput.value.trim();
    const nationalId = nationalIdInput.value.trim();
    const classId = parseInt(classSelect.value);
    const gender = genderSelect ? genderSelect.value : "ذكر";

    if (!name) {
        showToast("من فضلك اكتبي اسم الطالب", "warning");
        return;
    }

    if (!nationalId) {
        showToast("من فضلك اكتبي id الطالب", "warning");
        return;
    }

    if (nationalId.length !== 9) {
        showToast("id يجب أن يكون 9 أرقام", "warning");
        return;
    }

    if (!classId) {
        showToast("من فضلك اختاري الصف والفصل أولاً", "warning");
        return;
    }

    const existing = findStudentByNationalId(nationalId);
    if (existing) {
        showToast("id مسجل بالفعل للطالب: " + existing.name, "error");
        return;
    }

    try {
        const studentData = {
            nationalId: nationalId,
            name: name,
            classId: classId,
            gender: gender
        };
        addStudent(studentData);
        nameInput.value = "";
        nationalIdInput.value = "";
        db = getDatabase();
        displayStudents();
        showToast("✅ تم إضافة الطالب بنجاح!", "success");
    } catch (e) {
        showToast("خطأ: " + e.message, "error");
    }
}

function editStudent(studentId) {
    const dbLocal = getDatabase();
    const student = dbLocal.students.find(s => s.id === studentId);
    if (!student) return;

    const newName = prompt("عدلي اسم الطالب:", student.name);
    if (newName === null) return;
    if (newName.trim() === "") {
        showToast("اسم الطالب لا يمكن أن يكون فارغًا", "warning");
        return;
    }

    const newNationalId = prompt("عدلي id الطالب (الباركود):", student.nationalId);
    if (newNationalId === null) return;
    if (newNationalId.trim() === "") {
        showToast("id الطالب لا يمكن أن يكون فارغًا", "warning");
        return;
    }

    const existing = dbLocal.students.find(s => s.nationalId === newNationalId.trim() && s.id !== studentId);
    if (existing) {
        showToast("id مسجل بالفعل للطالب: " + existing.name, "error");
        return;
    }

    updateStudent(studentId, {
        name: newName.trim(),
        nationalId: newNationalId.trim()
    });

    db = getDatabase();
    displayStudents();
    showToast("✅ تم تحديث بيانات الطالب بنجاح!", "success");
}

function removeStudent(studentId) {
    if (!confirm("هل أنتِ متأكدة من حذف الطالب؟")) return;
    if (deleteStudent(studentId)) {
        db = getDatabase();
        displayStudents();
        showToast("✅ تم حذف الطالب بنجاح!", "success");
    }
}

function exportStudents() {
    const list = currentStudents.length > 0 ? currentStudents : getAllStudentsWithClassInfo();
    const exportData = list.map(s => ({
        "الرقم": s.id,
        "id": s.nationalId,
        "اسم الطالب": s.name,
        "الجنس": s.gender || "",
        "الصف": s.gradeName || "",
        "الفصل": s.className || "",
        "رقم الفصل": s.classId
    }));
    exportToExcel(exportData, "بيانات_الطلاب", "الطلاب");
}

function handleImport(event) {
    importFromExcel(event.target, (rows) => {
        let added = 0, errors = 0;
        rows.forEach(row => {
            const nationalId = String(row["id"] || row["الرقم القومي"] || row["nationalId"] || "").trim();
            const name = String(row["اسم الطالب"] || row["name"] || "").trim();
            const className = String(row["الفصل"] || row["className"] || "").trim();
            const gradeName = String(row["الصف"] || row["gradeName"] || "").trim();
            const gender = String(row["الجنس"] || row["gender"] || "ذكر").trim();

            if (!name || !nationalId) { errors++; return; }
            if (findStudentByNationalId(nationalId)) { errors++; return; }

            let classId = null;
            const allClasses = db.classes;
            if (className) {
                const cls = allClasses.find(c => c.name === className);
                if (cls) {
                    if (gradeName) {
                        const grade = db.grades.find(g => g.name === gradeName);
                        if (grade && cls.gradeId === grade.id) {
                            classId = cls.id;
                        }
                    } else {
                        classId = cls.id;
                    }
                }
            }

            if (!classId) {
                const gradeSelect = document.getElementById("gradeSelect");
                const classSelect = document.getElementById("classSelect");
                classId = classSelect?.value ? parseInt(classSelect.value) :
                          (gradeSelect?.value ? (getClassesByGrade(parseInt(gradeSelect.value))[0]?.id || null) : null);
            }

            if (!classId) { errors++; return; }

            try {
                addStudent({ nationalId, name, classId, gender });
                added++;
            } catch (e) {
                errors++;
            }
        });

        db = getDatabase();
        displayStudents();
        showToast(`✅ تم استيراد ${added} طالب (فشل: ${errors})`, added > 0 ? "success" : "warning");
    }, (err) => {
        showToast("خطأ في الاستيراد: " + err.message, "error");
    });
}

function printAllStudentBarcodes() {
    const list = currentStudents.length > 0 ? currentStudents : getAllStudentsWithClassInfo();
    if (list.length === 0) {
        showToast("لا توجد طلاب لطباعة باركوداتهم", "warning");
        return;
    }
    const barcodeData = list.map(s => ({ name: s.name, nationalId: s.nationalId }));
    printAllBarcodes(barcodeData);
}

document.addEventListener("DOMContentLoaded", function() {
    init();

    const searchInput = document.getElementById("studentSearch");
    if (searchInput) {
        searchInput.addEventListener("input", displayStudents);
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeBarcodeModal();
    });
});
