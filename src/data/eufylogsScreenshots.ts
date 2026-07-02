export interface Screenshot {
  src: string;
  caption: string;
}

const modules = import.meta.glob("../assets/eufylogs-screenshots/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function filenameToCaption(path: string): string {
  const filename = path.split("/").pop() ?? "";
  const base = filename.replace(/\.[^/.]+$/, "");
  const withoutOrderPrefix = base.replace(/^\d+[_-]?/, "");
  const withoutTrailingIndex = withoutOrderPrefix.replace(/[_-]?\d+$/, "");
  const withoutTabSuffix = withoutTrailingIndex.replace(/[_-]?tab$/i, "");
  return withoutTabSuffix
    .split(/[_-]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const eufylogsScreenshots: Screenshot[] = Object.keys(modules)
  .sort()
  .map((path) => ({
    src: modules[path],
    caption: filenameToCaption(path),
  }));

export default eufylogsScreenshots;
