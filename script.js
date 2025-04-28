const addButton = document.getElementById('addButton');

addButton.addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const sum = num1 + num2;
    document.getElementById('result').textContent = 'Result: ' + sum;
});
