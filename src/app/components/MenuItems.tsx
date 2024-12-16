import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
  const productImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPHW_jhDF9sxkcTJltDKaVrCpHtdVpSC97g&s",
    "https://i.pinimg.com/736x/85/14/24/851424323d4c7a493963e6f135219989.jpg",
    "https://thecakeking.in/cdn/shop/products/new_year_cake.jpg?v=1579291880",
    "https://www.giftsvalla.com/image/cache/catalog/Cakes/Choco%20Oreo%20Bunny%20Cake-370x370.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhySGJiXSxhEVje70ywPbSSMbBX0nVyMaR5Q&s",
    "https://cakewhiz.com/wp-content/uploads/2020/02/Kids-Chocolate-Birthday-Cake-Recipe.jpg",
  ];

  return (
    <div className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `Url('https://png.pngtree.com/thumb_back/fh260/background/20231008/pngtree-d-renderings-of-birthday-party-elements-featuring-a-set-of-colorful-image_13530798.png')`,
          backgroundSize: "cover",
          backgroundPosition: "Center",
          zIndex: 0,
          opacity: 0.1,
        }}/>
      <h1 className="font-bol text-4xl mb-4 text-white z-10 relative">
        Most Requested Item
      </h1>
      <h1 className="text-3xl text-white z-10 relative"> Order Now..!</h1>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <img
                src={productImages[index]}
                alt={`Product ${index + 1}`}
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-slate-500 mr-3 uppercase text-xs">
                  {" "}
                  Category
                </span>
                <p className="text-lg font-bold text-red-700 truncate block capitalize">
                  Cake Name {index + 1}
                </p>

                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">
                    {" "}$149
                  </p>
                  <del>
                    <br />
                    <p className="text-sm text-blue-800 cursor-auto ml-2">
                      {" "}
                    </p>
                  </del>
                  <div className="ml-auto">
                    <FaShoppingCart className=" w-5 h-5 text-blue-800" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};
export default ProductCardGrid;