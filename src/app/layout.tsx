import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import { ArrowIcon } from "./components/block-link";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto"> */}
      <body className=" h-full antialiased inset-x-0 top-0 z-50 px-4  2xl:px-72 2xl:mx-80 lg:px-56">
        {/*Header */}

        <section className="">
          <header className="flex justify-between items-center">
            <h1 className="text-6xl font-bold">🐙</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/work">Career</a>
                </li>
              </ul>
            </nav>
          </header>
        </section>
        {/* <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0"> */}
        {children}

        {/*Footer */}
        <section className="flex flex-row-reverse items-baseline  sm:flex-column  flex font-sm mt-8  mb-8 space-x-0 space-y-2 text-neutral-600  md:space-x-4 md:space-y-0 dark:text-neutral-300">
          <div className="flex ">
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/paul-beltran-espinosa/"
            >
              <p className="ml-2 h-7"> LinkedIn</p>

              <ArrowIcon />
            </a>
          </div>
          <div className="flex items-baseline">
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href=""
            >
              <p className="ml-2 h-7">Medium</p>
              <ArrowIcon />
            </a>
          </div>
        </section>
      </body>
    </html>
  );
}
