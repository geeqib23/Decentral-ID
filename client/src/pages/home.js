import { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Home = () => {
  const [driving, setDriving] = useState(false);
  const [access, setAccess] = useState(false);
  const [reuqest, setRequest] = useState(false);
  const [status, setStatus] = useState(false);

  return (
    <div className="flex justify-center pt-20 space-x-5">
      <div className="w-80 border flex flex-col items-center rounded-lg border-gray-400">
        <div className="bg-cyan-500 w-full p-5 text-white font-bold rounded-t-lg">
          User menu
        </div>
        <div className="w-full p-5 flex flex-col items-center transition-all">
          <a
            onMouseEnter={() => setDriving(true)}
            onMouseLeave={() => setDriving(false)}
            href="/addDocument"
            className="flex items-center justify-between w-[90%] bg-gray-200 p-3 rounded-t-lg drop-shadow border border-gray-500"
          >
            Add Verification Request {driving ? <AiOutlineDoubleRight /> : <></>}
          </a>
          <a
            onMouseEnter={() => setAccess(true)}
            onMouseLeave={() => setAccess(false)}
            href="/user"
            className="flex items-center justify-between relative top-[-1px] w-[90%] bg-gray-200 p-3 rounded-b-lg drop-shadow border border-gray-500"
          >
            My Requests Status {access ? <AiOutlineDoubleRight /> : <></>}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
