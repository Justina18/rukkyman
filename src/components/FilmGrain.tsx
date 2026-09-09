/**
 * Absolute-position this inside any `relative` container to lay a faint,
 * looping grain texture over it. Used on the hero and the project stills —
 * nowhere else, so it stays a signature rather than a wash-over-everything
 * effect.
 */
export default function FilmGrain() {
  return <div className="grain absolute inset-0" aria-hidden="true" />;
}
