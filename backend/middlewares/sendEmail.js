const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  // const transporter = nodeMailer.createTransport({
  //   host: "smtp.mailtrap.io",
  //   port: 2525,
  //   auth: {
  //     user: "211d4679e3d79c",
  //     pass: "9e2b7d43009e26",
  //   },
  // });
  var transporter = nodeMailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "7afd5b2f0d416b",
      pass: "d17eaf9de71b60"
    }
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
