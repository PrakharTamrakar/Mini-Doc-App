import React, { useRef, useState } from "react";
import Card from "./Card";


const Foreground = () => {

  const ref = useRef(null);

  const data = [
    {
      desc: "Hlo gaizzz here is the background of the card heheheh.",
      filesize: "4mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Hlo gaizzz here is the background of the card huihui.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Krona", tagColor: "green" },
    },
    {
      desc: "Hlo gaizzz here is the background of the card hahaha.",
      filesize: "2.5mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
  ];

  return (
    <div>
      <div
        ref={ref}
        className="fixed z-[3] w-full h-screen top-0 left-0 flex p-8 gap-8 flex-wrap"
      >
        {data.map((item, index) => (
          <Card data={item} reference={ref}/>
        ))}
      </div>
    </div>
  );
};

export default Foreground;
