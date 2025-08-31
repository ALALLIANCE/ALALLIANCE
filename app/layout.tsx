export const metadata = {
  title: "AL ALLIANCE — Electrical • Mechanical • Automation",
  description:
    "Shift cover, installs, breakdowns, and compliance — electrical, mechanical & automation teams on demand.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

