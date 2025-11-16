// Confetti Effect
let confettiAnimationId = null;

function createConfetti(duration = 10000) { // Default 10 seconds
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const colors = ['#FF7882', '#feecea', '#DACCBF', '#fff8e4', '#FFDAB9'];
    
    // Create confetti pieces
    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 5,
            speed: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 5 - 2.5
        });
    }
    
    // Auto stop after duration
    if (duration > 0) {
        setTimeout(() => {
            stopConfetti();
            // Update confetti button text if it exists
            const confettiBtn = document.getElementById('confettiBtn');
            if (confettiBtn) {
                confettiBtn.innerHTML = '<i class="fas fa-sparkles"></i> <span>Make it Rain Confetti!</span>';
            }
        }, duration);
    }
    
    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiPieces.forEach(piece => {
            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate(piece.rotation * Math.PI / 180);
            ctx.fillStyle = piece.color;
            ctx.fillRect(-piece.size/2, -piece.size/2, piece.size, piece.size);
            ctx.restore();
            
            // Update position
            piece.y += piece.speed;
            piece.rotation += piece.rotationSpeed;
            
            // Reset if off screen
            if (piece.y > canvas.height) {
                piece.y = -10;
                piece.x = Math.random() * canvas.width;
            }
        });
        
        confettiAnimationId = requestAnimationFrame(drawConfetti);
    }
    
    drawConfetti();
}

function stopConfetti() {
    if (confettiAnimationId) {
        cancelAnimationFrame(confettiAnimationId);
        confettiAnimationId = null;
    }
    
    // Clear canvas
    const canvas = document.getElementById('confettiCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// Set current date for prescription
function setCurrentDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', options);
}

// Music toggle functionality
function setupMusicToggle() {
    const musicToggle = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    if (musicToggle && backgroundMusic) {
        musicToggle.addEventListener('click', function() {
            if (backgroundMusic.paused) {
                backgroundMusic.play();
                musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
            } else {
                backgroundMusic.pause();
                musicToggle.innerHTML = '<i class="fas fa-music"></i>';
            }
        });
    }
}

// Countdown Timer - Removed as per request

// Gallery Slider - Removed as per request

// Animated Reasons I Love You
function setupAnimatedReasons() {
    const reasons = [
        "You're my strong coffee that keeps me energized through life",
        "Your dedication to saving lives inspires me every day",
        "Your beautiful smile lights up even my darkest days",
        "Your intelligence makes me fall for you more each day",
        "Your caring nature shows in everything you do"
    ];
    
    let reasonIndex = 0;
    const reasonElements = document.querySelectorAll('.reason-item');
    
    if (reasonElements.length === 0) return;
    
    function showNextReason() {
        // Hide all reasons
        reasonElements.forEach(reason => reason.style.opacity = '0');
        
        // Show current reason
        if (reasonElements[reasonIndex]) {
            reasonElements[reasonIndex].style.opacity = '1';
        }
        
        // Move to next reason
        reasonIndex = (reasonIndex + 1) % reasons.length;
    }
    
    // Show first reason immediately
    showNextReason();
    
    // Change reason every 3 seconds
    setInterval(showNextReason, 3000);
}

// Surprise Box Interactions
function setupSurpriseBoxes() {
    const surprise1 = document.getElementById('surprise1');
    const surprise2 = document.getElementById('surprise2');
    
    if (surprise1) {
        surprise1.addEventListener('click', function() {
            this.classList.toggle('opened');
        });
    }
    
    if (surprise2) {
        surprise2.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
        
        surprise2.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    }
}

// Letter Opening
function setupLetters() {
    const letters = document.querySelectorAll('.letter');
    
    letters.forEach(letter => {
        letter.addEventListener('click', function() {
            this.classList.toggle('open');
        });
    });
}

// Gift Box Opening
function setupGiftBoxes() {
    const gifts = document.querySelectorAll('.gift-box');
    
    gifts.forEach(gift => {
        gift.addEventListener('click', function() {
            this.classList.toggle('open');
        });
    });
}

// Motivation Button
function setupMotivationButton() {
    const motivationBtn = document.getElementById('motivationBtn');
    
    if (motivationBtn) {
        motivationBtn.addEventListener('click', function() {
            // Create custom modal instead of using alert
            const modal = document.createElement('div');
            modal.className = 'motivation-modal';
            modal.innerHTML = `
                <div class="motivation-modal-content">
                    <span class="motivation-close">&times;</span>
                    <div class="motivation-header">
                        <h2>For My Amazing Suby ❤️</h2>
                    </div>
                    <div class="motivation-body">
                        <p>Dear PeachyPie,</p>
                        <p>You're doing an absolutely incredible job! 💪 Every single day, you show strength, dedication, and compassion that amazes me.</p>
                        <p>Remember, every challenge you face isn't just making you stronger—it's shaping you into the extraordinary doctor you're meant to be. Each late night, each difficult case, each moment of doubt is preparing you to save lives and make a real difference in the world.</p>
                        <p>I believe in you completely, today and always. I'm so incredibly proud of everything you've accomplished and everything you're becoming.</p>
                        <p>Take a deep breath, my strong coffee ☕ You've got this, and I'll be here cheering you on every step of the way.</p>
                        <p>With all my love,<br>Your Biggest Fan</p>
                    </div>
                    <div class="motivation-footer">
                        <button class="motivation-okay">Okay, I'm ready to conquer the world! ✨</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Close modal functions
            const closeBtn = modal.querySelector('.motivation-close');
            const okayBtn = modal.querySelector('.motivation-okay');
            
            const closeModal = () => {
                modal.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(modal);
                }, 300);
            };
            
            closeBtn.addEventListener('click', closeModal);
            okayBtn.addEventListener('click', closeModal);
            
            // Close if clicked outside
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        });
    }
}

// Audio Message Button - Removed as per request

// Handle window resize for confetti
function handleResize() {
    const canvas = document.getElementById('confettiCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}

// Initialize all features when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Start confetti automatically on page load (will auto-stop after 10 seconds)
    createConfetti(10000); // Stop after 10 seconds
    
    setCurrentDate();
    setupMusicToggle();
    setupAnimatedReasons();
    setupSurpriseBoxes();
    setupLetters();
    setupGiftBoxes();
    setupMotivationButton();
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
    
    // Setup confetti button
    const confettiBtn = document.getElementById('confettiBtn');
    if (confettiBtn) {
        confettiBtn.addEventListener('click', function() {
            // If confetti is already running, stop it
            if (confettiAnimationId) {
                stopConfetti();
                confettiBtn.innerHTML = '<i class="fas fa-sparkles"></i> <span>Make it Rain Confetti!</span>';
            } else {
                // Start confetti (no auto-stop)
                createConfetti(0); // 0 means no auto-stop
                confettiBtn.innerHTML = '<i class="fas fa-stop"></i> <span>Stop Confetti</span>';
            }
        });
    }
});

// Also initialize on window load for confetti
window.addEventListener('load', function() {
    createConfetti();
});