# Temperature Converter (Level 1, Task 3)

A complete, functional, and responsive temperature converter website built for the Oasis Infobyte Web Development & Designing Internship - Level 1, Task 3.

## Project Overview

This temperature converter allows users to convert temperatures between Celsius, Fahrenheit, and Kelvin. It includes comprehensive input validation, checks for physically impossible temperatures below absolute zero, and displays results in all three units simultaneously.

## Features

- **Multi-Unit Conversion**: Convert from Celsius, Fahrenheit, or Kelvin to all three units
- **Real-time Validation**: Validates empty input and non-numeric values
- **Absolute Zero Protection**: Rejects temperatures below absolute zero (-273.15°C, -459.67°F, 0K)
- **User-Friendly Messages**: Clear error and success messages
- **Smart Formatting**: Results formatted to reasonable decimal places (whole numbers shown without decimals)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, centered card design with gradient backgrounds
- **Smooth Interactions**: Hover effects and transitions
- **Accessibility**: Proper labels, ARIA attributes, and keyboard navigation
- **No Page Reload**: Conversions happen instantly without refreshing

## Conversion Formulas

The converter uses accurate conversion formulas:

- **Celsius to Fahrenheit**: °F = (°C × 9/5) + 32
- **Celsius to Kelvin**: K = °C + 273.15
- **Fahrenheit to Celsius**: °C = (°F - 32) × 5/9
- **Fahrenheit to Kelvin**: K = (°F - 32) × 5/9 + 273.15
- **Kelvin to Celsius**: °C = K - 273.15
- **Kelvin to Fahrenheit**: °F = (K - 273.15) × 9/5 + 32

## Absolute Zero Values

- **Celsius**: -273.15 °C
- **Fahrenheit**: -459.67 °F
- **Kelvin**: 0 K

## Project Structure

```
WebDev-L1-TemperatureConverter/
├── index.html      # Main HTML structure
├── style.css       # All styling and responsive design
├── script.js       # Conversion logic and validation
├── README.md       # Project documentation
└── screenshots/    # Folder for project screenshots
```

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Gradients, Animations, Media Queries)
- Vanilla JavaScript (ES6+)

## How to Run Locally

1. **Download or Clone**: Download this folder to your local machine
2. **Navigate**: Open the `WebDev-L1-TemperatureConverter` folder
3. **Open in Browser**: Double-click `index.html` or right-click and open with your preferred web browser
4. **Test**: Enter a temperature, select a unit, and click "Convert Temperature"

For best results, use a modern browser (Chrome, Firefox, Edge, Safari).

## How to Test the Converter

### Valid Conversions to Test

| Input | Unit | Expected Results | Notes |
|-------|------|------------------|-------|
| 0 | Celsius | 0 °C, 32 °F, 273.15 K | Freezing point of water |
| 100 | Celsius | 100 °C, 212 °F, 373.15 K | Boiling point of water |
| 32 | Fahrenheit | 0 °C, 32 °F, 273.15 K | Freezing point of water |
| 212 | Fahrenheit | 100 °C, 212 °F, 373.15 K | Boiling point of water |
| 273.15 | Kelvin | 0 °C, 32 °F, 273.15 K | Freezing point of water |
| 373.15 | Kelvin | 100 °C, 212 °F, 373.15 K | Boiling point of water |
| 25 | Celsius | 25 °C, 77 °F, 298.15 K | Room temperature |
| -40 | Celsius/Fahrenheit | -40 °C, -40 °F, 233.15 K | Same value in both scales |

### Validation Tests

| Test Case | Expected Behavior |
|-----------|-------------------|
| Empty input | Show error: "Please enter a temperature value." |
| "abc" or "hello" | Show error: "Please enter a valid numeric value." |
| "25abc" | Show error: "Please enter a valid numeric value." |
| "-300" in Celsius | Show error: Below absolute zero (-273.15 °C) |
| "-500" in Fahrenheit | Show error: Below absolute zero (-459.67 °F) |
| "-1" in Kelvin | Show error: Below absolute zero (0 K) |
| "-273.15" in Celsius | Should convert (at absolute zero) |
| "-459.67" in Fahrenheit | Should convert (at absolute zero) |
| "0" in Kelvin | Should convert (at absolute zero) |

### Decimal Testing

- Input `36.6` Celsius → Should show decimals appropriately
- Input `98.6` Fahrenheit → Body temperature
- Results with many decimals should be formatted nicely (e.g., 273.15 not 273.1500000001)

## How to Take Screenshots for GitHub Submission

### Desktop View
1. Open the page in browser at 1920x1080
2. Take screenshot showing the full converter card
3. Capture after a successful conversion to show results

### Tablet View
1. Open Developer Tools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select iPad (768px width)
4. Take screenshot

### Mobile View
1. Use device emulation (375px - 414px width)
2. Test conversion on mobile layout
3. Take screenshot showing mobile view

### Functionality Screenshots
Capture these scenarios:
- Initial state (empty form)
- Successful conversion showing all three results
- Validation error for empty input
- Validation error for non-numeric input
- Validation error for below absolute zero
- Different unit selections

Save in `screenshots/` folder with names like:
- `desktop-main.png`
- `desktop-converted.png`
- `tablet-view.png`
- `mobile-view.png`
- `validation-error.png`
- `absolute-zero-error.png`

## Features in Detail

### Input Validation
- **Empty Check**: Prevents conversion with empty input
- **Numeric Check**: Uses regex to validate integers, decimals, negative numbers
- **Scientific Notation**: Supports formats like `1e2` (though not necessary, regex allows)
- **Trim Whitespace**: Removes leading/trailing spaces

### Conversion Logic
- **Accurate Calculations**: Uses standard scientific formulas
- **All Three Units**: Always displays Celsius, Fahrenheit, and Kelvin regardless of input
- **Proper Rounding**: Smart formatting for clean display

### Error Handling
- **Clear Messages**: Specific error messages for each validation type
- **Visual Feedback**: Red borders/messages for errors, green for success
- **Prevents Invalid Conversions**: Doesn't calculate if validation fails

### Responsive Design
- **Centered Layout**: Card stays centered on all screen sizes
- **Flexible Sizing**: Adapts padding and font sizes
- **Mobile Optimized**: Touch-friendly buttons and inputs

## Browser Compatibility

Tested and compatible with:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)
- Safari (latest)
- Opera (latest)

## Tips for Use

1. Enter any numeric value (positive or negative)
2. Select the unit of your input from the dropdown
3. Click "Convert Temperature" or press Enter
4. View results in all three units below
5. Change input and convert again - no page refresh needed

## Notes

- Results are calculated client-side with JavaScript
- No external libraries or frameworks used
- All validations happen before conversion
- The form uses `novalidate` and custom validation for better control
- Decimal precision is handled to avoid floating point display issues

## Author

Created by **Ravi Aanjana** for Oasis Infobyte Web Development & Designing Internship - Level 1, Task 3

## License

This project is created for educational purposes as part of the internship program.
