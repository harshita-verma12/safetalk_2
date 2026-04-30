// Replace your AIChatbot.jsx return content with this
import { useState, useEffect } from "react";
import "../styles/chatbot.css";

function AIChatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! I am SafeTalk's guide. How is your heart doing today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    // Simulate "thinking"
    setTimeout(() => {
      setMessages([...newMessages, { text: "That sounds challenging. Thank you for sharing. Remember, you're not alone. Would you like to try a grounding exercise, or should we talk more?", sender: "bot" }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="container">
      <h2 className="page-title">SafeTalk Support AI</h2>
      <div className="card chat-card">
        <div className="chat-window">
          {messages.map((m, i) => (
            <div key={i} className={`chat-bubble ${m.sender}`}>
              {m.text}
            </div>
          ))}
          {isTyping && <div className="chat-bubble bot typing">Thinking...</div>}
        </div>
        <form onSubmit={handleSend} className="chat-form">
          <input className="input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Share your thoughts..." />
          <button className="btn" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
export default AIChatbot;