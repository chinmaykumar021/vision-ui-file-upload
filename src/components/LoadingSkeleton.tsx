import "./loadingSkeleton.css";

function LoadingSkeleton() {
  return (
    <div className="skeleton-image-container">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="skeleton-image"></div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;
