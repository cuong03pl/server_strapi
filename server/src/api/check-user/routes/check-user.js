"use strict";

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/check-user/check-email",
      handler: "check-user.checkEmail",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
