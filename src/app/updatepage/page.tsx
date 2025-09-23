import updateTask from "@/action/action-2";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PrismaClient } from "@/generated/prisma";
import Link from "next/link";

export default function updatepage({ params }: { params: { id: String } }) {
  //const id = formData.get("id") as string;
  // const content = formData.get("content") as string;
  const id = params.id;

  return (
    <main>
      {
        <>
          <form>
            {/* <input name="id" value={id} hidden readOnly />*/}
            <p>task id:{id}</p>
            <Input type="text" name="content" placeholder="Edit Content" />

            <Button type="submit">updatetask</Button>
          </form>
          <Link href={`/page`} className="text-white">
            back
          </Link>
        </>
      }
    </main>
  );
}
