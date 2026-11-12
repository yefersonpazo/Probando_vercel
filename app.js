// Pequeña interacción para comprobar que el JavaScript también se despliega.
const boton = document.getElementById('boton');
const contador = document.getElementById('contador');
const colores = ['#3df5a6', '#9b87ff', '#ffb547', '#ff6b8b', '#4cc9f0'];
let clics = 0;

boton.addEventListener('click', () => {
  clics++;
  contador.textContent = `Clics: ${clics}`;

  for (let i = 0; i < 40; i++) {
    const pieza = document.createElement('span');
    pieza.className = 'confeti';
    pieza.style.left = `${Math.random() * 100}vw`;
    pieza.style.background = colores[i % colores.length];
    pieza.style.animationDelay = `${Math.random() * 0.4}s`;
    document.body.appendChild(pieza);
    setTimeout(() => pieza.remove(), 2200);
  }
});
