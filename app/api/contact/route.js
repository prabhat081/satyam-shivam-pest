import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { fname, lname, email, phone, message } = body;

    // ✅ Validation
    if (!fname || !phone || !message) {
      return Response.json(
        { success: false, message: "Required fields missing" },
        { status: 400 }
      );
    }

    // ✅ Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ Email Template
    const mailOptions = {
      from: `"Website Enquiry" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // you receive mail
      replyTo: email,

      subject: `🚀 New Enquiry from ${fname} ${lname}`,

      html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${fname} ${lname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // ✅ Send Mail
    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Enquiry sent successfully",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}