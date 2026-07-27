"use client";
import { useState } from "react";
export default function ChatComponent() {

    const [inputVal, setInputVal] = useState('')
    const [outputVal, setOutputVal] = useState('')
    const handleSend = async() => {
        const response = await fetch('api/chat', {
            method: 'POST',
            body: JSON.stringify({
                message: [
                    {role: 'system', content: '你是一个angxuejian的nos'},
                    {role: 'user', content: inputVal}
                ]
            })
        })

        const result = await response.json()
        setOutputVal(result.content)
    }

    return (
        <div>
            <textarea value={inputVal} onChange={e => setInputVal(e.target.value)}></textarea>

            <button onClick={handleSend}>send</button>
            <p></p>

            <p>{outputVal}</p>
        </div>
    );
}


