import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '@/components/layout';

export default function Aviso() {
  // Traducciones
  const { t } = useTranslation()
  return (
    <Layout
      title={t('aviso')}
      description={t('aviso_descripcion')}
    >
        <section className="container mx-auto py-16 max-lg:px-4">
            <h1 className="text-tfs uppercase letter-spacing-25 font-bold text-5xl max-lg:text-2xl pb-7">{t('aviso')}</h1>
            <p className="text-sm text-justify leading-6 pb-6">{t('aviso_1')}</p>
            <p className="text-sm text-justify leading-6 pb-6">{t('aviso_2')}</p>
            <p className="text-sm text-justify leading-6 pb-6">{t('aviso_3')}</p>
            <p className="text-sm text-justify leading-6">{t('aviso_4')}</p>
            <p className="text-sm text-justify leading-6 font-bold">{t('aviso_5')}</p>
            <p className="text-sm text-justify leading-6 pb-6">{t('aviso_6')} <a href="mailto:sales@tulumfromskyrealtors.com" className="text-tfs hover" target="_self">sales@tulumfromskyrealtors.com</a></p>
            <p className="text-sm text-justify leading-6 font-bold">{t('aviso_7')}</p>
            <p className="text-sm text-justify leading-6">{t('aviso_8')}</p>
            <ul className="list-disc text-sm leading-6 text-justify pb-6"><li>{t('aviso_9')}</li></ul>
            <ol className="list-decimal text-sm leading-6 text-justify pb-6"><li>{t('aviso_10')}</li><li>{t('aviso_11')}</li><li>{t('aviso_12')}</li><li>{t('aviso_13')}</li></ol>
            <ul className="list-disc text-sm leading-6 text-justify pb-6"><li>{t('aviso_14')}</li></ul>
            <ol className="list-decimal text-sm leading-6 text-justify pb-6"><li>{t('aviso_15')}</li><li>{t('aviso_16')}</li><li>{t('aviso_17')}</li><li>{t('aviso_18')}</li><li>{t('aviso_19')}</li><li>{t('aviso_20')}</li></ol>
            <p className="text-sm text-justify leading-6 pb-6">{t('aviso_21')}</p>
            <p className="text-sm text-justify leading-6 font-bold">{t('aviso_22')}</p>
            <p className="text-sm text-justify leading-6 pb-6">{t('aviso_23')}</p>
            <p className="text-sm text-justify leading-6">{t('aviso_24')}</p>
            <p className="text-sm text-justify leading-6 pb-6">{t('aviso_25')}</p>
            <ul className="list-disc text-sm leading-6 text-justify pb-6"><li>{t('aviso_26')}</li></ul>
            <ol className="list-decimal text-sm leading-6 text-justify pb-6"><li>{t('aviso_27')}</li><li>{t('aviso_28')}</li><li>{t('aviso_29')}</li><li>{t('aviso_30')}</li><li>{t('aviso_31')}</li><li>{t('aviso_32')}</li><li>{t('aviso_33')}</li><li>{t('aviso_34')}</li><li>{t('aviso_35')}</li><li>{t('aviso_36')}</li></ol>
            <ul className="list-disc text-sm leading-6 text-justify pb-6"><li>Firefox</li></ul>
            <ol className="list-decimal text-sm leading-6 text-justify pb-6"><li>{t('aviso_37')}</li><li>{t('aviso_38')}</li><li>{t('aviso_39')}</li><li>{t('aviso_40')}</li><li>{t('aviso_41')}</li><li>{t('aviso_42')}</li><li>{t('aviso_43')}</li></ol>
            <ul className="list-disc text-sm leading-6 text-justify pb-6"><li>Google Chrome</li></ul>
            <ol className="list-decimal text-sm leading-6 text-justify pb-6"><li>{t('aviso_44')}</li><li>{t('aviso_45')}</li><li>{t('aviso_46')}</li><li>{t('aviso_47')}</li><li>{t('aviso_48')}</li><li>{t('aviso_49')}</li><li>{t('aviso_50')}</li></ol>
            <ul className="list-disc text-sm leading-6 text-justify pb-6"><li>Opera</li></ul>
            <ol className="list-decimal text-sm leading-6 text-justify pb-6"><li>{t('aviso_51')}</li><li>{t('aviso_52')}</li><li>{t('aviso_53')}</li><li>{t('aviso_54')}</li><li>{t('aviso_55')}</li></ol>
            <ul className="list-disc text-sm leading-6 text-justify pb-6"><li>{t('aviso_56')}</li></ul>
            <ol className="list-decimal text-sm leading-6 text-justify pb-6"><li>{t('aviso_57')}</li><li>{t('aviso_58')}</li><li>{t('aviso_59')}</li><li>{t('aviso_60')}</li><li>{t('aviso_61')}</li><li>{t('aviso_62')}</li></ol>
            <p className="text-sm text-justify leading-6 pb-6">{t('aviso_63')}&nbsp;<a href="http://allaboutcookies.org/es/" target="_blank" className="text-tfs hover" rel="noreferrer noopener">http://allaboutcookies.org/es/</a>.</p>
            <p className="text-sm text-justify leading-6 font-bold">{t('aviso_64')}</p>
            <p className="text-sm text-justify leading-6">{t('aviso_65')}</p>
            <p className="text-sm text-justify leading-6">{t('aviso_66')}</p>
            <p className="text-sm text-justify leading-6m pb-6">{t('aviso_67')}</p>
            <p className="text-sm text-justify leading-6 font-bold">{t('aviso_68')}</p>
            <p className="text-sm text-justify leading-6">{t('aviso_69')}</p>
            <p className="text-sm text-justify leading-6">{t('aviso_70')}</p>
            <p className="text-sm text-justify leading-6 pb-6">{t('aviso_71')}</p>
            <p className="text-sm text-justify leading-6 font-bold">{t('aviso_72')}</p>
            <p className="text-sm text-justify leading-6 pb-6">{t('aviso_73')}</p>
            <p className="text-sm text-justify leading-6 font-bold">{t('aviso_74')}</p>
            <p className="text-sm text-justify leading-6 pb-6">{t('aviso_75')}</p>
            <p className="text-sm text-justify leading-6">{t('aviso_76')}</p>
            <ol className="list-decimal text-sm leading-6 text-justify pb-6"><li>{t('aviso_77')}</li><li>{t('aviso_78')}</li><li>{t('aviso_79')}</li><li>{t('aviso_80')}</li></ol>
            <p className="text-sm text-justify leading-6 pb-6">{t('aviso_81')} <a href="mailto:sales@tulumfromskyrealtors.com" className="text-tfs hover" target="_self">sales@tulumfromskyrealtors.com</a> {t('aviso_81_a')}</p>
            <p className="text-sm text-justify leading-6">{t('aviso_82')}</p>
            <ol className="list-decimal text-sm leading-6 text-justify pb-6"><li>{t('aviso_83')}</li><li>{t('aviso_84')}</li><li>{t('aviso_85')}</li></ol>
            <p className="text-sm text-justify leading-6">{t('aviso_86')}</p>
            <ol className="list-decimal text-sm leading-6 text-justify pb-6"><li>{t('aviso_87')}</li><li>{t('aviso_88')}</li></ol>
            <p className="text-sm text-justify leading-6">{t('aviso_89')}</p>
            <p className="text-sm text-justify leading-6">{t('aviso_90')}</p>
            <p className="text-sm text-justify leading-6">{t('aviso_91')}</p>
            <p className="text-sm text-justify leading-6 pb-6">{t('aviso_92')}</p>
            <p className="text-sm text-justify leading-6 font-bold">{t('aviso_93')}</p>
            <p className="text-sm text-justify leading-6">{t('aviso_94')}</p>
            <p className="text-sm text-justify leading-6">{t('aviso_95')} <a href="http://www.fromskyrealtors.com/" target="_blank" className="text-tfs hover" rel="noopener" data-auto-recognition="true">www.fromskyrealtors.com</a></p>
            <p className="text-sm text-justify leading-6 pb-6">{t('aviso_96')}</p>
            <p className="text-sm text-justify leading-6 font-bold">{t('aviso_97')}</p>
            <p className="text-sm text-justify leading-6 pb-6">{t('aviso_98')} <a href="mailto:sales@tulumfromskyrealtors.com" className="text-tfs hover" target="_self">sales@tulumfromskyrealtors.com</a> {t('aviso_99')}</p>
            <p className="text-sm text-justify leading-6 font-bold">{t('aviso_100')}</p>
            <p className="text-sm text-justify leading-6">{t('aviso_101')}</p>
            <p className="text-sm text-justify leading-6">{t('aviso_102')} <a href="https://home.inai.org.mx/" target="_blank" className="text-tfs hover" rel="noreferrer noopener">www.inai.org.mx</a></p>
        </section>
    </Layout>
  )
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