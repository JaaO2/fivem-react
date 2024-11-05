const playMusic = (musicRef) => {
    if (!musicRef.current.currentTime) {
        musicRef.current.play().then(() => {
          document.removeEventListener('mousemove', playMusic);
        }).catch(error => false);
      }
}


const stopMusic = (musicRef) => {
  if (musicRef.current.currentTime && !musicRef.current.paused) {
      musicRef.current.pause();
  }
}

const restartMusic = (musicRef) => {
  if (musicRef.current.paused) {
      musicRef.current.play().then(() => {
      }).catch(error => false);
    }
}

export {playMusic, stopMusic, restartMusic}


