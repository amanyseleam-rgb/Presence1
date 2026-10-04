let statDb;
let allStatRows = [];

function initStatisticsPage() {
    statDb = initDatabase();
    populateStatGrades();
    populateStatsClasses();
    loadStatistics();
}

function populateStatGrades() {
    const sel = document.getElementById("gradeSelect");
    if (!sel) return;
    sel.innerHTML = '<option value="">اختر الصف</option>';
    statDb.grades.forEach(g => {
        const o = document.createElement("option");
        o.value = g.id;
        o.textContent = g.name;
        sel.appendChild(o);
    });
}

function populateStatsClasses() {
    const gradeSelect = document.getElementById("gradeSelect");
    const classSelect = document.getElementById("classSelect");
    if (!classSelect) return;

    const gid = parseInt(gradeSelect?.value);
    classSelect.innerHTML = '<option value="">اختر الفصل</option>';

    let classes = statDb.classes;
    if (gid) classes = classes.filter(c => c.gradeId === gid);

    classes.forEach(c => {
        const o = document.createElement("option");
        o.value = c.id;
        o.textContent = `فصل ${c.name}`;
        classSelect.appendChild(o);
    });
    loadStatistics();
}

function loadStatistics() {
    const classSelect = document.getElementById("classSelect");
    const classId = classSelect ? parseInt(classSelect.value) : null;
    let students = getAllStudentsWithClassInfo();

    if (classId) students = students.filter(s => s.classId === classId);

    let totalPresent = 0, totalAbsent = 0, totalDays = 0;

    const rows = students.map(s => {
        const records = getStatSummary(s.nationalId);
        const days = records.present + records.absent;
        const pct = days > 0 ? ((records.present / days) * 100) : 0;
        totalPresent += records.present;
        totalAbsent += records.absent;
        totalDays += days;

        let status, statusClass;
        if (days === 0) { status = "لا بيانات"; statusClass = ""; }
        else if (pct >= 90) { status = "ممتاز 🌟"; statusClass = "report-present"; }
        else if (pct >= 75) { status = "جيد جدًا ✅"; statusClass = "report-present"; }
        else if (pct >= 60) { status = "جيد ⚖️"; statusClass = ""; }
        else { status = "ضعيف ⚠️"; statusClass = "report-absent"; }

        return {
            ...s,
            present: records.present,
            absent: records.absent,
            totalDays: days,
            percentage: pct,
            status, statusClass
        };
    });

    allStatRows = rows;
    const studentsWithDays = rows.filter(r => r.totalDays > 0);
    const avgAttendance = studentsWithDays.length > 0
        ? (studentsWithDays.reduce((s, r) => s + r.percentage, 0) / studentsWithDays.length)
        : 0;

    document.getElementById("totalStudents").textContent = rows.length;
    document.getElementById("totalPresent").textContent = totalPresent;
    document.getElementById("totalAbsent").textContent = totalAbsent;
    document.getElementById("avgAttendance").textContent = avgAttendance.toFixed(1) + "%";

    const tbody = document.getElementById("statsTable");
    if (rows.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align:center;padding:20px;color:#888;">لا توجد بيانات</td></tr>`;
    } else {
        tbody.innerHTML = rows.map((r, i) => `
            <tr>
                <td>${i + 1}</td>
                <td dir="ltr" style="font-family:monospace;font-size:13px;">${r.nationalId}</td>
                <td>${r.name}</td>
                <td>${r.className || "-"}</td>
                <td class="report-present"><strong>${r.present}</strong></td>
                <td class="report-absent"><strong>${r.absent}</strong></td>
                <td>${r.totalDays}</td>
                <td class="${r.totalDays ? (r.percentage >= 60 ? 'report-present' : 'report-absent') : ''}">
                    <strong>${r.percentage.toFixed(1)}%</strong>
                </td>
                <td class="${r.statusClass}"><strong>${r.status}</strong></td>
            </tr>
        `).join("");
    }

    renderAttendanceBars(rows);
}

function getStatSummary(nationalId) {
    let present = 0;
    let absent = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key.startsWith("attendance_")) continue;
        try {
            const data = JSON.parse(localStorage.getItem(key));
            const match = data.find(r => String(r.nationalId) === String(nationalId));
            if (match) {
                if (match.status === "حاضر" || match.status === "متأخر") present++;
                if (match.status === "غائب") absent++;
            }
        } catch (e) { }
    }
    return { present, absent };
}

function renderAttendanceBars(rows) {
    const container = document.getElementById("attendanceBars");
    if (!container) return;
    if (rows.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:20px; color:#888;">لا توجد بيانات لعرضها بيانياً</div>`;
        return;
    }
    const top = [...rows].filter(r => r.totalDays > 0).sort((a, b) => b.percentage - a.percentage).slice(0, 10);
    container.innerHTML = `
        <h3 style="margin-bottom:16px;color:#1e293b;">📊 أعلى 10 طلاب في نسبة الحضور</h3>
        ${top.map(r => `
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                <div style="width:200px; flex-shrink:0; font-size:13px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${r.name}">
                    ${r.name}
                </div>
                <div style="flex:1; background:#e2e8f0; border-radius:999px; height:22px; overflow:hidden;">
                    <div style="width:${Math.max(2, r.percentage)}%; height:100%;
                        background: linear-gradient(90deg, ${r.percentage >= 90 ? '#22c55e' : r.percentage >= 70 ? '#3b82f6' : r.percentage >= 50 ? '#f59e0b' : '#ef4444'}, ${r.percentage >= 90 ? '#16a34a' : r.percentage >= 70 ? '#2563eb' : r.percentage >= 50 ? '#d97706' : '#dc2626'});
                        color:white; font-size:11px; display:flex; align-items:center; justify-content:flex-start; padding:0 8px; border-radius:999px; font-weight:700; transition: width 0.6s ease;">
                        ${r.percentage.toFixed(0)}%
                    </div>
                </div>
            </div>
        `).join("")}
    `;
}

function printStatistics() {
    printSection("statisticsPrintSection", "إحصائيات الحضور والغياب");
}

function exportStatisticsExcel() {
    if (allStatRows.length === 0) {
        showToast("⚠️ لا توجد بيانات للتصدير", "warning");
        return;
    }
    const data = allStatRows.map((r, i) => ({
        "م": i + 1,
        "id": r.nationalId,
        "اسم الطالب": r.name,
        "الجنس": r.gender || "",
        "الفصل": r.className || "-",
        "الصف": r.gradeName || "-",
        "الحضور": r.present,
        "الغياب": r.absent,
        "إجمالي الأيام": r.totalDays,
        "نسبة الحضور %": r.percentage.toFixed(1),
        "الحالة": r.status
    }));

    const classSelect = document.getElementById("classSelect");
    const classId = classSelect?.value ? parseInt(classSelect.value) : null;
    const fileName = classId
        ? `إحصائيات_${getClassName(classId)}`
        : `إحصائيات_الحضور_الكاملة`;
    exportToExcel(data, fileName, "الإحصائيات");
}

document.addEventListener("DOMContentLoaded", initStatisticsPage);
