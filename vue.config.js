// module.exports = {
//   devServer: {
//     proxy: [
//       {
//         context: ["/users", "/gists"],
//         target: "https://api.github.com",
//         secure: false
//       }
//     ]
//   }
// };

module.exports = {
  devServer: {
    proxy: {
      "/gists": {
        target: "https://api.github.com",
        secure: false
      },
      "/users": {
        target: "https://api.github.com",
        secure: false
      }
    }
  }
};
