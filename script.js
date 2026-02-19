document.getElementById('year').textContent = new Date().getFullYear();

// Lightweight starfield for a cyber/metaverse vibe.
(() => {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let w = 0;
  let h = 0;
  let stars = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.max(60, Math.floor((w * h) / 18000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 1.2 + 0.2,
      r: Math.random() * 1.6 + 0.2,
    }));
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      s.y += s.z * 0.35;
      if (s.y > h + 5) {
        s.y = -5;
        s.x = Math.random() * w;
      }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180, 220, 255, ${0.35 + s.z * 0.35})`;
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }

  resize();
  frame();
  window.addEventListener('resize', resize);
})();

// Mount utterances comments for each post block.
const commentBlocks = document.querySelectorAll('.comments');
commentBlocks.forEach((el) => {
  const repo = el.dataset.repo;
  const issueTerm = el.dataset.issueTerm;

  const script = document.createElement('script');
  script.src = 'https://utteranc.es/client.js';
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.setAttribute('repo', repo);
  script.setAttribute('issue-term', issueTerm);
  script.setAttribute('label', '💬 blog-comment');
  script.setAttribute('theme', 'github-dark');

  el.appendChild(script);
});
