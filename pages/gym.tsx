import React from "react";

const GymPage = () => {
  return (
    <>
      <section className="relative h-screen bg-black">
        <img
          src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg"
          alt=""
          className="object-cover object-center w-full h-full opacity-70"
        />
        <div className="absolute inset-0">
          <div className="px-16 py-10">
            <nav className="flex items-center justify-between">
              <div className="w-16 h-16 bg-white rounded-full">
                {/* <img src="" alt="" className="" /> */}
              </div>
              <div className="flex items-center space-x-5">
                <ul className="flex items-center gap-5">
                  {[
                    "classes",
                    "agenda",
                    "coaches",
                    "débutants",
                    "entrainement personnel",
                    "contact",
                    "autres",
                  ].map((item, index) => (
                    <li key={index} className="">
                      <a
                        href="#"
                        className="text-white text-xs font-bold hover:text-[#e4ff5e] transition duration-300 ease-in uppercase"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                <button className="border-2 border-[#e4ff5e] text-[#e4ff5e] hover:text-gray-700 font-bold px-4 py-2 justify-center transition duration-300 ease-in flex items-center text-xs uppercase bg-transparent hover:bg-[#e4ff5e]">
                  devenir membre
                </button>
                <button className="border-2 text- border-[#e4ff5e] text-[#e4ff5e] hover:text-gray-700 font-bold px-4 py-2 justify-center transition duration-300 ease-in flex items-center text-xs uppercase bg-transparent hover:bg-[#e4ff5e]">
                  réserver session
                </button>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <section className=""></section>
      <section className=""></section>
      <section className=""></section>
      <section className=""></section>
      <section className=""></section>
    </>
  );
};

export default GymPage;
