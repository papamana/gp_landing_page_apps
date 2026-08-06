import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gibranpersebaya.web.id'),
  title: 'Gibran Persebaya - Pencatatan Tablet Tambah Darah',
  description: 'Aplikasi pencatatan dan pelaporan tablet tambah darah remaja putri di sekolah. Gerakan atasi bersama masalah anemia melalui peran teman sebaya.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Gibran Persebaya',
    description: 'Aplikasi pencatatan dan pelaporan tablet tambah darah remaja putri di sekolah.',
    url: 'https://www.gibranpersebaya.web.id',
    siteName: 'Gibran Persebaya',
    images: [
      {
        url: '/favicon-32x32.png',
        width: 91,
        height: 91,
        alt: 'Gibran Persebaya Logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Gibran Persebaya',
    description: 'Aplikasi pencatatan dan pelaporan tablet tambah darah remaja putri di sekolah.',
    images: ['/favicon-32x32.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
