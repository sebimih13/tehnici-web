function updateToTopButton()
{
    if (window.pageYOffset > 500)
    {
        toTop.classList.add("active");
    }
    else
    {
        toTop.classList.remove("active");
    }
}

function updateProgressBar()
{
    const scrollPercent = document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight) * 100 + "%";
    console.log(scrollPercent);

    document.querySelector("#progress-bar").style.width = scrollPercent;
}

window.onload = function()
{
    const toTop = document.querySelector(".to-top");
    
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 500)
        {
            toTop.classList.add("active");
        }
        else
        {
            toTop.classList.remove("active");
        }
    });

    window.addEventListener("scroll", updateProgressBar);
}


/*

    manipularea DOM-ului (selectare după id, tag, clasă, folosind selectori CSS) -> nu am dupa tag 

    crearea și stergerea de elemente HTML

    folosirea și modificarea evenimentelor generate de mouse si tastatură

    modificare de proprietăți

    inputuri funcționale (de exemplu: input de tip text/range/number/radio/checkbox, select, textarea)

    folosirea setTimeout sau setInterval
    
    folosirea localStorage (să se pastreze în localStorage o colecție de elemente)

    folosirea a cel puțin unei metode din clasele: Math, Array, String, Date

    schimbarea aleatoare a valorilor unor proprietăți (de exemplu: culoare, dimensiuni, poziție)

    folosirea proprietăților classList, target sau currentTarget

    folosirea metodelor getComputedStyle și stopPropagation
    
    validarea datelor dintr-un formular folosind expresii regulate

*/
