'use client'
import { useState, useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Download, Heart, BarChart3, Users, Apple, Smartphone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-secondary/5">
      {/* Navbar */}
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md border-b border-border shadow-sm translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-auto">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Image src="/favicon-32x32.png" alt="Gibran Persebaya Logo" width={24} height={24} className="w-6 h-6" />
            </div>
            <h1 className="font-bold text-base sm:text-lg text-foreground truncate">Gibran Persebaya</h1>
          </div>
          <Button asChild variant="outline" className="rounded-full shrink-0 text-xs sm:text-sm px-3 sm:px-4">
            <a href="https://github.com/papamana/gp_landing_page_apps/releases/download/v1.0.0/app-release.apk" target="_blank" rel="noopener noreferrer">Download<span className="hidden sm:inline"> Sekarang</span></a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/landing-header.webp')" }}>
        {/* Soft overlay keeps foreground text readable across the full image */}
        <div className="absolute inset-0 bg-linear-to-r from-background/90 via-background/50 to-background/20" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
                <span className="text-primary">Gibran Persebaya</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed balance">
                Gerakan Atasi Bersama Masalah Anemia melalui Peran Teman Sebaya
              </p>
            </div>
            <p className="text-base sm:text-lg text-foreground/80 balance">
              Aplikasi pencatatan dan pelaporan tablet tambah darah remaja putri di sekolah. Memudahkan pendokumentasian dan monitoring kesehatan remaja putri dengan sistem yang terstruktur dan mudah digunakan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="https://github.com/papamana/gp_landing_page_apps/releases/download/v1.0.0/app-release.apk" target="_blank" rel="noopener noreferrer">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Download Android
                </a>
              </Button>
            </div>
            {/* Trust Evidence */}
            <div className="pt-6 sm:pt-8 flex flex-col items-center md:items-start gap-4">
              <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                Didukung Oleh
              </p>
              <div className="flex items-center gap-6 sm:gap-8">
                <img src="/Kabupaten.png" alt="Pemerintah Kabupaten Lombok Utara" title="Pemerintah Kabupaten Lombok Utara" className="h-12 sm:h-14 w-auto object-contain" />
                <img src="/Kesehatan.png" alt="UPT BLUD Puskesmas Gangga" title="UPT BLUD Puskesmas Gangga" className="h-12 sm:h-14 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Right - App Preview */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-lg flex justify-center items-center py-6">
              <div className="relative px-4 sm:px-0 group z-10 flex justify-center w-full mt-4 lg:mt-8">
                <img
                  src="/landing_transparant.png"
                  alt="Gibran Persebaya App Preview"
                  className="w-[105%] sm:w-[115%] lg:w-[125%] max-w-none h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out group-hover:-translate-y-5 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-4 mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Fitur Unggulan
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk manajemen kesehatan remaja putri
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <Card className="p-6 border-2 hover:border-primary/50 transition-colors flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Pencatatan Data Kesehatan
            </h3>
            <p className="text-muted-foreground">
              Catat dan kelola data tablet tambah darah remaja putri dengan sistem digital yang aman dan terstruktur.
            </p>
          </Card>

          {/* Feature 2 */}
          <Card className="p-6 border-2 hover:border-primary/50 transition-colors flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Laporan & Analitik
            </h3>
            <p className="text-muted-foreground">
              Analisis komprehensif dan laporan berkala untuk monitoring kesehatan remaja putri di sekolah.
            </p>
          </Card>

          {/* Feature 3 */}
          <Card className="p-6 border-2 hover:border-primary/50 transition-colors flex flex-col items-center text-center sm:items-start sm:text-left sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Kolaborasi Tim
            </h3>
            <p className="text-muted-foreground">
              Bekerja sama antar sekolah dan puskesmas untuk penanganan anemia remaja putri yang lebih baik.
            </p>
          </Card>
        </div>
      </section>

      {/* App Features Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative flex justify-center items-center order-2 md:order-1">
            <div className="relative w-full max-w-sm px-4 sm:px-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2010.47.27-PFWcBTfC2sll1UYI7gQaZdV2vTcjD8.jpeg"
                alt="Mode Aplikasi - Sekolah dan Puskesmas"
                className="w-auto h-auto max-w-full max-h-[60vh] md:max-h-[70vh] object-contain rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl mx-auto"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 order-1 md:order-2 text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Mode Aplikasi Fleksibel
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Aplikasi Gibran Persebaya mendukung dua mode yang dapat disesuaikan dengan kebutuhan:
              </p>
            </div>

            <div className="space-y-4 text-left">
              <div className="flex gap-4">
                <div className="w-1 bg-primary rounded-full" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Mode Sekolah</h3>
                  <p className="text-muted-foreground">
                    Pencatatan langsung tablet tambah darah dan monitoring kesehatan siswi di lingkungan sekolah.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-secondary rounded-full" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Mode Puskesmas</h3>
                  <p className="text-muted-foreground">
                    Manajemen komprehensif data kesehatan dari berbagai sekolah dengan laporan terkonsolidasi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-linear-to-r from-primary/10 to-secondary/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center space-y-6 sm:space-y-8 border-2 border-primary/20">
          <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Siap Memulai?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Unduh Gibran Persebaya sekarang dan bergabung dengan gerakan atasi anemia remaja putri
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              <a href="https://github.com/papamana/gp_landing_page_apps/releases/download/v1.0.0/app-release.apk" target="_blank" rel="noopener noreferrer">
                <Smartphone className="w-5 h-5 mr-2" />
                Android
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-12 sm:mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            <div className="flex items-center gap-2">
              <Image src="/favicon-32x32.png" alt="Logo" width={20} height={20} className="w-5 h-5 shrink-0" />
              <span className="font-semibold text-foreground text-center sm:text-left">Gibran Persebaya</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground text-center max-w-xs sm:max-w-md md:max-w-none">
              © 2024 Gibran Persebaya. Semua hak dilindungi.<span className="hidden sm:inline"> |</span><br className="sm:hidden"/> Gerakan Atasi Bersama Masalah Anemia melalui Peran Teman Sebaya
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-2 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition">
                Privasi
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition">
                Syarat
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
