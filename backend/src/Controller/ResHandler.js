const ResponseHandler = (modelEntity) => {
  return (req, res) => {
   
    const httpRequest = {
      token: req.token,
      table:req.table,
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
       res.json(respon)
      })
      .catch((err) =>
        res.status(400).send(Object.freeze({ error: err.message }))
      );
  };
};
module.exports=ResponseHandler;