"use server";
import { PrismaClient } from "@/generated/prisma";
import { revalidatePath } from "next/cache";


const prisma = new PrismaClient();
export  default async function createTask(formData:FormData) {
    
     const content = formData.get("content")?.toString();

  if (!content) {
    throw new Error("Content is required");
  }
    
    const  newTask =await prisma.task.create({
        data:{
            content
        },
    });
    revalidatePath("/page");

}


    
