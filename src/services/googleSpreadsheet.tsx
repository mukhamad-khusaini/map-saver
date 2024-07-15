// Contoh menggunakan Google Sheets API (memerlukan autentikasi)
// Anda perlu mengganti dengan kredensial dan ID spreadsheet Anda
import { google } from "googleapis";
const sheets = google.sheets("v4");

interface GoogleSpreadsheet {
    nama: string,
    latitude: number,
    longitude: number
}

// Fungsi untuk menambahkan lokasi ke spreadsheet
export default async function googleSpreadsheet({nama, latitude, longitude}: GoogleSpreadsheet ) {
  const auth = await authorize(); // Fungsi autentikasi
  const spreadsheetId = "your-spreadsheet-id";
  const range = "Sheet1!A2:C2"; // Sesuaikan dengan range yang sesuai
  const values = [[nama, latitude, longitude]];

  try {
    await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      resource: { values },
    });
    console.log("Lokasi berhasil ditambahkan ke spreadsheet.");
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}