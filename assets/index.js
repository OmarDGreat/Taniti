function submitForm(event, formName) {
    event.preventDefault(); // Prevent the default form submission
    alert(formName + ' submitted successfully!');
    return false; // Return false to prevent the page from reloading
}