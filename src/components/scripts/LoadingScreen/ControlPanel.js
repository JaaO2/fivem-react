import React, {useState, useEffect} from 'react'
import {stopMusic, restartMusic} from '../../../functions/Audio'

function ControlPanel(props) {

    const [paused, setPaused] = useState(false);

    const controlMusic = () => {
        if (!props.musicRef.current.paused) {
            stopMusic(props.musicRef);
            setPaused(true)
        } else {
            restartMusic(props.musicRef)
            setPaused(false)
        }
    }

    return (
    <div onClick={controlMusic} className="controlPanel">
        <span className="controlPanel_button" style={{color: paused ? "#ff0000" : "#fff"}}><i className={paused ? "fa-solid fa-volume-slash" : "fa-solid fa-volume-high"} title="Kliknij, aby wyciszyć muzykę"></i></span>
    </div>
  )
}

export default ControlPanel