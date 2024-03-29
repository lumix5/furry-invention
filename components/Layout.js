import Head from "next/head";
import Image from "next/image";
import logo from "../img/cooltext412050815753570.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useToggle } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";
import Script from "next/script";

const Layout = ({ children }) => {
  const router = useRouter();
  let currentPathName = router.pathname;
  const [isHeaderOpened, toggleIsHeaderOpened] = useToggle(true, [false, true]);

  return (
    <div>
      <Head>
        <title>Dead by Daylight Tier List</title>
        <meta name="description" content="On this website you can rate and see tier list based on community votes" />
        <meta
          name="keywords"
          content="dbd meta, dbd tierlist, dead by daylight tier list, best killer in dbd, best survivor in dbd, best killer in dead by daylight, best survivor in dead by daylight, top perks dbd, best perks dbd, best survivors perks, top survivors perks dead by daylight"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="lumix"/>
        
        <meta
          name="google-site-verification"
          content="X1Od0_qurw8FlBO0l-oN4L_kZAmkKHjfD9XZSrAtdvU"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4YS9J2YDH1"
        strategy="afterInteractive"
      />
      <Script
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.4.3/dist/flowbite.min.css"
        />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-4YS9J2YDH1');
        `}
      </Script>
      <div className="min-h-screen h-full bg-zinc-800 w-full flex flex-col items-center">
        <div className="min-h-full w-full">
          <nav className="bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center h-16">
                <div className="flex items-center self-center">
                  <div className="flex-shrink-0 justify-center items-center pt-2">
                    <Image
                      className=""
                      src={logo}
                      width={250}
                      height={35}
                      alt="logo"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex space-x-4 items-center text-center">
                      <Link href="/killers" aria-current="page">
                        <div
                          className={`text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:text-white cursor-pointer ${
                            currentPathName === "/killers" ? "bg-gray-900" : ""
                          }`}
                        >
                          Killers
                        </div>
                      </Link>

                      <Link
                        href="/perks/killers"
                        className={`text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                          currentPathName === "/perks/killers"
                            ? "bg-gray-900"
                            : ""
                        }`}
                      >
                        <div
                          className={`text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                            currentPathName === "/perks/killers"
                              ? "bg-gray-900"
                              : ""
                          }`}
                        >
                          Killers Perks
                        </div>
                      </Link>

                      <Link href="/survivors">
                        <div
                          className={`text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                            currentPathName === "/survivors"
                              ? "bg-gray-900"
                              : ""
                          }`}
                        >
                          Survivors
                        </div>
                      </Link>

                      <Link href="/perks/survivors">
                        <div
                          className={`text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                            currentPathName === "/perks/survivors"
                              ? "bg-gray-900"
                              : ""
                          }`}
                        >
                          Survivors Perks
                        </div>
                      </Link>
                      <Link href="/randomizer/killer">
                        <div
                          className={`text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                            currentPathName === "/randomizer/killer"
                              ? "bg-gray-900"
                              : ""
                          }`}
                        >
                          Randomizer
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                  <button
                    type="button"
                    className="ml-3 bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    onClick={() => toggleIsHeaderOpened()}
                  >
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>

                    <svg
                      className="hidden h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <AnimatePresence>
              {isHeaderOpened && (
                <motion.div
                  className="md:hidden"
                  id="mobile-menu"
                  from={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/killers">
                      <div
                        className={`text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                          currentPathName === "/killers" ? "bg-gray-900" : ""
                        }`}
                        aria-current="page"
                      >
                        Killers
                      </div>
                    </Link>

                    <Link href="/perks/killers">
                      <div
                        className={`text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                          currentPathName === "/perks/killers"
                            ? "bg-gray-900"
                            : ""
                        }`}
                      >
                        Killers Perks
                      </div>
                    </Link>

                    <Link href="/survivors">
                      <div
                        className={`text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                          currentPathName === "/survivors" ? "bg-gray-900" : ""
                        }`}
                      >
                        Survivors
                      </div>
                    </Link>

                    <Link href="/perks/survivors">
                      <div
                        className={`text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                          currentPathName === "/perks/survivors"
                            ? "bg-gray-900"
                            : ""
                        }`}
                      >
                        Survivors Perks
                      </div>
                    </Link>
                    <Link href="/randomizer/killer">
                      <div
                        className={`text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                          currentPathName === "/randomizer/killer"
                            ? "bg-gray-900"
                            : ""
                        }`}
                      >
                        Randomizer
                      </div>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>
        {children}
      </div>

      <footer />
    </div>
  );
};

export default Layout;
