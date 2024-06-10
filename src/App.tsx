/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useRef, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import MultipleFileUploader from "./components/MultipleFileUploader";
// import Search from "./components/Search";
// import ImageGrid from "./components/ImageGrid";
// import LoadingSkeleton from "./components/LoadingSkeleton";
// import useIntersectionObserver from "./hooks/useIntersectionObserver";
// import Spinner from "./components/Spinner";

// const LIMIT = 10;

// interface SearchImage {
//   base64: string;
//   _id: number;
//   description: string;
// }

function App() {
  // const [searchImage, setSearchImage] = useState<SearchImage[]>([]);
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  // const [hasMore, setHasMore] = useState(false);
  // const [moreLoading, setMoreLoading] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");

  // const elementRef = useRef<HTMLDivElement>(null);

  // const onScreen = useIntersectionObserver(elementRef, { threshold: 0.1, rootMargin: "100px" });

  // const getImages = async (page: number, limit: number, query?: string) => {
  //   if (page === 1) {
  //     setLoading(true);
  //     //first time search
  //     if (query && query !== searchQuery) {
  //       setSearchQuery(query);
  //       setPage(1);
  //     }
  //   } else {
  //     setMoreLoading(true);
  //   }
  //   if (query) {
  //     console.log("get images with search query in side getImages", page, limit, query, searchQuery);
  //     try {
  //       //import.meta.env.VITE_API_URL
  //       const response = await fetch(
  //         `${import.meta.env.VITE_API_URL}/query?query=${query}&page=${page}&limit=${limit}`
  //       );
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const json = await response.json();
  //       if (json.error) {
  //         setError(error);
  //         throw new Error(json.error);
  //       } else if (json && json.images) {
  //         console.log("Data", json);
  //         if (page === 1) {
  //           setSearchImage(json.images);
  //         } else {
  //           setSearchImage((prev) => [...prev, ...json.images]);
  //         }
  //         // setTotalImages(data.pagination.totalImages);
  //         setTotalPages(json.pagination.total_pages);
  //         if (page < json.pagination.total_pages) {
  //           console.log("has more", page, json.pagination.total_pages);
  //           setHasMore(true);
  //         } else {
  //           setHasMore(false);
  //         }
  //       }
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         console.error("Error fetching images", error);
  //         console.log("Error", error.message);
  //       }
  //     } finally {
  //       if (page === 1) {
  //         setLoading(false);
  //       } else {
  //         setMoreLoading(false);
  //       }
  //     }
  //   } else {
  //     try {
  //       //import.meta.env.VITE_API_URL
  //       const response = await fetch(`${import.meta.env.VITE_API_URL}/images?page=${page}&limit=${limit}`);
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const json = await response.json();
  //       if (json.error) {
  //         setError(error);
  //         throw new Error(json.error);
  //       } else if (json && json.images) {
  //         console.log("Data", json);
  //         if (page === 1) {
  //           setSearchImage(json.images);
  //         } else {
  //           setSearchImage((prev) => [...prev, ...json.images]);
  //         }
  //         // setTotalImages(data.pagination.totalImages);
  //         setTotalPages(json.pagination.total_pages);
  //         if (page < json.pagination.total_pages) {
  //           console.log("has more", page, json.pagination.total_pages);
  //           setHasMore(true);
  //         } else {
  //           setHasMore(false);
  //         }
  //       }
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         console.error("Error fetching images", error);
  //         console.log("Error", error.message);
  //       }
  //     } finally {
  //       if (page === 1) {
  //         setLoading(false);
  //       } else {
  //         setMoreLoading(false);
  //       }
  //     }
  //   }
  // };

  // const resetSearch = () => {
  //   setPage(1);
  //   setTotalPages(1);
  //   setSearchQuery("");
  //   getImages(1, LIMIT);
  // };

  // useEffect(() => {
  //   console.log("useEffect called", page);
  //   if (page <= totalPages) {
  //     console.log("api called", page);
  //     if (searchQuery) {
  //       if (page !== 1) {
  //         console.log("get images with search query", searchQuery);
  //         getImages(page, LIMIT, searchQuery);
  //       }
  //     } else {
  //       getImages(page, LIMIT);
  //     }
  //   }
  // }, [page]);

  // const fetchNextPage = () => {
  //   console.log("fetching next page", page, totalPages, loading, moreLoading);
  //   if (page < totalPages && (!loading || !moreLoading)) {
  //     console.log("fetching next page", page + 1);
  //     setPage((prev) => prev + 1);
  //   }
  // };

  // useEffect(() => {
  //   if (onScreen) {
  //     fetchNextPage();
  //   }
  // }, [onScreen]);
  // onScreen && fetchNextPage();

  return (
    <div className="max-container custom-scroll">
      <Hero />
      <MultipleFileUploader />
      {/* <Search getImages={getImages} resetSearch={resetSearch} /> */}
      {/* {error && <div>{error}</div>} */}
      {/* {loading ? <LoadingSkeleton /> : <ImageGrid searchImage={searchImage} ref={elementRef} />} */}
      {/* {hasMore && moreLoading && <Spinner />} */}
    </div>
  );
}

export default App;
