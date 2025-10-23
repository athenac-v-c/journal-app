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
    const [loading, setLoading] = useState(true)
    

    useEffect(()=>{

        //if(!hydrated) return
        const stored = localStorage.getItem("user")
        
        console.log("stored",stored)
        if(!stored) {
            console.log("not stored, set loading false")
            //setTimeout(() => setLoading(false), 200) 
            setLoading(false)
            return;
        }
        const user = JSON.parse(stored)
        fetch(`/api/dashboard/${encodeURIComponent(user.username)}?email=${encodeURIComponent(user.email)}`)
        .then(res =>res.json())
        .then(async (data)=>{
            if(!data.success) return
            const noteIds = data.noteIds || []

            if (noteIds.length === 0){
                setNotes([])
                return
            }

            const resNotes = await fetch("/api/notes/batch",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({noteIds}),
            })

            const notesData = await resNotes.json()
            if(notesData.success) setNotes(notesData.notes)
        }).finally(()=>{
            setTimeout(() => setLoading(false), 300)
    })
    },[])
    //if (!hydrated) return <div className='loading'> Loading..</div>
    /*if (loading) {
    return <div className="loading">Loading dashboard...</div>*/
  

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
                {/*if the noteIds is empty */}
                {loading ? (
        <div className="loading">Loading dashboard…</div>
      ) : notes.length === 0 ?(
                    <div className='emptyDashboard'>{"You don't have any notes here yet"}</div>
                ):(notes.map((note)=>(
                  
                    <NoteCard 
                        //Vercel built issue[need key prop]: react requires unique key prop for iteratoration loop to keep track of how each item changes
                        key = {note.id}
                        id = {note.id}
                        content = {note.content} 
                    />
                )))}
            </div>
       
       </div>

    )


    







}

