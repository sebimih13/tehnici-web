
function handleMove(event)
{
    var vizor = document.getElementById('vizor');
    var img = vizor.querySelector('img');
    
    var currentMarginTop = parseInt(img.style.marginTop) || 0;
    var currentMarginLeft = parseInt(img.style.marginLeft) || 0;
    var step = 10;

    switch (event.key) 
    {
        case 'ArrowUp':
            img.style.marginTop = Math.min(currentMarginTop + step, 0) + 'px';
            break;
            
        case 'ArrowDown':
            img.style.marginTop = Math.max(currentMarginTop - step, -img.offsetHeight + vizor.offsetHeight) + 'px';
            break;
                
        case 'ArrowLeft':
            img.style.marginLeft = Math.min(currentMarginLeft + step, 0) + 'px';
            break;
            
        case 'ArrowRight':
            img.style.marginLeft = Math.max(currentMarginLeft - step, -img.offsetWidth + vizor.offsetWidth) + 'px';
            break;

        case '+':
            console.log("+");
            break;

        case '-':
            console.log("-");
            break;
    }
}

window.onload = function()
{
    document.addEventListener('keydown', handleMove);
}


 