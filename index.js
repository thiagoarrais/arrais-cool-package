// Main package function
function isNullOrEmpty(input) {
    return (input === undefined || input === null);
}

// Make the main function available to other packages that require us
module.exports = isNullOrEmpty;
