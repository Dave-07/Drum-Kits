
        const buttons = document.querySelectorAll('.container button');
        const body = document.querySelector('body');
        const actionArr = ['crash', 'kick', 'snare', 'tom'];
        const imagePath = 'images/';
        const soundPath = 'sounds/';

        function playSound(type) {
            const audio = new Audio(`${soundPath}${type}.mp3`);
            audio.play();
        }

        function scaleButton(btn){
                    btn.style.transform = 'scale(.9)';
                    setTimeout(()=> {
                        btn.style.transform = 'scale(1)';
                    }, 100);
                    };

        function playSoundKey(e, actionArr){
            switch(e.key.toLowerCase()){
                    case 'c':
                        playSound(actionArr[0]);
                        scaleButton(buttons[0]);
                        break;
                    case 'k':
                        playSound(actionArr[1]);
                        scaleButton(buttons[1]);
                        break;
                    case 's':
                        playSound(actionArr[2]);
                        scaleButton(buttons[2]);
                        break;
                    case 't':
                        playSound(actionArr[3]);
                        scaleButton(buttons[3]);
                        break;
                    default:
                        alert('wrong key!');
                }   
            };

        body.addEventListener('keydown', e => {
                playSoundKey(e, actionArr);
            });

        buttons.forEach((el, idx) => {
            el.style.background = `url(${imagePath}${actionArr[idx]}.png) no-repeat top right / cover`;

            if (idx === 3) el.style.backgroundColor = 'white';

            el.setAttribute('onmousedown', "this.style.backgroundSize = '105%'");

            el.setAttribute('onmouseup', "this.style.backgroundSize = '100%'");

            el.addEventListener('click', e => {
                playSound(actionArr[idx]);
            });

        });
