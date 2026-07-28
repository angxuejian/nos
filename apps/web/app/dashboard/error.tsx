// app/dashboard/error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {

console.log('dashboard error: ', error)
  return (
    <div>
      <h2>Something went wrong 😢</h2>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
}