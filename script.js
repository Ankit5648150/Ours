const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.3 }
);

document
  .querySelectorAll(".memory-inner")
  .forEach(el => observer.observe(el));
