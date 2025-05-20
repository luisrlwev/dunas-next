import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next'
import Image from "next/image";
import Link from 'next/link';

export default function HeaderDunas() {
  const { t } = useTranslation(); // Inicializar el hook useTranslation
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  return (
    <header className="bg-dunas p-6 sticky top-0 z-40 shadow-md max-md:pb-10">
      <div className="container mx-auto flex justify-center items-center gap-16 max-md:gap-10">
        <Link href={'/'}><Image src="/img/dunas/logo-dunas.png" alt="Fromsky Realtors Cabo Logo" width={150} height={70}/></Link>
        <div className='border-r border-black h-10'></div>
        <Link href={'/'}><Image src="/img/dunas/logo.png" alt="Dunas Logo" width={200} height={70}/></Link>
      </div>
      <div className="flex gap-2 absolute right-5 top-1/2 transform -translate-y-1/2 max-md:top-auto max-md:bottom-2 max-md:left-1/2 max-md:right-auto max-md:transform max-md:-translate-x-1/2 max-md:-translate-y-0">
        <Link href={{ pathname, query }} as={asPath} locale="en" className={`ml-2 ${locale === 'en' ? 'text-tfs font-bold' : ''}`}>
          EN
        </Link>
        |
        <Link href={{ pathname, query }} as={asPath} locale="es" className={`mr-2 ${locale === 'es' ? 'text-tfs font-bold' : ''}`}>
          ES
        </Link>
      </div>
    </header>
  );
}
