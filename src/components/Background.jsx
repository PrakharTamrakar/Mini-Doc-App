import React from "react";

 const Background = () => {
  return (
    <>
      <div className="fixed z-[2] h-screen w-full">
        <div className="absolute top-[5%] w-full py-10 flex text-xl justify-center font-semibold text-zinc-500">
          Documents.
        </div>
        <h1 className=" absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] tracking-tighter leading-none font-semibold">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
