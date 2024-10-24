import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Next.js Tutorial - Codevolution",
    template: "%s | Codevolution",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{
          backgroundColor: "lightblue",
          padding: "1rem"
        }}>
          <p>Header</p>
        </header>
        {children}
        <footer style={{
          backgroundColor : "ghostwhite",
          padding: "1rem"
        }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
