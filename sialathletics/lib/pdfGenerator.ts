import PDFDocument from 'pdfkit';
import path from 'path';
import sharp from 'sharp';

export interface InquiryData {
  name: string;
  email: string;
  company: string;
  country?: string;
  productLine: string;
  orderVolume: string;
  message: string;
}

/**
 * Generates an A4 B2B Inquiry PDF report in-memory using pdfkit.
 */
export async function generateInquiryPDF(data: InquiryData): Promise<Buffer> {
  let logoBlackBuffer: Buffer | null = null;
  try {
    const logoPath = path.join(process.cwd(), 'public', 'images', 'logo.png');
    logoBlackBuffer = await sharp(logoPath)
      .negate({ alpha: false })
      .toBuffer();
  } catch (e: any) {
    console.warn('[PDF Generator] Could not convert logo with sharp, falling back:', e.message);
  }

  return new Promise((resolve, reject) => {
    const regularFontPath = path.join(process.cwd(), 'public', 'fonts', 'Lato-Regular.ttf');
    const boldFontPath = path.join(process.cwd(), 'public', 'fonts', 'Lato-Bold.ttf');

    // Instantiate PDFDocument with a custom font path to bypass default Helvetica lookup
    const doc = new PDFDocument({ 
      margin: 50, 
      size: 'A4',
      font: regularFontPath
    });

    const chunks: Buffer[] = [];

    // Register font variations explicitly
    doc.registerFont('Lato-Regular', regularFontPath);
    doc.registerFont('Lato-Bold', boldFontPath);

    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', (err) => reject(err));

    // Colors
    const primaryColor = '#E31B23'; // SIAL Red
    const darkColor = '#111111'; // Brand Dark
    const textColor = '#333333'; // Standard dark grey text
    const lightGray = '#F9F9F9'; // Alternating row color
    const borderGray = '#EEEEEE';

    // 1. Header Layout
    if (logoBlackBuffer) {
      try {
        doc.image(logoBlackBuffer, 50, 40, { width: 130 });
      } catch (e) {
        doc.font('Lato-Bold').fontSize(20).fillColor(primaryColor).text('SIAL ATHLETICS', 50, 45);
      }
    } else {
      doc.font('Lato-Bold').fontSize(20).fillColor(primaryColor).text('SIAL ATHLETICS', 50, 45);
    }

    doc.font('Lato-Bold').fontSize(13).fillColor(darkColor).text('B2B INQUIRY REPORT', 250, 45, { align: 'right' });
    doc.font('Lato-Regular').fontSize(9).fillColor('#777777')
       .text(`Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 250, 62, { align: 'right' });

    // Decorative line below header
    doc.moveTo(50, 90).lineTo(545, 90).strokeColor(primaryColor).lineWidth(2).stroke();

    // 2. Introduction text
    doc.moveDown(3);
    doc.font('Lato-Bold').fontSize(15).fillColor(darkColor).text('Project Specifications Summary', 50, 110);
    doc.font('Lato-Regular').fontSize(9.5).fillColor('#555555').text('A summary of custom equipment manufacturing specifications and volume targets submitted by the client.', 50, 128);

    // 3. Client Specifications Table
    const tableStartY = 155;
    const rowHeight = 26;
    const col1X = 50;
    const col2X = 210;
    const tableWidth = 495;

    const specs = [
      { label: 'Client Name', value: data.name },
      { label: 'Work Email', value: data.email },
      { label: 'Company Name', value: data.company },
      { label: 'Country / Region', value: data.country || 'N/A' },
      { label: 'Product Line Interest', value: data.productLine },
      { label: 'Target Order Volume (MOQ)', value: data.orderVolume },
    ];

    let currentY = tableStartY;

    // Table Header
    doc.rect(col1X, currentY, tableWidth, rowHeight).fill(darkColor);
    doc.font('Lato-Bold').fontSize(9.5).fillColor('#FFFFFF').text('Specification Field', col1X + 12, currentY + 8);
    doc.text('Client Selection / Detail', col2X + 12, currentY + 8);
    currentY += rowHeight;

    // Render specification table rows
    specs.forEach((spec, i) => {
      // Row Background
      if (i % 2 === 0) {
        doc.rect(col1X, currentY, tableWidth, rowHeight).fill(lightGray);
      } else {
        doc.rect(col1X, currentY, tableWidth, rowHeight).fill('#FFFFFF');
      }

      // Border lines
      doc.rect(col1X, currentY, tableWidth, rowHeight).strokeColor(borderGray).lineWidth(0.5).stroke();

      // Text contents
      doc.font('Lato-Bold').fontSize(9).fillColor(textColor).text(spec.label, col1X + 12, currentY + 8);
      doc.font('Lato-Regular').fontSize(9).fillColor(textColor).text(spec.value, col2X + 12, currentY + 8);

      currentY += rowHeight;
    });

    // 4. Project Message Section
    currentY += 15;
    doc.font('Lato-Bold').fontSize(11).fillColor(darkColor).text('Message & Project Details', col1X, currentY);
    currentY += 18;

    const messageBoxHeight = 130;
    doc.rect(col1X, currentY, tableWidth, messageBoxHeight).fill('#FCFCFC');
    doc.rect(col1X, currentY, tableWidth, messageBoxHeight).strokeColor(borderGray).lineWidth(0.5).stroke();

    doc.font('Lato-Regular').fontSize(9).fillColor(textColor)
       .text(data.message, col1X + 12, currentY + 12, {
         width: tableWidth - 24,
         height: messageBoxHeight - 24,
         align: 'left',
         lineGap: 4
       });

    // 5. Footer Layout
    const footerY = 740;
    doc.moveTo(50, footerY - 10).lineTo(545, footerY - 10).strokeColor(borderGray).lineWidth(0.5).stroke();

    doc.font('Lato-Regular').fontSize(8).fillColor('#888888')
       .text('SIAL Athletics — Premium Pickleball & Padel Manufacturing', 50, footerY);
    doc.text('info@sialathletics.com  |  www.sialathletics.com', 50, footerY + 12);
    doc.text('Page 1 of 1', 50, footerY, { align: 'right', width: tableWidth });

    doc.end();
  });
}
