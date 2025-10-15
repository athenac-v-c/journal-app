'use client'
import {useState} from 'react'
import NoteCard from '@/components/ui/noteCard'
import { title } from 'process'
import "./page.css"
//features: my note lists, edit note (dump to editor, editor will fetch the content), read note

export default function Dashboard(){
   
   
    const id = 123;
    const title = "first note";
    const content = "Beautiful question 💡 — that “fixed-size note preview effect (like Notability, Apple Notes, or Notion cards) is a super common UI pattern,\
You can achieve it easily in React + CSS / Tailwind using scroll clipping or text truncation\
Let’s go through 3 good approaches 👇";
    const date = "08/01/2024";
                
    




    return(
        <>
          <h1>
                    My notes
         </h1>
           <hr>
                </hr>
                <hr>
                </hr>
            <div className='note-group'>
              
              
                
                <NoteCard id ={id} title = {title} content = {content} date = {date}/>

                
            </div>
       
       
       
       
       
       
       
       

       </>

    )


    







}

