import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./CodeEditor.css";



const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <div className="code-input">
        <textarea
          value={code}
          onChange={handleChange}
          spellCheck="false"
          className="code-textarea"
        />
      </div>
      <div className="code-output">
        <SyntaxHighlighter language="jsx" style={atomOneDark}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeEditor;