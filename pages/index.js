import { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import PhoneInput from 'react-phone-number-input';
import LayoutDunas from "@/components/layout-dunas";
import MapaDunas from "@/components/map-dunas";
import 'react-phone-number-input/style.css';

export default function Dunas() {
  // Traducciones
  const { t } = useTranslation(); // Inicializar el hook useTranslation

  // Campos formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [tipo, setTipo] = useState('');
  const [inversion, setInversion] = useState('');
  const [tipologias, setTipologias] = useState([]);
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
    setFormularioOrigen('Dunas');
  }, []);

  // Controlador para el cambio en el checkbox
  const handleCheckboxChange = (e) => {
    setCondiciones(e.target.checked);
  };

  const handleTipologiaChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTipologias([...tipologias, value]);
    } else {
      setTipologias(tipologias.filter(t => t !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Deshabilitar el botón de envío y limpiar el formulario inmediatamente
    setIsSubmitting(true);
    setNombre('');
    setEmail('');
    setTel('');
    setTipo('');
    setInversion('');
    setTipologias('');
    setCondiciones(true); // o false, dependiendo de tu caso

    try {
      const respuesta = await fetch('/api/form-dunas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, tel, tipo, inversion, tipologias, condiciones, fechaEnvio, horaEnvio, paginaEnvio, formularioOrigen }),
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
        setInversion('');
        setTipologias('');
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
    <LayoutDunas
      title={"Dunas"}
      description={'Dunas Residences is not just a home, it is a luxury refuge where design and nature merge in perfect harmony.'}
    >
      {/* Evento de pixel de Cabos */}
      <Script
        id="script-pixel-cabos"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '254729565941530');
              fbq('track', 'Cabos');
          `,
        }}
      />
      <section>
        <div className="grid grid-cols-12 h-dunas">
          <div className='col-span-7 max-md:col-span-12 max-md:h-[380px] portada-dunas flex flex-col items-center justify-center relative'>
            <div className='absolute bottom-0 overlay-dunas w-full h-1/4'></div>
            <Image src={'/img/dunas/pin.png'} className='max-md:w-24' width={200} height={312} alt="Pin"/>
            <h1 className='text-white absolute bottom-20 max-md:bottom-6 text-5xl max-md:text-3xl trajan'>COMING SOON...</h1>
          </div>
          <div className='col-span-5 max-md:col-span-12 bg-doce flex flex-col items-center justify-center max-md:py-14'>
            <h2 className='text-tfs trajan text-4xl pb-2'>friends & family</h2>
            <p className='text-white text-xl'>Pricing for limited time</p>
            <a href='#form' className='my-16 max-md:my-8 py-2 px-14 bg-dunas text-xl letter-spacing-25'>KNOW MORE...</a>
            <div className='flex items-center gap-14 max-md:gap-8'>
              <Image src={'/img/dunas/logo-redondo.png'} className='' width={101} height={125} alt="Pin"/>
              <div className='h-20 border-r border-color'></div>
              <Image src={'/img/dunas/logo-blanco.png'} className='' width={158} height={76} alt="logo blanco"/>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-dunas'>
        <div className='grid grid-cols-12'>
          <div className='grid col-span-5 max-md:col-span-12 py-28 max-md:py-12 px-14 max-md:px-6 max-md:order-2' id='form'>
            <h3 className='text-tfs text-3xl max-md:text-center trajan pb-6'>FOR MORE INFORMATION</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input type="text" name="nombre" id="nombre" placeholder="Full Name" className="w-full bg-transparent border-b p-3" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                </div>
                <div>
                  <PhoneInput international type="tel" name="tel" id="tel" placeholder="Phone" className="w-full bg-transparent border-b  p-3" value={tel} onChange={setTel} required/>
                  <p className=' text-sm italic'>{t('leyenda_tel')}</p>
                </div>
                <div className='col-span-2'>
                  <input type="email" name="email" id="email" placeholder="E-mail" className="w-full bg-transparent border-b  p-3" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className='max-md:col-span-2'>
                  <label for="tipo">When would you like to make your investment?</label>
                  <select name="tipo" id="tipo" className="w-full bg-transparent border-b  p-3" value={tipo} onChange={(e) => setTipo(e.target.value)} required>
                      <option value="">Select an option</option>
                      <option value="Estoy listo para invertir">Im ready to invest</option>
                      <option value="2 a 3 meses">2 to 3 months</option>
                      <option value="Aún no estoy listo para invertir">Im not ready to invest yet</option>
                  </select>
                </div>
                <div className='max-md:col-span-2'>
                  <label for="inversion">What is your investment objective?</label>
                  <select name="inversion" id="inversion" className="w-full bg-transparent border-b  p-3" value={inversion} onChange={(e) => setInversion(e.target.value)} required>
                      <option value="">Select an option</option>
                      <option value="Uso personal">Personal use</option>
                      <option value="Buen retorno por rentas y plusvalia">Good returns from rental income and capital gains</option>
                  </select>
                </div>
                <div className='col-span-2'>
                  <label for="tipologia">What typology interests you?</label>
                  <div className="flex items-center space-x-3 pb-2 pt-2">
                    <input type="checkbox" id="tipologia-2br" value="Departamento 2 rec: Desde $315,000 USD" onChange={handleTipologiaChange} checked={tipologias.includes("Departamento 2 rec: Desde $315,000 USD")}/>
                    <label htmlFor="tipologia-2br">2-bedroom apartment: From $315,000 USD</label>
                  </div>
                  <div className="flex items-center space-x-3 pb-2">
                    <input type="checkbox" id="tipologia-3br" value="Departamento 3 rec: Desde $365,000 USD" onChange={handleTipologiaChange} checked={tipologias.includes("Departamento 3 rec: Desde $365,000 USD")}/>
                    <label htmlFor="tipologia-3br">3-bedroom apartment: From $365,000 USD</label>
                  </div>
                  <div className="flex items-center space-x-3 pb-2">
                    <input type="checkbox" id="tipologia-4br" value="Casa 4 rec: Desde $585,000 USD" onChange={handleTipologiaChange} checked={tipologias.includes("Casa 4 rec: Desde $585,000 USD")}/>
                    <label htmlFor="tipologia-4br">4-bedroom house: From $585,000 USD</label>
                  </div>
                </div>
                {/* Campos ocultos */}
                <div className='hidden'>
                  <input type="hidden" name="fechaEnvio" value={fechaEnvio} />
                  <input type="hidden" name="horaEnvio" value={horaEnvio} />
                  <input type="hidden" name="paginaEnvio" value={paginaEnvio} />
                  <input type="hidden" name="formularioOrigen" value={formularioOrigen}/>
                </div>
                <div className="lg:col-span-1 max-md:col-span-2">
                  <input type="checkbox" name="condiciones" id="condiciones" aria-label='condiciones' checked={condiciones} onChange={handleCheckboxChange} required/> I accept the <Link href="/aviso-de-privacidad" className="text-tfs hover">terms and conditions</Link>
                </div>
                <div className="lg:col-span-1 max-md:col-span-2 lg:text-right max-lg:text-center">
                  <input type="submit" name="submit" id="submit" value={'send'} disabled={isSubmitting} className="py-1 px-16 bg-tfs uppercase text-dunas text-lg letter-spacing-25 hover-bg cursor-pointer"/>
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
          <div className='col-span-7 max-md:col-span-12 max-md:order-1'>
            <MapaDunas/>
          </div>
        </div>
      </section>
      <section>
        <div className='flex w-full h-[550px] overflow-hidden max-md:grid max-md:grid-cols-2'>
          <div className='flex-1 dunas-bg-1 flex items-end relative transition-all duration-500 hover:flex-[2]'>
          </div>
          <div className='flex-1 dunas-bg-2 items-end relative transition-all duration-500 hover:flex-[2]'>
          </div>
          <div className='flex-1 dunas-bg-3 items-end relative transition-all duration-500 hover:flex-[2]'>
          </div>
          <div className='flex-1 dunas-bg-4 items-end relative transition-all duration-500 hover:flex-[2]'>
          </div>
        </div>
      </section>
    </LayoutDunas>
  );
}

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}