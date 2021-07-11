import Link from "next/link";
import * as React from "react";

interface ContainerProps {}

const Header: React.FunctionComponent<ContainerProps> = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center sm:flex-row py-20 mb-0 sm:mb-6 space-x-6 items-center">
        <img src="/me.png" alt="Josiah Rose" className="rounded border-2 border-gray-500 h-32" />
        <div className="m-4 sm:m-0">
          <Link href="/">
            <a>
              <h1 className="text-2xl text-center md:text-3xl font-black items-stretch text-gray-200">
                Hey there! I'm Josiah Rose 👋
              </h1>
            </a>
          </Link>
          <p className="text-lg text-center mt-2 md:text-xl font-medium text-gray-100">On this site I posts about whatever interests me.</p>
          <div className="flex justify-center sm:justify-start">
            <a className="text-white">Hey</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
