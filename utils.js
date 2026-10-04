function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const icon = type === "success" ? "✅" : type === "error" ? "❌" : "⚠️";
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = "slideIn 0.3s reverse";
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}

function generateBarcode(nationalId, name, targetId) {
    const canvas = document.getElementById(targetId);
    if (!canvas || !window.JsBarcode) return false;
    try {
        JsBarcode(canvas, nationalId, {
            format: "CODE128",
            lineColor: "#1e293b",
            width: 2,
            height: 90,
            displayValue: true,
            fontSize: 14,
            margin: 10,
            textMargin: 6
        });
        return true;
    } catch (e) {
        console.error("Barcode error:", e);
        return false;
    }
}

function openBarcodeModal(student) {
    let modal = document.getElementById("barcodeModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "barcodeModal";
        modal.className = "barcode-modal";
        modal.onclick = (e) => {
            if (e.target === modal) closeBarcodeModal();
        };
        modal.innerHTML = `
            <div class="barcode-modal-content">
                <h3 id="barcodeStudentName"></h3>
                <div class="student-nid" id="barcodeStudentNid"></div>
                <canvas id="barcodeCanvas" width="320" height="140"></canvas>
                <div style="margin-top:10px;font-size:13px;color:#64748b;">
                    امسح هذا الرمز لتسجيل الحضور
                </div>
                <button class="print-btn" onclick="printCurrentBarcode()" style="margin-top:14px;">
                    🖨️ طباعة الباركود
                </button>
                <br>
                <button class="close-modal" onclick="closeBarcodeModal()">
                    إغلاق
                </button>
            </div>
        `;
        document.body.appendChild(modal);
    }
    document.getElementById("barcodeStudentName").textContent = student.name;
    document.getElementById("barcodeStudentNid").textContent = `📋 ${student.nationalId}`;
    setTimeout(() => generateBarcode(student.nationalId, student.name, "barcodeCanvas"), 50);
    modal.classList.remove("hidden");
}

function closeBarcodeModal() {
    const modal = document.getElementById("barcodeModal");
    if (modal) modal.classList.add("hidden");
}

function printCurrentBarcode() {
    const canvas = document.getElementById("barcodeCanvas");
    const name = document.getElementById("barcodeStudentName").textContent;
    const nid = document.getElementById("barcodeStudentNid").textContent;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL("image/png");
    const printWin = window.open("", "_blank", "width=500,height=400");
    printWin.document.write(`
        <!DOCTYPE html><html dir="rtl" lang="ar"><head><title>باركود الطالب</title>
        <style>
            body { font-family: Arial; text-align: center; padding: 30px; direction: rtl; }
            h2 { margin-bottom: 8px; font-size: 18px; }
            .nid { color: #4f46e5; font-family: monospace; margin-bottom: 15px; font-size: 15px; }
            img { max-width: 100%; border: 2px solid #eee; padding: 15px; border-radius: 10px; }
            .footer { margin-top: 20px; color: #888; font-size: 12px; }
        </style></head><body>
            <h2>${name}</h2>
            <div class="nid">${nid}</div>
            <img src="${dataUrl}" alt="barcode">
            <div class="footer">نظام إدارة الحضور والغياب</div>
        </body></html>
    `);
    printWin.document.close();
    setTimeout(() => { printWin.print(); printWin.close(); }, 400);
}

function exportToCSV(data, filename, headers) {
    if (!data || data.length === 0) {
        showToast("لا توجد بيانات للتصدير", "warning");
        return;
    }
    let csv = "";
    if (headers) {
        csv += headers.join(",") + "\n";
    }
    data.forEach(row => {
        const values = Object.values(row).map(v => {
            const str = String(v ?? "");
            return '"' + str.replace(/"/g, '""') + '"';
        });
        csv += values.join(",") + "\n";
    });
    const BOM = "\uFEFF";
    const blob = new Blob([BOM + csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${filename}_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    showToast(`تم تصدير ${data.length} سجل بنجاح`, "success");
}

function exportToExcel(data, filename, sheetName = "Sheet1") {
    if (!data || data.length === 0) {
        showToast("لا توجد بيانات للتصدير", "warning");
        return;
    }
    if (!window.XLSX) {
        exportToCSV(data, filename);
        return;
    }
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `${filename}_${new Date().toISOString().split('T')[0]}.xlsx`);
    showToast(`تم تصدير ${data.length} سجل بنجاح`, "success");
}

function importFromExcel(fileInput, onDataParsed, onError) {
    const file = fileInput.files?.[0];
    if (!file) return;
    if (!window.XLSX) {
        showToast("مكتبة Excel غير متاحة، استخدم ملف CSV بدلاً من ذلك", "warning");
        return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const firstSheet = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheet];
            const json = XLSX.utils.sheet_to_json(worksheet);
            if (onDataParsed) onDataParsed(json);
        } catch (err) {
            console.error("Import error:", err);
            if (onError) onError(err);
            showToast("خطأ في قراءة الملف: " + err.message, "error");
        }
    };
    reader.readAsArrayBuffer(file);
    fileInput.value = "";
}

