'use client'
import { Toggle } from "../toggle"
import { AlignCenter, AlignLeft, AlignRight, Bold, Heading1, Heading2, Heading3, Highlighter, Italic, List, ListOrdered, Strikethrough} from "lucide-react"
import React from "react"
import { Editor } from "@tiptap/react"

export default function MenuBar({editor}:{editor:Editor | null}){
     
  if (!editor) {
    return null
  }
  const options = [
    {
      icon: <Heading1 className="size-4" />,
      onClick:()=>editor.chain().focus().toggleHeading({level:1}).run(),
      pressed:editor.isActive('heading',{level:1}),
    },

    {
      icon: <Heading2 className="size-4" />,
      onClick:()=>editor.chain().focus().toggleHeading({level:1}).run(),
      pressed:editor.isActive('heading',{level:2}),
    },

    {
     icon: <Heading3 className="size-4" />,
      onClick:()=>editor.chain().focus().toggleHeading({level:1}).run(),
      pressed:editor.isActive('heading',{level:1}),
    },
    {
     icon: <Bold className="size-4" />,
     onClick:()=>editor.chain().focus().toggleBold().run(),
     pressed:editor.isActive('bold'),

    },
    {
     icon: <Italic className="size-4" />,
     onClick:()=>editor.chain().focus().toggleItalic().run(),
     pressed:editor.isActive('italic'),

    },
    {
     icon: <Strikethrough  className="size-4" />,
     onClick:()=>editor.chain().focus().toggleStrike().run(),
     pressed:editor.isActive('strike'),

    },
    {
     icon: <Highlighter  className="size-4" />,
     onClick:()=>editor.chain().focus().toggleHighlight().run(),
     pressed:editor.isActive('highlight'),

    },
    {
     icon: <AlignCenter  className="size-4" />,
     onClick:()=>editor.chain().focus().setTextAlign('center').run(),
     pressed:editor.isActive({textAlign:'center'}),

    },
    {
      icon: <AlignLeft  className="size-4" />,
     onClick:()=>editor.chain().focus().setTextAlign('left').run(),
     pressed:editor.isActive({textAlign:'left'}),

    },
    {
     icon: <AlignRight className="size-4" />,
     onClick:()=>editor.chain().focus().setTextAlign('right').run(),
     pressed:editor.isActive({textAlign:'right'}),

    },
    {
     icon: <List  className="size-4" />,
     onClick:()=>editor.chain().focus().toggleBulletList().run(),
     pressed:editor.isActive('bulletList'),

    },
    {
     icon: <ListOrdered  className="size-4" />,
     onClick:()=>editor.chain().focus().toggleOrderedList().run(),
     pressed:editor.isActive('orderedList'),

    },
  ];
  
   return (
     <div className="border rounded-md p-1 mb-1 bg-slate-50 space-x-2 z-50">
       {options.map((option,index)=>(

         <Toggle key={index} pressed ={option.pressed} onPressedChange={option.onClick}>{option.icon}</Toggle>
      ))}
     </div>

    );

}

/**return(
  
        <div className="control-group">
          <div className="button-group">
            <button onClick={()=>editor.chain().focus().toggleHeading({level:1}).run()}
                    className={editor.isActive('heading',{level:1})?'is-active':''}>
            H1
            </button>
            <button onClick={()=>editor.chain().focus().toggleHeading({level:2}).run()}
                    className={editor.isActive('heading',{level:2})?'is-active':''}>
            H2
            </button>
            <button onClick={()=>editor.chain().focus().toggleHeading({level:3}).run()}
                    className={editor.isActive('heading',{level:3})?'is-active':''}>
            H3
            </button>
            <button onClick={()=>editor.chain().focus().setParagraph().run()}
                    className={editor.isActive('paragraph')?'is-active':''}>
            P
            </button>
            <button onClick={()=>editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold')?'is-active':''}>
            Bold
            </button>
            <button onClick={()=>editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic')?'is-active':''}>
            Italic
            </button>
            <button onClick={()=>editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike')?'is-active':''}>
            Strike
            </button>
            <button onClick={()=>editor.chain().focus().toggleHighlight().run()}
                    className={editor.isActive('highlight')?'is-active':''}>
            highlight
            </button>
            <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
        >
          Left
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
        >
          Center
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
        >
          Right
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
        >
          Justify
        </button>

          </div>
        </div>
        
  )**/
   
