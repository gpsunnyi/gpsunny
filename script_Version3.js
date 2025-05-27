// Arrow toggle for job items, animated
document.querySelectorAll('.job-toggle').forEach((toggle, idx) => {
  toggle.addEventListener('click', function() {
    const parent = this.closest('.job-item');
    const expanded = this.getAttribute('aria-expanded') === 'true';
    // Collapse all others
    document.querySelectorAll('.job-item').forEach(item => {
      if(item !== parent) {
        item.classList.remove('active');
        item.querySelector('.job-toggle').setAttribute('aria-expanded', 'false');
      }
    });
    // Toggle current
    if(!expanded) {
      this.setAttribute('aria-expanded', 'true');
      parent.classList.add('active');
    } else {
      this.setAttribute('aria-expanded', 'false');
      parent.classList.remove('active');
    }
  });
});

// Optionally, open first job by default:
document.querySelectorAll('.job-item')[0]?.querySelector('.job-toggle').click();