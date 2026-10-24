// Temperature Converter - Oasis Infobyte Level 1 Task 3
// Vanilla JavaScript implementation with full validation

document.addEventListener('DOMContentLoaded', function() {
    const converterForm = document.getElementById('converterForm');
    const temperatureInput = document.getElementById('temperatureInput');
    const inputUnitSelect = document.getElementById('inputUnit');
    const inputErrorDiv = document.getElementById('inputError');
    const validationMessageDiv = document.getElementById('validationMessage');
    
    // Result display elements
    const resultCelsius = document.getElementById('resultCelsius');
    const resultFahrenheit = document.getElementById('resultFahrenheit');
    const resultKelvin = document.getElementById('resultKelvin');
    
    // Absolute zero values
    const ABSOLUTE_ZERO_CELSIUS = -273.15;
    const ABSOLUTE_ZERO_FAHRENHEIT = -459.67;
    const ABSOLUTE_ZERO_KELVIN = 0;
    
    // Form submission handler
    converterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous messages
        clearMessages();
        
        // Get input values
        const inputValue = temperatureInput.value.trim();
        const inputUnit = inputUnitSelect.value;
        
        // Validation 1: Check if input is empty
        if (inputValue === '') {
            showInputError('Please enter a temperature value.');
            showValidationMessage('Error: Temperature input cannot be empty.', 'error');
            clearResults();
            return;
        }
        
        // Validation 2: Check if input is numeric
        // Allow optional sign, digits, and decimal point
        const numberRegex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
        
        if (!numberRegex.test(inputValue)) {
            showInputError('Please enter a valid numeric value.');
            showValidationMessage('Error: Invalid input. Please enter a numeric temperature.', 'error');
            clearResults();
            return;
        }
        
        // Convert string to number
        const temperature = parseFloat(inputValue);
        
        // Validation 3: Check for physically impossible temperatures (below absolute zero)
        if (isBelowAbsoluteZero(temperature, inputUnit)) {
            const errorMsg = getAbsoluteZeroError(inputUnit);
            showInputError(errorMsg);
            showValidationMessage('Error: Temperature below absolute zero is not physically possible.', 'error');
            clearResults();
            return;
        }
        
        // All validations passed - perform conversion
        const conversions = convertTemperature(temperature, inputUnit);
        
        // Display results
        displayResults(conversions);
        
        // Show success message
        showValidationMessage('Temperature converted successfully!', 'success');
    });
    
    // Clear all messages
    function clearMessages() {
        inputErrorDiv.textContent = '';
        validationMessageDiv.textContent = '';
        validationMessageDiv.className = 'validation-message';
    }
    
    // Show input-specific error
    function showInputError(message) {
        inputErrorDiv.textContent = message;
    }
    
    // Show validation message
    function showValidationMessage(message, type) {
        validationMessageDiv.textContent = message;
        validationMessageDiv.className = 'validation-message ' + type;
    }
    
    // Clear all result displays
    function clearResults() {
        resultCelsius.textContent = '-';
        resultFahrenheit.textContent = '-';
        resultKelvin.textContent = '-';
    }
    
    // Check if temperature is below absolute zero
    function isBelowAbsoluteZero(temp, unit) {
        switch (unit) {
            case 'celsius':
                return temp < ABSOLUTE_ZERO_CELSIUS;
            case 'fahrenheit':
                return temp < ABSOLUTE_ZERO_FAHRENHEIT;
            case 'kelvin':
                return temp < ABSOLUTE_ZERO_KELVIN;
            default:
                return false;
        }
    }
    
    // Get appropriate error message for absolute zero
    function getAbsoluteZeroError(unit) {
        switch (unit) {
            case 'celsius':
                return `Temperature cannot be below absolute zero (-273.15 °C).`;
            case 'fahrenheit':
                return `Temperature cannot be below absolute zero (-459.67 °F).`;
            case 'kelvin':
                return `Temperature cannot be below absolute zero (0 K).`;
            default:
                return 'Temperature below absolute zero is not possible.';
        }
    }
    
    // Convert temperature from input unit to all three units
    function convertTemperature(temp, inputUnit) {
        let celsius, fahrenheit, kelvin;
        
        switch (inputUnit) {
            case 'celsius':
                // Input is Celsius
                celsius = temp;
                fahrenheit = (celsius * 9/5) + 32;
                kelvin = celsius + 273.15;
                break;
                
            case 'fahrenheit':
                // Input is Fahrenheit
                fahrenheit = temp;
                celsius = (fahrenheit - 32) * 5/9;
                kelvin = celsius + 273.15;
                break;
                
            case 'kelvin':
                // Input is Kelvin
                kelvin = temp;
                celsius = kelvin - 273.15;
                fahrenheit = (celsius * 9/5) + 32;
                break;
                
            default:
                // Fallback
                celsius = temp;
                fahrenheit = (temp * 9/5) + 32;
                kelvin = temp + 273.15;
        }
        
        return {
            celsius: celsius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        };
    }
    
    // Display results with appropriate formatting
    function displayResults(conversions) {
        // Format to reasonable decimal places
        // If it's a whole number, show without decimals, else show up to 2 decimal places
        resultCelsius.textContent = formatTemperature(conversions.celsius);
        resultFahrenheit.textContent = formatTemperature(conversions.fahrenheit);
        resultKelvin.textContent = formatTemperature(conversions.kelvin);
    }
    
    // Format temperature for display
    function formatTemperature(temp) {
        // Check if it's a whole number
        if (Math.abs(temp - Math.round(temp)) < 0.0000001) {
            return Math.round(temp).toString();
        }
        
        // For decimal numbers, show up to 2 decimal places
        // Remove trailing zeros
        let formatted = temp.toFixed(2);
        // Remove trailing zeros and decimal point if needed
        formatted = parseFloat(formatted).toString();
        return formatted;
    }
    
    // Real-time input validation on typing (optional enhancement)
    temperatureInput.addEventListener('input', function() {
        // Clear error messages when user starts typing
        if (inputErrorDiv.textContent) {
            inputErrorDiv.textContent = '';
        }
        if (validationMessageDiv.classList.contains('error')) {
            validationMessageDiv.className = 'validation-message';
            validationMessageDiv.textContent = '';
        }
    });
    
    // Clear validation message when unit changes
    inputUnitSelect.addEventListener('change', function() {
        if (validationMessageDiv.classList.contains('error')) {
            validationMessageDiv.className = 'validation-message';
            validationMessageDiv.textContent = '';
        }
        if (inputErrorDiv.textContent) {
            // Re-validate if there's already an input
            if (temperatureInput.value.trim() !== '') {
                const inputValue = temperatureInput.value.trim();
                const numberRegex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
                
                if (numberRegex.test(inputValue)) {
                    const temp = parseFloat(inputValue);
                    if (isBelowAbsoluteZero(temp, inputUnitSelect.value)) {
                        inputErrorDiv.textContent = getAbsoluteZeroError(inputUnitSelect.value);
                    } else {
                        inputErrorDiv.textContent = '';
                    }
                }
            }
        }
    });
});
