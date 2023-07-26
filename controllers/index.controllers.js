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
  res.render("proyectos");
};

const wikiview = (req, res) => {
  res.render("wiki");
};

const generalesview = (req, res) => {
  res.render("generales");
};

const metalurgiaview = (req, res) => {
  res.render("metalurgia");
};

const electricidadview = (req, res) => {
  res.render("electricidad");
};

const carpinteriaview = (req, res) => {
  res.render("carpinteria");
};

module.exports = {
  generalesview,
  metalurgiaview,
  electricidadview,
  carpinteriaview,
  acercadeview,
  checklistview,
  contactoview,
  wikiview,
  cuentaview,
  herramientasview,
  loginview,
  registerview,
  serviciosview,
  proyectosview,
};
