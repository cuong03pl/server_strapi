module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env("SMTP_PORT", 587),
        secure: false,
        auth: {
          user: "cuongculebarca@gmail.com",
          pass: "imwxmrprwmkcyxbk",
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      settings: {
        defaultFrom: "cuongculebarca@gmail.com",
        defaultReplyTo: "cuongculebarca@gmail.com",
      },
    },
  },
});
