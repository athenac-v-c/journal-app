'use client'
import { useState,useEffect } from "react"
import "./index.css"
type NoteCardProps ={
    id:number;
    title:string;
    content:string;
    date:Date
}




export default function NoteCard({id,title,content,date}:NoteCardProps){

    return(
        <>
        <div className="Card">
        <div className="title">
            <h1>{title}</h1>
        </div>
        <div className="content">
            {content}
        </div>
        <div className="date">
            {/*how to write date variable*/ }
        </div>
        <div className="btns">
            <button className="edit">edit</button>
            <button className="read">edit</button>
        </div>
        </div>

        </>
    )







}

