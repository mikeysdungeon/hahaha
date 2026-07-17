// Resolve a path from /public against the deployed base URL.
//
// Vite rewrites asset URLs it can see in HTML/CSS and in `import`ed modules,
// but a plain string in JS (e.g. "/projects/foo.webp" in content data) is
// opaque to it. Served from a subpath like /portfolio/, such a string would
// request the domain root and 404. Prefixing with BASE_URL keeps the same
// content working at the root in dev and under the subpath in production.
//
// Absolute URLs (http://, https://, //, data:) are passed through untouched.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function asset(path) {
  if (!path) return path;
  if (/^([a-z]+:)?\/\//i.test(path) || path.startsWith("data:")) return path;
  return BASE + (path.startsWith("/") ? path : `/${path}`);
}
