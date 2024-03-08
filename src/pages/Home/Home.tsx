import { useEffect, useState } from "react";
import "./Home.css";
//LIBRARIES
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";
//COMPONENTS
import Snippet from "../../components/Home/Snippet/Snippet";
//ASSETS
import scrollToTop from "./assets/scrollToTop.txt";
import phpTest from "./assets/phpTest.txt";

interface snippetInterface {
  title: string;
  code: string;
  language: string;
  lineNumbers: boolean;
}

const Home = () => {
  const [snippets, setSnippets] = useState<snippetInterface[]>([]);

  useEffect(() => {
    async function fetchAndUpdateSnippet(
      file: string,
      title: string,
      language: string,
      lineNumbers: boolean,
    ): Promise<void> {
      try {
        const response = await fetch(file);
        const textContent = await response.text();
        setSnippets((prevSnippets) => {
          const existingSnippet = prevSnippets.find(
            (snippet) => snippet.title === title,
          );
          if (existingSnippet) {
            // If the snippet with the same title exists, update it
            return prevSnippets.map((snippet) =>
              snippet.title === title
                ? { ...snippet, code: textContent }
                : snippet,
            );
          } else {
            // If the snippet doesn't exist, add it to the array
            return [
              ...prevSnippets,
              { title, code: textContent, language, lineNumbers },
            ];
          }
        });
      } catch (error) {
        console.error(`Error fetching file: ${error}`);
      }
    }

    // Call the fetchAndUpdateSnippet function for each file you want to fetch
    fetchAndUpdateSnippet(
      scrollToTop,
      "Scroll to top button",
      "javascript",
      false,
    );
    fetchAndUpdateSnippet(phpTest, "Test for snippet2", "php", false);
  }, []);

  const descGithubLinkUsingJS =
    'const githubLink = "https://github.com/DenZaiyy/portfolio-ide"';

  return (
    <div className="home">
      <div className="about">
        <div className="intro">
          <p className="text-[var(--white-0)]">Hi all, I am</p>
          <h1 className="text-[var(--white-0)]">Kevin GRISCHKO</h1>
          <h2 className="text-[var(--secondary-2)]">&gt; Back-end developer</h2>
        </div>

        <div className="description">
          <span>// you can also see it on my github</span>

          <SyntaxHighlighter
            language="javascript"
            wrapLongLines={true}
            wrapLines={true}
            codeTagProps={{
              style: { display: "block", width: "100%" },
            }}
            lineProps={{
              style: { display: "block", width: "100%" },
            }}
            customStyle={{
              background: "transparent",
              padding: "0",
            }}
            style={nightOwl}>
            {descGithubLinkUsingJS}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="snippets">
        {snippets.map((snippet, index) => (
          <Snippet key={index} snippet={snippet} />
        ))}
      </div>
    </div>
  );
};
export default Home;
