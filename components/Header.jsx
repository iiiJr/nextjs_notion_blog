import Img from "next/image";

function Header( {user} ) {
  return (
    <>
      <header className="mb-6">
          <Img className="Header-img" width={100} height={100} src={user.Cover[0].url} alt={user.Cover[0].name} />
          <div className="Header-title">{`${user.Page}`}</div>
          <div className="Header-intro ">{user.Description}</div>
        </header>
    </>
  );
}

export default Header;