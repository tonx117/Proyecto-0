import nodemailer from "nodemailer";

// Configura el transporte de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'diegojara88574@gmail.com',
    pass: 'kmvg xcms qous onvq',
  },
});

export default transporter;
