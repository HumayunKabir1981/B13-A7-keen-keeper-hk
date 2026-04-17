import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="w-full bg-[#244d3f]">

            <div className=' w-full text-center px-36  '>

                <div className=' text-white grid grid-cols-1 items-center justify-center gap-8 py-16'>


                    <div className="col-span-2">
                        <h2 className="text-6xl  font-bold mb-3">KeenKeeper</h2>
                        <p>
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                        </p>
                    </div>


                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl">Social Links</h2>

                        <div className="flex gap-3 text-center justify-center">

                            <div className="rounded-full bg-white h-10 w-10 flex justify-center items-center">
                                <IoLogoInstagram className="text-xl text-black" />
                            </div>
                            <div className="rounded-full bg-white h-10 w-10 flex justify-center items-center">
                                <FaFacebookSquare className="text-xl text-black" />
                            </div>
                            <div className="rounded-full bg-white h-10 w-10 flex justify-center items-center">
                                <FaXTwitter className="text-xl text-black" />
                            </div>

                        </div>

                    </div>

                </div>
                <div className="h-[1px] w-full bg-green-800 my-4"></div>

                <div className="text-white flex flex-col md:flex-row justify-between py-5">

                    <h1 >© 2026 KeenKeeper. All rights reserved.</h1>


                    <div className="flex gap-5">
                        <h4>Privacy Policy </h4>
                        <h4>Terms of Service   </h4>
                        <h4>Cookies </h4>
                    </div>
                </div>


            </div>







        </div>
    );
};

export default Footer;