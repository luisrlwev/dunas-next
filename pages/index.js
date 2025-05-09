import { useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Script from "next/script";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import Boton from "@/components/boton";
import Formulario from "@/components/formulario";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaLocationDot } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Cabos() {
  // Traducciones
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false);

  const abrirModal = () => {
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
  };
  return (
    <Layout
      title={"Los Cabos"}
      description={t('cabos_descripcion')}
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
      <div className="portada-cabos flex relative justify-center cursor-pointer" onClick={abrirModal}>
        <div className="portada-ciudades flex justify-center items-end relative">
          <h1 className="text-white font-bold text-center uppercase text-160 letter-spacing-25 leading-none z-0 -mb-6 max-lg:text-5xl max-lg:-mb-2">Los Cabos</h1>
        </div>
      </div>
      <section className="bg-header z-10 relative">
        <div className="container mx-auto grid grid-cols-2 gap-5 justify-center py-10 uppercase text-2xl font-bold letter-spacing-25 max-lg:text-base">
          <div className="max-md:col-span-2">
            <p className="w-full text-center text-tfs">{t('condos')}</p>
            <p className="w-full text-center text-white">{t('desde')} $250,000 USD</p>
          </div>
          <div className="max-md:col-span-2">
            <p className="w-full text-center text-tfs">{t('casas_privadas')}</p>
            <p className="w-full text-center text-white">{t('desde')} $350,000 USD</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-2 max-lg:grid-cols-1 max-lg:px-3 gap-4">
          <div className="max-lg:pb-8">
            <p className="text-tfs uppercase font-bold text-xl letter-spacing-25 text-center pb-7">{t('comunidades')}</p>
            <Swiper
              slidesPerView={1}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              modules={[Autoplay, Navigation]}
              loop={true}
              className="mySwiper cursor-pointer"
              onClick={abrirModal}
            >
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/comunidades-privadas/comunidades-privadas-1.jpg'} width={800} height={407} className="h-full object-cover" alt="Comunidades privadas"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/comunidades-privadas/comunidades-privadas-2.jpg'} width={800} height={407} className="h-full object-cover" alt="Comunidades privadas"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/comunidades-privadas/comunidades-privadas-3.jpg'} width={800} height={407} className="h-full object-cover" alt="Comunidades privadas"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/comunidades-privadas/comunidades-privadas-4.jpg'} width={800} height={407} className="h-full object-cover" alt="Comunidades privadas"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/comunidades-privadas/comunidades-privadas-5.jpg'} width={800} height={407} className="h-full object-cover" alt="Comunidades privadas"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/comunidades-privadas/comunidades-privadas-6.jpg'} width={800} height={407} className="h-full object-cover" alt="Comunidades privadas"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/comunidades-privadas/comunidades-privadas-7.jpg'} width={800} height={407} className="h-full object-cover" alt="Comunidades privadas"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/comunidades-privadas/comunidades-privadas-8.jpg'} width={800} height={407} className="h-full object-cover" alt="Comunidades privadas"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/comunidades-privadas/comunidades-privadas-9.jpg'} width={800} height={407} className="h-full object-cover" alt="Comunidades privadas"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/comunidades-privadas/comunidades-privadas-10.jpg'} width={800} height={407} className="h-full object-cover" alt="Comunidades privadas"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/comunidades-privadas/comunidades-privadas-11.jpg'} width={800} height={407} className="h-full object-cover" alt="Comunidades privadas"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text max-lg:text-sm">{t('golf')}</p>
          </div>
          <div>
            <p className="text-tfs uppercase font-bold text-xl letter-spacing-25 text-center pb-7">{t('depas')}</p>
            <Swiper
              slidesPerView={1}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              modules={[Autoplay, Navigation]}
              loop={true}
              className="mySwiper cursor-pointer"
              onClick={abrirModal}
            >
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/luxury-condos/luxury-condos-1.jpg'} width={800} height={407} className="h-full object-cover" alt="Luxury condos"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/luxury-condos/luxury-condos-2.jpg'} width={800} height={407} className="h-full object-cover" alt="Luxury condos"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/luxury-condos/luxury-condos-3.jpg'} width={800} height={407} className="h-full object-cover" alt="Luxury condos"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/luxury-condos/luxury-condos-4.jpg'} width={800} height={407} className="h-full object-cover" alt="Luxury condos"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/luxury-condos/luxury-condos-5.jpg'} width={800} height={407} className="h-full object-cover" alt="Luxury condos"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/luxury-condos/luxury-condos-6.jpg'} width={800} height={407} className="h-full object-cover" alt="Luxury condos"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/luxury-condos/luxury-condos-7.jpg'} width={800} height={407} className="h-full object-cover" alt="Luxury condos"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/luxury-condos/luxury-condos-8.jpg'} width={800} height={407} className="h-full object-cover" alt="Luxury condos"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/luxury-condos/luxury-condos-9.jpg'} width={800} height={407} className="h-full object-cover" alt="Luxury condos"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/luxury-condos/luxury-condos-10.jpg'} width={800} height={407} className="h-full object-cover" alt="Luxury condos"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/luxury-condos/luxury-condos-11.jpg'} width={800} height={407} className="h-full object-cover" alt="Luxury condos"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/luxury-condos/luxury-condos-12.jpg'} width={800} height={407} className="h-full object-cover" alt="Luxury condos"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text max-lg:text-sm">{t('alta')}</p>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container mx-auto grid grid-cols-2 gap-4 max-lg:px-3">
          <h2 className="text-tfs text-4xl col-span-2 font-bold uppercase letter-spacing-25 text-center">{t('quienes')}</h2>
          <p className="pb-12 text-center col-span-2">{t('en_los_cabos')}</p>
          <h3 className="text-tfs font-bold letter-spacing-25 uppercase text-center text-4xl max-lg:text-2xl pb-10 col-span-2">{t('valores')}</h3>
          <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-3 pb-8 max-lg:pb-4 col-span-2">
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/valores/compromiso.svg'} width={124} height={115} alt="compromiso"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold max-md:text-sm">{t('compromiso')}</h4>
            </div>
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/valores/confianza.svg'} width={84} height={114} alt="confianza"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold max-md:text-sm">{t('confianza')}</h4>
            </div>
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/valores/competitividad.svg'} width={116} height={113} alt="competitividad"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold max-md:text-sm">{t('competitividad')}</h4>
            </div>
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/valores/innovacion.svg'} width={99} height={98} alt="innovación"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold max-md:text-sm">{t('innovacion')}</h4>
            </div>
          </div>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-3 col-span-2">
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/valores/honestidad.svg'} width={112} height={82} alt="honestidad"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold max-md:text-sm">{t('honestidad')}</h4>
            </div>
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/valores/etica.svg'} width={92} height={86} alt="etica"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold max-lg:text-center">{t('etica')}</h4>
            </div>
            <div className="grid justify-center justify-items-center max-lg:col-span-2">
              <Image src={'/img/valores/lealtad.svg'} width={85} height={89} alt="lealtad"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold max-md:text-sm">{t('lealtad')}</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="container mx-auto grid">
          <div className="grid grid-cols-12">
            <div className="col-span-6 flex items-center justify-center bg-slide-cabos max-md:col-span-12">
              <div className="h-600 w-full py-11 flex flex-col justify-between galeria-responsive">
                <div className="pl-16 max-md:pl-6">
                  <p className="flex gap-2 uppercase font-semibold text-tfs pb-3"><FaLocationDot/> Baja California Sur</p>
                  <h3 className="text-5xl font-bold uppercase text-tercero pb-4 max-md:text-3xl">Los Cabos</h3>
                </div>
                <div className="flex justify-center" onClick={abrirModal}>
                  <button className='py-2 px-8 bg-tfs text-white text-sm'>{t('contactanos')}</button>
                </div>
              </div>
            </div>
            <div className="col-span-6 flex items-center max-md:col-span-12 max-md:px-3 max-md:pt-6">
              <div className="pl-16 max-md:pl-0">
                <p className="text-sm xl:text-base 2xl:text-base font-medium text-onceavo pb-4">{t('consulta')}</p>
                <h3 className="text-lg xl:text-2xl 2xl:text-3xl font-bold uppercase text-tercero pb-4 letter-spacing-25">{t('iman')}</h3>
                <p className="text-sm pb-3 text-secondary text-justify max-md:text-base">{t('los_cabos_emerge')}</p>
                <p className="text-sm pb-3 text-secondary text-justify max-md:text-base">{t('este_destino')}</p>
                <p className="text-sm pb-10 text-secondary text-justify">{t('la_region')}</p>
                <div className="flex justify-center" onClick={abrirModal}>
                  <button className='py-3 px-6 bg-tfs text-white text-sm'>{t('conoce')}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="portada-cabos-final flex relative justify-center cursor-pointer" onClick={abrirModal}>
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/cabos-final.mp4" className="absolute video-fondo-portada" autoPlay muted playsInline loop></video>
        </div>
        <div className="portada-video-final flex justify-center items-center relative">
            <div className="grid grid-cols-1 justify-items-center max-lg:px-3">
              <div>
                <h3 className="text-white font-bold uppercase letter-spacing-25 text-xl text-center max-lg:text-base pb-6">{t('oceanview')}</h3>
              </div>
              <div className="pb-10 max-lg:pb-0">
                <Boton/>
              </div>
            </div>
        </div>
      </div>
      <Formulario show={showModal} onClose={cerrarModal}/>
    </Layout>
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