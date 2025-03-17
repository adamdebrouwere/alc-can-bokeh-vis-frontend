import React from "react";
import "./styles/globals.css";

export const metadata = {
  title: "Alcohol and Cannabis Market Visualizations",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
        <link
          href="https://cdn.bokeh.org/bokeh/release/bokeh-3.7.0.min.css"
          rel="stylesheet"
        />
        <script
          src="https://cdn.bokeh.org/bokeh/release/bokeh-3.7.0.min.js"
          defer
        ></script>
      </head>
      <body>{children}</body>
    </>
  );
}
