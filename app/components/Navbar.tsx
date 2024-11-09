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
          <a href="https://medium.com/@karitthorn/%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%9B%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B8%A0%E0%B8%B1%E0%B8%A2%E0%B9%83%E0%B8%99%E0%B8%8A%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A1%E0%B8%B5%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-d03f63731338" className="block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 mr-5" aria-current="page">Medium</a>
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
