// Select color input
// Select size input


// When size is submitted by the user, call makeGrid()

function makeGrid() {
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    let color = document.getElementById('colorPicker').value;
    const table = document.getElementById('pixelCanvas');

    for (let i = 0; i < height; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < width; j++) {
            let cell = document.createElement('td');
            row.appendChild(cell);

            cell.addEventListener('click', (event) => { event.target.setAttribute('style', 'background-color:' + color) });
        }
        table.appendChild(row);
    }
}
document.getElementById('sizePicker').addEventListener('submit', (event) => {
    event.preventDefault();
    makeGrid()
});