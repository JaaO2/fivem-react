import React from 'react'
import '../../../styles/scripts/spawnSelector.scss'

function SpawnSelector() {
  return (
    <div className="spawnSelector">
        <div className="spawnSelector_box">
            <span className="spawnSelector_arrow"><i class="fa-solid fa-left"></i></span>
            <span className="spawnSelector_text">Los Santos</span>
            <span className="spawnSelector_arrow"><i class="fa-solid fa-right"></i></span>
        </div>

        <div className="bottomInformation">Użyj klawiszy strzałek lub myszki, aby zmienić wybór spawnu. Aby zatwierdzić kliknij spację</div>
    </div>
  )
}

export default SpawnSelector