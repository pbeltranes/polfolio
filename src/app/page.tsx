import Image from "next/image";
import { Suspense } from "react";
import { ArrowIcon, BlogLink } from "./components/block-link";
const images = [
  { src: "/images/IMG_0656.png", alt: "Image 1" },
  { src: "/images/profile_1.jpg", alt: "Image 2" },
  { src: "/images/profile_3.jpg", alt: "Image 3" },
  // Añade más imágenes según sea necesario
];

const ImageGallery = () => {
  return (
    // <div className="flex-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-1">
    <main className="flex-auto grid grid-cols-1 md:grid-cold-2 lg:grid-cols-3 gap-1 p-1">
      {images.map((image, index) => (
        // <div key={index} className="relative w-full">
        <div key={index} className="relative w-full h-64 overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      ))}
    </main>
  );
};

function ChannelLink({
  img,
  link,
  name,
  add,
}: {
  img: string;
  link: string;
  name: string;
  add?: string;
}) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white"
              priority
            />
            {/* <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
              <svg width="15" height="11" role="img" aria-label="YouTube logo">
                <use href="/sprite.svg#youtube" />
              </svg>
            </div> */}
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <Suspense fallback={<p className="h-6" />}></Suspense>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}
export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center p-16">
    <main className="flex-col px-auto pt-8">
      {/* <h1 className="font-semibold text-2xl mb-8 tracking-tighter"> */}
      <h1 className="font-semibold text-2xl mb-8">Hola, Soy Paul 👋</h1>
      {/* <p className="text-base mb-8 tracking-tighter"> */}
      <p className="text-base mb-8 tracking-tighter">
        Soy ingeniero de software, entusiasta de JavaScript/TypeScript. Trabajo
        con Node.js, React.js, Nest.js y más tecnologías del ecosistema JS/TS.
        Me gusta resolver problemas, la tecnologías se aprenden en el camino.
        Actualmente estoy profundizando y compartiendo mis conocimientos en el
        mundo de la inteligencia artificial y está influyendo en el mundo del
        desarrollo de software.
      </p>
      <div className=" mb-16">
        {/* <div className="flex place-items-start justify-center"> */}
        <ImageGallery />
      </div>

      <p className="text-xl mb-8">Lo nuevo 📰</p>
      <div className="my-8 flex w-full flex-col space-y-4 mv">
        <BlogLink
          name="Cómo integrar ChatGPT y WhatsApp de Twilio en una Aplicación NestJS 🚀"
          link="https://medium.com/@p.beltranes/integrando-chatgpt-whatsapp-de-twilio-en-nestjs-a052ef499bc1"
        />
      </div>

      {/* <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          name="Linkedin"
          img="/linkedin.png"
          link="https://www.linkedin.com/in/paul-beltran-espinosa/"
        />
        <ChannelLink
          name="Github"
          img="/github.png"
          link="https://github.com/pbeltranes"
        />
      </div> */}
  
    </main>
  );
}
