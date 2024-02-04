import logo from "../images/header/cryptopunk-logo.png";
import search from "../images/header/search.png";
const Header = () => {
  return (
    <div className="p-5 flex justify-between ">
      <div>
        <img className="w-44 " src={logo} alt="logo" />
      </div>
      <div className=" bg-[#1c1c1e] m-3 h-10 align-center flex flex-1 rounded-full pl-3">
        <img src={search} alt="Search icon" className="p-2" />
        <input
          type="text"
          placeholder="Collection, item or user"
          className="bg-transparent p-1 text-white outline-none w-full text-lg"
        />
      </div>
      <div className="flex  text-[#a1a5b0] ">
        <p className="m-4">Drops</p>
        <p className="m-4">Marketplace</p>
        <p className="m-4">Create</p>
      </div>
    </div>
  );
};
export default Header;
