// Function to calculate Fibonacci number for a given number
function fibonacci(n) {
    // Base case: if n is 0 or 1, return n
    if (n <= 1) {
        return n;
    }
    // Recursive case: return sum of Fibonacci numbers for (n - 1) and (n - 2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// Function to handle button click event to calculate Fibonacci
function calculateFibonacci() {
    // Get the input value
    const input = document.getElementById('fibonacciInput').value;
    // Convert input to an integer
    const n = parseInt(input);
    // Check if input is a non-negative integer
    if (!isNaN(n) && n >= 0) {
        // Calculate Fibonacci number and diplay the result
        const result = fibonacci(n);
        document.getElementById('fibonacciResult').innerText = `Fibonacci of ${n} is ${result}`;
    } else {
        document.getElementById('fibonacciResult').innerText = 'Please enter a non-negative integer.';
    }
}
