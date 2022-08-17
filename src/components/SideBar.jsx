import React from "react";
import { v4 as uuidv4 } from "uuid";
import { CopyBlock } from "react-code-blocks";

import "../../src/tailwind.output.css";

const remembralls = [
  {
    title: "map of array",
    code: `const array;
          const newArray = array.map((item,index)=>{
            item+index
          })`,
    description: "getting the map of an array",
    tags: ["javascript", "array", "react"]
  },
  {
    title: "filter of array",
    code: `const array;
const newArray = array.filter((item,index)=>{
            item>1
    })`,
    description: "getting the filter of an array",
    tags: ["javascript", "array", "react"]
  }
];

const SideBar = () => {
  return (
    <div>
      <ul>
        {remembralls.map((remembrall, index) => (
          <li key={uuidv4()}>
            <h3 className="uppercase font-bold">{remembrall.title}</h3>
            <div className="flex space-x-2 flex-wrap">
              {remembrall.tags.map((tag) => (
                <div
                  className="px-4 py-2 bg-red-500 rounded-full uppercase text-xs font-bold"
                  key={uuidv4()}
                >
                  {tag}
                </div>
              ))}
            </div>
            {/* <CopyBlock
              text={remembrall.code}
              language={"jsx"}
              theme={"dracula"}
              className="border-2"
            /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
