
import React from 'react';
import { cn } from '@/lib/utils';

interface Topic {
  id: string;
  name: string;
}

const topics: Topic[] = [
  { id: "algotrading", name: "AlgoTrading ve Kodlama" },
  { id: "teknik-analiz", name: "Teknik ve Temel Analiz" },
  { id: "firma-degerleme", name: "Firma Değerleme & Bilanço Analizi" },
  { id: "yatirim-fonlari", name: "Yatırım Fonları" },
  { id: "hisse-islemleri", name: "Hisse İşlemleri" },
  { id: "viop-islemleri", name: "VİOP İşlemleri" },
  { id: "yurtdisi-piyasalar", name: "Yurtdışı Piyasalar" },
  { id: "veri-terminalleri", name: "Veri Terminalleri (Matriks, iDeal vb.)" },
  { id: "finansal-okuryazarlik", name: "Finansal Okuryazarlık" },
  { id: "guncel-haberler", name: "Güncel Haberler" },
];

interface TopicSelectionProps {
  onSelectTopic: (topicName: string) => void;
}

const TopicSelection = ({ onSelectTopic }: TopicSelectionProps) => {
  return (
    <div className="p-6 h-full overflow-y-auto">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
              <path d="M14 25.6666C20.4434 25.6666 25.6667 20.4433 25.6667 14C25.6667 7.55666 20.4434 2.33331 14 2.33331C7.55672 2.33331 2.33337 7.55666 2.33337 14C2.33337 16.4266 3.10837 18.6766 4.43337 20.5116L3.26837 24.7316L7.48837 23.5666C9.32337 24.8916 11.5734 25.6666 14 25.6666Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Merhaba, ben MEXI AI.</h2>
        <p className="text-gray-600 mb-2">Yatırım ve finans dünyasında size rehberlik etmek için buradayım.</p>
        <p className="text-gray-600">Başlamak için bir konu seçin:</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => onSelectTopic(topic.name)}
            className="p-4 border border-gray-200 rounded-lg text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-gray-800">{topic.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicSelection;
