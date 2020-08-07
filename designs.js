// Select color input
// Select size input
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    let color = document.getElementById('colorPicker').value;
// When size is submitted by the user, call makeGrid()

function makeGrid() {
    const table = document.getElementById('pixelCanvas');

    for(let i = 0; i<width; i++){
        let row = document.createElement('tr');
        for(let j = 0; j<height; i++){
            let cell = document.createElement('td');
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.addEventListener('mousemove',)
  }
  
  function processMouseMove(e) {
      console.log(e.target);
    e.target.setAttribute('style','background-color: '+color)
  }
  document.getElementById('sizePicker').addEventListener('submit',makeGrid);