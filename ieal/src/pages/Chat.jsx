import React, { useState } from 'react';
import  styled  from "styled-components";

export const Chat = ({ user }) =>{
    console.log("読み込んでます".user);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (!message) {
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      from: user,
      to: user==="wife" ? "husband" : "wife",
      text: message,
      date: new Date().toLocaleString(),
      likes: 0,
    };
    console.log(newMessage);
    setMessages([...messages, newMessage]);
    setMessage('');
    console.log("OK");
  };


  const filterMesseage = messages.filter(m => (m.to == user));





  return (
    <div>
      <div>
        {/* <label>
          <input type="checkbox" checked={toMe} onChange={() => setToMe(!toMe)} />
          Send to me
        </label> */}
      </div>
      <MesseageStyle>
        <InpurStyle placeholder="メッセージを入力" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={handleSend}>Send</button>
      </MesseageStyle>
      <h3>My messages:</h3>
      <ul>
        {filterMesseage.map(m => (
          <li key={m.id}>
            {/* <p>ID= {m.id}</p> */}
            <p>本文＝{m.text}</p>
            <p>送信時刻＝{m.date}</p>
            <p>Likes: {m.likes}</p>

            <button onClick={() => setMessages(messages.map(msg => msg.id === m.id ? { ...msg, likes: msg.likes + 1 } : msg))}>Like</button>
          </li>
        ))}

      </ul>
    </div>
  );
}

const MesseageStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;



const InpurStyle = styled.input`
border: 2px solid #000000;
border-radius: 10px;
`;