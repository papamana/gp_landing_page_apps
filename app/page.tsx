'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Download, Heart, BarChart3, Users, Apple, Smartphone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-secondary/5">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Image src="/favicon-32x32.png" alt="Gibran Persebaya Logo" width={24} height={24} className="w-6 h-6" />
            </div>
            <h1 className="font-bold text-lg text-foreground">Gibran Persebaya</h1>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <a href="/app-release.apk" download="app-release.apk">Unduh Sekarang</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
                <span className="text-primary">Gibran Persebaya</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Gerakan Atasi Bersama Masalah Anemia melalui Peran Teman Sebaya
              </p>
            </div>
            <p className="text-lg text-foreground/80">
              Aplikasi pencatatan dan pelaporan tablet tambah darah remaja putri di sekolah. Memudahkan pendokumentasian dan monitoring kesehatan remaja putri dengan sistem yang terstruktur dan mudah digunakan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="/app-release.apk" download="app-release.apk">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Download Android
                </a>
              </Button>
            </div>
          </div>

          {/* Right - App Preview */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-linear-to-br from-secondary/40 to-primary/20 rounded-3xl blur-3xl" />
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01_onboarding-dLIeW5vjEaNdFX0SEZw96mNG6Rx7pX.png"
                  alt="Gibran Persebaya App Preview"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            Fitur Unggulan
          </h2>
          <p className="text-lg text-muted-foreground">
            Semua yang Anda butuhkan untuk manajemen kesehatan remaja putri
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <Card className="p-6 border-2 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
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
          <Card className="p-6 border-2 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
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
          <Card className="p-6 border-2 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
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
            <div className="relative w-full max-w-sm">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-10%20at%2010.47.27-PFWcBTfC2sll1UYI7gQaZdV2vTcjD8.jpeg"
                alt="Mode Aplikasi - Sekolah dan Puskesmas"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Mode Aplikasi Fleksibel
              </h2>
              <p className="text-lg text-muted-foreground">
                Aplikasi Gibran Persebaya mendukung dua mode yang dapat disesuaikan dengan kebutuhan:
              </p>
            </div>

            <div className="space-y-4">
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
        <div className="bg-linear-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 text-center space-y-8 border-2 border-primary/20">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Siap Memulai?
            </h2>
            <p className="text-lg text-muted-foreground">
              Unduh Gibran Persebaya sekarang dan bergabung dengan gerakan atasi anemia remaja putri
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              <a href="/app-release.apk" download="app-release.apk">
                <Smartphone className="w-5 h-5 mr-2" />
                Android
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image src="/favicon-32x32.png" alt="Logo" width={20} height={20} className="w-5 h-5" />
              <span className="font-semibold text-foreground">Gibran Persebaya</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2024 Gibran Persebaya. Semua hak dilindungi. | Gerakan Atasi Bersama Masalah Anemia melalui Peran Teman Sebaya
            </p>
            <div className="flex gap-4">
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
