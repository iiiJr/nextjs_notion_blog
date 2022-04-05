import Link from "next/link";


function Nav() {
  return (
    <>
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