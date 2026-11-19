import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });
export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["app/catering/page.tsx", "app/contact/page.tsx", "app/page.tsx"],
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];
