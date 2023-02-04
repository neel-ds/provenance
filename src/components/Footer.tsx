import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" w-full p-4 sm:p-6 sm:px-4 bg-purple-500 bg-opacity-31 dark:bg-gray-700 dark:bg-opacity-30">
      <div className="mx-auto max-w-[1080px]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-md text-gray-50 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a href="" className="hover:underline">
              Trustchain
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://github.com/rkmonarch/TrustChain"
              target="_blank"
              className="text-gray-50 hover:text-gray-300 dark:hover:text-white"
              rel="noreferrer"
            >
              <AiFillGithub size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
