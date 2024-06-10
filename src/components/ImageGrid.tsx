import { LegacyRef, forwardRef, useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import "./imageGrid.css";

interface SearchImage {
  base64: string;
  _id: number;
  description: string;
}

type Props = {
  searchImage: SearchImage[];
};

const ImageGrid = forwardRef<HTMLDivElement, Props>(function (
  { searchImage }: Props,
  ref: LegacyRef<HTMLDivElement> | undefined
) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  const [activeDescription, setActiveDescription] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);

  return (
    <>
      <div className="image-container">
        {searchImage &&
          searchImage.map((image, index) => {
            return (
              // image.base64 && (
              <div
                key={image._id}
                ref={index === searchImage.length - 1 ? ref : null}
                className="image-wrapper"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    setModalOpen(true);
                    setActiveImage(image.base64);
                    setActiveDescription(image.description);
                  }
                }}
                onClick={() => {
                  setModalOpen(true);
                  setActiveImage(image.base64);
                  setActiveDescription(image.description);
                }}
              >
                <img loading="lazy" src={`data:image/png;base64, ${image.base64}`} alt="" />
                <div className="image-overlay">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-maximize-2"
                    >
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <polyline points="9 21 3 21 3 15"></polyline>
                      <line x1="21" y1="3" x2="14" y2="10"></line>
                      <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                  </span>
                </div>
              </div>
              // )
            );
          })}
      </div>
      {modalOpen && <ImageModal image={activeImage} description={activeDescription} setModalOpen={setModalOpen} />}
    </>
  );
});

export default ImageGrid;
