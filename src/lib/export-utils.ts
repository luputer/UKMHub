import * as XLSX from "xlsx";

/**
 * Export data array ke file Excel (.xlsx)
 * @param data    Array objek data yang akan diekspor
 * @param filename  Nama file tanpa ekstensi (misal "data-mahasiswa")
 * @param sheetName  Nama sheet di Excel (default "Sheet1")
 */
export function exportToExcel<T extends Record<string, unknown>>(
  data: T[],
  filename: string,
  sheetName: string = "Sheet1",
) {
  // Build worksheet dari array of objects
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Auto-width kolom berdasarkan panjang konten
  if (data.length > 0) {
    const keys = Object.keys(data[0]!);
    const colWidths = keys.map((key) => {
      const maxLen = Math.max(
        key.length,
        ...data.map((row) => String(row[key] ?? "").length),
      );
      return { wch: Math.min(maxLen + 4, 40) }; // max 40 char width
    });
    worksheet["!cols"] = colWidths;
  }

  // Buat workbook & attach sheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  // Trigger download
  XLSX.writeFile(workbook, `${filename}.xlsx`);
}

/**
 * Trigger browser print dialog
 */
export function triggerPrint() {
  window.print();
}
