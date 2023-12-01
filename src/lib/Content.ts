"use server";
import { redirect } from "next/navigation";
export const saveEditorContent = (content: string) => {
  console.log(content);
  redirect("/api/images");
};
