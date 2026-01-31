import "./globals.css";
import { Edu_SA_Beginner } from "next/font/google";

const eduSA = Edu_SA_Beginner({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={eduSA.variable}>
      <body className={eduSA.className}>
        {children}
      </body>
    </html>
  );
}
