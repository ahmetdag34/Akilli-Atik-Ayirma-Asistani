🎯 Proje Amacı ve Çözülen ProblemGünümüz dünyasında geri dönüşüm bilinci artsa da, atıkların hangi kategoriye (kağıt, plastik, cam, organik, elektronik vb.) ait olduğunun karıştırılması yaygın bir sorundur. Bu uygulama, kullanıcıların bir atığın fotoğrafını çekerek veya yükleyerek anında ve doğru ayrım bilgisi almasını sağlar, böylece geri dönüşüm sürecinin etkinliğini ve kalitesini artırır.

✨ Temel ÖzelliklerAnında Atık Tanıma: Kullanıcı tarafından yüklenen görüntüyü anlık olarak analiz eder.Doğru Sınıflandırma: Atığı yüksek doğrulukla doğru geri dönüşüm kategorisine (örn. PET şişe Plastik, Karton kutu $\rightarrow$ Kağıt) atar.Eğitim ve Bilgi: Atığın neden o kategoriye girdiğine dair kısa bilgiler sunar.Yerel Yönergeler: Kullanıcının konumuna göre yerel geri dönüşüm kurallarını/tesislerini gösterebilir.






🚀 Kurulum ve Çalıştırma
Bu projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin. 
Ön GereksinimlerPython (3.x önerilir)pip paket yöneticisi1. 
Depoyu KlonlamaBashgit clone https://github.com/KullaniciAdiniz/Akilli-Atik-Ayirma-Asistani.git
cd Akilli-Atik-Ayirma-Asistani
2. Gerekli Kütüphaneleri KurmaBackend API'si ve ML modelini çalıştırmak için gerekli paketleri kurun:Bashpip install -r requirements.txt
3. Modeli YüklemeEğitilmiş model dosyası (model.h5 veya model.pb gibi) dizinin kökünde bulunmalıdır.(Eğer model dosyanız çok büyükse ve Git LFS kullanıyorsanız bunu belirtin: Model dosyası Git LFS ile yönetilmektedir. Lütfen indirmeden önce Git LFS'nin kurulu olduğundan emin olun.)4. API Sunucusunu Başlatma

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
