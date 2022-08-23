const verifyauth = async (req, res, next) => {
  if (req.headers.cookie) {
    const cookiesArray = req.headers.cookie.split(";");
    let cookies = {};
    cookiesArray.forEach((cookie) => {
      const [key, value] = cookie.trim().split("=");
      cookies[key] = value;
    });
    cookies.isLoggedIn
      ? next()
      : res.status(403).send({ message: "Unauthenticated,Please Login" });
  } else res.status(403).send({ message: "Unauthenticated,Please Login" });
};

module.exports = verifyauth;
