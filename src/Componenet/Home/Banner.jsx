import img from "../../assets/banner7.jpg";

const Banner = () => {
  return (
    <div>
      <div className=" relative">
        <img
          className="w-[100vw] lg:h-[90vh] h-[50vh] object-cover"
          src={img}
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="absolute inset-0 lg:top-1/3 top-1/4 text-center text-white lg:text-6xl md:4xl text-3xl font-semibold ">
          Comming Soon -{" "}
          <span className="text-blue-600 text-bold">The Educator</span> <br />{" "}
          <span className="text-3xl md:2xl hidden lg:block md:block mt-3">
            {" "}
            Where Excellence Awaits!
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
