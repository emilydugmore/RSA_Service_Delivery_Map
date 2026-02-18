export default function DataInfoModal({ setIsModalOpen }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl p-8 max-w-3xl w-full shadow-2xl relative">
        <button 
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          ✕
        </button>
        <h2 className="text-2xl font-black mb-6 text-gray-900">Data Information</h2>
        
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            The data presented in this interactive map is derived from the South African National Census 2022 10% Sample Household dataset, produced and maintained by Statistics South Africa (Stats SA).
          </p>

          <p>
            Unlike the full census count, this 10% sample is a scientifically selected subset of the total population, designed to provide high-precision estimates of household characteristics while remaining computationally manageable for complex spatial analysis. Collected between February and May 2022, the data reflects the first post-pandemic snapshot of municipal performance. It is important to note that as a sample, the figures are subject to a small margin of error and represent a weighted estimation of the total population.
          </p>

          <p>
            The variables were processed using the R programming language to calculate proportions and rankings at the local municipality level.
          </p>

          <p className="pt-2">
            The raw dataset and technical documentation can be accessed via the{' '}
            <a 
              href="https://isibaloweb.statssa.gov.za/pages/surveys/pss/censuses/2022/census2022.php" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 underline hover:text-blue-800"
            >
              Stats SA Census 2022 Portal
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}