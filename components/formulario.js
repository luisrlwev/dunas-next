import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next'
import PhoneInput from 'react-phone-number-input';
import Link from "next/link";
import Image from "next/image";
import { FaXmark, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import 'react-phone-number-input/style.css';

export default function Formulario({ show, onClose }) {
  // Inicializar el hook useTranslation
  const { t } = useTranslation();
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
    setFormularioOrigen('Pop Up');
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

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50" onClick={onClose}>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 relative top-40 max-lg:top-10 mx-auto border w-modal shadow-lg bg-modal" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2"><FaXmark className="text-2xl text-red-600"/></button>
        <div className="p-8">
            <h2 className='uppercase text-2xl text-black font-bold letter-spacing-25 text-center pb-3'>{t('dudas')}</h2>
            <form className="w-full max-lg:pb-8 text-black" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3">
                <div className="col-span-1">
                  <input type="text" name="nombre" id="nombre" placeholder={t('nombre_completo')} className="w-full border-b-2 text-secondary placeholder:text-gray-600 p-2" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                </div>
                <div className="col-span-1">
                  <PhoneInput international type="tel" name="tel" id="tel" placeholder={t('telefono_completo')} className="w-full border-b-2 text-secondary placeholder:text-gray-600 p-2" value={tel} onChange={setTel} required/>
                  <p className='text-secondary text-sm italic'>{t('leyenda_tel')}</p>
                </div>
                <div className="col-span-1">
                  <input type="email" name="email" id="email" placeholder={t('email')} className="w-full border-b-2 text-secondary placeholder:text-gray-600 p-2" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="col-span-1">
                  <label for="tipo" class="sr-only">Tipo de unidad</label>
                  <select name="tipo" id="tipo" className="w-full border-b-2 text-secondary placeholder:text-gray-600 p-2" value={tipo} onChange={(e) => setTipo(e.target.value)} required>
                      <option value="">{t('tipo_unidad')}</option>
                      <option value="Departamento">{t('departamento')}</option>
                      <option value="Casa">{t('casa')}</option>
                      <option value="Lote">{t('lote')}</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <textarea name="mensaje" id="mensaje" cols="30" rows="2" placeholder={t('tipo_propiedad')} className="w-full border-b-2 text-secondary placeholder:text-gray-600 p-2" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>
                </div>
                <div className="text-secondary">
                  <input type="checkbox" name="condiciones" id="condiciones" aria-label='condiciones' checked={condiciones} onChange={handleCheckboxChange} required/> {t('acepto')} <Link href="/aviso-de-privacidad" className="text-tfs hover">{t('terminos')}</Link>
                </div>
                {/* Campos ocultos */}
                <div className='hidden'>
                  <input type="hidden" name="fechaEnvio" value={fechaEnvio} />
                  <input type="hidden" name="horaEnvio" value={horaEnvio} />
                  <input type="hidden" name="paginaEnvio" value={paginaEnvio} />
                  <input type="hidden" name="formularioOrigen" value={formularioOrigen}/>
                </div>
                <div className="text-center col-span-1 mt-6">
                  {mensajeRespuesta && (
                    <p className={`${esExito ? "text-green-600" : "text-red-600"} pb-2`}>
                      {mensajeRespuesta}
                    </p>
                  )}
                  <input type="submit" name="submit" id="submit" value={t('enviar')} disabled={isSubmitting} className="py-2 px-12 bg-tfs uppercase text-white font-bold letter-spacing-25 hover-bg cursor-pointer"/>
                </div>
              </div>
            </form>
        </div>
        <div className="flex flex-col items-center justify-between max-lg:hidden bg-modal-img">
          <Image src="/img/cabos/cabos.png" alt="Cancún" className='h-fit pt-6' width={352} height={106} />
          <div className='flex justify-between border-b-2 border-white mb-5 pb-1 w-10/12'>
            <div>
              <p className='text-white uppercase letter-spacing-25 font-semibold'>{t('encuentranos')}</p>
            </div>
            <div className='flex text-white gap-4'>
              <a href="https://www.instagram.com/loscabosfromsky/" target="_blank" aria-label="Instagram"><FaInstagram className="text-xl"/></a>
              <a href="https://www.facebook.com/FromskyLosCabos" target="_blank" aria-label="Facebook"><FaFacebookF className="text-xl"/></a>
              <a href="https://wa.me/529841820785" className="flex items-center w-fit h-fit hover" target='_blank'><FaWhatsapp className="text-xl"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
