import { useRef } from "react";
import "./Snippet.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/index.js";

export default function Snippet({ snippet }) {
    const snippetRef = useRef(null);

    return (
        <div className="snippet" ref={snippetRef}>
            <div className="language">{snippet.language}</div>
            <div className="title">Title : {snippet.title}</div>
            <div className="code">
                <SyntaxHighlighter
                    language={snippet.language}
                    showLineNumbers={snippet.lineNumbers}
                    showInlineLineNumbers={snippet.lineNumbers}
                    style={atomOneDark}
                    className="!bg-transparent"
                >
                    {snippet.code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}
