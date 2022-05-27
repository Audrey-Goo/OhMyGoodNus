import React from 'react'
import Head from "next/head"
import Sidebar from "../components/Sidebar"
import Chat from "../components/Chat"


export default function chat() {
    return (
        <div>
        <Sidebar />
        <Chat />
        </div>
    )
}