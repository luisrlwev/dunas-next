import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next'
import Image from "next/image";

export default function HeaderDunas() {
  const { t } = useTranslation(); // Inicializar el hook useTranslation
  const router = useRouter();

  return (
    <header className="bg-dunas text-white py-6 sticky top-0 z-40 shadow-md max-md:px-6">
      <div className="container mx-auto flex justify-center items-center gap-16 max-md:gap-10">
        <Image src="/img/dunas/logo-dunas.png" alt="Fromsky Realtors Cabo Logo" width={150} height={70}/>
        <div className='border-r border-black h-10'></div>
        <Image src="/img/dunas/logo.png" alt="Dunas Logo" width={200} height={70}/>
      </div>
    </header>
  );
}
