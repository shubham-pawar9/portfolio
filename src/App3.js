// src/App.js
import React, { useRef } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import MyPdf from "./MyPdf";

function App() {
  const pdfRef = useRef();

  return (
    <div>
      <PDFViewer width="100%" height={600}>
        <MyPdf />
      </PDFViewer>
      <PDFDownloadLink document={<MyPdf />} fileName="example.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
    </div>
  );
}

export default App;
