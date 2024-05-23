document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    
    const dob = new Date(year, month - 1, day);
    const today = new Date();
    
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    
    document.getElementById('result').innerText = `Your age is ${age} years.`;
});
