import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

export default {
  input: "src/lib/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    postcss({
      modules: true,
      autoModules: true,
      plugins: [],
      minimize: true,
      sourceMap: "inline"
    }),
    external({
      includeDependencies: true
    }),
    url(),
    svgr(),
    resolve(),
    babel({
      runtimeHelpers: true,
      plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-syntax-dynamic-import",
        "transform-react-remove-prop-types"
      ],
      exclude: "node_modules/**"
    }),
    commonjs(),
    terser()
  ]
};
