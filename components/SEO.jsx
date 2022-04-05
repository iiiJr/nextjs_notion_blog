import Head from "next/head";

function SEO() {
  return (
    <>
    <Head>
      <title>{title}</title>
      {/* <meta name="Description" content="个人博客"> </meta> */}
      <meta property="og:title" content="个人博客" key="title" />
    </Head>
    </>
  )
}
export default SEO;