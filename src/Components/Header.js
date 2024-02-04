import logo from "../images/header/cryptopunk-logo.png";
import search from "../images/header/search.png";
import themeLogo from "../images/header/theme-switch.png";
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
      <div className="bg-[#1c1c1e] rounded-full  h-11 m-2 ml-6 align-center  object-contain flex">
        <img src={themeLogo} alt="theme-logo" className=" p-3" />
      </div>
      <div className="bg-gradient-to-r from-[#59f9b7] to-[#66feea]  rounded-full m-3  px-10 p-2">
        <button className="text-black ">GET IN</button>
      </div>
    </div>
  );
};
export default Header;
