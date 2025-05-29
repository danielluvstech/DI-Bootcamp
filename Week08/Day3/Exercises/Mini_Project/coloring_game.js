document.addEventListener("DOMContentLoaded", () => {
    const colors = [
      "red", "orange", "gold",
      "yellow", "yellowgreen", "lightgreen",
      "green", "turquoise", "cyan",
      "skyblue", "dodgerblue", "blue",
      "darkblue", "indigo", "purple",
      "violet", "pink", "lightgray",
      "gray", "black", "white"
    ];
  
    const palette = document.querySelector('.color_blocks');
    const grid = document.getElementById('color_grid');
    const clearBtn = document.getElementById('clear');
  
    let currentColor = 'black';
    let isDrawing = false;
  
    // Create color buttons
    colors.forEach(color => {
      const colorDiv = document.createElement('div');
      colorDiv.style.backgroundColor = color;
      colorDiv.addEventListener('click', () => {
        currentColor = color;
      });
      palette.appendChild(colorDiv);
    });
  
    // Create grid
    for (let i = 0; i < 50 * 30; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.addEventListener('mousedown', () => {
        isDrawing = true;
        cell.style.backgroundColor = currentColor;
      });
      cell.addEventListener('mouseover', () => {
        if (isDrawing) {
          cell.style.backgroundColor = currentColor;
        }
      });
      cell.addEventListener('mouseup', () => {
        isDrawing = false;
      });
      grid.appendChild(cell);
    }
  
    document.body.addEventListener('mouseup', () => {
      isDrawing = false;
    });
  
    clearBtn.addEventListener('click', () => {
      document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = 'white';
      });
    });
  });