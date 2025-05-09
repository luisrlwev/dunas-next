import nodemailer from 'nodemailer';

const handler = async (req, res) => {
  try {
  // Tu lógica de envío de correo...
  const { nombre, email, tel, tipo, mensaje, condiciones, fechaEnvio, horaEnvio, paginaEnvio, formularioOrigen } = req.body;

  let subjectLine = 'Sede Los Cabos';
  if (formularioOrigen) {
    subjectLine = `Formulario - ${formularioOrigen}`;
  }

  // Configura el transporte de Nodemailer
  let transporter = nodemailer.createTransport({
    // Configuración del transporte (usar SMTP, por ejemplo)
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // true para 465, false para otros puertos
    auth: {
    user: process.env.EMAIL_USER, // Tu dirección de correo
    pass: process.env.EMAIL_PASSWORD, // Tu contraseña de correo
  },
  });

  // Define las opciones del correo
  let mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    cc: process.env.EMAIL_CC, // Puedes añadir más correos separados por comas
    bcc: process.env.EMAIL_BCC, // Puedes añadir más correos separados por comas
    subject: subjectLine,
    text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${tel}\nTipo de unidad: ${tipo}\nMensaje: ${mensaje}\nCondiciones Aceptadas: ${condiciones}\n----------\nFecha de envio: ${fechaEnvio}\nHora de envio: ${horaEnvio}\nPágina de envio: ${paginaEnvio}`,
    // Puedes usar `html` para formatear tu mensaje si lo prefieres
  };

  // Envía el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo: ", error);
      return res.status(500).json({ error: "Error al enviar el correo", details: error.message });
    }
    res.status(200).json({ message: "Correo enviado con éxito" });
  });
  } catch (error) {
    console.error("Error en el servidor:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default handler;
