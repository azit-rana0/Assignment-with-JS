document.getElementById('calculateBtn').addEventListener('click', () => {
    const dobInput = document.getElementById('dob').value;
    
    // Reset boxes if no date is entered
    if (!dobInput) {
        document.getElementById('yearsBox').innerText = 'NaN';
        document.getElementById('monthsBox').innerText = 'NaN';
        document.getElementById('daysBox').innerText = 'NaN';
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    // Calculate age
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    // Adjust for negative month or day
    if (ageDays < 0) {
        ageMonths--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate(); // Get the number of days in the last month
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Display the results in separate boxes
    document.getElementById('yearsBox').innerText = `${ageYears}`;
    document.getElementById('monthsBox').innerText = `${ageMonths}`;
    document.getElementById('daysBox').innerText = `${ageDays}`;
});
