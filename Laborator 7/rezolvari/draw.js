function drawTable(nrows, ncols) 
{
   /* 
      1. Generați un tabel cu 'nrows' rânduri și 'ncols' coloane 
      și adăugați-l în div-ul cu id-ul 'container'. 
   */
  
   var container = document.getElementById('container');
   var table = document.createElement('table');

   for (var i = 0; i < nrows; i++) 
   {
      var row = document.createElement('tr');
      for (var j = 0; j < ncols; j++) 
      {
         var cell = document.createElement('td');
         cell.classList.add('column' + j)
         cell.classList.add('row' + i)
         row.appendChild(cell);
      }
      table.appendChild(row);
   }

   container.appendChild(table);
}

function colorCol(column, color) 
{
   /*
      2. Colorați coloana 'column' din tabla de desenat cu culoarea 'color'.
   */

   var cells = document.getElementsByClassName('column' + column);
   for (var i = 0; i < cells.length; i++) 
   {
      cells[i].style.backgroundColor = color;
   }
}

function colorRow(row, color) 
{
   /*
      2. Colorați rândul 'row' din tabla de desenat cu culoarea 'color'.
   */

   var cells = document.getElementsByClassName('row' + row);
   for (var i = 0; i < cells.length; i++) 
   {
      cells[i].style.backgroundColor = color;
   } 
}

function rainbow(target) 
{
   let colors = ["rgb(255, 0, 0)", "rgb(255, 154, 0)", "rgb(240, 240, 0)", "rgb(79, 220, 74)", "rgb(63, 218, 216)", "rgb(47, 201, 226)", "rgb(28, 127, 238)", "rgb(95, 21, 242)", "rgb(186, 12, 248)", "rgb(251, 7, 217)"];
   /*
      3. Desenați un curcubeu pe verticală sau orizontală conform argumentului 'target' folosind culorile din 'colors' și funcțiile 'colorCol' și 'colorRow'.     
   */

   var nrRows = document.getElementsByTagName('tr').length;
   var nrColumns = document.getElementsByTagName('td').length / nrRows;

   if (target == 'verticala')
   {  
      var nrCulori = Math.floor(nrColumns / colors.length);
      
      var cnt = 0;
      var index = 0;

      for (var i = 0; i < nrColumns; i++)
      {
         if (cnt == nrCulori)
         {
            cnt = 0;
            index = index + 1;
         }

         colorCol(i, colors[index]);
         cnt = cnt + 1;
      }
   }
   else
   {
      var nrCulori = Math.floor(nrRows / colors.length);
      
      var cnt = 0;
      var index = 0;

      for (var i = 0; i < nrColumns; i++)
      {
         if (cnt == nrCulori)
         {
            cnt = 0;
            index = index + 1;
         }

         colorRow(i, colors[index]);
         cnt = cnt + 1;
      }
   }
}

function getNthChild(element, n) 
{
   /*
      4. Întoarceți al n-lea element copil al unui element dat ca argument.
   */

   return querySelector(element + ':nth-child(' + n + ')');
};

function drawPixel(row, col, color) 
{	
   /*
      5. Colorați celula de la linia 'row' și coloana 'col' cu culoarea `color'.
   */

   var cell = document.getElementsByClassName('row' + row + ' ' + 'column' + col);
   cell[0].style.backgroundColor = color;
}

function drawLine(r1, c1, r2, c2, color) 
{
   /*
      6. Desenați o linie (orizontală sau verticală) de la celula aflată 
      pe linia 'r1', coloana 'c1' la celula de pe linia 'r2', coloana 'c2'
      folosind culoarea 'color'. 
      Hint: verificați mai întâi că punctele (r1, c1) și (r2, c2) definesc
      într-adevăr o linie paralelă cu una dintre axe.
   */

   if (r1 == r2)
   {
      for (var i = c1; i <= c2; i++)
      {
         drawPixel(r1, i, color);
      }
   }
   else if (c1 == c2)
   {
      for (var i = r1; i <= r2; i++)
      {
         drawPixel(i, c1, color);
      }
   }
}

