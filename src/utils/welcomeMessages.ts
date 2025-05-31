
export const getWelcomeMessage = (topicName: string): string => {
  switch (topicName) {
    case "AlgoTrading ve Kodlama":
      return `**Merhaba,**

Bu modül üzerinden **algoritmik alım-satım (algotrading)** konularında:

• **Algotrading'e dair temel kavramları** öğrenebilir,

• Stratejinizi dilediğiniz **programlama diliyle** (örneğin: Python, C#, Pine Script) yazabilir,

• **TradingView, Matriks veya iDeal** gibi farklı işlem platformlarındaki algoritmaları diğer terminal dillerine çevirebilir,

• Hazırladığınız stratejiler için **kodlama desteği** alabilir

• ve kendi **işlem fikirlerinizi** hayata geçirebilirsiniz.

Yalnızca **stratejinizi anlatmanız** yeterli; modül, algoritmanın mantığını otomatik olarak yorumlayıp sizin adınıza kodlayabilir veya mevcut kodunuzu analiz edip **iyileştirme önerilerinde** bulunabilir.

**⚠️ Uyarı:** Yazılan algoritmaların performansı geçmiş veriler üzerinden test edilebilir ancak **gelecekteki fiyat hareketlerini garanti etmez.** Gerçek işlemlere geçmeden önce **backtest ve simülasyon sonuçlarını** dikkatle değerlendirmeniz önerilir.`;

    case "Hisse İşlemleri":
      return `**Merhaba,**

Bu modül aracılığıyla **Borsa İstanbul'da** işlem gören hisse senetlerine dair:

• Şirketlerin **temel bilgileri, faaliyet alanları** ve piyasa segmentleri,

• Hisse senetlerinin işlem gördüğü **pazar türü** (Yıldız, Ana, Alt Pazar vb.),

• **Günlük fiyat adımları, işlem saatleri,** devre kesici sınırları,

• **Açığa satış, kredili işlem** ve brüt takas uygulamaları gibi işlem kuralları,

• **Endeks üyelikleri, likidite ölçümleri** ve pay tipi bilgileri

gibi geniş bir yelpazede bilgilere ulaşabilirsiniz.

**⚠️ Uyarı:** Burada sunulan bilgiler **bilgilendirme amaçlıdır.** Hisseye özel uygulanan kurallar ve güncel düzenlemeler zamanla değişebilir. Güncel ve bağlayıcı bilgiye ulaşmak için **Borsa İstanbul ve KAP** gibi resmî kaynakları incelemeniz önerilir.`;

    case "Yurtdışı Piyasalar":
      return `**Merhaba,**

Bu modül üzerinden **MEKSA Yatırım** aracılığıyla yurtdışı piyasalara ilişkin kapsamlı bilgilere ulaşabilirsiniz:

• **ABD (NASDAQ, NYSE), Avrupa ve Asya** borsalarında işlem imkânları,

• **Hisse senetleri, ETF'ler, vadeli işlemler** ve emtia ürünlerine erişim,

• **Interactive Brokers** işlem platformu,

• **Hesap açılış süreçleri,** para transferi ve saklama detayları,

• **Komisyon oranları, işlem saatleri,** temettü ve vergi uygulamaları hakkında bilgi

gibi birçok başlıkta destek alabilirsiniz.

Dilerseniz yatırım yapmak istediğiniz **piyasa veya ürün adını** belirterek detaylı işlem şartlarına özel bilgi talep edebilirsiniz.

**⚠️ Uyarı:** Yurtdışı piyasalar **farklı regülasyonlara** ve işlem saatlerine tabidir. İşlem yapmadan önce **riskleri, komisyon yapısını** ve platform kurallarını dikkatlice incelemeniz önerilir.`;

    case "Finansal Okuryazarlık":
      return `**Merhaba,**

Bu modül, yatırımcıların **sağlam bir bilgi temeli** oluşturmasına yardımcı olmak üzere tasarlanmıştır. İçeriğinde:

• **Temel finans kavramları** (faiz, enflasyon, risk-getiri dengesi, bileşik getiri gibi),

• **Mikro ve makro ekonomi** başlıkları (GSYH, işsizlik, merkez bankası politikaları, bütçe dengesi vb.),

• **Piyasa türleri, yatırım araçları** ve bunların nasıl çalıştığı,

• **Bireysel finans yönetimi,** tasarruf, bütçeleme ve borçlanma ilkeleri,

• **Küresel ekonomik göstergelerin** yatırım kararlarına etkisi

gibi birçok başlık sade ve anlaşılır şekilde sunulmaktadır.

**Amacımız,** yatırımcıların sadece işlem yapmalarını değil; **neden ve nasıl yatırım yaptıklarını** da anlamalarını sağlamaktır.

**⚠️ Uyarı:** Bu bölümde sunulan bilgiler **eğitim ve farkındalık amaçlıdır.** Yatırım kararlarınızı verirken **kişisel mali durumunuzu** ve risk toleransınızı mutlaka göz önünde bulundurmalısınız.`;

    case "Teknik ve Temel Analiz":
      return `**Merhaba,**

Bu modül, yatırımcıların hem **teknik analiz** hem de **temel analiz** konularında bilgi edinmesini sağlamak amacıyla hazırlanmıştır. İçeriğinde:

• **Teknik analizde** kullanılan başlıca araçlar: **indikatörler** (RSI, MACD, Bollinger Bands), grafik formasyonları, trend çizgileri,

• **Temel analiz** kapsamında: bilançolar, gelir tabloları, **oran analizleri** (F/K, PD/DD, ROE vb.), sektör karşılaştırmaları,

• **Teknik ve temel analiz** arasındaki farklar, birlikte kullanım stratejileri,

• Analizlerin **nasıl yorumlanması** gerektiğine dair pratik örnekler

gibi birçok başlık sade ve anlaşılır biçimde sunulmaktadır.

Yatırımcılar bu modül aracılığıyla **analiz yetkinliklerini artırabilir,** daha bilinçli kararlar alma yolunda sağlam bir adım atabilirler.

**⚠️ Uyarı:** Bu modülde sunulan bilgiler **yatırım tavsiyesi değildir.** Teknik ve temel analiz araçları, yorumlayan kişinin **bilgi düzeyine** ve piyasa koşullarına göre farklı sonuçlar doğurabilir.`;

    case "Yatırım Fonları":
      return `**Merhaba,**

Bu modül, yatırımcıların **yatırım fonlarına** dair kapsamlı bilgi edinmesini sağlamak amacıyla hazırlanmıştır. İçeriğinde:

• **Fon türleri** hakkında temel bilgiler (Hisse senedi fonları, borçlanma araçları fonları, karma fonlar vb.),

• Fonların **risk ve getiri profilleri,**

• **Fon seçimi** yaparken dikkat edilmesi gereken kriterler,

• **Fon yönetim ücretleri,** performans ölçütleri ve karşılaştırma yöntemleri,

• **TEFAS sistemi,** günlük fon fiyatları ve geçmiş getirilerin analizi

gibi birçok başlık sade, anlaşılır ve karşılaştırmalı olarak sunulmaktadır.

**⚠️ Uyarı:** Yatırım fonları **profesyonel yöneticiler** tarafından yönetilse de risk içerir. **Fon geçmiş performansı** gelecekteki getiriler için garanti teşkil etmez.`;

    case "VİOP İşlemleri":
      return `**Merhaba,**

Bu modül üzerinden **Vadeli İşlem ve Opsiyon Piyasası (VİOP)** hakkında kapsamlı bilgilere ulaşabilirsiniz. İçeriğinde:

• **VİOP'un** nasıl çalıştığına dair temel bilgiler,

• **Sözleşme türleri:** Endeks vadeli işlemler, pay senedi vadeli işlemler, döviz, emtia ve faiz ürünleri,

• **Kaldıraç oranları,** başlangıç ve sürdürme teminat hesaplamaları,

• **İşlem saatleri,** takas süreci ve teminat tamamlama yükümlülükleri,

• **VİOP'ta pozisyon taşıma,** günlük işlem stratejileri ve risk yönetimi temelleri

gibi birçok konuda sade, uygulamaya dönük ve anlaşılır bilgiler sunulmaktadır.

**⚠️ Uyarı:** VİOP işlemleri **kaldıraç içerdiğinden** dolayı yüksek kazanç potansiyelinin yanında **yüksek risk** de barındırır. Bu nedenle pozisyon almadan önce **risk-getiri dengenizi** göz önünde bulundurmalısınız.`;

    case "Veri Terminalleri (Matriks, iDeal vb.)":
      return `**Merhaba,**

Bu modül üzerinden Türkiye'de **finansal piyasalarda** yaygın olarak kullanılan veri terminallerine ilişkin kapsamlı bilgilere ulaşabilirsiniz. İçeriğinde:

• **Matriks, iDeal, Foreks** gibi terminallerin özellikleri,

• Her terminalin **kullanım arayüzü,** veri içerikleri ve teknik analiz araçları,

• Terminal üzerinden **emir iletimi,** algoritmik işlem desteği, alarm ve izleme sistemleri,

kapsamlı, sade ve karşılaştırmalı olarak sunulmaktadır.

Dilerseniz **kullandığınız terminali** belirterek o platforma özel detaylı eğitim içeriklerine ve kullanım rehberlerine ulaşabilirsiniz.

**⚠️ Uyarı:** Her veri terminali **farklı özelliklere** ve fiyatlama yapısına sahiptir. Seçim yaparken **yatırım tarzınızı** ve ihtiyaç duyduğunuz veri derinliğini dikkate almanız önerilir.`;

    case "Güncel Haberler":
      return `**Merhaba,**

Bu modül aracılığıyla **finansal piyasalara** ilişkin güncel haberleri tek bir noktadan takip edebilirsiniz. İçeriğinde:

• **Borsa İstanbul, VİOP, döviz, altın** ve emtia piyasalarına dair anlık gelişmeler,

• **Şirket haberleri, KAP açıklamaları** ve sektör bazlı duyurular,

• **TCMB faiz kararları,** enflasyon verileri ve diğer makroekonomik göstergeler,

• **Küresel piyasalardan** gelen haber akışları ve FED, ECB gibi merkez bankalarına dair açıklamalar,

• **Piyasa beklentilerini** etkileyen özel analizler ve yorumlar

günlük olarak güncellenmekte ve sade bir dille sunulmaktadır.

Dilerseniz **ilginizi çeken bir konu** başlığını ya da şirket adını girerek haber filtresi uygulayabilir, yalnızca ilgili gelişmeleri takip edebilirsiniz.

**⚠️ Uyarı:** Burada sunulan haber içerikleri **bilgilendirme amaçlıdır.** Yatırım kararlarınızı verirken **haberlerin kaynağını** ve doğruluğunu dikkatlice değerlendirmenizi öneririz.`;

    case "Firma Değerleme & Bilanço Analizi":
      return `**Merhaba,**

Bu platform üzerinden **Borsa İstanbul'da** işlem gören hisse senetlerine ait:

• **Finansal tabloları** inceleyebilir,

• **Adil değer hesaplamalarına** ulaşabilir,

• Dilerseniz **bilanço verileri** üzerinden temel analiz yorumlarını da alabilirsiniz.

Herhangi bir hisse senedinin **sembolünü** (örneğin: TTRAK, EREGL) yazarak ilgili analizlere ulaşabilirsiniz.

**⚠️ Uyarı:** Burada sunulan bilgiler **yatırım tavsiyesi değildir.** Analizler genel bilgilendirme amaçlıdır. Lütfen verileri **resmî ve lisanslı kaynaklardan** (örn. KAP, Finnet, Matriks, TEFAS) teyit ediniz.`;

    default:
      return `**Yatırım ve finans** dünyasında size rehberlik etmek için buradayım. Başlamak için bir soru sorun:`;
  }
};
