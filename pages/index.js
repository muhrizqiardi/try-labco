import Card from "../components/Card";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="h-full flex items-stretch justify-start">
        <Sidebar />
        <MainContent>
          <Navbar />
          <div className="m-4">
            <Card>
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  2,340
                </span>
                <h3 className="text-base font-normal text-gray-500">
                  New products this week
                </h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                14.6%
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Card>
          </div>
        </MainContent>
      </div>
    </div>
  );
}
export default Home;
