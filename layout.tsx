import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Profile",
  description: "My Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>

        <div className="min-h-screen bg-home bg-cover bg-center">
          <div className="min-h-screen bg-black/50">

            {/* HOME + CONTENT */}
            <div className="flex min-h-screen items-center justify-center">

              {/* HOME */}
              <div className="w-48 border-r border-black pr-5">
                <nav className="flex flex-col gap-4 text-2xl">

                  <Link
                    href="/"
                    className="hover:text-blue-500"
                  >
                    Home
                  </Link>

                  <Link
                    href="/cerita"
                    className="hover:text-blue-500"
                  >
                    Experience
                  </Link>

                </nav>
              </div>

              {/* CONTENT */}
              <main className="p-8">
                {children}
              </main>

            </div>

          </div>
        </div>

        <footer>
        </footer>

      </body>
    </html>
  );
}