
function printtt(tabla)
{
    var tablaPrint = new String();
    
    for (var i = 0; i < 9; i++)
    {
        if (tabla[i] == "X")
        {
            tablaPrint += "| X ";
        }
        else if (tabla[i] == "0")
        {
            tablaPrint += "| 0 ";
        }
        else
        {
            tablaPrint += "| " + (i + 1) + " ";
        }
        
        if ((i + 1) % 3 == 0)
        {
            tablaPrint += "|\n";
        }
    }
    
    return tablaPrint
}

function valid(tabla, pozitie)
{
    if (1 <= pozitie && pozitie <= 9 && tabla[pozitie - 1] == "?")
    {
        return true;
    }
    return false;
}

function win(tabla)
{
    // verifica diagonala
    if (tabla[0] != "?" && tabla[0] == tabla[4] && tabla[4] == tabla[8])
    {
        return tabla[0];
    }

    if (tabla[6] != "?" && tabla[6] == tabla[4] && tabla[4] == tabla[2])
    {
        return tabla[6];
    }

    // verifica liniile
    for (var i = 0; i < 3; i++)
    {
        var startRand = i * 3;
        if (tabla[startRand] != "?" && tabla[startRand] == tabla[startRand + 1] && tabla[startRand + 1] == tabla[startRand + 2])
        {
            return tabla[startRand];
        }
    }

    // verifica coloanele
    for (var j = 0; j < 3; j++)
    {
        if (tabla[j] != "?" && tabla[j] == tabla[j + 3] && tabla[j + 3] == tabla[j + 6])
        {
            return tabla[j];
        }
    }
}

function draw(tabla)
{
    for (var i = 0; i < 9; i++)
    {
        if (tabla[i] == "?")
        {
            return false;
        }
    }

    return true;
}

function computer_move(tabla)
{
    var nextPoz = Math.floor(Math.random() * 9) + 1;
    console.log(nextPoz);
    
    while (valid(tabla, nextPoz) == false)
    {
        nextPoz = Math.floor(Math.random() * 9) + 1;
        console.log(nextPoz);
    }

    return nextPoz;
}

var nume;
while (true)
{
    nume = prompt("Hai sa jucam X si 0. Cum te cheama?");
    if (nume != "")
    {
        break;
    }
}

var alegerePlayer;
while (true)
{
    var alegere = prompt("Buna, " + nume + ". Cu ce vrei sa joci? X sau 0? X incepe primul");

    if (alegere == "X")
    {
        alegerePlayer = "X";
        break;
    }
    else if (alegere == "0")
    {
        alegerePlayer = "0";
        break;
    }
}

var tabla = new Array()

for (var i = 0; i < 9; i++)
{
    tabla.push("?");
}

var tura = 1;
while (true)
{
    var castigator = win(tabla);
    if (castigator != undefined)
    {
        if (alegerePlayer == castigator)
        {
            alert("Bravo, " + nume + ", ai castigat!");
            break;
        }
        else
        {
            alert("AI pierdut! :(");
            break;
        }
    }
    else if (draw(tabla))
    {
        alert("Remiza!");
        break;
    }

    var player = "X";
    if (tura == 0)
    {
        player = "0";
    }

    var poz = 0;
    if ((tura == 1 && alegerePlayer == "X") || (tura == 0 && alegerePlayer == "0"))
    {
        poz = prompt(printtt(tabla) + "\nRandul lui " + player + "\nUnde vrei sa pui urmatorul semn?");
    }
    else 
    {
        poz = computer_move(tabla);
    }

    if (!valid(tabla, poz))
    {
        alert("Pozitia aleasa nu este valida");
    }
    else
    {
        if (tura == 1)
        {
            // tura lui X
            tabla[poz - 1] = "X";
        }
        else
        {
            // tura lui 0
            tabla[poz - 1] = "0";
        }
    
        tura = 1 - tura;
    }
}

