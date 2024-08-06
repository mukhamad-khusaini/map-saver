import { useEffect, useState } from "react";
import "./App.css";
import { ITemplate } from "./interface";
import ServiceGoogleSpreadsheet from "./services/ServicegoogleSpreadsheet";

function App() {
  const [maps, setMaps] = useState<ITemplate[] | undefined>();

  // <fungsi> ambil data
  async function getMapsData() {
    await ServiceGoogleSpreadsheet(
      "1E33xHxUC4zhM_BZyAWCeMREJ59hFBc5nl86TsZhX13Q",
      setMaps
    );
  }

  // <jalankan> Ambil data dari spreadsheet
  useEffect(() => {
    try {
      getMapsData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log(maps);

  return <></>;
}

export default App;
