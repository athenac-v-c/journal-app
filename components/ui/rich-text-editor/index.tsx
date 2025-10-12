'use client'
import { useEditor, EditorContent} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import MenuBar from "./menu-bar";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from '@tiptap/extension-highlight'

const RichTextEditor=()=>{
  const editor = useEditor({
    extensions:[

        StarterKit.configure({
          bulletList:{
            HTMLAttributes: {
            class: 'list-disc ml-4',
          },
        },
          orderedList:{
            HTMLAttributes: {
            class: 'list-decimal ml-4',
          },
          
         },
  }),
        TextAlign.configure({
            types: ['heading', 'paragraph'],
            alignments: ['left', 'right','center'],
        }),
  
        Highlight.configure({
            HTMLAttributes: {
            class: 'hover:bg-red-500',
             },
             multicolor: true,
        })
        
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