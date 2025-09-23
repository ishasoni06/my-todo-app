import { Input } from "@/components/ui/input";
import { useState } from "react";
import page from "../page";
import { Checkbox, CheckedState } from "@radix-ui/react-checkbox";
import { boolean } from "zod";

interface Props {
  params: { content: String };
}

function TodoItem({ params }: Props) {
  const [done, setDone] = useState(false);

  return (
    <>
      <Checkbox
        className="rounded-full border-2 border-white mt-2 ml-2 w-5 h-5 bg-red-500"
        checked={done}
        //onChange={() => setDone(!done)}
        // onChange={() => setDone(!done)}
        onCheckedChange={() => setDone(!done)}
      >
        hello
      </Checkbox>
      <span
        className={
          done ? "line-through text-gray-400 text-red" : "ml-10 text-white"
        }
      >
        {params.content}
      </span>
    </>
  );
}

export default TodoItem;
