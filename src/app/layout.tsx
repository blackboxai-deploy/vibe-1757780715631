import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Grocery List - Plan Your Shopping",
  description: "Comprehensive grocery list application with food database, smart organization, and shopping management features.",
  keywords: "grocery list, shopping list, food database, meal planning, grocery shopping",
  authors: [{ name: "Grocery App" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased bg-gray-50 min-h-screen"
        style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
      >
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
          {children}
        </div>
      </body>
    </html>
  );
}