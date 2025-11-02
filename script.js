
        const buttons = document.querySelectorAll('.container button');
        const body = document.querySelector('body');
        const actionArr = ['crash', 'kick', 'snare', 'tom'];
        const imagePath = 'images/';
        const soundPath = 'sounds/';

        function playSound(type) {
            const audio = new Audio(`${soundPath}${type}.mp3`);
            audio.play();
        }

        function scaleButton(btn) {
            btn.style.transform = 'scale(.9)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 100);
        };

        function playSoundKey(e, actionArr) {
            e.preventDefault();

            const keyMap = {
                c: 0,
                k: 1,
                s: 2,
                t: 3,
            };

            document.addEventListener('keydown', (e) => {
                const key = e.key.toLowerCase();
                const index = keyMap[key];

                if (index !== undefined) {
                    playSound(actionArr[index]);
                    scaleButton(buttons[index]);
                }
            });

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

  
