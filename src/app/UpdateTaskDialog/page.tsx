"use client";
import updateTask from "@/action/action-2";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UpdateTaskDialog({
  task1,
}: {
  task1: { id: string; content: string };
}) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(task1.content);
  const router = useRouter();

  async function handleUpdate() {
    await updateTask(task1.id, content); // id is passed automatically from props
    setOpen(false);
    router.refresh();
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Edit />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Task</DialogTitle>
          </DialogHeader>
          <Input value={content} onChange={(e) => setContent(e.target.value)} />
          <DialogFooter>
            <Button onClick={handleUpdate}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
