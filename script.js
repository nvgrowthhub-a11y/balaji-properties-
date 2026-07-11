/**
 * ==========================================================================
 * BALAJI PROPERTIES MASTER WEB ENGINE (RESPONSIVE & RICH ANIMATIONS)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MOBILE RESPONSIVE HAMBURGER MENU ENGINE
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobLinks = document.querySelectorAll(".mob-link");

    if (menuBtn && mobileMenu && closeBtn) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.remove("translate-x-full");
        });

        closeBtn.addEventListener("click", () => {
            mobileMenu.classList.add("translate-x-full");
        });

        // Close menu immediately on clicking links
        mobLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("translate-x-full");
            });
        });
    }

    // 2. AWWWARDS REVEAL INTERSECTION OBSERVER ENGINE
    // Jab user scroll karega toh cards blur-to-focus transition ke sath samne aayenge
    const revealSections = document.querySelectorAll(".scroll-reveal");
    
    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of section is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Server memory safe
            }
        });
    }, revealOptions);

    revealSections.forEach(section => {
        revealObserver.observe(section);
    });

    // 3. FAQ ACCORDION LOGIC
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const btn = item.querySelector("button");
        const panel = item.querySelector("div");
        const icon = item.querySelector("i");

        btn.addEventListener("click", () => {
            const isOpen = panel.style.maxHeight && panel.style.maxHeight !== "0px";
            
            document.querySelectorAll(".faq-item div").forEach(p => p.style.maxHeight = "0px");
            document.querySelectorAll(".faq-item i").forEach(i => i.style.transform = "rotate(0deg)");

            if (!isOpen) {
                panel.style.maxHeight = panel.scrollHeight + "px";
                icon.style.transform = "rotate(180deg)";
            }
        });
    });

    // 4. WHATSAPP GENERATOR REDIRECTION (8586808514)
    const whatsappForm = document.getElementById("whatsappForm");
    if (whatsappForm) {
        whatsappForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const name = document.getElementById("wName").value;
            const phone = document.getElementById("wPhone").value;
            const asset = document.getElementById("wAsset").value;
            
            const targetNumber = "918586808514"; 
            
            const textMessage = encodeURIComponent(
                `Hello Balaji Properties,\n\nI want to enquire about property options:\n` +
                `• Name: ${name}\n` +
                `• Contact: ${phone}\n` +
                `• Asset Required: ${asset}\n\nPlease share the details and site pictures.`
            );
            
            window.open(`https://wa.me/${targetNumber}?text=${textMessage}`, '_blank');
            this.reset();
        });
    }
});
