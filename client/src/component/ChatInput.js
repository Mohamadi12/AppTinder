import React from 'react'

const ChatInput = () => {
  return (
    <div className="chat-input">
       <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
       <button className="secondary-button" onClick={addMessage}>Submit</button>
    </div>
  )
}

export default ChatInput
