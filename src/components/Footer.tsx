import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" w-full p-4 sm:p-6 sm:px-4 bg-blue-300 bg-opacity-31 dark:bg-gray-700 dark:bg-opacity-30">
      <div className="mx-auto max-w-[1080px]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-md text-gray-600 sm:text-center dark:text-gray-300">
            © {new Date().getFullYear()}{" "}
            <a href="" className="hover:underline">
              Provenance
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://github.com/neel-ds/provenance"
              target="_blank"
              className="text-gray-600 hover:text-gray-700 dark:hover:text-white dark:text-gray-300"
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