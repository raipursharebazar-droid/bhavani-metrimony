// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.textContent = '☰';
  }));
}

// Helper: show a form message (error/success)
function showMsg(el, text, type) {
  el.textContent = text;
  el.className = 'form-msg show ' + type;
}

// Helper: calculate age from a YYYY-MM-DD date string
function calcAge(dobStr) {
  const dob = new Date(dobStr);
  const diff = Date.now() - dob.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

// Scroll reveal (progressive enhancement — visible by default, JS adds
// the "pre" hidden state right before animating in, so nothing ever
// stays invisible if JS fails)
const revealEls = document.querySelectorAll('.reveal');
revealEls.forEach(el => el.classList.add('pre'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));
const SAMPLE_PROFILES = [
  { name: "Anjali Reddy", gender: "female", age: 26, city: "Hyderabad", religion: "Hindu", caste: "Reddy", marital: "unmarried" },
  { name: "Karthik Naidu", gender: "male", age: 29, city: "Vijayawada", religion: "Hindu", caste: "Naidu", marital: "unmarried" },
  { name: "Priya Sharma", gender: "female", age: 24, city: "Raipur", religion: "Hindu", caste: "Brahmin", marital: "unmarried" },
  { name: "Ravi Kumar", gender: "male", age: 31, city: "Vizag", religion: "Hindu", caste: "Kamma", marital: "divorced" },
  { name: "Sneha Iyer", gender: "female", age: 27, city: "Chennai", religion: "Hindu", caste: "Brahmin", marital: "unmarried" },
  { name: "Vikram Rao", gender: "male", age: 33, city: "Bangalore", religion: "Hindu", caste: "Kapu", marital: "widowed" },
  { name: "Divya Chowdary", gender: "female", age: 25, city: "Guntur", religion: "Hindu", caste: "Setty Balija", marital: "unmarried" },
  { name: "Arjun Yadav", gender: "male", age: 28, city: "Warangal", religion: "Hindu", caste: "Yadav", marital: "unmarried" },
  { name: "Meera Prasad", gender: "female", age: 30, city: "Raipur", religion: "Hindu", caste: "Vysya", marital: "divorced" }
];
