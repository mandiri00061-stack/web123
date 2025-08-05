import React, { useState } from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import { useRealtimeBerita } from '../hooks/useRealtime';
import type { Berita } from '../lib/supabase';

const Berita: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<Berita | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'berita' | 'pengumuman'>('all');
  
  // Use realtime data
  const { data: beritaList, loading } = useRealtimeBerita();

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuat berita...</p>
        </div>
      </div>
    );
  }

  // Filter berita based on type
  const filteredBerita = beritaList.filter((berita: Berita) => {
    if (filterType === 'all') return true;
    return berita.type === filterType;
  });

  if (selectedNews) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => setSelectedNews(null)}
          className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar Berita</span>
        </button>

        <article className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                selectedNews.type === 'berita' 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'bg-orange-100 text-orange-600'
              }`}>
                {selectedNews.type === 'berita' ? 'Berita' : 'Pengumuman'}
              </span>
              <div className="flex items-center space-x-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{new Date(selectedNews.published_at).toLocaleDateString('id-ID', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedNews.title}</h1>
          </div>

          <div className="prose max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {selectedNews.content}
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Ditulis oleh: <span className="font-medium">{selectedNews.author}</span>
            </p>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Berita & Pengumuman</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Dapatkan informasi terkini mengenai kegiatan, pengumuman, dan perkembangan 
          terbaru di lingkungan Cluster Kalita.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg p-1 shadow-md">
          <button 
            onClick={() => setFilterType('all')}
            className={`px-6 py-2 rounded-md font-semibold transition-colors ${
              filterType === 'all' 
                ? 'bg-emerald-600 text-white' 
                : 'text-gray-600 hover:text-emerald-600'
            }`}
          >
            Semua
          </button>
          <button 
            onClick={() => setFilterType('berita')}
            className={`px-6 py-2 rounded-md font-semibold transition-colors ${
              filterType === 'berita' 
                ? 'bg-emerald-600 text-white' 
                : 'text-gray-600 hover:text-emerald-600'
            }`}
          >
            Berita
          </button>
          <button 
            onClick={() => setFilterType('pengumuman')}
            className={`px-6 py-2 rounded-md font-semibold transition-colors ${
              filterType === 'pengumuman' 
                ? 'bg-emerald-600 text-white' 
                : 'text-gray-600 hover:text-emerald-600'
            }`}
          >
            Pengumuman
          </button>
        </div>
      </div>

      {/* News List */}
      <div className="space-y-6">
        {filteredBerita.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">📰</div>
            <p className="text-gray-500">Belum ada berita atau pengumuman</p>
          </div>
        ) : (
          filteredBerita.map((berita: Berita) => (
            <article 
              key={berita.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedNews(berita)}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-center space-x-4 mb-3 md:mb-0">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    berita.type === 'berita' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-orange-100 text-orange-600'
                  }`}>
                    {berita.type === 'berita' ? 'Berita' : 'Pengumuman'}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {new Date(berita.published_at).toLocaleDateString('id-ID')}
                    </span>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-emerald-600 transition-colors">
                {berita.title}
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {berita.summary}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-emerald-600 font-semibold hover:text-emerald-700">
                  Baca Selengkapnya →
                </span>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default Berita;