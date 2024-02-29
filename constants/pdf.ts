import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

export const createPDF = (brief_content:{ question: string; answer: string | string[] }[]) => {
    const bodyPdf = brief_content.map((item) => [
      item.question,
      typeof item.answer === "string" ? (
        item.answer
      ) : item.answer === null ? (
        ""
      ) : (
        item.answer.concat('\n')
      ),
    ]);
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    bodyPdf &&
      pdfMake
        .createPdf({
          content: {
            layout: "lightHorizontalLines",
            table: {
              headerRows: 1,
              widths: ["50%", "50%",],
              body: [["Question", "Answer"], ...bodyPdf],
            },
          },
        })
        .download("GeneratedPDF.pdf");
  };