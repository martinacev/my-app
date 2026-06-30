import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_confirmation_email(to_email: str, name: str, token: str):
    frontend_url = os.getenv("FRONTEND_URL")
    confirm_link = f"{frontend_url}/confirm?token={token}"

    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Confirm your presence"
    msg["From"] = f"PARTY🎉 <{os.getenv('GMAIL_USER')}>"
    msg["To"] = to_email

    html = f"""
    <html>
      <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="520" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden;">

                <!-- Header banner -->
                <tr>
                  <td align="center" style="background-color: #4f46e5; padding: 40px 32px 32px;">
                    <div style="font-size: 52px; margin-bottom: 12px;">🎉</div>
                    <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">You're invited!</h1>
                    <p style="margin: 10px 0 0; color: #c7d2fe; font-size: 15px;">We'd love to see you at the party</p>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding: 36px 40px;">
                    <p style="margin: 0 0 8px; font-size: 20px; font-weight: 600; color: #111827;">Hi {name}! 👋</p>
                    <p style="margin: 0 0 28px; font-size: 15px; color: #6b7280; line-height: 1.7;">
                      You've been invited to join us for a great time. Click the button below to confirm your spot — we really hope you can make it!
                    </p>

                    <!-- Button -->
                    <table cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td align="center">
                          <a href="{confirm_link}" style="
                            display: inline-block;
                            padding: 14px 36px;
                            background-color: #4f46e5;
                            color: #ffffff;
                            text-decoration: none;
                            border-radius: 8px;
                            font-size: 16px;
                            font-weight: 600;
                            letter-spacing: 0.2px;
                          ">Confirm my presence</a>
                        </td>
                      </tr>
                    </table>

                    <!-- Divider -->
                    <table cellpadding="0" cellspacing="0" width="100%" style="margin: 32px 0;">
                      <tr>
                        <td style="border-top: 1px solid #e5e7eb;"></td>
                      </tr>
                    </table>

                    <p style="margin: 0; font-size: 13px; color: #9ca3af; text-align: center; line-height: 1.6;">
                      YOU MUST COME!!! 🥳<br/>
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td align="center" style="background-color: #f9fafb; padding: 20px 40px; border-top: 1px solid #e5e7eb;">
                    <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                      You received this because someone added your email to the party list.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    """
    msg.attach(MIMEText(html, "html"))

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(os.getenv("GMAIL_USER"), os.getenv("GMAIL_PASSWORD"))
        server.sendmail(os.getenv("GMAIL_USER"), to_email, msg.as_string())