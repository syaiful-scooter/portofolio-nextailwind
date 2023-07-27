/* eslint-disable jsx-a11y/alt-text */
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import Ipul from "../public/dev-ed-wave.png";

export default function Home() {
  return (
    <div>
      <main className="bg-white px-10 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">MyPortofolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl text-teal-600 font-medium">Syaiful Nopi</h2>
            <h3 className="text-2xl py-2">Fullstack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-950">
              Fullstack web Developer providing services for programming and
              design content needs. Join me down below and start cracking!.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
            <AiFillInstagram />
            <AiFillLinkedin />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full h-80 w-80 m-20 overflow-hidden">
            <Image src={Ipul} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-5 leading-8 text-gray-950">
              Fullstack web Developer providing services for programming and
              design content needs. Join me down below and start cracking!.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
