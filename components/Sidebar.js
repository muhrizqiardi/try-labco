import DashboardIcon from "@mui/icons-material/Dashboard";
import CloseIcon from "@mui/icons-material/Close";

function Sidebar() {
  return (
    <aside
      className={`w-64 fixed top-0 lg:static h-full flex-shrink-0 bg-white ${
        true ? "-left-64" : "left-0 "
      }`}
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto py-4 px-3 border-r">
        <ul className="space-y-2">
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
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
export default Sidebar;
