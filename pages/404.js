import Layout from "@/components/layout";
import Link from "next/link";

export default function Pagina404() {
  return (
    <Layout
        title={"Error 404"}
        description={"Página de error 404"}
    >
        <section className="container mx-auto py-32 text-center">
            <h1 className="text-tfs font-bold text-6xl max-lg:text-2xl pb-10">Error 404 - Página no encontrada</h1>
            <p className="pb-28 text-xl max-lg:text-base">La página a la que intentas acceder caducó o no esta disponible. Intenta con otra.</p>
            <Link href={'/'} className="bg-tfs text-white py-4 px-16 hover-bg rounded-md">Ir a inicio</Link>
        </section>
    </Layout>
  )
}
