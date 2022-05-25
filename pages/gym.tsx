import React from "react";
import Slider from "react-slick";

const data = [
  {
    title: "cours en groupe",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad mollitia. Ad facere ipsam rerum?",
    image: "/images/pexels-photo-3776144.jpeg",
  },
  {
    title: "entrainement personnel",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad mollitia. Ad facere ipsam rerum?",
    image: "/images/pexels-photo-2204196.jpeg",
  },
  {
    title: "zone de lifting",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad mollitia. Ad facere ipsam rerum?",
    image: "/images/pexels-photo-700446.jpeg",
  },
  {
    title: "bar et repas",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad mollitia. Ad facere ipsam rerum?",
    image: "/images/pexels-photo-4114141.jpeg",
  },
];

const GymPage = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 5000,
    arrows: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      <section className="relative h-screen bg-black">
        <img
          src="/images/pexels-photo-841130.jpeg"
          alt=""
          className="image opacity-80"
        />
        <div className="absolute inset-0">
          <div className="hero">
            <nav className="flex items-center justify-between">
              <div className="logo ">
                <img
                  src="https://www.pngkey.com/png/detail/239-2393323_golds-gym-logo-golds-gym-white-logo.png"
                  alt=""
                  className="image"
                />
              </div>
              <div className="flex items-center space-x-5">
                <ul className="flex items-center gap-5">
                  {[
                    "cours",
                    "agenda",
                    "coaches",
                    "débutants",
                    "entrainement personnel",
                    "contact",
                    "autres",
                  ].map((item, index) => (
                    <li key={index} className="navbar-items">
                      <a href="#" className="">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                <button className="button-1">devenir membre</button>
                <button className="button-1">réserver session</button>
              </div>
            </nav>
            <div className="w-20">
              <h1 className="section-title">retrouver la forme avec nous</h1>
            </div>
            <div className="flex items-center justify-between">
              <button className="p-6 button-2">accès cours gratuit</button>
              <button className="playlist-button">
                <svg
                  className="svg "
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#1ED760"
                    fillRule="evenodd"
                    d="M19.0983701,10.6382791 C15.230178,8.34118115 8.85003755,8.12986439 5.15729493,9.25058527 C4.56433588,9.43062856 3.93727638,9.09580812 3.75758647,8.50284907 C3.57789655,7.90953664 3.91236362,7.28283051 4.50585273,7.10261054 C8.74455585,5.81598127 15.7909802,6.06440214 20.2440037,8.70780512 C20.7774195,9.02442687 20.9525156,9.71332656 20.6362472,10.2456822 C20.3198021,10.779098 19.6305491,10.9549008 19.0983701,10.6382791 M18.971686,14.0407262 C18.7004726,14.4810283 18.1246521,14.6190203 17.6848801,14.3486903 C14.4600027,12.3664473 9.54264764,11.792217 5.72728477,12.9503953 C5.23256328,13.0998719 4.70992535,12.8208843 4.55974204,12.3270462 C4.41061884,11.8323247 4.68978312,11.3107469 5.18362118,11.1602103 C9.5419409,9.83771368 14.9600247,10.4782013 18.6638986,12.7544503 C19.1036707,13.0253103 19.242016,13.6013075 18.971686,14.0407262 M17.5034233,17.308185 C17.2876894,17.6617342 16.827245,17.7725165 16.4749326,17.5571359 C13.6571403,15.8347984 10.1101639,15.4459119 5.93312425,16.4000177 C5.53063298,16.4922479 5.12937851,16.2399399 5.03767834,15.8376253 C4.94544812,15.4351341 5.19669597,15.0338796 5.60024736,14.9420027 C10.1712973,13.8970803 14.0923186,14.3467468 17.2551791,16.2796943 C17.6078449,16.4948982 17.7189805,16.9556959 17.5034233,17.308185 M12,0 C5.37267547,0 0,5.37249879 0,11.9998233 C0,18.6278546 5.37267547,24 12,24 C18.6275012,24 24,18.6278546 24,11.9998233 C24,5.37249879 18.6275012,0 12,0"
                  />
                </svg>
                <span>découvrez nos playlists</span>
                <svg
                  className="svg "
                  viewBox="-96 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* section 'votre club de gym' */}

      <section className="relative text-white bg-black ">
        <div className="w-[55%] leading-none pt-[650px]">
          <div className="text-[350px] font-extrabold text-gray-500 opacity-20 uppercase">
            én
          </div>
          <div className="flex text-[350px] font-extrabold text-gray-500 opacity-20 justify-center uppercase">
            er
          </div>
          <div className="flex text-[350px] font-extrabold text-gray-500 opacity-20 justify-end uppercase">
            gie
          </div>
        </div>

        <div className="absolute inset-0">
          <div className="relative flex overflow-x-hidden">
            <div className="text-transparent py-28 animate-marquee whitespace-nowrap bg-clip-text bg-gradient-to-l from-green-500 via-lime-300 to-lime-400">
              <span className="mx-4 font-extrabold uppercase text-7xl">
                boxe
              </span>
              <span className="mx-4 font-extrabold uppercase text-7xl">
                kunbalini
              </span>
              <span className="mx-4 font-extrabold uppercase text-7xl">
                barre
              </span>
              <span className="mx-4 font-extrabold uppercase text-7xl">
                coaching personnel
              </span>
              <span className="mx-4 font-extrabold uppercase text-7xl">
                yoga
              </span>
              <span className="mx-4 font-extrabold uppercase text-7xl">
                cycle
              </span>
            </div>

            <div className="absolute top-0 text-transparent py-28 animate-marquee2 whitespace-nowrap bg-clip-text bg-gradient-to-r from-green-500 via-lime-300 to-lime-400">
              <span className="mx-4 font-extrabold uppercase text-7xl">
                boxe
              </span>
              <span className="mx-4 font-extrabold uppercase text-7xl">
                kunbalini
              </span>
              <span className="mx-4 font-extrabold uppercase text-7xl">
                barre
              </span>
              <span className="mx-4 font-extrabold uppercase text-7xl">
                coaching personnel
              </span>
              <span className="mx-4 font-extrabold uppercase text-7xl">
                yoga
              </span>
              <span className="mx-4 font-extrabold uppercase text-7xl">
                cycle
              </span>
            </div>
          </div>
          <div className="relative p-20 pt-0 section-2">
            <div className="w-1/3 space-y-5 ">
              <h1 className="w-40 leading-tight section-title">
                votre club de gym
              </h1>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque nam debitis officia. Architecto eos quae ad
                accusantium debitis officia magnam cumque nobis suscipit fuga
                recusandae, vel fugiat voluptatum illo deserunt.
              </p>
            </div>
            <div className="section-2-grids">
              {data.map((item, index) => (
                <div key={index} className="space-y-3">
                  <img src={item.image} alt="" className="image" />
                  <a href="#" className="title">
                    {item.title}
                  </a>
                  <p className="">{item.description}</p>
                  <button className="button-4 group">
                    <span className=" group-hover:text-black">voir plus</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* section séances */}

      <section className="p-20 bg-black ">
        <div className="sessions ">
          <h1 className="section-title">séances</h1>
          <span className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
            quo?
          </span>
          <button className="p-5 button-2">voir plus</button>
        </div>
        <div className="classes-grid">
          <div className="space-y-5">
            <div className="mb-3">
              <img
                src="/images/pexels-photo-917653.jpeg"
                alt=""
                className="image"
              />
            </div>
            <a href="#" className="title ">
              yoga
            </a>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad
              mollitia. Ad facere ipsam rerum?
            </p>
            <button className="button-4 group">
              <span className=" group-hover:text-black">voir plus</span>
            </button>
          </div>
          <div className="space-y-5">
            <div className="mb-3">
              <img
                src="/images/pexels-photo-4804257.jpeg"
                alt=""
                className="image"
              />
            </div>
            <a href="#" className="title ">
              boxe
            </a>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad
              mollitia. Ad facere ipsam rerum?
            </p>
            <button className="button-4 group">
              <span className=" group-hover:text-black">voir plus</span>
            </button>
          </div>

          <div className="space-y-5">
            <div className="mb-3">
              <img
                src="/images/pexels-photo-9288101.jpeg"
                alt=""
                className="image"
              />
            </div>
            <a href="#" className="title ">
              stretching
            </a>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad
              mollitia. Ad facere ipsam rerum?
            </p>
            <button className="button-4 group">
              <span className=" group-hover:text-black">voir plus</span>
            </button>
          </div>
        </div>
      </section>

      <section className="relative h-[1100px] overflow-hidden bg-black ">
        <div className="h-full leading-none ">
          <h1 className="font-extrabold text-gray-600 uppercase opacity-20 text-[290px]">
            rejoignez
          </h1>
          <h1 className="font-extrabold text-gray-600 uppercase opacity-20 text-[290px]">
            nous
          </h1>
        </div>
        <div className="absolute inset-0">
          <div className="relative min-h-screen p-20 space-y-20 ">
            <h1 className="text-center section-title">
              choisissez votre offre
            </h1>
            <div className="divide-y divide-neutral-800">
              <div className="offer-item group">
                <div className="offer-item-left ">
                  <a href="#" className="group-hover:text-[#e4ff5e] ">
                    3 mois
                  </a>
                  <p className="">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis incidunt voluptatibus saepe aperiam error fugit
                    voluptate aspernatur possimus ad dignissimos beatae
                    voluptatum alias unde reprehenderit, eius perferendis odio
                    consequatur molestias?
                  </p>
                </div>
                <h1 className="">439€</h1>
              </div>
              <div className="offer-item group">
                <div className="offer-item-left ">
                  <a href="#" className="group-hover:text-[#e4ff5e] ">
                    10 séances
                  </a>
                  <p className="">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis incidunt voluptatibus saepe aperiam error fugit
                    voluptate aspernatur possimus ad dignissimos beatae
                    voluptatum alias unde reprehenderit, eius perferendis odio
                    consequatur molestias?
                  </p>
                </div>
                <div className="flex items-center justify-center w-40 h-10 p-4 text-xs font-bold uppercase bg-gradient-to-r from-green-500 via-lime-300 to-lime-400 -rotate-12">
                  la plus populaire
                </div>
                <h1 className="">169€</h1>
              </div>
              <div className="offer-item group">
                <div className="offer-item-left">
                  <a href="#" className="group-hover:text-[#e4ff5e] ">
                    séance découverte
                  </a>
                  <p className="">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis incidunt voluptatibus saepe aperiam error fugit
                    voluptate aspernatur possimus ad dignissimos beatae
                    voluptatum alias unde reprehenderit, eius perferendis odio
                    consequatur molestias?
                  </p>
                </div>
                <h1 className="">29€</h1>
              </div>
            </div>
            <div className="text-center">
              <button className="p-6 button-2">view all</button>
            </div>
          </div>
        </div>
      </section>

      {/* section info */}

      <section className="p-20 bg-gray-100">
        <div className="info-session">
          <div className="space-y-3 info-item ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 577.565 577.565"
              //   className="h-10 "
              xmlSpace="preserve"
              style={{ height: "40px" }}
            >
              <g>
                <path
                  d="M436.782,0H140.784c-9.228,0-16.734,7.506-16.734,16.734v544.097c0,9.228,7.507,16.734,16.734,16.734h295.998
		c9.228,0,16.734-7.507,16.734-16.734V16.734C453.516,7.506,446,0,436.782,0z M401.821,28.075c4.849,0,8.788,3.94,8.788,8.798
		c0,4.848-3.939,8.788-8.788,8.788c-4.857,0-8.797-3.939-8.797-8.788C393.023,32.025,396.973,28.075,401.821,28.075z
		 M383.987,32.856c2.219,0,4.017,1.798,4.017,4.017c0,2.218-1.798,4.016-4.017,4.016c-2.228,0-4.017-1.798-4.017-4.016
		C379.97,34.654,381.768,32.856,383.987,32.856z M373.363,32.856c2.219,0,4.017,1.798,4.017,4.017c0,2.218-1.798,4.016-4.017,4.016
		s-4.016-1.798-4.016-4.016C369.337,34.654,371.135,32.856,373.363,32.856z M255.802,28.075h65.953v17.585h-65.953V28.075z
		 M321.754,551.823h-65.953v-17.586h65.953V551.823z M418.603,513.229h-259.65V66.191h259.65V513.229z"
                />
              </g>
            </svg>
            <h1 className="">contact</h1>
            <p>Tel: 0102040560</p>
            <p>email@email.com</p>
          </div>
          <div className="space-y-3 info-item ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 488 488"
              xmlSpace="preserve"
              //   className="h-10"
              style={{ height: "40px" }}
            >
              <g transform="translate(0 -540.36)">
                <g>
                  <g>
                    <path
                      d="M351.1,846.96l-97.1-67.9v-116.7c0-5.5-4.5-10-10-10s-10,4.5-10,10v122c0,3.3,1.6,6.3,4.3,8.2l101.4,70.9
				c1.7,1.2,3.7,1.8,5.7,1.8v0c3.1,0,6.2-1.5,8.2-4.4C356.7,856.36,355.6,850.16,351.1,846.96z"
                    />
                    <path
                      d="M416.4,611.96L416.4,611.96c-46.2-46.2-107.4-71.6-172.4-71.6s-126.2,25.4-172.4,71.6C25.4,658.16,0,719.36,0,784.36
				s25.4,126.2,71.6,172.4c46.2,46.2,107.4,71.6,172.4,71.6s126.2-25.4,172.4-71.6s71.6-107.4,71.6-172.4S462.6,658.16,416.4,611.96
				z M254,1008.16L254,1008.16v-40.8c0-5.5-4.5-10-10-10s-10,4.5-10,10v40.8c-115.6-5.1-208.7-98.2-213.8-213.8H61
				c5.5,0,10-4.5,10-10s-4.5-10-10-10H20.2c5.1-115.6,98.2-208.7,213.8-213.8v40.8c0,5.5,4.5,10,10,10s10-4.5,10-10v-40.8
				c115.6,5.1,208.7,98.2,213.8,213.8H427c-5.5,0-10,4.5-10,10s4.5,10,10,10h40.8C462.7,909.96,369.6,1003.06,254,1008.16z"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <h1 className="">Horaires</h1>
            <span className="space-y-2">
              <p>Lundi à vendredi: 7:30 — 1:00</p>
              <p>Samedi: 9:00 — 1:00</p>
              <p>Dimanche: 9:00 — 23:30</p>
            </span>
          </div>
          <div className="space-y-3 info-item ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 315 315"
              xmlSpace="preserve"
              //   className="h-10"
              style={{ height: "40px" }}
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M157.5,0C93.319,0,41.103,52.215,41.103,116.397c0,62.138,106.113,190.466,110.63,195.898
				c1.425,1.713,3.538,2.705,5.767,2.705c2.228,0,4.342-0.991,5.767-2.705c4.518-5.433,110.63-133.76,110.63-195.898
				C273.897,52.215,221.682,0,157.5,0z M157.5,295.598c-9.409-11.749-28.958-36.781-48.303-65.397
				c-34.734-51.379-53.094-90.732-53.094-113.804C56.103,60.486,101.59,15,157.5,15c55.91,0,101.397,45.486,101.397,101.397
				c0,23.071-18.359,62.424-53.094,113.804C186.457,258.817,166.909,283.849,157.5,295.598z"
                    />
                    <path
                      d="M195.657,213.956c-3.432-2.319-8.095-1.415-10.413,2.017c-10.121,14.982-21.459,30.684-33.699,46.67
				c-2.518,3.289-1.894,7.996,1.395,10.514c1.36,1.042,2.963,1.546,4.554,1.546c2.254,0,4.484-1.013,5.96-2.941
				c12.42-16.22,23.933-32.165,34.219-47.392C199.992,220.938,199.09,216.275,195.657,213.956z"
                    />
                    <path
                      d="M157.5,57.5C123.589,57.5,96,85.089,96,119s27.589,61.5,61.5,61.5S219,152.911,219,119S191.411,57.5,157.5,57.5z
				 M157.5,165.5c-25.64,0-46.5-20.86-46.5-46.5s20.86-46.5,46.5-46.5c25.641,0,46.5,20.86,46.5,46.5S183.141,165.5,157.5,165.5z"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <h1 className="">adresse</h1>
            <p>10 rue Henry René</p>
            <p>45100, Orléans</p>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="space-y-5">
            <div className="logo">
              {/* <img
                src=""
                alt=""
                className="object-cover object-center w-full h-full"
              /> */}
            </div>
            <div className="social-media-icons">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 504.4 504.4"
                  xmlSpace="preserve"
                  className="svg"
                >
                  <g>
                    <g>
                      <path
                        d="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6
			C504,57,447.2,0.2,377.6,0.2z M377.2,189c0,2.8,0,5.6,0,8.4c0,84-64.8,180.8-183.6,180.8c-36.4,0-70.4-10.4-98.8-28.4
			c5.2,0.4,10,0.8,15.2,0.8c30.4,0,58-10,80-27.2c-28.4-0.4-52-18.8-60.4-44c4,0.8,8,1.2,12,1.2c6,0,12-0.8,17.2-2.4
			c-28.8-6-50.8-31.6-50.8-62.4V215c8,4.8,18.4,7.6,28.8,8c-17.2-11.2-28.8-30.8-28.8-52.8c0-11.6,3.2-22.4,8.8-32
			c32,38.4,79.2,63.6,132.8,66.4c-1.2-4.8-1.6-9.6-1.6-14.4c0-35.2,28.8-63.6,64.4-63.6c18.4,0,35.2,7.6,47.2,20
			c14.8-2.8,28.4-8,40.8-15.6c-4.8,14.8-15.2,27.2-28.4,35.2c13.2-1.6,25.6-4.8,37.2-10C400.4,169,389.6,180.2,377.2,189z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
              <a href="#">
                <svg
                  className="svg"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L12.75,24 L12.75,15 L9.75,15 L9.75,11.25 L12.75,11.25 L12.75,8.25 C12.75,5.15025 14.71275,3.62475 17.478,3.62475 C18.8025,3.62475 19.941,3.72375 20.2725,3.76725 L20.2725,7.00725 L18.35475,7.008 C16.851,7.008 16.5,7.72275 16.5,8.77125 L16.5,11.25 L20.25,11.25 L19.5,15 L16.5,15 L16.56,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M256.551,100.198c-85.606,0-155.252,69.645-155.252,155.252c0,27.293,7.183,54.138,20.775,77.632
			c2.284,3.947,7.336,5.295,11.284,3.014c3.947-2.284,5.297-7.335,3.014-11.284c-12.139-20.984-18.556-44.969-18.556-69.362
			c0-76.499,62.236-138.735,138.735-138.735s138.735,62.236,138.735,138.735S333.05,394.185,256.551,394.185
			c-38.491,0-74.271-15.397-100.748-43.355c-3.136-3.311-8.363-3.454-11.675-0.317c-3.311,3.136-3.454,8.363-0.317,11.675
			c29.629,31.284,69.667,48.513,112.74,48.513c85.606,0,155.252-69.645,155.252-155.252S342.157,100.198,256.551,100.198z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M256.551,155.252c-55.25,0-100.198,44.948-100.198,100.198s44.948,100.198,100.198,100.198
			s100.198-44.948,100.198-100.198S311.8,155.252,256.551,155.252z M256.551,339.131c-46.143,0-83.682-37.539-83.682-83.682
			s37.539-83.682,83.682-83.682s83.682,37.539,83.682,83.682S302.693,339.131,256.551,339.131z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M397.488,78.176c-20.035,0-36.335,16.3-36.335,36.336s16.3,36.335,36.335,36.335c20.035,0,36.336-16.3,36.336-36.335
			S417.523,78.176,397.488,78.176z M397.488,134.331c-10.928,0-19.819-8.891-19.819-19.819s8.891-19.819,19.819-19.819
			s19.819,8.891,19.819,19.819S408.416,134.331,397.488,134.331z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M398.039,0H113.961C51.023,0,0,51.023,0,113.961v284.077C0,460.977,51.023,512,113.961,512h284.077
			C460.977,512,512,460.977,512,398.039V113.961C512,51.023,460.977,0,398.039,0z M495.484,398.039
			c0,53.817-43.628,97.445-97.445,97.445H113.961c-53.817,0-97.445-43.628-97.445-97.445V113.961
			c0-53.817,43.628-97.445,97.445-97.445h284.077c53.817,0,97.445,43.628,97.445,97.445V398.039z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M394.735,38.538H117.265c-43.479,0-78.727,35.248-78.727,78.727v277.471c0,43.479,35.248,78.727,78.727,78.727h277.471
			c43.479,0,78.727-35.248,78.727-78.727V117.265C473.462,73.785,438.215,38.538,394.735,38.538z M456.946,394.735
			c0,34.358-27.853,62.211-62.211,62.211H117.265c-34.358,0-62.211-27.853-62.211-62.211V117.265
			c0-34.358,27.853-62.211,62.211-62.211h277.471c34.358,0,62.211,27.853,62.211,62.211V394.735z"
                      />
                    </g>
                  </g>
                </svg>
              </a>

              <a href="">
                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 242.667 242.667"
                  xmlSpace="preserve"
                >
                  <path
                    d="M106.955,94.325l39.161,27.008l-39.161,27.008V94.325z M242.667,0v242.667H0V0H242.667z M190.25,101.494
	c0-16.378-13.277-29.655-29.655-29.655H82.072c-16.378,0-29.655,13.277-29.655,29.655v39.679c0,16.378,13.277,29.655,29.655,29.655
	h78.523c16.378,0,29.655-13.277,29.655-29.655V101.494z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="">
            <ul className="space-y-3">
              <li className=" title">
                <a href="#">cours</a>
              </li>
              <a href="#"></a>
              <li className=" title">
                <a href="#">agenda</a>
              </li>
              <li className=" title">
                <a href="#">coaches</a>
              </li>
              <li className=" title">
                <a href="#">débutants</a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="space-y-3">
              <li className=" title">
                <a href="#">entrainement personnel</a>
              </li>
              <a href="#"></a>
              <li className=" title">
                <a href="#">boutique</a>
              </li>
              <li className=" title">
                <a href="#">à propos de nous</a>
              </li>
              <li className=" title">
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h1 className="title">avec nous pas de secret</h1>
            <p className="text-white">{`Inscrivez vous pour plus d'info`}</p>
            <div className="flex ">
              <input
                type="text"
                className="input"
                placeholder="entrer votre email"
              />
              <button className="button-3">inscription</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GymPage;
