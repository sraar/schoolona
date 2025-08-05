// ========== 1. Dark Mode Toggle ==========
const toggleSwitch = document.getElementById('dark-mode-toggle');
const body = document.body;

if (toggleSwitch) {
  toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });
}

// ========== 2. Scroll Animations ==========
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// ========== 3. Chart for Marks Page ==========
if (document.getElementById('gradesChart')) {
  const ctx = document.getElementById('gradesChart').getContext('2d');
  const gradesChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Math', 'English', 'Biology', 'Chemistry', 'Physics'],
      datasets: [{
        label: 'Grade',
        data: [85, 90, 78, 88, 92],
        backgroundColor: [
          '#3498db', '#2ecc71', '#f1c40f', '#e67e22', '#e74c3c'
        ]
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

// ========== 4. Simple Login System (Frontend Only) ==========
if (document.getElementById('loginForm')) {
  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Demo login (for example purposes)
    if (username === 'student' && password === '1234') {
      alert('Login successful!');
      window.location.href = 'marks.html';
    } else {
      alert('Invalid credentials.');
    }
  });
}