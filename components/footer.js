import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next'
import PhoneInput from 'react-phone-number-input';
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLocationDot } from "react-icons/fa6";
import 'react-phone-number-input/style.css';

export default function Footer() {
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
    <footer className='bg-footer-2 '>
      <div className="py-10 overlay-footer-final">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 container mx-auto">
          <div className="grid justify-center items-center">
            <Link className="h-max max-lg:pb-10" href={'/'}><Image src={'/img/logo-nuevo.svg'} width={354} height={201} alt="Logo TFS"/></Link>
            <div className="flex justify-center items-center gap-3 text-tfs h-max max-lg:pb-8">
              <a href="https://www.instagram.com/loscabosfromsky/" target="_blank" aria-label="Instagram"><FaInstagram className="hover text-3xl"/></a>
              <a href="https://www.facebook.com/FromskyLosCabos" target="_blank" aria-label="Facebook"><FaFacebookF className="hover text-3xl"/></a>
              <a href="https://wa.me/529841820785" className="flex items-center w-fit h-fit hover" target='_blank'><FaWhatsapp className="mr-3 text-3xl"/> +52 (624) 123 8954</a>
            </div>
            <p className='text-tfs text-center hover max-md:px-5 max-md:pb-4'><a href="https://maps.app.goo.gl/19KypBtwPF8Ro5iy9" className='flex' target='_blank'><FaLocationDot className='text-2xl max-md:hidden'/> Boulevard Miguel Ángel Herrera s/n, Edif. Altaterra Corporativo oficina 105, Cabo San Lucas, Obrera, 23473, Los Cabos, BCS.</a></p>
          </div>
          <div>
            <p className="text-white text-center text-xl uppercase font-bold letter-spacing-25 pb-2">{t('contactanos')}</p>
            <form onSubmit={handleSubmit} className='z-50'>
              <div className="grid px-3 lg:grid-cols-2 gap-3">
                <div>
                  <input type="text" name="nombre" id="nombre" placeholder={t('nombre')} className="w-full bg-transparent border-b text-white p-3" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                </div>
                <div>
                  <PhoneInput international type="tel" name="tel" id="tel" placeholder={t('telefono')} className="w-full bg-transparent border-b text-white p-3" value={tel} onChange={setTel} required/>
                  <p className='text-white text-sm italic'>{t('leyenda_tel')}</p>
                </div>
                <div>
                  <input type="email" name="email" id="email" placeholder="Email" className="w-full bg-transparent border-b text-white p-3" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div>
                  <label for="tipo" class="sr-only">Tipo de unidad</label>
                  <select name="tipo" id="tipo" className="w-full bg-transparent border-b text-white p-3" value={tipo} onChange={(e) => setTipo(e.target.value)} required>
                      <option value="">{t('tipo_unidad')}</option>
                      <option value="Departamento">{t('departamento')}</option>
                      <option value="Casa">{t('casa')}</option>
                      <option value="Lote">{t('lote')}</option>
                  </select>
                </div>
                <div className="lg:col-span-2">
                  <textarea name="mensaje" id="mensaje" cols="30" rows="3" placeholder={t('tipo_propiedad')} className="w-full bg-transparent border-b text-white p-3" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>
                </div>
                {/* Campos ocultos */}
                <div className='hidden'>
                  <input type="hidden" name="fechaEnvio" value={fechaEnvio} />
                  <input type="hidden" name="horaEnvio" value={horaEnvio} />
                  <input type="hidden" name="paginaEnvio" value={paginaEnvio} />
                  <input type="hidden" name="formularioOrigen" value={formularioOrigen}/>
                </div>
                <div className="lg:col-span-1 text-white">
                  <input type="checkbox" name="condiciones" id="condiciones" aria-label='condiciones' checked={condiciones} onChange={handleCheckboxChange} required/> {t('acepto')} <Link href="/aviso-de-privacidad" className="text-tfs hover">{t('terminos')}</Link>
                </div>
                <div className="lg:col-span-1 lg:text-right max-lg:text-center">
                  <input type="submit" name="submit" id="submit" value={t('enviar')} disabled={isSubmitting} className="py-1 px-8 bg-tfs uppercase text-tercero font-bold letter-spacing-25 hover-bg cursor-pointer"/>
                </div>
                <div className='lg:col-span-2'>
                  {mensajeRespuesta && (
                    <p className={`${esExito ? "text-green-600" : "text-red-600"} pb-2`}>
                      {mensajeRespuesta}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className="grid content-center px-3 py-8">
            <p className="text-center text-white uppercase font-bold letter-spacing-25 pb-4 lg:pb-8 w-full text-lg lg:text-base">{t('licencias')}</p>
            <div className="grid grid-cols-3 justify-items-center items-center">
              <Image src={'/img/ampi-los-cabos.png'} width={250} height={87} alt="AMPI Los Cabos"/>
              <Image src={'/img/realtor.png'} width={86} height={100} alt="Realtor"/>
              <Image src={'/img/mls-white.png'} width={140} height={140} alt="MLS"/>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-center text-base p-6 bg-footer relative lg:flex justify-between">
        <p className="uppercase text-footer text-xs lg:text-base">{t('footer')}{new Date().getFullYear()}{t('footer_2')}</p>
        <Link href={'/aviso-de-privacidad'} className="underline text-xs lg:text-base">{t('aviso')}</Link>
      </div>
    </footer>
  );
}
