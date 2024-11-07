import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center w-full h-screen overflow-hidden pt-60 bg-white dark:bg-gray-900 hero">
      <div className="absolute inset-0 z-10 hero-bg before:absolute before:inset-0 before:z-20 before:bg-gradient-to-r before:from-black before:via-transparent before:opacity-15">
        <Image
          src="/assets/img/hero-bg.webp"
          alt="Okini Project Logo"
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative z-30 max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-5xl lg:text-6xl md:tracking-wide md:leading-loose dark:text-white">
          Innovative Technology Solutions with <br />
          <span className="text-primary">Okini Project</span>
        </h1>

        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          We specialize in delivering customized technology solutions that drive
          innovation and success for your business.
        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