function drawRect(r1, c1, r2, c2, color) 
{
   /*
      7. Desenați, folosind culoarea 'color', un dreptunghi cu colțul din 
      stânga sus în celula de pe linia 'r1', coloana 'c1', și cu 
      colțul din dreapta jos în celula de pe linia 'r2', coloana 'c2'.
   */

   for (var i = r1; i <= r2; i++)
   {
      drawLine(i, c1, i, c2, color);
   }
}

function drawPixelExt(row, col, color) 
{
   /*
      8. Colorați celula de la linia 'row' și coloana 'col' cu culoarea 'color'.
      Dacă celula nu există, extindeți tabla de desenat în mod corespunzător.
   */
}

function colorMixer(colorA, colorB, amount)
{
   let cA = colorA * (1 - amount);
   let cB = colorB * (amount);
   return parseInt(cA + cB);
}

function drawPixelAmount(row, col, color, amount) 
{
   /* 
   9. Colorați celula la linia 'row' și coloana 'col' cu culoarea 'color'
   în funcție de ponderea 'amount' primită ca argument (valoare între 0 și 1). 
   Dacă 'amount' are valoarea:
   1, atunci celula va fi colorată cu 'color'
   0, atunci celula își va păstra culoarea inițială
   pentru orice altă valoare, culoarea inițială și cea dată de argumentul 
   'color' vor fi amestecate. De exemplu, dacă ponderea este 0.5, atunci 
   culoarea inițială și cea nouă vor fi amestecate în proporții egale (50%). 
   */

   /*   
   Hint 1: folosiți funcția colorMixer de mai sus.

   Hint 2: pentru un argument 'color' de forma 'rgb(x,y,z)' puteți folosi
   let newColorArray = color.match(/\d+/g); 
   pentru a obține un Array cu trei elemente, corespunzătoare valorilor
   asociate celor trei culori - newColorArray = [x, y, z]
   
   Hint 3: pentru a afla culoarea de fundal a unui element puteți folosi
   metoda getComputedStyle(element). Accesând proprietatea backgroundColor 
   a obiectului întors, veți obține un string de forma 'rgb(x,y,z)'.
   */

   // TODO
}

function delRow(row) 
{
   /*
      10. Ștergeți linia cu numărul 'row' din tabla de desenat.
   */

   // TODO
}

function delCol(col) 
{
   /*
      10. Ștergeți coloana cu numărul 'col' din tabla de desenat.
   */

   // TODO
}

function shiftRow(row, pos) 
{
   /*
      11. Aplicați o permutare circulară la dreapta cu 'pos' poziții a
      elementelor de pe linia cu numărul 'row' din tabla de desenat. 
   */

   // TODO
}

function jumble() 
{
   /*
      12. Folosiți funcția 'shiftRow' pentru a aplica o permutare circulară
      cu un număr aleator de poziții fiecărei linii din tabla de desenat.
   */

   // TODO
}

function transpose() 
{
   /*
      13. Transformați tabla de desenat în transpusa ei.
   */
}

function flip(element) 
{
   /*
      14. Inversați ordinea copiilor obiectului DOM 'element' primit ca argument.
   */
}

function mirror() 
{
   /*
      15. Oglindiți pe orizontală tabla de desenat: luați jumătatea stângă a tablei, 
      aplicați-i o transformare flip și copiați-o în partea dreaptă a tablei.
   */
}

function smear(row, col, amount) 
{
   /*
      16. Întindeți culoarea unei celule de pe linia 'row' și coloana 'col' în celulele
      învecinate la dreapta, conform ponderii date de 'amount' (valoare între 0 și 1).
      Cu colorarea fiecărei celule la dreapta, valoarea ponderii se înjumătățește. 
      Hint: folosiți funcția 'drawPixelAmount'.
   */
}


window.onload = function()
{
   const rows = 30;
   const cols = 30;	
   drawTable(rows, cols);

   rainbow('orizontala');

   drawPixel(2, 2, 'white');
   drawLine(4, 4, 4, 10, 'white');
   drawRect(8, 8, 12, 12, 'white');


}


