import React from "react";
import Script from "next/script";

import "./globals.css";

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
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-63B1NVZZH8`}
        />

        <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-63B1NVZZH8', {
              page_path: window.location.pathname,
              });
          `}
        </Script>
      </head>
      <body className="bg-white dark:bg-github-dark-bg text-sm dark:text-github-dark-text">
        <div className="bg-github-header dark:bg-github-dark-header h-[62px]"></div>
        {children}
      </body>
    </html>
  );
}
