const background = document.querySelector('.background');

const balloonColors = ['#ff6b6b', '#ffa94d', '#ffd43b', '#69db7c', '#4dabf7', '#9775fa', '#f06595'];

function createBalloon() {
  const balloon = document.createElement('span');
  const size = 20 + Math.random() * 35;

  balloon.className = 'item balloon';
  balloon.style.left = `${Math.random() * 100}vw`;
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size * 1.2}px`;
  balloon.style.background = balloonColors[Math.floor(Math.random() * balloonColors.length)];
  balloon.style.animationDuration = `${12 + Math.random() * 10}s`;
  balloon.style.animationDelay = `${Math.random() * -15}s`;
  balloon.style.setProperty('--drift', `${-40 + Math.random() * 80}px`);
  balloon.style.setProperty('--spin', `${-50 + Math.random() * 100}deg`);

  return balloon;
}

function createHeart() {
  const heart = document.createElement('span');
  const size = 14 + Math.random() * 18;

  heart.className = 'item heart';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.animationDuration = `${10 + Math.random() * 8}s`;
  heart.style.animationDelay = `${Math.random() * -12}s`;
  heart.style.setProperty('--drift', `${-50 + Math.random() * 100}px`);
  heart.style.setProperty('--spin', `${-90 + Math.random() * 180}deg`);

  return heart;
}

for (let i = 0; i < 28; i += 1) {
  background.appendChild(createBalloon());
}

for (let i = 0; i < 32; i += 1) {
  background.appendChild(createHeart());
}
