import React from "react";

export default function ShopRegisterLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-screen min-h-screen flex">
      {children}
      <img src="/map2.png" alt="" className=" absolute w-1/2 right-0 h-screen -z-10" /></div>
  );
}
