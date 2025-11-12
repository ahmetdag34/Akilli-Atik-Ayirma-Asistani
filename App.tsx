
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import Spinner from './components/Spinner';
import ResultCard from './components/ResultCard';
import { WasteClassificationResult } from './types';
import { classifyWaste } from './services/geminiService';
import { fileToBase64 } from './utils/fileUtils';

const App: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [classificationResult, setClassificationResult] = useState<WasteClassificationResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = useCallback((file: File) => {
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
    setClassificationResult(null);
    setError(null);
  }, []);

  const handleClassify = async () => {
    if (!imageFile) {
      setError('Lütfen önce bir resim yükleyin.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setClassificationResult(null);

    try {
      const base64Image = await fileToBase64(imageFile);
      const result = await classifyWaste(base64Image, imageFile.type);
      setClassificationResult(result);
    } catch (err: any) {
      setError(err.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setImageFile(null);
    setImageUrl(null);
    setClassificationResult(null);
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 antialiased">
      <main className="container mx-auto max-w-2xl flex flex-col items-center justify-center flex-grow">
        <Header />
        <div className="w-full flex flex-col items-center space-y-6 mt-4">
          {!classificationResult && (
            <ImageUploader onImageUpload={handleImageUpload} imageUrl={imageUrl} />
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative w-full max-w-lg" role="alert">
              <strong className="font-bold">Hata!</strong>
              <span className="block sm:inline ml-2">{error}</span>
            </div>
          )}

          <div className="h-24 flex items-center justify-center">
            {isLoading && <Spinner />}
            {classificationResult && <ResultCard result={classificationResult} />}
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={handleClassify}
              disabled={!imageFile || isLoading || !!classificationResult}
              className="px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
            >
              {isLoading ? 'Sınıflandırılıyor...' : 'Sınıflandır'}
            </button>
            {(imageFile || classificationResult) && (
               <button
                 onClick={handleReset}
                 disabled={isLoading}
                 className="px-8 py-3 bg-gray-200 text-gray-700 font-bold rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-colors disabled:opacity-50"
               >
                 Sıfırla
               </button>
            )}
          </div>
        </div>
      </main>
      <footer className="w-full text-center p-4 text-gray-500 text-sm">
        <p>AI Waste Classifier &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;
