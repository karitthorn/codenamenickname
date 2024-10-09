import React from 'react';


const Navbar: React.FC = () => {
  return (


<nav className="border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">

        <span className="self-center text-2xl font-semibold whitespace-nowrap">✏️ CodeName_Nickname</span>
    </a>

    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 mr-5" aria-current="page">Medium</a>
        </li>
        <li>
          <a href="https://github.com/karitthorn/codenamenickname" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 mr-5" aria-current="page">Github</a>
        </li>

      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
