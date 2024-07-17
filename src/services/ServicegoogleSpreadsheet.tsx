import { GoogleSpreadsheet } from "google-spreadsheet";
import { ITemplate } from "../interface";

export default async function ServiceGoogleSpreadsheet(
  id: string,
  callback: (data: ITemplate[]) => void
) {
  const doc = new GoogleSpreadsheet(id, {
    apiKey: "AIzaSyDWQcAVeIEELp3voV_RyOzDbIo-C1rXsvg",
  });

  // loads document properties and worksheets
  await doc.loadInfo();
  const Sheet = doc.sheetsByIndex[0];

  const rows = await Sheet.getRows();
  const maps: ITemplate[] = [];
  rows.forEach((data) => {
    maps.push({
      name: data.get("name"),
      latitude: data.get("latitude"),
      longitude: data.get("longitude"),
    });
  });

  callback(maps);
}
