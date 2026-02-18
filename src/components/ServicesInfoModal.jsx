export default function ServicesInfoModal({ setIsModalOpen }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl p-8 max-w-5xl shadow-2xl relative">
        <button 
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        <h2 className="text-2xl font-black mb-4">Service Variables Information</h2>
        
        <div className="text-gray-600 leading-relaxed space-y-6 max-h-[70vh] overflow-y-auto pr-2">
          <section className="space-y-2">
            <p>
              Below is detailed information explaining what each of the service variables represent. 
            </p>
          </section>


          <section className="space-y-2">
            <p>
              <strong>Unhealthy/Dangerous cooking energy</strong>: Households relying on wood, coal, animal dung, or paraffin.
            </p>
            <p>
              <strong>No cooking energy source</strong>: Households with no access to energy for cooking.
            </p>
          </section>

          <section className="space-y-2">
            <p>
              <strong>High fire-risk lighting energy</strong>: Households using candles or paraffin for light.
            </p>
            <p>
              <strong>No source of lighting</strong>: Households with no lighting source at all.
            </p>
          </section>

          <section className="space-y-2">
            <p>
              <strong>Unsanitary toilet facilities</strong>: Households using bucket toilets, pit latrines without ventilation, or "other" unimproved systems.
            </p>
            <p>
              <strong>No toilet facilities</strong>: Households with no toilet facilities.
            </p>
          </section>

          <section className="space-y-2">
            <p>
              <strong>Water access over 500m away</strong>: Households that have access to piped water on a community stand, but it is located more than 500 meters away.
            </p>
            <p>
              <strong>No access to piped water</strong>: Households with no access to piped water (relying on river, boreholes, or rain tanks).
            </p>
          </section>

          <section className="space-y-2">
            <p>
              <strong>No municipal refuse collection</strong>: Households where waste is not collected by the municipality, using either communal dumps or their own refuse pits.
            </p>
          </section>

          <section className="space-y-2">
            <p>
              <strong>No internet access</strong>: Households with no access to internet services (both at a household and community level)
            </p>
          </section>

          <section className="space-y-2">
            <p>
              <strong>Adult/child hunger</strong>: Households where an adult/child in the household ‘often’ or ‘always’ went hungry because there wasn’t enough food.
            </p>
          </section>
          
        </div>
      </div>
    </div>
  );
}