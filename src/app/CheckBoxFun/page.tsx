"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function CheckBoxFun({ task2 }: { task2: { content: String } }) {
  const [done, setDone] = useState(false);

  return (
    <>
      <Checkbox
        className="rounded-full border-2 border-white mt-2 ml-2 w-5 h-5 "
        checked={done}
        //onChange={() => setDone(!done)}
        // onChange={() => setDone(!done)}
        onCheckedChange={() => setDone(!done)}
      ></Checkbox>
      <p
        className={
          done ? "line-through text-gray-400 text-red" : "ml-10 text-white"
        }
      >
        {task2.content}
      </p>
    </>
  );
}
