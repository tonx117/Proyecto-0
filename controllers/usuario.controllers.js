const usuarioctrl = {};


usuarioctrl.indexView = (req, res) => {
  res.render("index.ejs");
};

usuarioctrl.showView = (req, res) => {
  const UsuarioId = req.params.id;
  res.render("usuario/show", { id: UsuarioId });
};

usuarioctrl.createView = (req, res) => {
  res.render("register.ejs");
};

usuarioctrl.editView = (req, res) => {
  const UsuarioId = req.params.id;
  res.render("edit", { id: UsuarioId });
};



module.exports = usuarioctrl;
