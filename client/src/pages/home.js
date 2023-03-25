import { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import io from "socket.io-client";

const Home = () => {
  const [driving, setDriving] = useState(false);
  const [access, setAccess] = useState(false);
  const [reuqest, setRequest] = useState(false);
  const [status, setStatus] = useState(false);

  return (
    <div className="flex justify-center pt-20 space-x-5">
      <div className="flex flex-col items-center border border-gray-400 rounded-lg w-80">
        <div className="w-full p-5 font-bold text-white rounded-t-lg bg-cyan-500">
          User menu
        </div>
        <div className="flex flex-col items-center w-full p-5 transition-all">
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
