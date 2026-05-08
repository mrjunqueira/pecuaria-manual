// Marca o link ativo com base na URL atual
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const atual = window.location.pathname;
  links.forEach(link => {
    if (link.getAttribute('href') && atual.endsWith(link.getAttribute('href').replace('../', '').replace('./', ''))) {
      link.classList.add('ativo');
    }
  });
});
