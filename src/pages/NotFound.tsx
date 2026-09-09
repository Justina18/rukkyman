import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-body text-sm text-paper-faint">404</p>
      <h1 className="font-display text-4xl font-light text-paper">
        That reel isn't in the archive.
      </h1>
      <Link
        to="/"
        className="font-body text-sm text-[#7FA06B] transition-colors hover:text-paper"
      >
        Back to Rukky's work
      </Link>
    </div>
  );
}
