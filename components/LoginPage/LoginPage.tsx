"use client";
import React, { use } from "react";
import Image from "next/image";
import kedarnath from "../../public/mandirPics/kedarnath.jpg";
import trivandrum from "../../public/mandirPics/trivandrum.jpg";
import logo from "../../public/LOgo3.png";
import Link from "next/link";
import googleLogo from "../../public/svgs/google.svg";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

type Props = {};

const LoginPage = (props: Props) => {
  let [backgroundImage, setBackgroundImage] = useState(kedarnath);
  const mandirPics = [kedarnath, trivandrum];
  // make function that will swap bg imae every 5 seconds
  const changeBackground = () => {
    // cycle through mandirPics
    let index = mandirPics.indexOf(backgroundImage);
    if (index === mandirPics.length - 1) {
      index = 0;
    } else {
      index++;
    }
    setBackgroundImage(mandirPics[index]);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      changeBackground();
    }, 5000);

    // Clean up the interval when the component is unmounted or when the effect dependencies change
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* background */}
      <Image
        src={backgroundImage}
        layout="fill"
        alt="bg"
        className="h-screen max-h-screen w-screen max-w-screen object-cover z-[-10]"
      />
      {/* --------------------- */}
      {/* login page */}
      <div className="z-10 h-screen w-screen relative flex sm:justify-end justify-center items-center px-3">
        {/* logo */}
        <div className="absolute left-[42px] top-[31px]">
          <Image src={logo} width={200} height={30} alt="logo" />
        </div>

        {/* login box */}
        <div className="h-[550px] w-[400px] sm:mr-[120px] rounded-[40px] bg-[#FFFF]/70 p-[44px]">
          <div className="poppinsFont">
            <div className="flex justify-between p-0 m-0">
              <p className="text-[21px] font-normal">
                Welcome to <span className="text-[#CA371E]">Bhandara</span>
              </p>
              <Link href="/signup">
                <div>
                  <p className="text-[13px] font-normal cursor-pointer">
                    No account?
                  </p>
                  <p className="text-[13px] font-normal text-[#CA371E] cursor-pointer">
                    Signup
                  </p>
                </div>
              </Link>
            </div>

            <h2 className="text-[45px] font-[500] tracking-wide">Sign in</h2>

            {/* google signup */}
            <div className="w-full h-[55px] mt-8 relative flex justify-center items-center bg-[#E9F1FF] rounded-[9px] cursor-pointer">
              <div className="flex gap-4 cursor-pointer">
                <Image
                  src={googleLogo}
                  height={26}
                  width={26}
                  alt="logo"
                  className="cursor-pointer"
                />
                <p className="text-[#4285F4] ">Sign in with Google</p>
              </div>
            </div>

            {/* inputs */}

            <Input
              type="email"
              variant="bordered"
              label="Email"
              classNames={{
                inputWrapper:
                  "text-black border-[2px] border-[#E9F1FF] mt-[20px]",
                label: "text-black",
              }}
            />

            <Input
              type="password"
              variant="bordered"
              label="Password"
              classNames={{
                inputWrapper:
                  "text-black border-[2px] border-[#E9F1FF] mt-[20px]",
                label: "text-black",
              }}
            />

            <div className="flex justify-end">
              <p className="text-[#4285F4] text-[13px] mt-[12px]">
                Forgot Password
              </p>
            </div>

            <div className="flex justify-end mt-[44px]">
              <Button color="primary" isLoading={false} className="w-[200px]">
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
