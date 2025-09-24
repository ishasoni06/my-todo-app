import createTask from "@/action/action";
import deleteTask from "@/action/action-1";
import updateTask from "@/action/action-2";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PrismaClient } from "@/generated/prisma";
import prisma from "@/lib/db";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Edit, Plus, Trash } from "lucide-react";
import Link from "next/link";
//import updatepage from "./updatepage/page";

import { Value } from "@radix-ui/react-select";

import UpdateTaskDialog from "./UpdateTaskDialog/page";
import CheckBoxFun from "./CheckBoxFun/page";

export default async function Home() {
  const tasks = await prisma.task.findMany();

  return (
    <main className="">
      <div className="p-10 items-center bg-black">
        <Card className="bg-black">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-white">
              To-Do App
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/*main div start*/}
            <div className="items-center max-w-xl w-full mx-auto">
              {/* display number of task div start*/}
              <div className="flex items-center justify-between p-6 rounded-2xl border border-gray-700 bg-black text-white max-w-md ml-10">
                {/*left side*/}
                <div>
                  <h2 className="text-lg font-bold">Todo Done</h2>
                  <p className="text-gray-400 text-sm">Keep it up</p>
                </div>
                {/*right side*/}
                <div className="flex items-center justify-cenetr w-20 h-20 rounded-full bg-red-600">
                  <p className="ml-7">0/{tasks.length}</p>
                </div>
              </div>
              {/* display number of task div end*/}
              {/* adding task*/}
              <div className="m-10 items-center gap-2 px-0 py-1">
                <form action={createTask}>
                  <Input
                    type="text"
                    name="content"
                    placeholder="Enter Content"
                    className="w-100 ml-2 text-white"
                  />
                  <Button type="submit" className="w-10 ml-8  bg-red-500">
                    <Plus className="w-10 " />
                  </Button>
                </form>
              </div>
              {/*view task */}

              <div className="m-10 items-center gap-2 px-0 py-1 ">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="grid grid-cols-4 border rounded-full border-black-500 mt-5 h-10"
                  >
                    <CheckBoxFun task2={task} />
                    <UpdateTaskDialog task1={task} />

                    <form action={deleteTask}>
                      <input name="id" value={task.id} hidden readOnly />
                      <Button type="submit" className="ml-15">
                        <Trash />
                      </Button>
                    </form>
                  </div>
                ))}
              </div>

              {/*main div end*/}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
