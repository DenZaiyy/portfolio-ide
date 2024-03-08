import Tab from "../../../../components/Tabs/tab.tsx";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import test from "./content.txt";
import { useEffect, useState } from "react";

const Development = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    async function fetchSnippet(file: string): Promise<void> {
      try {
        const response = await fetch(file);
        const textContent = await response.text();
        setContent(textContent);
      } catch (error) {
        console.error(`Error fetching file: ${error}`);
      }
    }

    fetchSnippet(test);
  }, []);

  return (
    <>
      <div className="content !border-r-0">
        <div className="tab">
          <Tab name={"Development"} />
        </div>
        <div className="tab-content md:!p-6 lg:!p-8">
          <SyntaxHighlighter
            language="javascript"
            wrapLongLines={true}
            wrapLines={true}
            showLineNumbers={true}
            lineNumberStyle={{
              color: "var(--secondary-0)",
              paddingRight: "2.5rem",
              width: "1rem",
            }}
            style={nightOwl}
            className="p-0 text-sm md:pr-4 md:text-base">
            {content}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};

export default Development;
