import Link from "next/link";
import Head from "next/head";


function Nav( {title} ) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <meta name="Description" content="个人博客"> </meta> */}
        <meta property="og:title" content="个人博客" key="title" />
      </Head>
      <nav className="navbar">
        <Link href="/" passHref>
          <div className=" navbar-brand cursor-pointer"><span>主页</span></div>
        </Link>
        <Link href="/blog/[slug]" as={`/blog/friend-chain`} passHref>
          <div className=" navbar-brand cursor-pointer"><span>友链</span></div>
        </Link>
      </nav>
    </>
  );
}

export default Nav;