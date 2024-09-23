"use strict";

module.exports = {
  async checkEmail(ctx) {
    const { email } = ctx.request.body;

    if (!email) {
      return ctx.badRequest("Email is required");
    }

    // Sử dụng service để tìm người dùng
    const user = await strapi
      .service("api::check-user.check-user")
      .findUserByEmail(email);

    if (user) {
      return ctx.send({ exists: true });
    } else {
      return ctx.send({ exists: false });
    }
  },
};
