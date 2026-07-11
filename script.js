/**
 * ==========================================================================
 * BALAJI PROPERTIES CORE WEB ENGINE (ANIMATIONS & TRANSITIONS)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. CINEMATIC LOADING TIMER CONTROL
    const loader = document.getElementById("loader");
    const progressBar = document.getElementById("progressBar");
    const loaderBrand = document.getElementById("loaderBrand");

    // Initialize loading progress bars
    setTimeout(() => {
        progressBar.style.width = "100%";
        loaderBrand.style.transform = "translateY(0)";
    }, 100);

    // Hide loader view cleanly
    setTimeout(() => {
        loader.style.opacity = "0";
        // Allow structural focus elements to pop inside Hero
        triggerHeroSequencing();
        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);
    }, 1100);

    // 2. HERO SECTION COMPONENT STAGGER
    function triggerHeroSequencing() {
        const bg = document.getElementById("heroBg");
        const title = document.getElementById("heroTitle");
        const cards = document.querySelectorAll(".float-card");

        if(bg) bg.style.transform = "scale(1)";
        
        // Unleash floating card objects horizontally
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = "translateX(0)";
                card.style.opacity = "1";
            }, 300 * (index + 1));
        });
    }

    // 3. APPLE STYLE COGNITIVE HORIZONTAL SCROLL ENGINES
    const horizontalSection = document.getElementById("horizontalAreas");
    const horizontalTrack = document.getElementById("horizontalTrack");

    window.addEventListener("scroll", () => {
        if (!horizontalSection || !horizontalTrack) return;

        const sectionTop = horizontalSection.offsetTop;
        const sectionHeight = horizontalSection.offsetHeight;
        const scrollPosition = window.scrollY;

        // Verify viewport intersection metrics inside scroll range
        if (scrollPosition >= sectionTop && scrollPosition <= (sectionTop + sectionHeight - window.innerHeight)) {
            const relativeScroll = scrollPosition - sectionTop;
            const scrollMax = sectionHeight - window.innerHeight;
            
            // Calculate horizontal translation mapping boundaries
            const trackWidth = horizontalTrack.scrollWidth;
            const viewportWidth = window.innerWidth;
            const maxTranslation = trackWidth - viewportWidth + (viewportWidth * 0.15); // Padding offsets

            const translationProgress = (relativeScroll / scrollMax) * maxTranslation;
            
            // Execute horizontal transformations dynamically
            horizontalTrack.style.transform = `translateX(-${translationProgress}px)`;
        }
    });

    // 4. PERFORMANCE ACCORDION FAQ CONTROLLERS
    const faqItems = document.querySelectorAll(".faq-item");
    
    faqItems.forEach(item => {
        const btn = item.querySelector("button");
        const panel = item.querySelector("div");
        const icon = item.querySelector("i");

        btn.addEventListener("click", () => {
            const isOpen = panel.style.maxHeight && panel.style.maxHeight !== "0px";

            // Reset sibling loops for semantic architectural consistency
            document.querySelectorAll(".faq-item div").forEach(p => p.style.maxHeight = "0px");
            document.querySelectorAll(".faq-item i").forEach(i => i.style.transform = "rotate(0deg)");

            if (!isOpen) {
                panel.style.maxHeight = panel.scrollHeight + "px";
                icon.style.transform = "rotate(180deg)";
            }
        });
    });

    // 5. CONVERSION LEAD DESK CONTROLLER DATA FEEDBACK
    const form = document.getElementById("leadCaptureForm");
    if(form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("formName").value;
            const asset = document.getElementById("formAsset").value;

            alert(`Greetings ${name}! Your consultation query regarding [${asset}] has been registered with Balaji Properties Desk. An executive portfolio manager will contact you shortly.`);
            this.reset();
        });
    }
});
