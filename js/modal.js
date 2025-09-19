function openModal() {
  document.getElementById('privacyModal').style.display = 'block';
}

function openTermsModal() {
  document.getElementById('termsModal').style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

window.onclick = function(event) {
  const privacyModal = document.getElementById('privacyModal');
  const termsModal = document.getElementById('termsModal');
  if (event.target == privacyModal) {
    privacyModal.style.display = "none";
  }
  if (event.target == termsModal) {
    termsModal.style.display = "none";
  }
}



document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const responseElement = document.getElementById('responseMessage');
    
    // Show loading state
    form.querySelector('button[type="submit"]').disabled = true;
    
    fetch('', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Show response message
        responseElement.style.display = 'block';
        responseElement.textContent = data.message;
        responseElement.className = data.success ? 'success-message' : 'error-message';
        
        if (data.success) {
            // Reset form on success
            form.reset();
            
            // Optionally hide the message after 5 seconds
            setTimeout(() => {
                responseElement.style.display = 'none';
            }, 5000);
        }
    })
    .catch(error => {
        responseElement.style.display = 'block';
        responseElement.textContent = 'An error occurred. Please try again later.';
        responseElement.className = 'error-message';
    })
    .finally(() => {
        // Re-enable submit button
        form.querySelector('button[type="submit"]').disabled = false;
    });
});