import React from "react";

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Delicious Donut </h2>
        <p className="text-white mb-4">
         {" "}
          Experience the delicios donuts in town , made with fresh ingredients{" "}
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
          Order Now
        </button>
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
         {" "}
          Coming Soon: Our New Launches{" "}
        </h3>
<ul>
    <li>
        {" "} 
        <strong>  Oatmeal Latte:</strong>
          Breakfast Drinks that combine nutritious oats with caffeine
    </li>
    <br />

    <li> 
        {" "}
        <strong> Brownie Sundae:</strong>
          Indulgence reaches new heights with the BrownieSundae
    </li>
    
    <br />

    <li> 
        {" "}
        <strong> Ferrero Rocher:</strong>
          A smooth Hazelnut cream filling on the inside with a crunchy chocolate glaze on the outside
    </li>
    <br />

    <li>
        {" "}
         <strong> Black Forest Croissant:</strong>
         Fresh Cream, Chocolate ,Maraschino Cherries
    </li>
    <br />

    
    <br />
    </ul>
    </div>
<div className="md:w-1/2 mt-6 md:mt-0">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECAUfOX0tzZ63lo4_OYPWvh6TH04Loft9N68QnMpWK07RQeHowHTqGu9c08terhLJEeM&usqp=CAU"
alt="Delicious Cakes"
className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7" />

</div>
      
    </section>
  );
};
export default FloatingImageContentBlock;