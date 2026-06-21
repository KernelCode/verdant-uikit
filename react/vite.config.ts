import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * The kit's structural type comes from the repo's uikit.json (`type`). We inline
 * it as a build-time constant so the app renders the matching page set without a
 * runtime fetch. Falls back to "app" if uikit.json is missing/unreadable.
 */
function kitType(): string {
  try {
    const path = fileURLToPath(new URL("../uikit.json", import.meta.url));
    const json = JSON.parse(readFileSync(path, "utf8")) as { type?: string };
    return json.type === "ecommerce" ? "ecommerce" : "app";
  } catch {
    return "app";
  }
}

export default defineConfig({
  plugins: [tailwindcss(), react()],
  define: { __UIKIT_TYPE__: JSON.stringify(kitType()) },
  server: { port: 5173 },
});
