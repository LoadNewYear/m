let saved = 0
document.getElementById('updateButton').addEventListener('click', function() {
    //const goal = parseFloat(document.getElementById('goal').value);
    const goal = 10000
    const savedValue = parseFloat(document.getElementById('saved').value);
    saved = saved + savedValue
    
    if (!isNaN(goal) && !isNaN(saved)) {
        const remaining = goal - saved;
        
        document.getElementById('totalSaved').innerText = `Total Saved: $${saved.toFixed(2)}`;
        document.getElementById('remaining').innerText = `Remaining to Save: $${remaining >= 0 ? remaining.toFixed(2) : 0}`;
        
        // Optional: Reset the input fields after updating
        document.getElementById('goal').value = '';
        document.getElementById('saved').value = '';
    } else {
        alert('Please enter valid numbers for goal and saved amount.');
    }
});

