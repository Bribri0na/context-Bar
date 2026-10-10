import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import LogInWrapper from "@/components/LogInWrapper";
import { UserProvider } from "@/contexts/UserContext";



const pixelHeading = Press_Start_2P({
  weight: "400",
  subsets:["latin"],
  variable:"--font-pixel-heading",
})

const pixelBody = VT323({
  weight: "400",
  subsets:["latin"],
  variable:"--font-pixel-body",
})

export const metadata: Metadata = {
  title: "8-Bri Bar",
  description: "A pixel style cooktail bar -find and save your favouite drinks",
}

export default function RootLayout({ 
  children,
 }: Readonly<{
  children: React.ReactNode;
 }>) {
  return (
    <html
      lang="en"
      className={`${pixelHeading.variable} ${pixelBody.variable} h-full antialiased`}
    >
      <body className="min-h-screen">
        <UserProvider>
          <LogInWrapper>{children}</LogInWrapper>
        </UserProvider>
      </body>
    </html>
  );
}