function getGradeClass(score, maxScore) {
    const pct = (score / maxScore) * 100;
    if (pct >= 90) return { class: "excellent", label: "ممتاز" };
    if (pct >= 80) return { class: "very-good", label: "جيد جداً" };
    if (pct >= 65) return { class: "good", label: "جيد" };
    if (pct >= 50) return { class: "pass", label: "مقبول" };
    return { class: "fail", label: "ضعيف" };
}

function printSection(sectionId, title) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const printWin = window.open("", "_blank", "width=900,height=700");
    const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"],style'))
        .map(s => s.outerHTML).join("");
    printWin.document.write(`
        <!DOCTYPE html><html dir="rtl" lang="ar"><head><title>${title || "طباعة"}</title>${styles}
        <style>
            body { background: white; padding: 20px; direction: rtl; font-family: Arial; }
            .no-print { display: none !important; }
            header { padding: 20px !important; }
            h1 { font-size: 22px; }
            @media print { body { padding: 0; } }
        </style></head><body>
            ${section.outerHTML}
        </body></html>
    `);
    printWin.document.close();
    setTimeout(() => { printWin.print(); }, 500);
}

function printAllBarcodes(students) {
    if (!students || students.length === 0) {
        showToast("لا توجد طلاب لعرض باركوداتهم", "warning");
        return;
    }
    const printWin = window.open("", "_blank", "width=1000,height=800");
    let cardsHtml = "";
    students.forEach((s, i) => {
        cardsHtml += `
            <div style="display:inline-block; width:280px; margin:15px; padding:18px;
                border:2px solid #e2e8f0; border-radius:12px; text-align:center;
                background:#fafbfc; page-break-inside:avoid;">
                <div style="font-size:14px; font-weight:700; margin-bottom:6px; color:#1e293b;">
                    ${s.name}
                </div>
                <div style="font-family:monospace; color:#4f46e5; font-size:12px; margin-bottom:10px;">
                    ${s.nationalId}
                </div>
                <canvas id="bc_${i}" width="240" height="100"></canvas>
            </div>
        `;
    });
    printWin.document.write(`
        <!DOCTYPE html><html dir="rtl" lang="ar"><head>
        <title>باركودات الطلاب</title>
        <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.6/dist/JsBarcode.all.min.js"><\/script>
        <style>
            body { font-family: Arial; padding: 20px; direction: rtl; background: white; }
            h1 { text-align: center; color: #4f46e5; margin-bottom: 20px; }
            .header-info { text-align:center; color:#64748b; margin-bottom:25px; font-size:14px;}
            @media print { @page { size: A4; margin: 10mm; } body { padding: 0; } }
        </style></head><body>
            <h1>🏫 بطاقات الطلاب الباركودية</h1>
            <div class="header-info">عدد الطلاب: ${students.length} - تاريخ الطباعة: ${new Date().toLocaleDateString('ar-EG')}</div>
            <div id="cardsContainer">${cardsHtml}</div>
            <script>
                window.onload = function() {
                    const students = ${JSON.stringify(students)};
                    students.forEach((s, i) => {
                        try {
                            JsBarcode(document.getElementById('bc_' + i), s.nationalId, {
                                format: 'CODE128', width: 1.8, height: 65,
                                displayValue: true, fontSize: 12, margin: 6
                            });
                        } catch(e) {}
                    });
                    setTimeout(function() { window.print(); }, 800);
                };
            <\/script>
        </body></html>
    `);
    printWin.document.close();
}
