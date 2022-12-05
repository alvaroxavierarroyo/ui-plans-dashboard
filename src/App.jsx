import { useState } from "react";
import {
  RiDashboard3Line,
  RiEarthLine,
  RiArrowDownSLine,
  RiMessageLine,
  RiCalendar2Line,
  RiSettings3Line,
  RiCheckboxBlankCircleFill,
  RiArrowUpSLine,
  RiLogoutCircleLine,
  RiMenu3Fill,
  RiCloseLine,
  RiNotification3Line,
  RiSlackLine,
  RiCheckLine,
  RiFilter2Line,
  RiSearchEyeLine,
} from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-[#141517]">
      {/*Sidebar*/}
      <sidebar
        className={`bg-[#1E1F24] fixed ${
          showMenu ? "-left-0" : "-left-full"
        } lg:left-0 top-0 w-72 h-full p-8 flex flex-col justify-between z-50 transition-all`}
      >
        {/*Menu*/}
        <div>
          {/*Logo*/}
          <div className="mb-8">
            <h1 className="text-white uppercase font-bold text-2xl tracking-[4px]">
              AX Logo
            </h1>
          </div>
          {/*Nav*/}
          <nav>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
            >
              <RiDashboard3Line /> Analytic
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
            >
              <RiEarthLine />
              <span className="flex-1 flex items-center gap-4 justify-between">
                Social Media <RiArrowDownSLine />
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
            >
              <RiMessageLine /> Message
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
            >
              <RiCalendar2Line /> Schedule
            </a>
            <a href="#" className="flex flex-col gap-4 text-gray-400 py-2">
              <span className="flex items-center gap-4 text-gray-200">
                <RiSettings3Line className="text-orange-600" />
                <div className="flex-1 flex items-center justify-between">
                  Settings
                  <RiArrowUpSLine />
                </div>
              </span>
              <nav className=" flex flex-col border-l border-gray-600 ml-1">
                <a href="#" className="relative pl-8 pt-2 text-gray-200">
                  <RiCheckboxBlankCircleFill className="absolute -left-[8px] text-orange-600 text-sm top-[50%] -translate-y-[%50] p-[1px]  rounded-full translate-x-0.2" />
                  Plan
                </a>
                <a
                  href="#"
                  className="relative pl-8 pt-3.5 hover:text-gray-200 transition-colors"
                >
                  <RiCheckboxBlankCircleFill className="absolute -left-[8px] text-gray-400 text-sm top-[50%] -translate-y-[%50] p-[1px]  rounded-full translate-x-0.2 translate" />
                  Security
                </a>
              </nav>
            </a>
          </nav>
        </div>
        {/*Logout*/}
        <div className="">
          <a
            href="#"
            className="flex items-center text-gray-400 gap-4 hover:text-gray-200 transition-colors"
          >
            <RiLogoutCircleLine />
            Logout
          </a>
        </div>
      </sidebar>
      {/*Mobile Menu Button*/}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed right-4 bottom-4 bg-[#664EFA] text-xl p-3 rounded-full text-white z-50 ring-2 ring-[#141517] md:mr-5"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>

      {/*Content*/}
      <main className="lg:pl-80 p-8">
        {/*Header*/}
        <header className="p-8 flex justify-end border-b border-gray-500 fixed left-0 top-0 w-full bg-[#141517]">
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="text-white text-lg relative">
                <RiNotification3Line />
                <RiCheckboxBlankCircleFill className="text-orange-600 text-[8px] absolute -top-[2px] right-0" />
              </a>
            </li>
            <li>
              <a href="#" className="flex text-white items-center gap-2">
                <img
                  src="https://img.freepik.com/foto-gratis/chica-romantica-sonrisa-astuta-blusa-vintage-sentada-cama-tocando-su-barbilla-mano-retrato-mujer-joven-linda-sonadora-flor-peinado-descansando-dormitorio-manana_197531-3187.jpg"
                  className="w-6 h-6 object-cover rounded-full ring-2 ring-gray-300"
                />
                Jolyne Cujoh
                <RiArrowDownSLine />
              </a>
            </li>
          </ul>
        </header>
        {/*Main Content*/}
        <div className="pt-28">
          <h1 className="text-4xl text-gray-300 my-10">Plan & Pricing</h1>
          {/*Plans*/}
          <div className="text-gray-300 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/*Cards*/}
            <div className="bg-[#1E1F24] p-8 lg:p-12 rounded-xl mb-10">
              <div className="flex flex-col items-center mb-20">
                <RiSlackLine className="text-7xl my-6 p-4 bg-purple-200 rounded-full text-purple-600" />
                <h2 className="text-2xl uppercase tracking-[8px]">Personal</h2>
                <p className="text-gray-500 mb-4">Perfect plan for starters</p>
                <h5 className="text-2xl uppercase tracking-[4px] font-bold text white">
                  Free{" "}
                </h5>
                <p className="text-gray-500 mb-8">For a Lifetime</p>
                <button className="bg-[#141517] py-2 px-8 rounded-lg hover:text-white transition-colors">
                  Current plan
                </button>
              </div>
              {/*Features*/}
              <ul className="flex flex-col gap-4 text-gray-300">
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Detailed
                  post analytics
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Share with
                  5 teams members
                </li>
                <li className="flex items-center gap-4">
                  <RiCloseLine className="text-red-500 text-2xl opacity-[.3]" />{" "}
                  Sync across devices
                </li>
                <li className="flex items-center gap-4">
                  <RiCloseLine className="text-red-500 text-2xl opacity-[.3]" />{" "}
                  Reach and impressions analytics
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Up to 6
                  social profile
                </li>
              </ul>
            </div>
            <div className="bg-[#664EFA] p-8 lg:p-12 rounded-xl mb-10">
              <div className="flex flex-col items-center mb-20">
                <RiSearchEyeLine className="text-7xl my-6 p-4 bg-purple-200 rounded-full text-purple-600" />
                <h2 className="text-2xl uppercase tracking-[8px]">
                  Professional
                </h2>
                <p className="text-gray-300 mb-4">
                  For users who want to do more
                </p>
                <h5 className="text-2xl uppercase tracking-[1px] font-bold">
                  $20{" "}
                </h5>
                <p className="text-gray-100 mb-8 text-bold">For a Lifetime</p>
                <button className="bg-[#ffff] py-2 px-8 rounded-lg text-[#664EFA] hover:text-[#9333EA] transition-colors">
                  Current plan
                </button>
              </div>
              {/*Features*/}
              <ul className="flex flex-col gap-4 text-gray-300">
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Detailed
                  post analytics
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Unlimited
                  teams members
                </li>
                <li className="flex items-center gap-4">
                  <RiCloseLine className="text-red-500 text-2xl opacity-[.9]" />{" "}
                  Sync across devices
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Reach and
                  impressions analytics
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Up to 10
                  social profile
                </li>
              </ul>
            </div>
            <div className="bg-[#1E1F24] p-8 lg:p-12 rounded-xl mb-10">
              <div className="flex flex-col items-center mb-20">
                <RiFilter2Line className="text-7xl my-6 p-4 bg-purple-200 rounded-full text-purple-600" />
                <h2 className="text-2xl uppercase tracking-[8px]">
                  Interprice
                </h2>
                <p className="text-gray-500 mb-4">Analyze your company</p>
                <h5 className="text-2xl uppercase tracking-[2px] font-bold">
                  $45{" "}
                </h5>
                <p className="text-gray-500 mb-8">For a Lifetime</p>
                <button className="bg-[#141517] py-2 px-8 rounded-lg hover:text-white transition-colors">
                  Current plan
                </button>
              </div>
              {/*Features*/}
              <ul className="flex flex-col gap-4 text-gray-300">
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Detailed
                  post analytics
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Unlimited
                  teams members
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Sync
                  across devices
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Reach and
                  impressions analytics
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Unlimited
                  social profile
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
