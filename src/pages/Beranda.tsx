import React from 'react';
import { ArrowRight, Calendar, Users, Newspaper } from 'lucide-react';

interface BerandaProps {
  onNavigate: (page: string) => void;
}

const Beranda: React.FC<BerandaProps> = ({ onNavigate }) => {
  const recentNews = [
    {
      id: 1,
      title: 'Pembayaran Iuran Bulan Januari 2025',
      published_at: '2025-01-15',
      summary: 'Reminder untuk warga yang belum melakukan pembayaran iuran bulanan Januari 2025. Batas waktu pembayaran hingga tanggal 20 Januari.',
      type: 'pengumuman',
      author: 'Ahmad Wijaya',
      content: 'Kepada seluruh warga Cluster Kalita yang terhormat,\n\nDengan ini kami mengingatkan bahwa pembayaran iuran bulanan untuk bulan Januari 2025 akan berakhir pada tanggal 20 Januari 2025.\n\nBagi warga yang belum melakukan pembayaran, mohon segera melakukan pembayaran melalui:\n- Transfer ke rekening BCA: 1234567890 a.n. Ahmad Wijaya\n- Transfer ke rekening Mandiri: 0987654321 a.n. Ahmad Wijaya\n\nJangan lupa untuk mengirimkan bukti transfer ke WhatsApp bendahara di nomor 0814-3456-7890.\n\nTerima kasih atas perhatian dan kerjasamanya.'
    },
    {
      id: 2,
      title: 'Gotong Royong Bersih-Bersih Lingkungan',
      published_at: '2025-01-10',
      summary: 'Kegiatan gotong royong bersih-bersih lingkungan cluster akan dilaksanakan pada hari Minggu, 19 Januari 2025 pukul 07.00 WIB.',
      type: 'berita',
      author: 'Dedi Kurniawan',
      content: 'Dalam rangka menjaga kebersihan dan keindahan lingkungan Cluster Kalita, akan diadakan kegiatan gotong royong bersih-bersih lingkungan.\n\nWaktu: Minggu, 19 Januari 2025\nJam: 07.00 - 10.00 WIB\nTitik kumpul: Taman tengah cluster\n\nKegiatan yang akan dilakukan:\n- Pembersihan saluran air\n- Penyapuan jalan\n- Pemangkasan tanaman\n- Pengecatan fasilitas umum\n\nMohon partisipasi seluruh warga dengan membawa peralatan:\n- Sapu\n- Cangkul\n- Gunting tanaman\n- Kantong sampah\n\nKonsumsi akan disediakan panitia. Mari bersama-sama menjaga lingkungan kita!'
    },
    {
      id: 3,
      title: 'Rapat Bulanan Pengurus RT',
      published_at: '2025-01-08',
      summary: 'Rapat koordinasi bulanan pengurus RT akan dilaksanakan pada Sabtu, 25 Januari 2025 di Balai Pertemuan Cluster Kalita.',
      type: 'pengumuman',
      author: 'Siti Nurhaliza',
      content: 'Kepada seluruh pengurus RT Cluster Kalita,\n\nDengan hormat,\nKami mengundang Bapak/Ibu untuk hadir dalam rapat koordinasi bulanan yang akan dilaksanakan pada:\n\nHari/Tanggal: Sabtu, 25 Januari 2025\nWaktu: 19.30 - 21.00 WIB\nTempat: Balai Pertemuan Cluster Kalita\n\nAgenda rapat:\n1. Laporan kegiatan bulan lalu\n2. Evaluasi program kerja\n3. Perencanaan kegiatan bulan depan\n4. Laporan keuangan\n5. Lain-lain\n\nMohon kehadiran tepat waktu. Terima kasih.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl text-white p-8 mb-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Selamat Datang di Paguyuban Cluster Kalita
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-6">
            Membangun kebersamaan dan harmoni dalam lingkungan RT/RW untuk menciptakan 
            kehidupan yang lebih baik bagi seluruh warga.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('struktur')}
              className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>Lihat Pengurus</span>
            </button>
            <button
              onClick={() => onNavigate('kontak')}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">150+</h3>
          <p className="text-gray-600">Kepala Keluarga</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">5+</h3>
          <p className="text-gray-600">Tahun Berdiri</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Newspaper className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">25+</h3>
          <p className="text-gray-600">Kegiatan per Tahun</p>
        </div>
      </div>

      {/* Sambutan */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Sambutan Ketua RT</h2>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Assalamualaikum warahmatullahi wabarakatuh dan salam sejahtera untuk kita semua.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Selamat datang di website resmi Paguyuban RT/RW Cluster Kalita. Melalui platform digital ini, 
            kami berharap dapat memberikan informasi yang akurat dan terkini mengenai berbagai kegiatan, 
            pengumuman, dan perkembangan yang terjadi di lingkungan kita.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Paguyuban ini hadir sebagai wadah untuk memperkuat silaturahmi antar warga, meningkatkan 
            partisipasi dalam kegiatan bersama, dan menciptakan lingkungan yang aman, nyaman, dan harmonis 
            bagi seluruh keluarga di Cluster Kalita.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Mari bersama-sama kita wujudkan Cluster Kalita yang bersih, indah, dan penuh kebersamaan.
          </p>
          <div className="mt-6">
            <p className="font-semibold text-gray-900">Hormat kami,</p>
            <p className="font-semibold text-emerald-600">Budi Santoso</p>
            <p className="text-gray-600">Ketua RT Cluster Kalita</p>
          </div>
        </div>
      </div>

      {/* Berita Terbaru */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Berita & Pengumuman Terbaru</h2>
          <button
            onClick={() => onNavigate('berita')}
            className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            <span>Lihat Semua</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onNavigate('berita')}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    news.type === 'berita' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-orange-100 text-orange-600'
                  }`}>
                    {news.type === 'berita' ? 'Berita' : 'Pengumuman'}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(news.published_at).toLocaleDateString('id-ID')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {news.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beranda;