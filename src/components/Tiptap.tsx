"use client";

import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
import { Editor } from "@tiptap/core";
// import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
// import Highlight from "@tiptap/extension-highlight";

const Tiptap = () => {
  const editor = useEditor({
    // extensions: [StarterKit],
    extensions: [Document, Paragraph, Text],
    // extensions: [StarterKit, Highlight],
    content: "<p>Hello World! 🌎️</p>",
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
