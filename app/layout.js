import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <>
            <html lang="en">
                <body className={inter.className}>
                    <Navbar />
                    <div className="max-w-8xl mx-auto">{children}</div>
                </body>
            </html>
        </>
    );
}
