import Head from "next/head"
import HeaderDunas from "./header-dunas"
import FooterDunas from "./footer-dunas"

export default function LayoutDunas({children, title = '', description= ''}) {
  return (
    <>
        <Head>
            <title>{`${title} - Fromsky Realtors`}</title>
            <meta name="description" content={description}/>
        </Head>
        <HeaderDunas/>
        {children}
        <FooterDunas/>
    </>
  )
}
