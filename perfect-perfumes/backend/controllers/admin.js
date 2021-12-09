let Admin = require("../models/admin");

module.exports = {
  index: (req, res) => {
    Admin.find({})
      .then((admins) => {
        res.json(admins);
      })
      .catch((error) => {
        res.json({ error: error });
      });
  },

  show: (req, res) => {
    let adminId = req.params.adminid;
    Admin.findById(adminId)
      .then((admin) => {
        res.json({ admin });
      })
      .catch((error) => {
        res.json({ error: erorr });
      });
  },

  update: (req, res) => {
    let adminId = req.params.adminid;
    let adminInfo = {
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      Fname: req.body.Fname,
      Lname: req.body.Lname,
    };
    Admin.findByIdAndUpdate(adminId, { $set: adminInfo })
      .then((user) => {
        res.json({ message: "Admin information has been updated" });
      })
      .catch((error) => {
        res.json({ error: erorr });
      });
  },

  delete: (req, res) => {
    let adminId = req.params.adminid;
    Admin.findByIdAndRemove(adminId)
      .then(() => {
        res.json({ message: "Admin is deleted" });
      })
      .catch((error) => {
        res.json({ error: erorr });
      });
  },

  create: (req, res) => {
    let admin = new Admin({
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      Fname: req.body.Fname,
      Lname: req.body.Lname,
    });
    admin.save((error) => {
      if (error) res.json({ erorr: erorr });
      else res.json({ message: "Admin is inserted" });
    });
  },
};
