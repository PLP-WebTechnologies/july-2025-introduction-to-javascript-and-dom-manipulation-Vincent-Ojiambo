// =======================
// Part 1: Technology Basics
// =======================
const currentYear = new Date().getFullYear();
const techTrends = ["AI & Machine Learning", "Quantum Computing", "Blockchain", "Biotechnology", "5G & IoT"];
const isFutureReady = true;

// Display current year in the footer
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        yearElement.textContent = yearElement.textContent.replace('2025', currentYear);
    }
});

console.log("Current Year:", currentYear);
console.log("Key Tech Trends:", techTrends.join(", "));
console.log("Is the world ready for these changes?", isFutureReady ? "Yes!" : "Getting there...");

// =======================
// Part 2: Tech Functions
// =======================

// Function 1: Future prediction with more details
function predictFuture(tech, years, impactAreas) {
    const areas = impactAreas.join(", ");
    return `In ${years} years, ${tech} will transform ${areas} and more.`;
}

// Function 2: Calculate tech impact with weighted factors
function calculateImpact(adoptionRate, innovationLevel, marketPotential) {
    return Math.min(100, Math.round((adoptionRate * 0.4 + innovationLevel * 0.3 + marketPotential * 0.3) * 100));
}

// Display function results in HTML with enhanced formatting
const aiImpact = calculateImpact(0.85, 0.9, 0.95);
document.getElementById("aiResults").innerHTML = `
    <div class="impact-score">
        <h3>AI Impact Assessment</h3>
        <div class="progress-bar">
            <div class="progress" style="width: ${aiImpact}%;"></div>
            <span>${aiImpact}%</span>
        </div>
        <p>${predictFuture("Artificial Intelligence", 5, ["healthcare", "finance", "manufacturing", "transportation"])}</p>
    </div>
`;

// =======================
// Part 3: Future Tech List with Interactive Features
// =======================
const futureTechs = [
    { name: "Neural Lace", description: "Brain-computer interfaces for seamless human-AI interaction" },
    { name: "Fusion Power", description: "Clean, limitless energy production" },
    { name: "Biotech Enhancements", description: "Genetic engineering and human augmentation" },
    { name: "Space Tourism", description: "Commercial space travel and colonization" },
    { name: "AGI", description: "Artificial General Intelligence matching human cognitive abilities" }
];

// Countdown to next big tech event (example: Web Summit)
function updateCountdown() {
    const now = new Date();
    const nextEvent = new Date(now.getFullYear(), 10, 15); // November 15th
    if (now > nextEvent) {
        nextEvent.setFullYear(nextEvent.getFullYear() + 1);
    }
    
    const diffTime = nextEvent - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    document.getElementById("predictionsList").innerHTML = `
        <div class="countdown">
            <h3>Next Major Tech Event</h3>
            <div class="countdown-number">${diffDays}</div>
            <p>days until Web Summit ${nextEvent.getFullYear()}</p>
        </div>
        <div class="future-tech-list">
            <h3>Emerging Technologies to Watch</h3>
            <ul>
                ${futureTechs.map(tech => 
                    `<li>
                        <strong>${tech.name}:</strong> ${tech.description}
                        <button class="learn-more" data-tech="${tech.name.toLowerCase().replace(' ', '-')}">Learn More</button>
                    </li>`
                ).join('')}
            </ul>
        </div>
    `;
    
    // Add event listeners to learn more buttons
    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', (e) => {
            const tech = e.target.dataset.tech;
            showTechDetails(tech);
        });
    });
}

// Show detailed information about a specific technology
function showTechDetails(techId) {
    const tech = futureTechs.find(t => t.name.toLowerCase().replace(' ', '-') === techId);
    if (tech) {
        document.getElementById("techContent").innerHTML = `
            <h3>${tech.name}</h3>
            <p>${tech.description}</p>
            <p>Expected impact in the next decade: ${Math.floor(Math.random() * 50) + 50}% industry transformation</p>
            <button class="close-details">Close</button>
        `;
        
        document.querySelector('.close-details').addEventListener('click', () => {
            document.getElementById("techContent").innerHTML = 
                "<p>Click on any technology to learn more about its potential impact.</p>";
        });
    }
}

// Initialize countdown and update every day
updateCountdown();
setInterval(updateCountdown, 24 * 60 * 60 * 1000);

// =======================
// Part 4: Interactive Features
// =======================

// 1. Show Emerging Technologies with animation
document.getElementById("showTechBtn").addEventListener("click", () => {
    const techContent = document.getElementById("techContent");
    techContent.innerHTML = `
        <h3>Key Technologies Shaping Our Future</h3>
        <ul class="tech-features">
            <li>🤖 AI & Automation: Transforming industries and creating new opportunities</li>
            <li>🔬 Biotechnology: Revolutionizing healthcare and longevity</li>
            <li>🌍 Clean Energy: Sustainable solutions for a better planet</li>
            <li>🛰️ Space Exploration: The new frontier for humanity</li>
            <li>🧠 Neurotechnology: Merging human and artificial intelligence</li>
        </ul>
    `;
    techContent.classList.add('show');
});

// 2. Toggle Highlight Effect with Animation
document.getElementById("highlightBtn").addEventListener("click", () => {
    const content = document.getElementById("techContent");
    content.classList.toggle('highlighted');
    
    if (content.classList.contains('highlighted')) {
        content.innerHTML = `
            <h3>Why This Matters</h3>
            <p>Understanding these technological advancements is crucial because they will:</p>
            <ul>
                <li>Create new career opportunities</li>
                <li>Solve global challenges</li>
                <li>Improve quality of life</li>
                <li>Shape the future of society</li>
            </ul>
        `;
    } else {
        content.innerHTML = "<p>Click the buttons above to explore future technologies and their impact.</p>";
    }
});

// 3. Newsletter Form Submission
document.getElementById("newsletterForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Simple validation
    if (email && email.includes('@')) {
        this.innerHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <p>Thank you for subscribing! We'll keep you updated on the latest in future tech.</p>
            </div>
        `;
    } else {
        alert('Please enter a valid email address.');
    }
});

// 4. Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 5. Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card, .tech-card, .timeline-item');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial check
window.addEventListener('load', animateOnScroll);
// Check on scroll
window.addEventListener('scroll', animateOnScroll);
