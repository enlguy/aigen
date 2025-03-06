import gsap from "gsap";

export function animateWave() {
  const canvas = document.getElementById("waveCanvas") as HTMLCanvasElement;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight / 2;

  let t = 0; // Time variable

  function drawWave() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    const waveHeight = 50;
    const waveFrequency = 0.02;
    const speed = 0.05;

    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);

    for (let x = 0; x < canvas.width; x += 10) {
      const y =
        Math.sin(x * waveFrequency + t) * waveHeight + canvas.height / 2;
      ctx.lineTo(x, y);
    }

    ctx.strokeStyle = "rgba(0, 150, 255, 0.6)";
    ctx.lineWidth = 3;
    ctx.stroke();

    t += speed;
    requestAnimationFrame(drawWave);
  }

  drawWave();
}
