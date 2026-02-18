import './styles.css'
import TitleBar from './components/TitleBar'
import MapDisplay from './components/MapDisplay'
import MapInfoModal from './components/MapInfoModal'
import DataInfoModal from './components/DataInfoModal'
import ServicesInfoModal from './components/ServicesInfoModal'
import { useState } from 'react'

function App() {

  // States for each of the three info modals
  const [isMapModalOpen, setIsMapModalOpen] = useState(true);
  const [isDataModalOpen, setIsDataModalOpen] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);

  return (
    
<div className='flex flex-col h-screen'>      
         <TitleBar
         openMap={() => setIsMapModalOpen(true)}
        openData={() => setIsDataModalOpen(true)}
        openServices={() => setIsServicesModalOpen(true)}
      />
        <MapDisplay/>
        {isMapModalOpen && <MapInfoModal setIsModalOpen={setIsMapModalOpen} /> }
        {isDataModalOpen && <DataInfoModal setIsModalOpen={setIsDataModalOpen} /> }
        {isServicesModalOpen && <ServicesInfoModal setIsModalOpen={setIsServicesModalOpen} /> }
    </div>
  )
}

export default App
