export const checkUserRole = (requiredRole) => {
    return (req, res, next) => {
      const usuario = req.user; 
      if (usuario && usuario.role === requiredRole) {
        
        next();
      } else {
        console.log(req.user)
        res.status(403).json({ message: 'Acceso no autorizado' });
      }
    };
  };