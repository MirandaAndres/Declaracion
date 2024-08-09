document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('container');
    const images = ['../img/taylorswitf1.jpg','../img/morat1.jpg',
                    '../img/taylorswitf2.jpg','../img/morat2.jpg',
                    '../img/taylorswitf3.jpg','../img/morat3.jpg',
                    '../img/taylorswitf4.jpg','../img/morat4.jpg',
                    '../img/taylorswitf5.jpg','../img/morat5.jpg',
                    '../img/taylorswitf6.jpg','../img/morat6.jpg',
                    '../img/taylorswitf7.jpg','../img/morat7.jpg',
                    '../img/taylorswitf8.jpg','../img/morat8.jpg',
                    '../img/taylorswitf9.jpg','../img/morat10.jpg'];

    function getRandomPosition() {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        return { x, y };
    }

    function getRandomRotation() {
        return (Math.random() - 0.5) * 90; // Rango de -45 a 45 grados
    }

    function createImageElement(src) {
        const wrapper = document.createElement('div');
        wrapper.className = 'image-wrapper';

        const img = document.createElement('img');
        img.src = src;
        img.onload = () => {
            const { x, y } = getRandomPosition();
            wrapper.style.left = `${x}px`;
            wrapper.style.top = `${y}px`;
            wrapper.style.transform = `rotate(${getRandomRotation()}deg)`;
        };

        wrapper.appendChild(img);
        return wrapper;
    }

    function addImage() {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const imgElement = createImageElement(randomImage);
        container.appendChild(imgElement);

        setTimeout(() => {
            imgElement.style.opacity = 1;
        }, 100);

        setTimeout(() => {
            imgElement.style.opacity = 0;
            setTimeout(() => {
                container.removeChild(imgElement);
            }, 2000);
        }, 3000); // Tiempo que la imagen permanecerá visible
    }

    setInterval(addImage, 1000); // Intervalo para agregar nuevas imágenes

    function handleYesButtonClick() {
        alert('Jejeje, Lo sabia!!!');
        window.location.href = 'si.html';
    }

    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    if (yesButton) {
        yesButton.addEventListener('click', () => {
            alert('Jejeje, Lo sabia!!!');
            window.location.href = 'js/si.html';
        });
    }

    if (noButton) {
        noButton.addEventListener('click', () => {
            window.location.href = 'js/no1.html';
        });
    }

    const yesButton1 = document.getElementById('yes-button1');
    const noButton1 = document.getElementById('no-button1');
    const yesButton2 = document.getElementById('yes-button2');
    const noButton2 = document.getElementById('no-button2');

    if (yesButton1) {
        yesButton1.addEventListener('click', handleYesButtonClick);
    }

    if (noButton1) {
        noButton1.addEventListener('click', () => {
            window.location.href = 'no2.html';
        });
    }

    if (yesButton2) {
        yesButton2.addEventListener('click', handleYesButtonClick);
    }

    if (noButton2) {
        noButton2.addEventListener('click', () => {
            const randomX = Math.random() * 700;
            const randomY = Math.random() * 700;
            noButton2.style.setProperty('top', randomY + '%');
            noButton2.style.setProperty('left', randomX + '%');
            noButton2.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
        });
    }
    // Crear partículas
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2000); // Eliminar la partícula después de 2 segundos
    }

    // Crear partículas cuando se mueve el ratón
    document.addEventListener('mousemove', (event) => {
        createParticle(event.clientX, event.clientY);
    });

    // Crear partículas automáticamente
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createParticle(x, y);
    }, 100); // Intervalo para agregar nuevas partículas
});