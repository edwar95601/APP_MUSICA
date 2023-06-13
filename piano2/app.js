window.addEventListener("DOMContentLoaded", function() {
  // Verificar si el dispositivo está en modo horizontal
  if (window.orientation === 90 || window.orientation === -90) {
    // Aplicar estilos para la visualización horizontal en dispositivos móviles
    document.body.style.transform = "rotate(-90deg)";
    document.body.style.transformOrigin = "left top";
    document.body.style.width = "100vh";
    document.body.style.height = "100vw";
    document.body.style.overflow = "hidden";
    document.documentElement.style.width = "100vh";
    document.documentElement.style.height = "100vw";
    document.documentElement.style.overflow = "hidden";
  }
});
      
    // Definir las escalas musicales con los nombres de los archivos de sonido
    const scale1 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale2 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale3 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale4 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale5 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale6 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale7 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale8 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale9 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale10 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale11 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale12 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale13 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale14 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale15 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale16 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale17 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale18 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale19 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale20 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale21 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale22 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale23 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale24 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale25 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale26 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale27 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale28 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale29 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale31 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale32 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale33 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale34 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale35 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale36 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale37 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale38 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale39 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale40 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale41 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale42 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale43 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale44 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale45 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale46 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale47 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale48 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale49 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale50 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale51 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale52 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale53 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale54 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale55 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale56 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };


    let intervalIds = []; // Array de IDs de intervalo para las melodías
    let tempo = 120; // Tempo inicial (BPM)

    // Función para reproducir una nota de una melodía
    function playNote(note, scale) {
      const audio = new Audio(`sounds/${scale[note]}`); // Ruta al archivo de sonido correspondiente a la nota
      audio.play();
      audio.addEventListener('ended', () => {
        audio.currentTime = 0;
      });
    }

    // Función para reproducir una melodía con el tempo actualizado
    function playMelody(scale) {
      const melody = ['C', 'D', 'E', 'F', 'G', 'A', 'B']; // Melodía en escala
      let beat = 0; // Contador de tiempo de beats
      const intervalId = setInterval(() => {
        playNote(melody[beat % melody.length], scale);
        beat++;
      }, 60000 / tempo); // Intervalo de tiempo según el tempo
      intervalIds.push(intervalId); // Almacenar el ID del intervalo para detenerlo más tarde
    }

    // Función para detener todas las melodías
    function stopMelodies() {
      intervalIds.forEach(intervalId => clearInterval(intervalId));
      intervalIds = [];
    }

    // Función para aumentar el tempo
    function increaseTempo() {
      tempo += 10;
      updateTempoDisplay();
      stopMelodies();
    }

    // Función para disminuir el tempo
    function decreaseTempo() {
      if (tempo > 10) {
        tempo -= 10;
        updateTempoDisplay();
        stopMelodies();
      }
    }

    // Obtén los botones
const playButtons = document.getElementsByClassName('play-button');

// Agrega event listeners a los botones
for (let i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener('mouseenter', function() {
    // Cambia la clase 'active' del botón al hacer clic
    this.classList.toggle('active');  
    // Agrega aquí tu código adicional para el evento del botón
  });
}

