import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  
} from '@clerk/nextjs'


const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable:'---font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator and editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{variables:{colorPrimary:'#624cf5'}}}>
      <html lang="en">
      {/*IBMPlex.variable this applies all the font   */}
        <body className={cn("min-h-scre font-IBMPlex antialiased", IBMPlex.variable)}>
        {/* <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
