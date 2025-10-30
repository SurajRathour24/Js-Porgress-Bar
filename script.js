    
    let heading = document.querySelector('h2');
    let progressBar = document.querySelector('#progressBar');
    let progressText = document.querySelector('#progressText');
    let msg = document.querySelector('.progress-msg');

    let range = 0;
    let bar = setInterval(function (e) {
        if(range < 100){
            progressBar.style.width = `${range}%`;
            progressBar.textContent = `${range}%`;
            progressText.textContent = `${range}%`;
            if(range > 70){
                progressBar.style.background = 'green';
                msg.style.display = 'initial';
                msg.style.padding = '10px';
            }
        }
        range ++;
 
    }, 100);

