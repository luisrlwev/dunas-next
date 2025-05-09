import { useTranslation } from 'next-i18next'

export default function Boton() {
  const { t } = useTranslation(); // Inicializar el hook useTranslation
  return (
    <button className='uppercase py-3 px-20 font-bold bg-septimo text-lg rounded-lg letter-spacing-25'>{t('boton')}</button>
  )
}
