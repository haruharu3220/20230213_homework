import React, { useState } from 'react';

export const Chat = ({ userId, selectedUser }) =>{
  const [message, setMessage] = useState('');
  const [toMe, setToMe] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, from: 1, to: 2, text: 'Hello, user 2!', likes: 0 },
    { id: 2, from: 2, to: 1, text: 'Hi, user 1!', likes: 0 },
  ]);

  const filteredMessages = messages.filter(m => m.to === selectedUser || m.from === selectedUser);

  const handleSend = () => {
    if (!message) {
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      from: selectedUser,
      to: toMe ? selectedUser : selectedUser === 1 ? 2 : 1,
      text: message,
      likes: 0,
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <div>
      <h2>User {userId}</h2>
      <div>
        <label>
          <input type="checkbox" checked={toMe} onChange={() => setToMe(!toMe)} />
          Send to me
        </label>
      </div>
      <div>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={handleSend}>Send</button>
      </div>
      <h3>My messages:</h3>
      <ul>
        {filteredMessages.map(m => (
          <li key={m.id}>
            <p>{m.id}</p>
            <p>{m.text}</p>
            <p>Likes: {m.likes}</p>

            <button onClick={() => setMessages(messages.map(msg => msg.id === m.id ? { ...msg, likes: msg.likes + 1 } : msg))}>Like</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
