
const ResponseHandler = (modelEntity) => {
 
  return (req, res) => {

    const httpRequest = {
      files: req.files,
      // file: req.file,
      token: req.token,
      user: req.user,
      params: req.params,
      body: req.body,
      method: req.method,
      path: req.path,
      query: req.query,
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent"),
      },
    };
  
    modelEntity(httpRequest)
      .then((respon) => {
        if (respon?.cookie === "set") {        
          res.cookie(process.env.COOKIE_NAME, respon?.token);
           delete respon.cookie;
        } else if (respon?.cookie === "unset") {
          res.clearCookie(process.env.COOKIE_NAME);
          delete respon.cookie;
        }
        if (respon?.redirect?.status) return res.redirect(respon.redirect.link);

        return res.status(respon?.status || 200).send(Object.freeze(respon));
      })
      .catch((err) =>
        res.status(400).send(Object.freeze({ error: err.message }))
      );
  };
};
module.exports = ResponseHandler;
