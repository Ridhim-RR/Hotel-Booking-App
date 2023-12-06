"use client"; // Error components must be Client Components

import { useEffect } from "react";

interface ErrorProps {
    error: Error & { digest?: string };
    reset?: () => void;
  }
  
  export default function Error({ error, reset = () => {} }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <div className="d-flex justify-content-center align-item-center vh-100">
        <div className="text-center">
          <h2 className="display-4 fw-bold">{error.message}</h2>
          <p className="fs-3">
            <span className="text-danger">Opps!</span>
            Something went wrong
          </p>
          <p className="lead">Sorry for the inconvience</p>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </div>
    </div>
  );
}
