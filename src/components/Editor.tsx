"use client";

import { useState, useMemo } from "react";

import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
// import ImageUploader from "quill-image-uploader";
import BlotFormatter, {
  AlignAction,
  // DeleteAction,
  ImageSpec,
  ResizeAction,
  Action,
} from "quill-blot-formatter";

import QuillEditor from "react-quill";
// Quill.register("modules/imageUploader", ImageUploader);
Quill.register("modules/blotFormatter", BlotFormatter);
class DeleteAction extends Action {
  onDestroy() {
    super.onDestroy();
    console.log("onDestroy");
  }

  onClick = () => {
    super.blot.remove();
    console.log("onClick");
  };
}
class CustomImageSpec extends ImageSpec {
  getActions() {
    return [AlignAction, DeleteAction, ResizeAction];
  }
}

export default function Editor() {
  const [content, setContent] = useState("");

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
    blotFormatter: {
      specs: [CustomImageSpec],
      // overlay: {
      //   style: {
      //     border: "2px solid red",
      //   },
      // },
    },
    // imageUploader: {
    //   upload: (file: Blob) => {
    //     return new Promise((resolve, reject) => {
    //       const formData = new FormData();
    //       formData.append("image", file);
    //       fetch(
    //         "https://api.imgbb.com/1/upload?key=938342f8e5a0a75ea0bf40bc431fae5c",
    //         {
    //           method: "POST",
    //           body: formData,
    //         }
    //       )
    //         .then((response) => response.json())
    //         .then((result) => {
    //           console.log(result);
    //           resolve(result.data.url);
    //         })
    //         .catch((error) => {
    //           reject("Upload failed");
    //           console.error("Error:", error);
    //         });
    //     });
    //   },
    // },
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "imageBlot",
    "align",
    "color",
    "code-block",
  ];

  const [value, setValue] = useState("");

  const handleMemo = useMemo(
    (content, delta, source, editor) => setValue(content),
    [value]
  );

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <main>
      <div className="h-screen w-screen flex items-center flex-col">
        <div className="m-10  flex flex-col items-center"></div>
        <div className="h-full w-[90vw]">
          <QuillEditor
            value={content}
            onChange={handleMemo}
            modules={quillModules}
            formats={quillFormats}
            className="w-full h-[70%] mt-10 bg-white"
          />
        </div>
      </div>
    </main>
  );
}
