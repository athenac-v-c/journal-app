'use client'
import { useEditor, EditorContent} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import MenuBar from "./menu-bar";

const RichTextEditor=()=>{
  const editor = useEditor({
    extensions:[
        StarterKit
    ],
    content:'<p> please edit </p>',
    immediatelyRender:false,
    editorProps:{
        attributes:{
            class:'min-h-[156px] border rounded-md bg-slate-50 py-2 px-3'
        },
    },

  },
   


  )
  return (
  <div>
  <MenuBar editor={editor}/>
  <EditorContent editor={editor}/>
  </div>
  )






}
export default RichTextEditor