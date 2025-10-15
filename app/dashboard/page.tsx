'use client'
import {useState} from 'react'
import NoteCard from '@/components/ui/noteCard'
import { title } from 'process'
import "./page.css"
//features: my note lists, edit note (dump to editor, editor will fetch the content), read note

export default function Dashboard(){
   
   
   const notes = [
  { id: 1, title: "First note", content: "Hello world", date: "08/01/2024" },
  { id: 2, title: "Second note", content: "Beautiful question 🌟", date: "08/02/2024" },
  { id: 3, title: "Third note", content: "Learning React!", date: "08/03/2024" },
  { id: 4, title: "Fourth note", content: "CSS layout practice", date: "08/04/2024" },
  { id: 5, title: "Fifth note", content: "Building dashboards", date: "08/05/2024" },
  ];


    return(
        <>
            <h1>My notes</h1>
            <hr/>
            <hr/>
            <div className='note-group'>
           
               {notes.map((note)=>(

                    <NoteCard  key = {note.id}
                            id ={note.id} 
                            title = {note.title} 
                            content = {note.content} 
                            date = {note.date}
                    />

                ))}
            </div>
       
       </>

    )


    







}

