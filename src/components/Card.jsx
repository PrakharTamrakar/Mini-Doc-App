import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <div>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        dragTransition={{ bounceStiffness: 100 , bounceDamping: 30}}
        className="card flex-shrink-0 relative w-48 h-60 bg-zinc-900/90 rounded-[45px] px-6 py-8 text-white overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="font-semibold text-sm leading-tight mt-5">{data.desc}</p>
        <div className="footer absolute w-full bottom-0 left-0">
          <div className="flex items-center justify-between py-3 px-8">
            <h5 className="font-semibold text-sm">{data.filesize}</h5>
            <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center mb-2">
              {data.close ? (
                <IoCloseSharp />
              ) : (
                <MdDownload size="1em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen ? (
            <div
              className={`tag w-full py-3 flex ${
                data.tag.tagColor === "blue" ? " bg-blue-800" : "bg-green-600"
              } items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
