export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-2xl p-12 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          J&J Equipment Rental
        </h1>
        <h2 className="text-2xl text-gray-600 mb-8">
          Inspection Photo Gallery
        </h2>
        <p className="text-gray-700 mb-6">
          This is a public gallery for viewing equipment inspection photos.
          Access is provided via QR codes on contracts and invoices.
        </p>
        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
          <p className="text-sm text-gray-700">
            <strong>For Customers:</strong> Scan the QR code on your contract
            or invoice to view inspection photos.
          </p>
        </div>
        <div className="text-sm text-gray-500">
          <p>Routes:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>/contract/[contractNumber] - PDI Photos</li>
            <li>/invoice/[invoiceNumber] - RDI Photos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
