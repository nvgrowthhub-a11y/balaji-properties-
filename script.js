document.addEventListener("DOMContentLoaded", () => {
    
    // 1. FAQ ACCORDION LOGIC
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

    // 2. WHATSAPP CUSTOM REDIRECTION MATRIX
    const whatsappForm = document.getElementById("whatsappForm");
    if(whatsappForm) {
        whatsappForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Get data fields
            const name = document.getElementById("wName").value;
            const phone = document.getElementById("wPhone").value;
            const asset = document.getElementById("wAsset").value;
            
            // Destination details
            const targetWhatsAppNumber = "918586808514"; 
            
            // Create encoded string layout
            const textMessage = encodeURIComponent(
                `Hello Balaji Properties,\n\nI want to enquire about property options:\n` +
                `• Name: ${name}\n` +
                `• Contact: ${phone}\n` +
                `• Asset Required: ${asset}\n\nPlease share the details and site pictures.`
            );
            
            // Construct routing URL
            const finalWhatsAppUrl = `https://wa.me/${targetWhatsAppNumber}?text=${textMessage}`;
            
            // Open window tab cleanly
            window.open(finalWhatsAppUrl, '_blank');
            this.reset();
        });
    }
});
