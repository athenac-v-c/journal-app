'use client'
//import { useState,useEffect } from "react"
import "./index.css"

type NoteCardProps ={
    id:string
    content:string;
}

export default function NoteCard({id,content}:NoteCardProps){

    return(
        
        <div className="note-card">
            <div className="note-title">
                <strong>{id}</strong>
            </div>
            <hr></hr>
            <div className="note-preview">
                {content}
             </div>
            <div className="note-date">
                date
             </div>
             <div className="buttons">
                <a href = "#">edit</a>
                <a href = "#">read</a>
            </div>

        </div>
        
    
    )







}

