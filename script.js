document.addEventListener('DOMContentLoaded', () => {
    const data = localStorage.getItem('climateUser');
    if (!data) return window.location.replace('signup.html');

    const user = JSON.parse(data);
    document.getElementById('pf-firstName').textContent = user.firstName;
    document.getElementById('pf-lastName').textContent  = user.lastName;
    document.getElementById('pf-email').textContent     = user.email;
    document.getElementById('pf-sex').textContent       = user.sex;
    document.getElementById('pf-support').textContent   = user.support;

    document.getElementById('reset').addEventListener('click', () => {
      localStorage.removeItem('climateUser');
      window.location.replace('signup.html');
    });
  });