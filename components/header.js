import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next'
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookF } from "react-icons/fa6";

export default function Header() {
  const { t } = useTranslation(); // Inicializar el hook useTranslation
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  return (
    <header className="bg-header text-white p-4 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center text-menu text-center font-semibold uppercase">
         {/* ... Logo y botón de menú ... */}
          <Link href={'/'}><Image src="/img/logo-nuevo.svg" alt="Fromsky Realtors Cabo Logo" width={123} height={70}/></Link>
        {/* Menú de escritorio */}
        <nav className="flex items-center text-white">
            <p className="uppercase letter-spacing-25 font-normal text-base lg:pr-4 max-lg:hidden">{t('contactanos')}</p>
            <div className='flex items-center text-xl gap-4 px-4 max-lg:px-2 lg:pr-16'>
                <a href="mailto:info@fromskyrealtors.com"><FaEnvelope /></a><a href="https://wa.me/529841820785" target='_blank'><FaWhatsapp /></a><a href="https://www.instagram.com/loscabosfromsky/" target='_blank'><FaInstagram/></a><a href="https://www.facebook.com/FromskyLosCabos" target='_blank'><FaFacebookF/></a>
            </div>
            {/* Muestra el idioma actual y proporciona enlaces para cambiar */}
            <Link href={{ pathname, query }} as={asPath} locale="es" className={`mr-2 ${locale === 'es' ? 'text-tfs font-bold' : ''}`}>
              ES
            </Link>
            |
            <Link href={{ pathname, query }} as={asPath} locale="en" className={`ml-2 ${locale === 'en' ? 'text-tfs font-bold' : ''}`}>
              EN
            </Link>
        </nav>
      </div>
    </header>
  );
}
