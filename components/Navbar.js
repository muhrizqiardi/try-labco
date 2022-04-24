import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function MobileMenu() {
  return (
    <aside
      className={`w-64 fixed top-0 h-full flex-shrink-0 bg-white ${
        true ? "-left-64" : "left-0 "
      }`}
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto py-4 px-3 border-r">
        <ul className="space-y-2">
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
          >
            <CloseIcon />
          </button>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
            >
              <DashboardIcon />
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

function Navbar(props) {
  return (
    <>
      <nav className="bg-white border-b border-gray-200 p-4 flex-shrink-0">
        <div className="flex flex-wrap justify-between items-center">
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <a href="https://flowbite.com" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              Flowbite
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <AccountCircleIcon />
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
