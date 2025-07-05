# String Calculator TDD Kata - Incubyte Assessment

## Project Overview

This project demonstrates a comprehensive implementation of the **String Calculator Kata** using **Test-Driven Development (TDD)** methodology. The solution showcases clean code principles, incremental development, and rigorous testing practices following TDD fundamentals.

## Assignment Requirements Met

✅ **Empty String Handling** -  0 for empty input  
✅ **Single Number** -  the number itself  
✅ **Two Numbers** -  sum of comma-separated numbers  
✅ **Multiple Numbers** - Handles unlimited amount of numbers  
✅ **New Line Support** - Handles `\n` as delimiter alongside commas  
✅ **Custom Delimiters** - Supports format `//[delimiter]\n`  
✅ **Negative Number Exception** - Throws exception with all negative numbers  
✅ **Large Number Filtering** - Ignores numbers > 1000  
✅ **Variable Length Delimiters** - Supports delimiters of any length  
✅ **Multiple Delimiters** - Handles multiple custom delimiters simultaneously  

## TDD Methodology Applied

This implementation follows **Test-Driven Development** principles, incorporating insights from Uncle Bob's educational content on TDD best practices and **TDD with JavaScript by FireShip**.

### Development Cycle Applied:
- **RED**: Write a failing test
- **GREEN**: Write minimal code to pass the test  
- **REFACTOR**: Clean up code while keeping tests green

## Test Coverage

The test suite includes **12 comprehensive test cases** with actual examples:

- `add("")`→`0`
- `add("1")`→`1`
- `add("2,3")` →`5`
- `add("2,3,4")` →`9`
- `add("1,2\n,3")` →`6`
- `add("//;\n1;2")` → `3`
- `add("//|\n1|2")` → `3`
- `add("//|\n1|-2|5|6|-4")` → **Throws "Negative numbers are not allowed: -2,-4"**
- `add("2,1001")` → `2` (ignores 1001)
- `add("//[***]\n1***2")` →`3`
- `add("//[*][%]\n1*2%3")` → `6`
- `add("//[**][%%]\n1**2%%5")` → `8`

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Incubyte-TDD-Assignment

# Install dependencies
npm install

# Run tests
npm test
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch
```

## Project Structure

```
Incubyte-TDD-Assignment/
├── src/
│   └── stringCalculator.js    # Main implementation
├── tests/
│   └── stringCalculator.test.js # Comprehensive test suite
├── package.json               # Project configuration
└── README.md                 # Project documentation
```

## Implementation Highlights

### Advanced Features Implemented
- **Regex-based Delimiter Parsing**: Robust handling of complex delimiter patterns
- **Escape Character Support**: Proper escaping of special regex characters
- **Multiple Delimiter Support**: `//[delim1][delim2]\n` format
- **Input Validation**: Comprehensive null and empty string handling

### Code Quality
- **ES6+ Syntax**: Modern JavaScript features
- **Modular Design**: Exportable functions for reusability
- **Comprehensive Comments**: Clear documentation of complex logic
- **Performance Optimized**: Efficient string parsing and number processing


## Key Learning Outcomes

- **TDD Mastery**: Demonstrated disciplined test-first development approach
- **Incremental Development**: Built functionality step-by-step following requirements
- **Problem Solving**: Handled complex string parsing and delimiter scenarios
- **Testing Strategy**: Created comprehensive test coverage for all edge cases

## References

- **Test-Driven Development** - TDD principles and best practices including Uncle Bob's educational content
- **Test-Driven Development with JavaScript by FireShip** - TDD methodology

