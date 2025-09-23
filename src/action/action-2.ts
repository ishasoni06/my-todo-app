"use server";
import { PrismaClient } from "@/generated/prisma";
import { revalidatePath } from "next/cache";



const prisma = new PrismaClient();
export default async function updateTask(id: string, content: string) {

     //const id = formData.get("id")?.toString();
     

 return await prisma.task.update({
        where:{id},
        data:{
            content
            //content:formData.get("content") as string, 
       
        },
    });
    revalidatePath("/page");
}