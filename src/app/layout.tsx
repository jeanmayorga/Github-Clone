import React from "react";
import "./globals.css";

import QueryProvider from "../providers/Query";

export const metadata = {
  title: "Github Clone",
  description: "Github clone using next js 13 app directory",
};

interface Props {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate icon"
          type="image/png"
          href="https://github.githubassets.com/favicons/favicon.png"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://github.githubassets.com/favicons/favicon.svg"
        />
      </head>
      <body className="bg-white dark:bg-github-dark-bg text-sm dark:text-github-dark-text">
        <QueryProvider>
          <div className="bg-github-header dark:bg-github-dark-header h-[62px]"></div>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
