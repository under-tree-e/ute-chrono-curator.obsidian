import path from "path";
import { Configuration, IgnorePlugin, webpack } from "webpack";
import "webpack-dev-server";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import sveltePreprocess from "svelte-preprocess";
import CopyWebpackPlugin from "copy-webpack-plugin";
import dotenv from "dotenv";

dotenv.config();
const isProduction = process.env.NODE_ENV === "production";

const config: Configuration = {
    mode: "production",
    target: "node",
    entry: "./src/index.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, isProduction ? "dist/build/chrono-curator" : "test-vault-chrono/.obsidian/plugins/chrono-curator"),
        libraryTarget: "commonjs",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
            {
                // test: /\.(svelte)$/,
                test: /\.svelte$/,
                use: [
                    {
                        loader: "svelte-loader",
                        options: {
                            preprocess: sveltePreprocess({}),
                        },
                    },
                ],
            },
            {
                test: /\.node$/,
                use: "node-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    externals: {
        obsidian: "commonjs2 obsidian",
    },
    resolve: {
        alias: {
            svelte: path.resolve("node_modules", "svelte/src/runtime"),
            "~": path.resolve(__dirname, "src"),
        },
        extensions: [".ts", ".tsx", ".js", ".svelte"],
        mainFields: ["svelte", "browser", "module", "main"],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: "./tsconfig.json",
                extensions: [".ts", ".js"],
                baseUrl: "./",
            }),
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "manifest.json",
                    to({ context, absoluteFilename }) {
                        return "[name][ext]";
                    },
                },
            ],
        }),
    ],
};

export default config;
