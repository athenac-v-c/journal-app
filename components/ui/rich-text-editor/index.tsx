'use client'
import { useEditor, EditorContent, Editor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import MenuBar from "./menu-bar";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from '@tiptap/extension-highlight'

interface RichTextEditorPors{
    content: string
    onChange:(content:string) =>void;

}

const RichTextEditor=({content,onChange}:RichTextEditorPors)=>{
    const editor = useEditor({
        extensions:[

            StarterKit.configure({
                
                bulletList:{
                    HTMLAttributes: {
                    //tailwind defualt is list-outside, without list-inside
                    //when applying padding effect the bullet dot is 
                    //far away from text
                    class:'list-disc list-inside'
                },
            },
                orderedList:{
                    HTMLAttributes: {
                    class: 'list-decimal list-inside',
                },
          
            },

            }),
            TextAlign.configure({
                types: ['heading', 'paragraph','listItem'],
                alignments: ['left', 'right','center'],
            }),
            Highlight, 
        ],
        content:content,
        immediatelyRender:false,
        editorProps:{
            attributes:{
                class:'min-h-[156px] border rounded-md bg-slate-50 py-2 px-3'
            },
        },

        onUpdate:({editor}) =>{
            console.log(editor.getHTML())
            onChange(editor.getHTML())
        }

    });

    return (
        <div>
        <MenuBar editor={editor}/>
        <EditorContent editor={editor}/>
        </div>
    )

}
export default RichTextEditor