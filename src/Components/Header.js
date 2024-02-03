import logo from "../images/header/cryptopunk-logo.png";
const Header = () => {
  return (
    <div className="p-5">
      <div>
        <img className="w-48" src={logo} alt="logo" />
      </div>
    </div>
  );
};
export default Header;
