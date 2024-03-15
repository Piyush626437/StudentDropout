import React, { useState } from 'react';
// import XLSX from 'xlsx/xlsx';
import * as XLSX from 'xlsx'
function UploadForm() {
  const [excelData, setExcelData] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(parsedData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" accept=".xlsx" onChange={handleFileUpload} />
      <table>
        <thead>
          <tr>
            {excelData &&
              Object.keys(excelData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {excelData &&
            excelData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UploadForm;
