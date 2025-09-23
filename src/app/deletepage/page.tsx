import deleteTask from "@/action/action-1";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PrismaClient } from "@/generated/prisma";
import Link from "next/link";

export default function deletepage() {
  return (
    <main>
      {/*   <Link href={`/action/action-1?id=${id}`}></Link>
      
      <form action={deleteTask}>
        {id}

        <Input
          type="text"
          name="id"
          placeholder="Enter id you want to delete"
        />
        <Button type="submit">Delete task</Button>
      </form>*/}
    </main>
  );
}
