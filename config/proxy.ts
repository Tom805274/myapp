export default {
    "/api": {
      target: "http://localhost:8080/",
      changeOrigin: true,
      secure: false,
      pathRewrite: { "/api": "/user" },
    },
};