function toggleButtonColor(button) {
  if (button.classList.contains('btn-1')) {
    button.classList.toggle('btn-1-active');
  } else if (button.classList.contains('btn-2')) {
    button.classList.toggle('btn-2-active');
  } else if (button.classList.contains('btn-3')) {
    button.classList.toggle('btn-3-active');
  } else if(button.classList.contains('btn-4')) {
    button.classList.toggle('btn-4-active');
  } else if (button.classList.contains('btn-5')) {
    button.classList.toggle('btn-5-active');
  } else if (button.classList.contains('btn-6')) {
    button.classList.toggle('btn-6-active');
  } else if (button.classList.contains('btn-7')) {
    button.classList.toggle('btn-7-active');
  } else if (button.classList.contains('btn-8')) {
    button.classList.toggle('btn-8-active');
  }else if (button.classList.contains('btn-9')) {
    button.classList.toggle('btn-9-active');
  } else if (button.classList.contains('btn-10')) {
    button.classList.toggle('btn-10-active');
  } else if(button.classList.contains('btn-11')) {
    button.classList.toggle('btn-11-active');
  } else if (button.classList.contains('btn-12')) {
    button.classList.toggle('btn-12-active');
  } else if (button.classList.contains('btn-13')) {
    button.classList.toggle('btn-13-active');
  } else if (button.classList.contains('btn-14')) {
    button.classList.toggle('btn-14-active');
  } else if (button.classList.contains('btn-15')) {
    button.classList.toggle('btn-15-active');
  }else if (button.classList.contains('btn-16')) {
    button.classList.toggle('btn-16-active');
  }else if (button.classList.contains('btn-17')) {
    button.classList.toggle('btn-17-active');
  }else if (button.classList.contains('btn-18')) {
    button.classList.toggle('btn-18-active');
  } else if (button.classList.contains('btn-19')) {
    button.classList.toggle('btn-19-active');
  } else if(button.classList.contains('btn-20')) {
    button.classList.toggle('btn-20-active');
  } else if (button.classList.contains('btn-21')) {
    button.classList.toggle('btn-21-active');
  } else if (button.classList.contains('btn-22')) {
    button.classList.toggle('btn-22-active');
  } else if (button.classList.contains('btn-23')) {
    button.classList.toggle('btn-23-active');
  } else if (button.classList.contains('btn-24')) {
    button.classList.toggle('btn-24-active');
  } else if (button.classList.contains('btn-25')) {
    button.classList.toggle('btn-25-active');
  } else if(button.classList.contains('btn-26')) {
    button.classList.toggle('btn-26-active');
  } else if (button.classList.contains('btn-27')) {
    button.classList.toggle('btn-27-active');
  } else if (button.classList.contains('btn-28')) {
    button.classList.toggle('btn-28-active');
  } else if (button.classList.contains('btn-29')) {
    button.classList.toggle('btn-29-active');
  } else if (button.classList.contains('btn-30')) {
    button.classList.toggle('btn-30-active');
  } else if (button.classList.contains('btn-31')) {
    button.classList.toggle('btn-31-active');
  } else if (button.classList.contains('btn-32')) {
    button.classList.toggle('btn-32-active');
  } else if(button.classList.contains('btn-33')) {
    button.classList.toggle('btn-33-active');
  } else if (button.classList.contains('btn-34')) {
    button.classList.toggle('btn-34-active');
  } else if (button.classList.contains('btn-35')) {
    button.classList.toggle('btn-35-active');
  } else if (button.classList.contains('btn-36')) {
    button.classList.toggle('btn-36-active');
  } else if (button.classList.contains('btn-37')) {
    button.classList.toggle('btn-37-active');
  }else if (button.classList.contains('btn-38')) {
    button.classList.toggle('btn-38-active');
  } else if (button.classList.contains('btn-39')) {
    button.classList.toggle('btn-39-active');
  } else if(button.classList.contains('btn-40')) {
    button.classList.toggle('btn-40-active');
  } else if (button.classList.contains('btn-41')) {
    button.classList.toggle('btn-41-active');
  } else if (button.classList.contains('btn-42')) {
    button.classList.toggle('btn-42-active');
  } else if (button.classList.contains('btn-43')) {
    button.classList.toggle('btn-43-active');
  } else if (button.classList.contains('btn-44')) {
    button.classList.toggle('btn-44-active');
  }else if (button.classList.contains('btn-45')) {
    button.classList.toggle('btn-45-active');
  }else if (button.classList.contains('btn-46')) {
    button.classList.toggle('btn-46-active');
  }else if (button.classList.contains('btn-47')) {
    button.classList.toggle('btn-47-active');
  } else if (button.classList.contains('btn-48')) {
    button.classList.toggle('btn-48-active');
  } else if(button.classList.contains('btn-49')) {
    button.classList.toggle('btn-49-active');
  } else if (button.classList.contains('btn-50')) {
    button.classList.toggle('btn-50-active');
  } else if (button.classList.contains('btn-51')) {
    button.classList.toggle('btn-51-active');
  } else if (button.classList.contains('btn-52')) {
    button.classList.toggle('btn-52-active');
  } else if (button.classList.contains('btn-53')) {
    button.classList.toggle('btn-53-active');
  } else if (button.classList.contains('btn-54')) {
    button.classList.toggle('btn-54-active');
  } else if(button.classList.contains('btn-55')) {
    button.classList.toggle('btn-55-active');
  } else if (button.classList.contains('btn-56')) {
    button.classList.toggle('btn-56-active');
  } 
}

    // Función para actualizar la visualización del tempo
    function updateTempoDisplay() {
        const tempoDisplay = document.getElementById('tempoDisplay');
      tempoDisplay.textContent = `Tempo: ${tempo} BPM`;
    }

    // Obtener los botones y agregar event listeners
    const playButton1 = document.getElementById('playButton1');
    playButton1.addEventListener('mouseenter', () => {
      playMelody(scale1);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });
    

    const playButton2 = document.getElementById('playButton2');
    playButton2.addEventListener('mouseenter', () => {
      playMelody(scale2);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton3 = document.getElementById('playButton3');
    playButton3.addEventListener('mouseenter', () => {
      playMelody(scale3);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton4 = document.getElementById('playButton4');
    playButton4.addEventListener('mouseenter', () => {
      playMelody(scale4);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton5 = document.getElementById('playButton5');
    playButton5.addEventListener('mouseenter', () => {
      playMelody(scale5);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton6 = document.getElementById('playButton6');
    playButton6.addEventListener('mouseenter', () => {
      playMelody(scale6);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton7 = document.getElementById('playButton7');
    playButton7.addEventListener('mouseenter', () => {
      playMelody(scale7);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton8 = document.getElementById('playButton8');
    playButton8.addEventListener('mouseenter', () => {
      playMelody(scale8);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton9 = document.getElementById('playButton9');
    playButton9.addEventListener('mouseenter', () => {
      playMelody(scale9);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton10 = document.getElementById('playButton10');
    playButton10.addEventListener('mouseenter', () => {
      playMelody(scale10);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton11 = document.getElementById('playButton11');
    playButton11.addEventListener('mouseenter', () => {
      playMelody(scale11);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton12 = document.getElementById('playButton12');
    playButton12.addEventListener('mouseenter', () => {
      playMelody(scale12);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton13 = document.getElementById('playButton13');
    playButton13.addEventListener('mouseenter', () => {
      playMelody(scale13);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton14 = document.getElementById('playButton14');
    playButton14.addEventListener('mouseenter', () => {
      playMelody(scale14);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton15 = document.getElementById('playButton15');
    playButton15.addEventListener('mouseenter', () => {
      playMelody(scale15);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton16 = document.getElementById('playButton16');
    playButton16.addEventListener('mouseenter', () => {
      playMelody(scale16);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton17 = document.getElementById('playButton17');
    playButton17.addEventListener('mouseenter', () => {
      playMelody(scale17);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton18 = document.getElementById('playButton18');
    playButton18.addEventListener('mouseenter', () => {
      playMelody(scale18);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton19 = document.getElementById('playButton19');
    playButton19.addEventListener('mouseenter', () => {
      playMelody(scale19);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton20= document.getElementById('playButton20');
    playButton20.addEventListener('mouseenter', () => {
      playMelody(scale20);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton21 = document.getElementById('playButton21');
    playButton21.addEventListener('mouseenter', () => {
      playMelody(scale21);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton22 = document.getElementById('playButton22');
    playButton22.addEventListener('mouseenter', () => {
      playMelody(scale22);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton23 = document.getElementById('playButton23');
    playButton23.addEventListener('mouseenter', () => {
      playMelody(scale23);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton24 = document.getElementById('playButton24');
    playButton24.addEventListener('mouseenter', () => {
      playMelody(scale24);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton25 = document.getElementById('playButton25');
    playButton25.addEventListener('mouseenter', () => {
      playMelody(scale25);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton26 = document.getElementById('playButton26');
    playButton26.addEventListener('mouseenter', () => {
      playMelody(scale26);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton27 = document.getElementById('playButton27');
    playButton27.addEventListener('mouseenter', () => {
      playMelody(scale27);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton28 = document.getElementById('playButton28');
    playButton28.addEventListener('mouseenter', () => {
      playMelody(scale28);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton29 = document.getElementById('playButton29');
    playButton29.addEventListener('mouseenter', () => {
      playMelody(scale29);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton30 = document.getElementById('playButton30');
    playButton30.addEventListener('mouseenter', () => {
      playMelody(scale30);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton31 = document.getElementById('playButton31');
    playButton31.addEventListener('mouseenter', () => {
      playMelody(scale31);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton32 = document.getElementById('playButton32');
    playButton32.addEventListener('mouseenter', () => {
      playMelody(scale32);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton33 = document.getElementById('playButton33');
    playButton33.addEventListener('mouseenter', () => {
      playMelody(scale33);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton34 = document.getElementById('playButton34');
    playButton34.addEventListener('mouseenter', () => {
      playMelody(scale34);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton35 = document.getElementById('playButton35');
    playButton35.addEventListener('mouseenter', () => {
      playMelody(scale35);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton36 = document.getElementById('playButton36');
    playButton36.addEventListener('mouseenter', () => {
      playMelody(scale36);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton37 = document.getElementById('playButton37');
    playButton37.addEventListener('mouseenter', () => {
      playMelody(scale37);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton38 = document.getElementById('playButton38');
    playButton38.addEventListener('mouseenter', () => {
      playMelody(scale38);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton39 = document.getElementById('playButton39');
    playButton39.addEventListener('mouseenter', () => {
      playMelody(scale39);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton40 = document.getElementById('playButton40');
    playButton40.addEventListener('mouseenter', () => {
      playMelody(scale40);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton41 = document.getElementById('playButton41');
    playButton41.addEventListener('mouseenter', () => {
      playMelody(scale41);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton42 = document.getElementById('playButton42');
    playButton42.addEventListener('mouseenter', () => {
      playMelody(scale42);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton43 = document.getElementById('playButton43');
    playButton43.addEventListener('mouseenter', () => {
      playMelody(scale43);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton44 = document.getElementById('playButton44');
    playButton44.addEventListener('mouseenter', () => {
      playMelody(scale44);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton45 = document.getElementById('playButton45');
    playButton45.addEventListener('mouseenter', () => {
      playMelody(scale45);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton46 = document.getElementById('playButton46');
    playButton46.addEventListener('mouseenter', () => {
      playMelody(scale46);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton47 = document.getElementById('playButton47');
    playButton47.addEventListener('mouseenter', () => {
      playMelody(scale47);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton48 = document.getElementById('playButton48');
    playButton48.addEventListener('mouseenter', () => {
      playMelody(scale48);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton49 = document.getElementById('playButton49');
    playButton49.addEventListener('mouseenter', () => {
      playMelody(scale49);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton50 = document.getElementById('playButton50');
    playButton50.addEventListener('mouseenter', () => {
      playMelody(scale50);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton51 = document.getElementById('playButton51');
    playButton51.addEventListener('mouseenter', () => {
      playMelody(scale51);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton52 = document.getElementById('playButton52');
    playButton52.addEventListener('mouseenter', () => {
      playMelody(scale52);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton53 = document.getElementById('playButton53');
    playButton53.addEventListener('mouseenter', () => {
      playMelody(scale53);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton54 = document.getElementById('playButton54');
    playButton54.addEventListener('mouseenter', () => {
      playMelody(scale54);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton55 = document.getElementById('playButton55');
    playButton55.addEventListener('mouseenter', () => {
      playMelody(scale55);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton56 = document.getElementById('playButton56');
    playButton56.addEventListener('mouseenter', () => {
      playMelody(scale56);
      setTimeout(stopMelodies, 60000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });


    const stopButton = document.getElementById('stopButton');
    stopButton.addEventListener('click', stopMelodies);

    const increaseTempoButton = document.getElementById('increaseTempoButton');
    increaseTempoButton.addEventListener('click', increaseTempo);

    const decreaseTempoButton = document.getElementById('decreaseTempoButton');
    decreaseTempoButton.addEventListener('click', decreaseTempo);

    // Actualizar la visualización del tempo inicial
    updateTempoDisplay();
































































