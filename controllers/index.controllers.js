const acercadeview = (req, res) => {
  res.render("acercade.ejs");
};

const checklistview = (req, res) => {
  res.render("checklist.ejs");
};

const contactoview = (req, res) => {
  res.render("contacto.ejs");
};

const cuentaview = (req, res) => {
  res.render("cuenta.ejs");
};

const herramientasview = (req, res) => {
  res.render("herramientas.ejs");
};

const loginview = (req, res) => {
  res.render("login.ejs");
};

const registerview = (req, res) => {
  res.render("register");
};

const serviciosview = (req, res) => {
  res.render("servicios");
};

const proyectosview = (req, res) => {
  res.render("servicios");
};

module.exports = {
  acercadeview,
  checklistview,
  contactoview,
  cuentaview,
  herramientasview,
  loginview,
  registerview,
  serviciosview,
  proyectosview,
};
