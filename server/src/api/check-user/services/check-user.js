"use strict";

module.exports = {
  async findUserByEmail(email) {
    const user = await strapi.db
      .query("plugin::users-permissions.user")
      .findOne({
        where: { email },
      });

    return user;
  },
};
