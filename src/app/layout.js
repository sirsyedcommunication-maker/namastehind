
// import localFont from "next/font/local";
// import { Geist, Geist_Mono, Poppins } from "next/font/google";
// import "./globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import WhatsAppIcon from "@/components/WhatsAppIcon";

// const myCustomFont = localFont({
//   src: [{ path: '../fonts/AbrilFatface-Regular.otf', weight: '400', style: 'normal' },
//     { path: '../fonts/PlayfairDisplay-Black.otf', weight: '700', style: 'normal' },
//     { path: '../fonts/PlayfairDisplay-Regular.otf', weight: '700', style: 'normal' },
  
//   ] ,
//   variable: "--font-custom",    
// });
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-poppins",
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// // --- SEO Friendly Metadata ---
// export const metadata = {
//   title: {
//     default: "Namaste Hind | Premium Travel Agency for Spiritual & Adventure Tours",
//     template: "%s | Namaste Hind",
//   },
//   description: "Namaste Hind offers the best travel packages for Char Dham Yatra, Manali, Ladakh, Spiti, and Kashmir. Book your dream adventure today with ByteWings Technology support.",
//   keywords: ["Travel Agency", "Char Dham Yatra", "Kashmir Tour", "Ladakh Trip", "Spiti Valley", "Manali Packages", "Namaste Hind"],
//   authors: [{ name: "Jay Pawar" }],
//   creator: "ByteWings Technology",
//   icons: {
//     icon: "/image/namasteHindlogo2.jpg", // Aapka logo file public folder mein hona chahiye
//     apple: "/logo.png",
//   },
//   openGraph: {
//     title: "Namaste Hind - Explore India with Us",
//     description: "Book spiritual and adventure tours across India. Reliable, safe, and premium travel experiences.",
//     url: "https://namastehind.com",
//     siteName: "Namaste Hind",
//     images: [
//       {
//         url: "/image/namasteHindlogo2.jpg", // Link share hone par jo image dikhegi
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: "en_IN",
//     type: "website",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${myCustomFont.variable} h-full antialiased`}
//     >
//       {/* Search Engine Optimization ke liye viewport aur theme color */}
//       <head>
//         <meta name="theme-color" content="#dc2626" />
//       </head>
//       <body className="bg-gray-50 font-poppins">
//         <Navbar />
//         <main className="min-h-screen">
//           {children}
//           <WhatsAppIcon />
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import localFont from "next/font/local";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const myCustomFont = localFont({
  src: [
    {
      path: "../fonts/AbrilFatface-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/PlayfairDisplay-Black.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/PlayfairDisplay-Regular.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-custom",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// =========================
// VIEWPORT
// =========================

export const viewport = {
  themeColor: "#dc2626",
  width: "device-width",
  initialScale: 1,
};


// =========================
// SEO METADATA
// =========================

export const metadata = {
  metadataBase: new URL("https://namastehind.com"),

  title: {
    default:
      "Namaste Hind | Premium Travel Agency for Spiritual & Adventure Tours",
    template: "%s | Namaste Hind",
  },

  description:
    "Book Char Dham Yatra, Kashmir, Ladakh, Spiti Valley, and Manali tour packages with Namaste Hind. Trusted travel agency for spiritual and adventure trips across India.",

  keywords: [
    "Travel Agency",
    "Char Dham Yatra",
    "Kashmir Tour",
    "Ladakh Trip",
    "Spiti Valley",
    "Manali Packages",
    "Adventure Tours India",
    "Spiritual Tours",
    "Travel Packages India",
    "Namaste Hind",
  ],

  authors: [{ name: "Jay Pawar" }],

  creator: "ByteWings Technology",

  publisher: "Namaste Hind",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://namastehind.com",
  },

  icons: {
    icon: "/image/namasteHindlogo2.jpg",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Namaste Hind - Explore India with Us",

    description:
      "Book spiritual and adventure tours across India. Reliable, safe, and premium travel experiences.",

    url: "https://namastehind.com",

    siteName: "Namaste Hind",

    images: [
      {
        url: "/image/namasteHindlogo2.jpg",
        width: 1200,
        height: 630,
        alt: "Namaste Hind Travel Agency",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Namaste Hind",

    description:
      "Adventure & Spiritual Tours Across India",

    images: ["/image/namasteHindlogo2.jpg"],
  },

  category: "travel",
};


// =========================
// ROOT LAYOUT
// =========================

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${poppins.variable}
        ${myCustomFont.variable}
        h-full
        antialiased
      `}
    >
      <body className="bg-gray-50 font-poppins">

        {/* Structured Data / Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "TravelAgency",

              name: "Namaste Hind",

              url: "https://namastehind.com",

              logo:
                "https://namastehind.com/image/namasteHindlogo2.jpg",

              image:
                "https://namastehind.com/image/namasteHindlogo2.jpg",

              description:
                "Premium travel agency for spiritual and adventure tours across India.",

              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },

              sameAs: [
                "https://www.instagram.com/",
                "https://www.facebook.com/",
              ],
            }),
          }}
        />

        <Navbar />

        <main className="min-h-screen">
          {children}
          <WhatsAppIcon />
        </main>

        <Footer />
      </body>
    </html>
  );
}