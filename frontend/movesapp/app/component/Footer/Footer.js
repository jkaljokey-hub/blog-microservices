"use client";


const Footer = () => {
  return (
    <footer >
      <div className="container px-6 py-8 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <div className="text-xs font-medium text-gray-400 uppercase mb-5">
                {["Getting Started", "Documentation", "Community", "Resources"][index] || "Section"}
              </div>
              {[
                "Installation",
                "Release Notes",
                "Upgrade Guide",
                "Using with Preprocessors",
                "Optimizing for Production",
                "Browser Support",
                "IntelliSense",
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="block mt-3 text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline transition-colors duration-300 ease-in-out"
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()}. All Rights Reserved.</p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            {["Reddit", "Facebook", "Github"].map((platform, i) => (
              <a
                key={i}
                href="#"
                className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition transform duration-300 hover:scale-110"
                aria-label={platform}
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
