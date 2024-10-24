'use client'
import { useRef } from "react";

export default function page(){
    const mainRef = useRef(null);

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); 
        document.execCommand('insertHTML', false, '<br><br>'); 
      }
    };
  
    return (
      <main
        contentEditable="true"
        ref={mainRef}
        onKeyDown={handleKeyDown}
        style={{
          width: '100%',
          height: '200px',
          border: '1px solid #ccc',
          padding: '10px',
          overflow: 'auto',
          whiteSpace: 'pre-wrap',
          outline: 'none', 
        }}
      />
    );
  };