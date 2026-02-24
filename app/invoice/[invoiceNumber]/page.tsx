'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Photo {
  id: number;
  url: string;
  filename: string;
}

export default function InvoiceInspectionPage() {
  const params = useParams();
  const invoiceNumber = params.invoiceNumber as string;
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await fetch(
          `https://rentalpro.jnjequipmentrental.com/api/public/inspection/invoice/${invoiceNumber}`
        );
        if (!response.ok) throw new Error('Failed to load photos');
        const data = await response.json();
        setPhotos(data.photos || []);
      } catch (err) {
        setError('Unable to load inspection photos');
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, [invoiceNumber]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
        <div className="text-white text-2xl">Loading photos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-2xl p-12 max-w-md text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-700">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-2xl p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Return Delivery Inspection Photos
          </h1>
          <p className="text-gray-600">Invoice: {invoiceNumber}</p>
          <p className="text-sm text-gray-500 mt-2">
            {photos.length} photo{photos.length !== 1 ? 's' : ''}
          </p>
        </div>

        {photos.length === 0 ? (
          <div className="bg-white rounded-lg shadow-2xl p-12 text-center">
            <p className="text-gray-600">No inspection photos available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <img
                  src={photo.url}
                  alt={photo.filename}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-600 truncate">
                    {photo.filename}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
