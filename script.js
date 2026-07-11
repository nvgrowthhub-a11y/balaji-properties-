// Form submission logic
document.getElementById('interestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Fetch values from inputs
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    
    // Show premium alert to user
    alert(`Thank you ${name}! Our team will call you back on ${phone} within 24 hours.`);
    
    // Reset Form fields
    this.reset();
});
