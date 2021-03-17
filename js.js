const colors = [
    '#2196f3',
    '#e91e63',
    '#ffeb3b',
    '#74ff1d'
]



function createSquare(){
    const section = document.querySelector('section');
    const main = document.querySelector('main');
    const square = document.createElement('span');
    const line = document.createElement('main');


    var size = Math.random() * 50;

    square.style.width = 20 + size +'px';
    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    
    line.style.width = 2 + size +'px';
    line.style.height = 10 + size + 'px';

    line.style.top = Math.random() * innerHeight + 'px';
    line.style.left = Math.random() * innerWidth + 'px';


  
    const bg = colors[Math.floor(Math.random() * colors.length)];
    
    square.style.background = bg;
    line.style.background = bg;

    section.appendChild(square);
    main.appendChild(line);

    
    

    setTimeout(() => {
        square.remove()
        line.remove()
    },20000)
}

setInterval(createSquare, 150)