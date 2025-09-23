"use server";
import { PrismaClient } from "@/generated/prisma";
import { revalidatePath } from "next/cache";
//import { Param } from "@/generated/prisma/runtime/library";
//import { useRouter } from "next/router";
/*
interface Props{
    params:{id:string};  {params}:Props
}*/
const prisma = new PrismaClient();
export default async function deleteTask(formData:FormData) {
  const id=formData.get("id") as string;
    //const {id} = params; 

  if (!id) {
    throw new Error("Content is required");
  }
    await prisma.task.delete({
        where:{id},
    });

   revalidatePath("/page");
}
/*
const router=useRouter();
    const {id}=router.query;*/
    /*
export default async function deleteTask(id:string) {
    

  if (!id) {
    throw new Error("Content is required");
  }

    await prisma.task.delete({
        where:{id},
    });
    
}*/



