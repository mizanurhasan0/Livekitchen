const CheckAdmin = async (req, res, next) => {
  try {
    // console.log(req.user)
    if (!req.user.isAdmin) throw new Error("Unauthorized");
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send("Unauthorized");
  }
};

module.exports = CheckAdmin;
