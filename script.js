const container = document.querySelector('#container');

    let x = parseInt(prompt("What size do you want the grid to be?"));


for (i=0; i<=x; i++){
    let frameContent = document.createElement('div');
    frameContent.classList.add('flex-grid')
    container.appendChild(frameContent);
        for (d=0; d<=x; d++){
            let f1C1 = document.createElement('h1');
            f1C1.classList.add('col');
            frameContent.appendChild(f1C1)
    }
    d=0;
}