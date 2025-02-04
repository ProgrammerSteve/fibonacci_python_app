async function calculateFibonacci() {
    const numberInput = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");
    
    if (!numberInput.value) {
        resultElement.textContent = "Please enter a number";
        resultElement.style.color = 'red';
        resultElement.style.backgroundColor='pink';
        return;
    }

    const number = parseInt(numberInput.value);
    
    if (number < 0) {
        resultElement.textContent = "Please enter a non-negative integer";
        resultElement.style.color = 'red';
        resultElement.style.backgroundColor='pink';
        return;
    }

    try {
        const response = await fetch(`http://127.0.0.1:5000/api/fibonacci?number=${number}`);
        const data = await response.json();
        
        if (data.result !== undefined) {
            
            resultElement.textContent = `Fibonacci(${number}) = ${data.result}`;
            resultElement.style.color = 'var(--text-color)';
            resultElement.style.backgroundColor='#DBF3C9';
        } else {
            resultElement.textContent = data.error || 'An error occurred';
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor='pink';
        }
    } catch (error) {
        resultElement.textContent = 'Network error. Please try again.';
        resultElement.style.color = 'red';
        resultElement.style.backgroundColor='pink';
    }
}

document.getElementById("numberInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        calculateFibonacci();
    }
});