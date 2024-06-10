import "./imageModal.css";

type Props = {
  image: string;
  description: string;
  setModalOpen: (value: boolean) => void;
};

function ImageModal({ image, description, setModalOpen }: Props) {
  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <div className="modal-image">
          <img height={420} width={600} loading="lazy" src={`data:image/png;base64, ${image}`} alt="selected image" />
        </div>
        <div className="modal-content">
          <div className="modal-description">
            <p>{description}</p>
          </div>

          <svg
            onClick={() => setModalOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x modal-close"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
