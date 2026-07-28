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
  { name: "Anjali Reddy", gender: "female", age: 26, city: "Hyderabad", religion: "Hindu", caste: "Reddy", marital: "unmarried", bio: "Working as a software engineer in Hyderabad. Enjoys classical dance and reading. Looking for a caring, family-oriented partner." },
  { name: "Karthik Naidu", gender: "male", age: 29, city: "Vijayawada", religion: "Hindu", caste: "Naidu", marital: "unmarried", bio: "Runs a family business in Vijayawada. Enjoys cricket and traveling. Looking for someone grounded and family-oriented." },
  { name: "Priya Sharma", gender: "female", age: 24, city: "Raipur", religion: "Hindu", caste: "Brahmin", marital: "unmarried", bio: "Bank employee based in Raipur. Loves cooking and spending time with family. Seeking a well-settled, respectful partner." },
  { name: "Ravi Kumar", gender: "male", age: 31, city: "Vizag", religion: "Hindu", caste: "Kamma", marital: "divorced", bio: "Works in the shipping industry in Vizag. Enjoys fitness and outdoor activities. Open to a fresh start with the right person." },
  { name: "Sneha Iyer", gender: "female", age: 27, city: "Chennai", religion: "Hindu", caste: "Brahmin", marital: "unmarried", bio: "Teacher based in Chennai. Passionate about music and classical arts. Looking for someone kind and understanding." },
  { name: "Vikram Rao", gender: "male", age: 33, city: "Bangalore", religion: "Hindu", caste: "Kapu", marital: "widowed", bio: "IT professional in Bangalore. Enjoys quiet weekends and long walks. Looking to build a caring companionship again." },
  { name: "Divya Chowdary", gender: "female", age: 25, city: "Guntur", religion: "Hindu", caste: "Setty Balija", marital: "unmarried", bio: "Runs a boutique business in Guntur. Loves fashion and design. Looking for a supportive and ambitious partner." },
  { name: "Arjun Yadav", gender: "male", age: 28, city: "Warangal", religion: "Hindu", caste: "Yadav", marital: "unmarried", bio: "Works in agriculture and family farming near Warangal. Enjoys community events. Seeking a warm, family-oriented partner." },
  { name: "Meera Prasad", gender: "female", age: 30, city: "Raipur", religion: "Hindu", caste: "Vysya", marital: "divorced", bio: "Runs her own small business in Raipur. Enjoys yoga and cooking. Open to meeting someone genuine and mature." }
];
