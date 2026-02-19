document.getElementById('year').textContent = new Date().getFullYear();

// Mount utterances comments for each post block.
// It uses GitHub OAuth inside the widget, so visitors can sign in with GitHub and comment.
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
