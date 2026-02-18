export default function MapInfoModal({ setIsModalOpen }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl p-8 max-w-lg shadow-2xl relative">
        <button 
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        <h2 className="text-2xl font-black mb-4">Map Information</h2>
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
          This interactive map uses the{' '}
            <a 
              href="https://isibaloweb.statssa.gov.za/pages/surveys/pss/censuses/2022/census2022.php" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 underline hover:text-blue-800"
            >
              2022 Census Data 
            </a>
              {' '} to provide information on the household service delivery performance of local municipalities across South Africa.           </p>

          <p>
          The Service Delivery Index represents how well a municipality provides the basic services for a dignified life (from very poor to good service delivery). The index combines data on water, sanitation, food security, electricity, and refuse collection, giving more weight to the most essential needs like clean water and toilets.           </p>

          <p>
          Hover over an area to get more detailed information about a local municipality’s service delivery.          </p>
        </div>
      </div>
    </div>
  );
}