// Tooltip is the component which controls the "stats panel" type thing that appears when you
// hover over a municipality. It gets the hovered feature (polygon) as a prop and then displays
// a bunch of relevant data about the municipality

export default function ToolTip({ feature }) {
  // If the user is not hovering, promt them to do so
  if (!feature) {
    return (
      <div className="rounded-xl bg-white/80 backdrop-blur-md p-5 border border-gray-200 shadow-xl min-w-[380px]">
        <p className="text-sm text-gray-500 font-medium italic">
          Hover over a municipality to view service delivery data...
        </p>
      </div>
    );
  }

  const p = feature.properties;

  // This colours the service delivery status to match the colours of the map
  const statusColors = {
    'Critical Failure': '#b91c1c', 
    'Very Poor': '#ff0000',        
    'Poor': '#ffa500',             
    'Substandard': '#ffff00',      
    'Moderate': '#90ee90',         
    'High Performance': '#2e9e2eff', 
  };

  const badgeBg = statusColors[p.service_delivery_status] || '#cccccc';
  
  // Changes the colour of the text for the service delivey badge (black for yellow and light green)
  const isDarkText = ['Substandard', 'Moderate'].includes(p.service_delivery_status);

  // This is a component for each row in the tooltip, which changes the text colour to red
  // if the percentage value is above 15% (meaning it is failing quite a large proportion
  // of households for that particular service)
  const TooltipRow = ({ label, value }) => {
    const numValue = parseFloat(value);
    const textColor = numValue > 15 ? "text-red-600" : "text-gray-900";

    return (
      <div className="flex justify-between gap-6 py-1">
        <span className="text-sm text-gray-700 font-medium leading-tight pr-4">
          {label}
        </span>
        <span className={`text-sm font-bold ${textColor} whitespace-nowrap`}>
          {value}%
        </span>
      </div>
    );
  };

  return (
    <div className="rounded-xl bg-white p-5 min-w-[380px]">
      {/* Header Section - Municipality & Province */}
      <div className="mb-4 border-b-2 border-gray-100 pb-3">
        <h3 className="text-xl font-black text-gray-900 tracking-tight">
          {p.municname}
        </h3>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">
          {p.province} Province
        </p>
        
        {/* Service delivery status badge - matching colours */}
        <div 
          className="mt-3 inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm"
          style={{ 
            backgroundColor: badgeBg, 
            color: isDarkText ? '#000000' : '#ffffff' 
          }}
        >
          {p.service_delivery_status}
        </div>
          {/* Total number of Households */}
        <div className="mt-4 pt-2">
          <p className="text-[10px] text-gray-400 uppercase font-black tracking-tighter">Total Households</p>
          <p className="text-2xl font-black text-gray-900 leading-none">
            {Number(p.total_households).toLocaleString()}
          </p>
        </div>
        
      </div>
      {/* ACTUAL PERCENTAGES */}
      
      {/* Cooking and Lighting */}
      <div className="space-y-2 mb-3">
        <TooltipRow label="Unhealthy/dangerous cooking energy" value={p.pct_energy_cooking_bad} />
        <TooltipRow label="No cooking energy source" value={p.pct_energy_cooking_none} />
        
        <div className="border-t border-gray-100 my-2"></div>
        
        <TooltipRow label="High fire-risk lighting energy" value={p.pct_energy_lighting_bad} />
        <TooltipRow label="No source of lighting" value={p.pct_energy_lighting_none} />
      </div>

      {/* Sanitation and Water */}
      <div className="space-y-2 mb-3 border-t-2 border-gray-100 pt-3">
        <TooltipRow label="Unsanitary toilet facilities" value={p.pct_sanitation_bad} />
        <TooltipRow label="No toilet facilities" value={p.pct_sanitation_none} />
        
        <div className="border-t border-gray-100 my-2"></div>
        
        <TooltipRow label="Water access over 500m away" value={p.pct_waterpiped_stand_over_500m} />
        <TooltipRow label="No access to piped water" value={p.pct_waterpiped_none} />
      </div>

      {/* 3. Refuse Collection */}
      <div className="space-y-2 mb-3 border-t-2 border-gray-100 pt-3">
        <TooltipRow label="No municipal refuse collection" value={p.pct_refuse_bad} />
      </div>
      
      {/* 4. Internet Access */}
      <div className="space-y-2 mb-3 border-t-2 border-gray-100 pt-3">
        <TooltipRow label="No internet access" value={p.pct_internet_none} />
      </div>

      {/* 5. Hunger */}
      <div className="space-y-2 border-t-2 border-gray-100 pt-3">
        <TooltipRow label="Adult Hunger" value={p.pct_adult_hunger} />
        <TooltipRow label="Child Hunger" value={p.pct_child_hunger} />
      </div>
    </div>
  );
}