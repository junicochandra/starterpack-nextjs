import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="pt-60" id="portfolio">
      <div className="text-center">
        <h1 className="text-2xl font-bold uppercase tracking-widest text-blue-600">
          Our Best Work
        </h1>
        <h2 className=" text-3xl md:text-5xl leading-normal mt-3 font-bold dark:text-white">
          Digital Solutions for Your Business
        </h2>
        <div className="line-animated"></div>
      </div>

      <div className="container mx-auto mt-3 mb-10">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            type="button"
            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          >
            All categories
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Company Profile
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Software Development
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Corporate Intranet
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:mt-10">
          <div>
            <a href="/portfolio/detail">
              <Image
                className="h-auto max-w-full mx-auto rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                alt="Product"
                width={600}
                height={0}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
