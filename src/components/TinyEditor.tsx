"use client";
import { useRef, useState } from "react";
import { Editor as TinyEditor } from "@tinymce/tinymce-react";
import { Editor } from "tinymce";

import { saveEditorContent } from "../lib/Content";

const imageUploader = (blobInfo: any, progress: any) => {
  progress(0);
  return fetch(`/api/images?filename=${blobInfo.filename()}`, {
    method: "POST",
    body: blobInfo.blob(),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      progress(100);
      return result.blob.url;
    })
    .catch((error) => {
      // failure('HTTP Error: ' + error.message);
    });
};

export default function EditorC({ ...props }) {
  const editorOptions = {
    plugins: "advlist link image lists table emoticons",
    toolbar:
      "undo redo | styles | bold italic | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent | bullist numlist | link image table emoticons",
    menubar: "",
    resize: false,
    branding: false,
    language: "es",
    height: "full-100",
    file_picker_types: "image",
    images_file_types: "jpg,jpeg,png,gif,webp",
    images_reuse_filename: true,
    images_upload_handler: imageUploader,
    skin: "oxide-dark",
    content_css: "dark",
  };
  const editorRef = useRef<null | Editor>(null);
  const [content, setContent] = useState("");

  return (
    <>
      <input hidden name="content" value={content} />
      <TinyEditor
        id="tiny-editor"
        apiKey="2r98kxnz7hma2lr356mim7e4sa58d5p5yj7hbciseaszvuky"
        onInit={(evt, editor) => (editorRef.current = editor)}
        onEditorChange={(content) => setContent(content)}
        init={editorOptions}
        {...props}
      />
    </>
  );
}
