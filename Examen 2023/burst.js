
window.onload=function() {

    var infoEl = document.createElement("div");
    infoEl.setAttribute("id", "info");
    document.body.appendChild(infoEl);

    if (localStorage.getItem("sparte"))
    {
        changeInfoText();
    }
    else
    {
        localStorage.setItem("sparte", 0);
        changeInfoText();
    }
    
    const rows = 6;
    const cols = 10;	
    drawTable(rows, cols);

    document.addEventListener("keydown", inputTasta, false);
}

function changeInfoText()
{
    var infoElement = document.getElementById("info");
    infoElement.textContent = localStorage.getItem("sparte");
}

function inputTasta()
{
    var name = event.key;

    if (name == "b")
    {
        // sparge aleator
        console.log("b");

        var randomRow = getRandomNumber(6);
        var randomColumn = getRandomNumber(10);

        var cell = document.getElementsByClassName('row' + randomRow + ' ' + 'column' + randomColumn);
        console.log(cell);
    }
    else if (name == "r")
    {
        // bubble wrap infinit
        console.log("r");
    }
}

function sparge(event)
{
    // verifica daca bula este deja sparta
    if (event.target.classList.contains("nespart") == false)
    {
        return;
    }

    // sparge bula
    event.target.classList.remove("nespart");

    event.target.src = "bubble1.jpg";
    event.target.style.width = '60px';
    event.target.style.height = 'auto';

    let nrSparte = Number(localStorage.getItem("sparte"));
    nrSparte = nrSparte + 1;
    localStorage.setItem("sparte", nrSparte);

    changeInfoText();
}

function drawTable(nrows, ncols) 
{
   var container = document.body;
   var table = document.createElement('table');

   for (let i = 0; i < nrows; i++) 
   {
        let row = document.createElement('tr');
        for (let j = 0; j < ncols; j++) 
        {
            let cell = document.createElement('td');
            cell.classList.add('column' + j)
            cell.classList.add('row' + i)

            let imgElement = document.createElement('img');
            imgElement.src = "bubble0.jpg";
            imgElement.style.width = '60px';
            imgElement.style.height = 'auto';
            imgElement.classList.add("nespart");
            
            cell.appendChild(imgElement);
            row.appendChild(cell);

            imgElement.addEventListener('click', sparge);
        }
        table.appendChild(row);
   }

   container.appendChild(table);
}

function getRandomNumber(max)
{
    Math.floor(Math.random() * max);
}

