import { useEffect, useRef, useState } from "react";
import "./search.css";

type props = {
  getImages: (page: number, limit: number, query?: string) => void;
  resetSearch: () => void;
};

function Search({ getImages, resetSearch }: props) {
  const formRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [searchValue, setSearchValue] = useState("");

  const handleKeyDown = (event: { key: string; preventDefault: () => void }) => {
    if (formRef.current === null) return;
    if (event.key === "Enter") {
      event.preventDefault();
      formRef.current.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (searchValue) {
      getImages(1, 10, searchValue);
      console.log("Form submitted", searchValue);
    }
  };

  useEffect(() => {
    if (textareaRef.current === null) return;

    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
    if (textarea.scrollHeight > 300) {
      textarea.style.overflowY = "scroll";
    } else {
      textarea.style.overflowY = "hidden";
    }
  }, [searchValue]);

  return (
    <div className="search-container">
      <div className="textarea-wrapper">
        <form ref={formRef} onSubmit={handleSubmit}>
          <textarea
            className="custom-scroll"
            ref={textareaRef}
            id="auto-resize-textarea"
            placeholder="Type your query"
            onKeyDown={handleKeyDown}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          ></textarea>
          <svg
            tabIndex={0}
            onClick={handleSubmit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit(e);
              }
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6F6F6F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <svg
            tabIndex={0}
            onClick={() => {
              setSearchValue("");
              resetSearch();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearchValue("");
                resetSearch();
              }
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6f6f6f"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x clear-icon"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </form>
      </div>
    </div>
  );
}

export default Search;
