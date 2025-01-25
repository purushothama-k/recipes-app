import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>This page cannot be found.</h1>
      <Link
        href="/"
        className=" text-blue-700 font-semibold underline hover:text-blue-500"
      >
        Go to home
      </Link>
    </div>
  );
}
