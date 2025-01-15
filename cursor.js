const text = "gurfacegg2";

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
