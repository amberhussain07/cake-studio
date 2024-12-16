import React from 'react'


export default function Carousel() {
    return (
        <div>
            <section className="bg-gradient-to-r from-black to-gray-700">
                <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to gray-700 h-auto md:h-full flex flex-col">
                            <a href=""
                                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src="https://i.pinimg.com/736x/e3/a9/24/e3a924e9734e7cdd91ea3a8136a10602.jpg"

                                    alt="Cake1"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out " />
                                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 '>

                                </div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 x:text-xl md:text-0xl">
                                
                                    Chocolate Vanilla Icecream Cake{""}
                                </h3>
                            </a>
                        </div>
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to gray-700 h-auto md:h-full flex flex-col">
                            <a href=""
                                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4'>
                                <img src="https://whipped.in/cdn/shop/files/rainbow-birthday-cake.png?v
"
                                    alt="Cake2"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out " />
                                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 '>

                                </div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 x:text-xl md:text-0xl">
                                    {""}
                                    Rainbow Cake{""}
                                </h3>
                            </a>
                            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">

                                <a href=""
                                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src="https://gifterzz.com/wp-content/uploads/2020/05/three-milk-cake-2-1.jpg"
                                        alt="Cake3"
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5">
                                    </div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 x:text-xl md:text-0xl">
                                    
                                        Three Milk Cake{""}
                                    </h3>
                                </a>


                                <a href=""
                                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src="https://images.articlesfactory.com/750x0/d7fb39d8-0b50-4a68-86f7-0d542d427c0c.webp"
                                        alt="Cake4"
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5">
                                    </div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 x:text-xl md:text-0xl">
                                        
                                        Kids Character Cakes{""}
                                    </h3>
                                </a>
                            </div>
                        </div>

                        <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to bg-gray-700 h-auto md:h-full flex flex-col">
                            <a href=""
                                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src="https://www.shutterstock.com/image-photo/tasty-cheesecake-strawberry-on-white-600nw-2069606555.jpg"          
                                alt="Cake5"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5">
                            
                                </div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 x:text-xl md:text-0xl">
                            
                                
                                      Vanilla Cheese Cake{""}
                                </h3>
                            </a>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}