'use client'
import { useState,useEffect } from "react"
import "./index.css"
import Link from 'next/link'
type NoteCardProps ={
    id:number;
    title:string;
    content:string;
    date:string
}




export default function NoteCard({id,title,content,date}:NoteCardProps){

    return(
        
        <div className="note-card">
            <div className="note-title">
                <strong>{title}</strong>
            </div>
            <hr></hr>
            <div className="note-preview">
                {content}
             </div>
            <div className="note-date">
                {date}
             </div>
             <div className="buttons">
                <a href = "#">edit</a>
                <a href = "#">read</a>
            </div>

        </div>
        
    
    )







}

