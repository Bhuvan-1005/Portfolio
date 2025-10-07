import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!resend) {
      console.log("Contact form submission (Resend not configured):", {
        name,
        email,
        message,
      });
      return NextResponse.json(
        {
          success: true,
          message:
            "Thank you for your message! I'll get back to you soon. (Note: Email service not configured yet)",
        },
        { status: 200 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Use your verified domain
      to: "bhuvaneshwar2006@gmail.com", // Your email address
      subject: `🚀 New Portfolio Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Message</title>
          <style>
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #1f2937;
              background-color: #f9fafb;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 40px 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 700;
              letter-spacing: -0.5px;
            }
            .header p {
              margin: 8px 0 0 0;
              opacity: 0.9;
              font-size: 16px;
            }
            .content {
              padding: 40px 30px;
            }
            .message-card {
              background-color: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              padding: 24px;
              margin: 20px 0;
            }
            .field {
              margin-bottom: 20px;
            }
            .field-label {
              font-weight: 600;
              color: #374151;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 6px;
            }
            .field-value {
              color: #1f2937;
              font-size: 16px;
              line-height: 1.5;
            }
            .message-content {
              background-color: #ffffff;
              border: 1px solid #e5e7eb;
              border-radius: 6px;
              padding: 16px;
              font-style: italic;
              color: #4b5563;
              white-space: pre-wrap;
            }
            .footer {
              background-color: #f8fafc;
              padding: 30px;
              text-align: center;
              border-top: 1px solid #e5e7eb;
            }
            .footer p {
              margin: 0;
              color: #6b7280;
              font-size: 14px;
            }
            .highlight {
              color: #667eea;
              font-weight: 600;
            }
            .emoji {
              font-size: 20px;
              margin-right: 8px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 New Message Received</h1>
              <p>Someone reached out through your portfolio!</p>
            </div>

            <div class="content">
              <div class="message-card">
                <div class="field">
                  <div class="field-label">👤 From</div>
                  <div class="field-value">${name}</div>
                </div>

                <div class="field">
                  <div class="field-label">📧 Email Address</div>
                  <div class="field-value">${email}</div>
                </div>

                <div class="field">
                  <div class="field-label">💬 Message</div>
                  <div class="field-value">
                    <div class="message-content">${message.replace(
                      /\n/g,
                      "<br>"
                    )}</div>
                  </div>
                </div>
              </div>

              <p style="text-align: center; color: #6b7280; font-size: 16px;">
                <span class="emoji">⚡</span>
                This message was sent through your portfolio contact form. Consider responding within 24 hours to maintain great communication!
              </p>
            </div>

            <div class="footer">
              <p>
                <strong>Bhuvaneshwar N</strong> - Full Stack Developer<br>
                <span class="highlight">Portfolio Message Notification</span><br>
                Chennai, India • bhuvaneshwar2006@gmail.com
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
