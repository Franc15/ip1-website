export default function Hero() {
  return (
    <section class="text-gray-700 body-font pb-10">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            We are the
            <br class="hidden lg:inline-block" />
            Super Six
          </h1>
          <p class="mb-8 leading-relaxed">
            We are year two students from African Leadership College, Mauritius
            enrolled in Computing degree. Blah blah blah.....
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg">
              Learn More
            </button>
            <button class="ml-4 inline-flex text-yellow-500 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Our Team
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
}
