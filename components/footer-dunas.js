import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next'
import PhoneInput from 'react-phone-number-input';
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLocationDot } from "react-icons/fa6";
import 'react-phone-number-input/style.css';

export default function FooterDunas() {
  const { t } = useTranslation(); // Inicializar el hook useTranslation
  // Campos formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [tipo, setTipo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [condiciones, setCondiciones] = useState(true);
  // campos ocultos
  const [fechaEnvio, setFechaEnvio] = useState('');
  const [horaEnvio, setHoraEnvio] = useState('');
  const [paginaEnvio, setPaginaEnvio] = useState('');
  const [formularioOrigen, setFormularioOrigen] = useState('');
  // Mensaje de éxito
  const [mensajeRespuesta, setMensajeRespuesta] = useState('');
  const [esExito, setEsExito] = useState(false);
  // Estado del boton de envio
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fechaActual = new Date();
    setFechaEnvio(fechaActual.toLocaleDateString());
    setHoraEnvio(fechaActual.toLocaleTimeString());
    setPaginaEnvio(window.location.href);
    setFormularioOrigen('Footer');
  }, []);

  // Controlador para el cambio en el checkbox
  const handleCheckboxChange = (e) => {
    setCondiciones(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Deshabilitar el botón de envío y limpiar el formulario inmediatamente
    setIsSubmitting(true);
    setNombre('');
    setEmail('');
    setTel('');
    setTipo('');
    setMensaje('');
    setCondiciones(true); // o false, dependiendo de tu caso

    try {
      const respuesta = await fetch('/api/form-modal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, tel, tipo, mensaje, condiciones, fechaEnvio, horaEnvio, paginaEnvio, formularioOrigen }),
      });
      if (respuesta.ok) {
        console.log("Correo enviado con éxito");
        // Respuesta exitosa y como limpiar el formulario o mostrar un mensaje
        setMensajeRespuesta("Formulario enviado con éxito.");
        setEsExito(true);
        // Limpiar el formulario restableciendo el estado de cada campo
        setNombre('');
        setEmail('');
        setTel('');
        setTipo('');
        setMensaje('');
        setCondiciones(true);
      } else {
        console.log("Error al enviar el correo");
        // Manejar errores
        setMensajeRespuesta("Ha ocurrido un error al enviar el formulario.");
        setEsExito(false);
      }
    } catch (error) {
      console.error("Hubo un error al enviar el correo: ", error);
    }

    finally {
      // Habilitar el botón de envío nuevamente
      setIsSubmitting(false);
    }
  };

  return (
    <footer className='bg-doce'>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 py-10">
          <div className="flex max-md:flex-col items-center col-span-2 gap-8 max-md:gap-3">
            <div>
              <p className='text-tfs text-4xl max-md:text-3xl trajan'>{t('certificadas')} <br className='max-md:hidden'/>{t('licencias')}</p>
            </div>
            <div className='h-20 border-r border-color max-md:hidden'></div>
            <div className="flex gap-12 max-md:gap-6 justify-items-center items-center">
              <Image src={'/img/ampi-los-cabos.png'} className='max-md:w-32' width={200} height={87} alt="AMPI Los Cabos"/>
              <Image src={'/img/realtor.png'} className='max-md:w-18' width={60} height={100} alt="Realtor"/>
              <Image src={'/img/mls-white.png'} className='max-md:w-24' width={110} height={140} alt="MLS"/>
            </div>
          </div>
          <div className="flex flex-col justify-center items-end max-md:items-center max-md:pt-3">
            <div className="text-tfs">
              <a href="https://wa.me/529841820785" className="flex items-center hover" target='_blank'><FaWhatsapp className="mr-3 text-3xl"/> +52 (624) 123 8954</a>
            </div>
            <div className='text-tfs'>
              <p className='w-full pb-3 text-end'>{t('ya_nos_sigues')}</p>
              <div className='flex gap-2 justify-end max-md:justify-center'>
                <a href="https://www.instagram.com/loscabosfromsky/" target="_blank" aria-label="Instagram"><FaInstagram className="hover text-3xl"/></a>
                <a href="https://www.facebook.com/FromskyLosCabos" target="_blank" aria-label="Facebook"><FaFacebookF className="hover text-3xl"/></a>
              </div>
            </div>
          </div>
        </div>
      <div className="text-tfs text-center text-base p-6 max-md:pt-0 relative lg:flex justify-between">
        <p className="uppercase text-footer text-xs lg:text-base">{t('footer')}{new Date().getFullYear()}{t('footer_2')}</p>
        <Link href={'/aviso-de-privacidad'} className="underline text-xs lg:text-base">{t('aviso')}</Link>
      </div>
    </footer>
  );
}
