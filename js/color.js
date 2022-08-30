
const colors = ['#FF5733', '#33FF8A', '#3333FF'];
 
 
 
    const btnColor = document.getElementById('btnColor');
    const color = document.querySelector('.color');


    btnColor.addEventListener ('click', () => {
        const numeroRandom = getNumeroRandom();


        document.body.style.backgroundColor = colors[numeroRandom];
        color.textContent = color [numeroRandom];
    });


getNumeroRandom = () => {
    return Math.floor(Math.random()*colors.length);
};

