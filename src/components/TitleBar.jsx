// This component is the title bar for the top of the app. It has the simple title on the left
// and three buttons on the rights that open models with more info about the data, service variables
// and the map (which is the component that is already open when you first load the app)

export default function TitleBar({ openMap, openData, openServices }) {
  const NavButton = ({ label, onClick }) => (
    <button 
      onClick={onClick}
      className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-blue-600 transition-colors"
    >
      {label}
    </button>
  );

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Simple App Title */}
        <h3 className="text-lg font-black text-gray-900 tracking-tight">
          Service Delivery Index for Municipalities in South Africa
        </h3>

        {/* Information Modals */}
        <nav className="flex items-center gap-6">
          <NavButton label="Data Info" onClick={openData} />
          <NavButton label="Services Info" onClick={openServices} />
          <NavButton label="Map Info" onClick={openMap} />
        </nav>

      </div>
    </header>
  )
};