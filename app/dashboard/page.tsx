'use client'
import { useEffect, useState } from 'react'
import NoteCard from '@/components/ui/noteCard'
import "./page.css"

//features: my note lists, edit note (jump to editor, editor will fetch the content), read note


interface Note{
    id: string,
    content:string,
}
export default function Dashboard(){

    const [notes, setNotes] = useState<Note[]>([])

    useEffect(()=>{
        const stored = localStorage.getItem("user")
        if(!stored) return;

        const user = JSON.parse(stored)
        fetch(`/api/dashboard/${encodeURIComponent(user.username)}?email=${encodeURIComponent(user.email)}`)
        .then(res =>res.json())
        .then(async (data)=>{
            if(!data.success) return
            const noteIds = data.noteIds || []

            const resNotes = await fetch("/api/notes/batch",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({noteIds}),
            })

            const notesData = await resNotes.json()
            if(notesData.success) setNotes(notesData.notes)
        })
    },[])

/*
   const notes = [
  { id: 1, title: "First note", content: "Hello world", date: "08/01/2024" },
  { id: 2, title: "Second note", content: "Beautiful question 🌟", date: "08/02/2024" },
  { id: 3, title: "Third note", content: "Learning React!", date: "08/03/2024" },
  { id: 4, title: "Fourth note", content: "CSS layout practice", date: "08/04/2024" },
  { id: 5, title: "Fifth note", content: "Building dashboards", date: "08/05/2024" },
  ];

  */


    return(
        <div className="max-w-5xl max-w-5xl mx-auto py-8 ">
            <div className = "head">
                <h1>My notes</h1> 
                <a href='/editor'>new note</a>
                
            </div>
            

            <hr/>
            <hr/>
            <div className='note-group'>
           
               {notes.map((note)=>(
                  
                    <NoteCard 
                        id = {note.id}
                        content = {note.content} 
                    />
                ))}
            </div>
       
       </div>

    )


    







}

