const WORKSHOP_SHEET_NAME = "Rahamandra_Workshops";
const ACADEMY_EMAIL = "karthickkumar63826@gmail.com";

function doPost(e) {
  const data = JSON.parse(e.postData.contents);

  // ── Save to Google Sheet ──────────────────────────────
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(WORKSHOP_SHEET_NAME);
  sheet.appendRow([
    new Date().toLocaleString("en-IN"),
    data.name,
    data.age,
    data.phone,
    data.email,
    data.workshop,
    data.message || "—",
  ]);

  // ── Email to Academy (Notification) ──────────────────
  MailApp.sendEmail({
    to: ACADEMY_EMAIL,
    subject: `New Workshop Registration — ${data.name} | ${data.workshop}`,
    htmlBody: `
      <div style="font-family:'Georgia',serif;max-width:600px;margin:0 auto;background:#f9f6f0;border-radius:12px;overflow:hidden;border:1px solid #e8dfc8">
        
        <!-- Header -->
        <div style="background:#0a1f44;padding:32px 36px;text-align:center">
          <p style="margin:0 0 4px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#c9a84c">Sri Rahamandara</p>
          <h1 style="margin:0;font-size:22px;color:#ffffff;font-weight:700">New Workshop Registration</h1>
          <p style="margin:8px 0 0;font-size:12px;color:#ffffff80">${new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
        </div>

        <!-- Body -->
        <div style="padding:32px 36px">
          <p style="margin:0 0 24px;font-size:15px;color:#444;line-height:1.6">
            A new participant has registered for a workshop through the website. Here are the details:
          </p>

          <!-- Details Table -->
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr style="background:#0a1f44">
              <td colspan="2" style="padding:10px 16px;color:#c9a84c;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700">Participant Information</td>
            </tr>
            <tr style="background:#ffffff">
              <td style="padding:12px 16px;color:#888;font-weight:600;width:40%;border-bottom:1px solid #f0e8d8">Full Name</td>
              <td style="padding:12px 16px;color:#0a1f44;font-weight:700;border-bottom:1px solid #f0e8d8">${data.name}</td>
            </tr>
            <tr style="background:#fdfaf5">
              <td style="padding:12px 16px;color:#888;font-weight:600;border-bottom:1px solid #f0e8d8">Age</td>
              <td style="padding:12px 16px;color:#0a1f44;border-bottom:1px solid #f0e8d8">${data.age} years</td>
            </tr>
            <tr style="background:#ffffff">
              <td style="padding:12px 16px;color:#888;font-weight:600;border-bottom:1px solid #f0e8d8">Phone</td>
              <td style="padding:12px 16px;color:#0a1f44;border-bottom:1px solid #f0e8d8"><a href="tel:${data.phone}" style="color:#0a1f44;text-decoration:none">${data.phone}</a></td>
            </tr>
            <tr style="background:#fdfaf5">
              <td style="padding:12px 16px;color:#888;font-weight:600;border-bottom:1px solid #f0e8d8">Email</td>
              <td style="padding:12px 16px;border-bottom:1px solid #f0e8d8"><a href="mailto:${data.email}" style="color:#c9a84c;text-decoration:none">${data.email}</a></td>
            </tr>
            <tr style="background:#ffffff">
              <td style="padding:12px 16px;color:#888;font-weight:600;border-bottom:1px solid #f0e8d8">Workshop</td>
              <td style="padding:12px 16px;color:#0a1f44;font-weight:700;border-bottom:1px solid #f0e8d8">${data.workshop}</td>
            </tr>
            ${
              data.message
                ? `
            <tr style="background:#fdfaf5">
              <td style="padding:12px 16px;color:#888;font-weight:600;vertical-align:top">Message</td>
              <td style="padding:12px 16px;color:#444;font-style:italic;line-height:1.6">"${data.message}"</td>
            </tr>`
                : ""
            }
          </table>

          <!-- CTA -->
          <div style="margin-top:28px;padding:20px;background:#fff8ec;border-left:4px solid #c9a84c;border-radius:4px">
            <p style="margin:0;font-size:13px;color:#666;line-height:1.6">
              <strong style="color:#0a1f44">Action Required:</strong> Please reach out to <strong>${data.name}</strong> at 
              <a href="tel:${data.phone}" style="color:#c9a84c">${data.phone}</a> or 
              <a href="mailto:${data.email}" style="color:#c9a84c">${data.email}</a> within 24 hours to confirm the workshop booking.
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background:#0a1f44;padding:20px 36px;text-align:center">
          <p style="margin:0;font-size:11px;color:#ffffff50;letter-spacing:1px">SRI RAHAMANDARA MUSIC ACADEMY &nbsp;·&nbsp; This is an automated notification</p>
        </div>
      </div>
    `,
  });

  // ── Confirmation Email to Student ─────────────────────
  MailApp.sendEmail({
    to: data.email,
    subject: `Your Workshop Registration is Received — Sri Rahamandara Music Academy`,
    htmlBody: `
      <div style="font-family:'Georgia',serif;max-width:600px;margin:0 auto;background:#f9f6f0;border-radius:12px;overflow:hidden;border:1px solid #e8dfc8">

        <!-- Header -->
        <div style="background:#0a1f44;padding:32px 36px;text-align:center">
          <p style="margin:0 0 4px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#c9a84c">Sri Rahamandara</p>
          <h1 style="margin:0;font-size:22px;color:#ffffff;font-weight:700">Workshop Registration Received</h1>
        </div>

        <!-- Body -->
        <div style="padding:36px">
          <p style="margin:0 0 16px;font-size:16px;color:#0a1f44;font-weight:700">Dear ${data.name},</p>
          <p style="margin:0 0 16px;font-size:14px;color:#555;line-height:1.8">
            Thank you for registering for our <strong>${data.workshop}</strong> workshop. Our team will contact you within <strong>24–48 hours</strong> to confirm your seat and share the next steps.
          </p>
          <p style="margin:0 0 28px;font-size:14px;color:#555;line-height:1.8">
            If you have any questions, feel free to reply to this email or call us directly.
          </p>

          <!-- Summary Box -->
          <div style="background:#ffffff;border:1px solid #e8dfc8;border-radius:8px;padding:20px 24px;margin-bottom:28px">
            <p style="margin:0 0 12px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#c9a84c;font-weight:700">Your Registration Summary</p>
            <table style="width:100%;font-size:13px;color:#555;border-collapse:collapse">
              <tr><td style="padding:5px 0;color:#888">Workshop</td><td style="padding:5px 0;color:#0a1f44;font-weight:600">${data.workshop}</td></tr>
              <tr><td style="padding:5px 0;color:#888">Submitted On</td><td style="padding:5px 0;color:#0a1f44">${new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</td></tr>
            </table>
          </div>

          <p style="margin:0;font-size:14px;color:#555;line-height:1.8">
            We look forward to seeing you at the workshop.<br/>
            <span style="color:#c9a84c;font-style:italic">— The Sri Rahamandara Team</span>
          </p>
        </div>

        <!-- Footer -->
        <div style="background:#0a1f44;padding:20px 36px;text-align:center">
          <p style="margin:0;font-size:11px;color:#ffffff50;letter-spacing:1px">SRI RAHAMANDARA MUSIC ACADEMY &nbsp;·&nbsp; Classical Music Since Tradition</p>
        </div>
      </div>
    `,
  });

  return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON);
}
