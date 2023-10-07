import {useEffect, useRef, useState} from "react";
import "./Snippet.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function Snippet({ snippet }) {
    const snippetRef = useRef(null);

    const [language, setLanguage] = useState([]);

    useEffect(() => {
        // Function to add a new language if it doesn't already exist
        const addLanguage = (newLanguage, acronym) => {
            if (!language.some(item => item.acronym === acronym)) {
                setLanguage([...language, { name: newLanguage, acronym }]);
            }
        };

        // Example usage:
        addLanguage("javascript-line", "javascript");
        addLanguage("Spanish", "php");
    }, [language]);

    console.log(language)

    return (
        <div className="snippet" ref={snippetRef}>
            <div className="language">{snippet.language}</div>
            <div className="title">Title : {snippet.title}</div>
            <div className="code">
                <SyntaxHighlighter
                    language={snippet.language}
                    wrapLongLines={true}
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
