import { Provider as JotaiProvider } from "jotai";
import Script from "next/script";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { inter, geistMono } from "@/lib/fonts";
import type { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{const s=localStorage.getItem("theme")||"dark";let t=s;if(t==="system"){try{t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{}}document.documentElement.classList.remove("light","dark");document.documentElement.classList.add(t);document.documentElement.style.colorScheme=t}catch(e){}`,
          }}
        />
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange>
          <JotaiProvider>
            <div className="relative flex min-h-dvh flex-col overflow-x-hidden">
              <Header />

              <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pt-20">
                {children}
              </main>

              <Footer />
            </div>
          </JotaiProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
