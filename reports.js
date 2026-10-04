let reportDb;
let allReportRows = [];

function initReportsPage() {
    reportDb = initDatabase();
    populateReportGrades();
    populateReportClasses();
    loadReports();

    const search = document.getElementById("reportSearch");
    if (search) {
        search.oninput = renderReports;
    }
}

function populateReportGrades() {
    const sel = document.getElementById("gradeSelect");
    if (!sel) return;
    sel.innerHTML = '<option value="">اختر الصف</option>';
    reportDb.grades.forEach(g => {
        const o = document.createElement("option");
        o.value = g.id;
        o.textContent = g.name;
        sel.appendChild(o);
    });
}

function populateReportClasses() {
    const gradeSelect = document.getElementById("gradeSelect");
    const classSelect = document.getElementById("classSelect");
    if (!classSelect) return;

    const gid = parseInt(gradeSelect?.value);
    classSelect.innerHTML = '<option value="">اختر الفصل</option>';

    let classes = reportDb.classes;
    if (gid) classes = classes.filter(c => c.gradeId === gid);

    classes.forEach(c => {
        const o = document.createElement("option");
        o.value = c.id;
        o.textContent = `فصل ${c.name}`;
        classSelect.appendChild(o);
    });
    loadReports();
}

function loadReports() {
    const classSelect = document.getElementById("classSelect");
    const classId = classSelect ? parseInt(classSelect.value) : null;
    let students = getAllStudentsWithClassInfo();

    if (classId) students = students.filter(s => s.classId === classId);

    const reports = students.map(s => {
        const records = getAttendanceSummary(s.nationalId);
        const days = records.present + records.absent;
        const pct = days > 0 ? ((records.present / days) * 100) : 0;
        return {
            ...s,
            present: records.present,
            absent: records.absent,
            totalDays: days,
            percentage: pct
        };
    });

    allReportRows = reports;
    renderReports();
}

function renderReports() {
    const tbody = document.getElementById("reportsTable");
    if (!tbody) return;

    const q = (document.getElementById("reportSearch")?.value || "").toLowerCase();
    let rows = allReportRows;

    if (q) {
        rows = rows.filter(r =>
            String(r.nationalId).includes(q) ||
            r.name.toLowerCase().includes(q)
        );
    }

    if (rows.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:20px;color:#888;">لا توجد بيانات</td></tr>`;
        return;
    }

    tbody.innerHTML = rows.map((r, i) => `
        <tr>
            <td>${i + 1}</td>
            <td dir="ltr" style="font-family:monospace;font-size:13px;">${r.nationalId}</td>
            <td>${r.name}</td>
            <td>${r.className || "-"}</td>
            <td class="report-present"><strong>${r.present}</strong></td>
            <td class="report-absent"><strong>${r.absent}</strong></td>
            <td>${r.totalDays}</td>
            <td class="${r.percentage >= 90 ? 'report-present' : r.percentage >= 60 ? '' : 'report-absent'}">
                <strong>${r.percentage.toFixed(1)}%</strong>
            </td>
        </tr>
    `).join("");
}

function getAttendanceSummary(nationalId) {
    let present = 0;
    let absent = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key.startsWith("attendance_")) continue;
        try {
            const data = JSON.parse(localStorage.getItem(key));
            const match = data.find(r => String(r.nationalId) === String(nationalId));
            if (match) {
                if (match.status === "حاضر") present++;
                if (match.status === "غائب") absent++;
            }
        } catch (e) { }
    }
    return { present, absent };
}

function printReports() {
    printSection("reportPrintSection", "تقرير الحضور والغياب");
}

function exportReportExcel() {
    if (allReportRows.length === 0) {
        showToast("⚠️ لا توجد بيانات للتصدير", "warning");
        return;
    }
    const data = allReportRows.map((r, i) => ({
        "م": i + 1,
        "id": r.nationalId,
        "اسم الطالب": r.name,
        "الجنس": r.gender || "",
        "الفصل": r.className || "-",
        "الصف": r.gradeName || "-",
        "حضر": r.present,
        "غاب": r.absent,
        "إجمالي الأيام": r.totalDays,
        "نسبة الحضور %": r.percentage.toFixed(1)
    }));

    const classSelect = document.getElementById("classSelect");
    const classId = classSelect?.value ? parseInt(classSelect.value) : null;
    const fileName = classId
        ? `تقرير_حضور_${getClassName(classId)}`
        : `تقرير_الحضور_الشامل`;

    exportToExcel(data, fileName, "الحضور والغياب");
}

function importAttendance(event) {
    importFromExcel(event.target, (rows) => {
        let imported = 0, failed = 0;

        const nidCol = Object.keys(rows[0] || {}).find(k =>
            k.includes("قومي") || k.includes("national") || k.includes("id") || k.toLowerCase().includes("id")
        ) || Object.keys(rows[0] || {})[1];
        const dateCol = Object.keys(rows[0] || {}).find(k =>
            k.includes("التاريخ") || k.includes("date")
        );
        const statusCol = Object.keys(rows[0] || {}).find(k =>
            k.includes("الحالة") || k.includes("status") || k.includes("الحضور")
        ) || Object.keys(rows[0] || {})[2];
        const classCol = Object.keys(rows[0] || {}).find(k =>
            k.includes("الفصل") || k.includes("class")
        );

        rows.forEach(row => {
            const nid = String(row[nidCol] || "").trim();
            const student = findStudentByNationalId(nid);
            if (!student) { failed++; return; }

            let date = new Date().toISOString().split('T')[0];
            if (dateCol && row[dateCol]) {
                try {
                    const d = new Date(row[dateCol]);
                    if (!isNaN(d)) date = d.toISOString().split('T')[0];
                } catch (e) { }
            }

            let status = "حاضر";
            if (statusCol) {
                const s = String(row[statusCol] || "حاضر").trim();
                if (s.includes("غاب") || s.includes("غائب") || s.toLowerCase().includes("absent"))
                    status = "غائب";
                else if (s.includes("متأخر") || s.includes("late"))
                    status = "متأخر";
                else if (s.includes("معذور") || s.includes("excused"))
                    status = "معذور";
            }

            const key = `attendance_${date}_class_${student.classId}`;
            let existing = [];
            try { existing = JSON.parse(localStorage.getItem(key) || "[]"); } catch (e) { }

            const idx = existing.findIndex(r => String(r.nationalId) === nid);
            if (idx >= 0) existing[idx] = { ...existing[idx], status };
            else existing.push({
                name: student.name,
                nationalId: nid,
                classId: student.classId,
                date: date,
                status: status,
                timestamp: Date.now()
            });

            localStorage.setItem(key, JSON.stringify(existing));
            imported++;
        });

        showToast(`✅ تم استيراد ${imported} سجل حضور (فشل: ${failed})`, imported > 0 ? "success" : "warning");
        loadReports();
    });
}

document.addEventListener("DOMContentLoaded", initReportsPage);
