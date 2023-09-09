// src/components/PDFConverter.js
import React, { useEffect } from "react";
import pdfjs from "pdfjs-dist/build/pdf";

const PDFConverter = ({ pdfPath }) => {
  useEffect(() => {
    const convertPDFToHTML = async () => {
      try {
        console.log(pdfjs(pdfPath));
        const pdfDoc = await pdfjs.getDocument(pdfPath).promise;

        const numPages = pdfDoc.numPages;
        let htmlContent = "";
        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          const page = await pdfDoc.getPage(pageNum);
          const pageTextContent = await page.getTextContent();
          const pageHTML = pageTextContent.items
            .map((item) => item.str)
            .join(" ");

          htmlContent += `<div class="pdf-page">${pageHTML}</div>`;
        }

        // You can now use the 'htmlContent' in your React component
        console.log(htmlContent);
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };

    convertPDFToHTML();
  }, [pdfPath]);

  return (
    <div className="pdf-converter">
      {/* You can render the HTML content here */}
    </div>
  );
};

export default PDFConverter;
