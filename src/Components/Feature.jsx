const Feature = () => {
  return (
    <section className="mt-24 mb-24 p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?1"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase font-bold text-[#FF3811] ">
            About Us
            </span>
            <h3 className="text-3xl font-bold mt-2">
              We are qualified & of experience in this field
            </h3>
            <p className="my-6 dark:text-gray-600">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </p>
            <button type="button" className="self-start btn text-white bg-orange-500 hover:bg-orange-500">
            Get More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
