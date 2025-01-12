const text = "gurfacegg2";
        const images = [
            'neerhad1.jpg',
            'https://static.vecteezy.com/system/resources/thumbnails/036/025/219/small_2x/ai-generated-happy-fat-man-in-a-blue-t-shirt-showing-thumb-up-photo.jpg',
            '1736717796719.jpg',
        ];


        document.addEventListener('mousemove', (event) => {
            const x = event.pageX;
            const y = event.pageY;


            let offsetX = 0;
            for (let char of text) {
                const letter = document.createElement('div');
                letter.className = 'floating-letter';
                letter.innerText = char;
                letter.style.left = `${x + offsetX}px`;
                letter.style.top = `${y}px`;


                document.body.appendChild(letter);
                setTimeout(() => {
                    letter.remove();
                }, 1500);


                offsetX += 15;
            }


            for (let imgSrc of images) {
                const img = document.createElement('img');
                img.className = 'exploding-image';
                img.src = imgSrc;
                const randomX = Math.random() * 60 - 30;
                const randomY = Math.random() * 60 - 30;


                img.style.left = `${x + randomX}px`;
                img.style.top = `${y + randomY}px`;


                document.body.appendChild(img);


                setTimeout(() => {
                    img.remove();
                }, 1500);
            }
        });
