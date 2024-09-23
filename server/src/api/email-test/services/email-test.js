module.exports = ({ strapi }) => ({
  emailService: async (ctx) => {
    try {
      const input = ctx.request.body.data?.input;
      const email = ctx.request.body.data?.emailTo;
      await strapi.plugins["email"].services.email.send({
        from: "cuongculebarca@gmail.com",
        to: "hkc03plbn@gmail.com    ",
        subject: "Hello World",
        html: `<p>${input}</p>`,
      });

      return {
        email: email,
        message: email,
      };
    } catch (err) {
      ctx.body = err;
      return err;
    }
  },
});
