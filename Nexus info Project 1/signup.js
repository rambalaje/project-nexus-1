function showSidebar(){
    const s=document.querySelector('.burger');
    s.style.display='flex';
}
function hideSidebar(){
    const h=document.querySelector('.burger');
    h.style.display='none';
}
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('mailid');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const errors = document.querySelectorAll('.error');
    form.addEventListener('submit', (e) => {
        errors.forEach(error => error.textContent = '');
        let hasError = false;
        if (username.value.trim() === '') {
            setError(username, 'Username is required');
            hasError = true;
        }
        if (email.value.trim() === '') {
            setError(email, 'Email is required');
            hasError = true;
        } else if (!isValidEmail(email.value.trim())) {
            setError(email, 'Please enter a valid email address');
            hasError = true;
        }
        if (password.value.trim() === '') {
            setError(password, 'Password is required');
            hasError = true;
        }
        if (confirmPassword.value.trim() === '') {
            setError(confirmPassword, 'Confirm password is required');
            hasError = true;
        } else if (password.value.trim() !== confirmPassword.value.trim()) {
            setError(confirmPassword, 'Passwords do not match');
            hasError = true;
        }

        if (hasError) {
            e.preventDefault();
        }
    });
    function setError(element, message) {
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector('.error');
        errorElement.textContent = message;
    }
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});


