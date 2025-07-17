import {styles} from "./page.module.css"
import "./globals.css";
import Navbar from "@/component/Navbar";
import SessionProvider from "@/component/SessionWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
      <body className={styles.page}>
        <Navbar/>
        {children}
      </body>
      </SessionProvider>
    </html>
  );
}
