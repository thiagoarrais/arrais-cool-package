// Main package function
function isNullOrEmpty(input) {
    return isNull(input) || isEmpty(input);
}

function isNull(input) {
    return (input === undefined || input === null);
}

// not exported
function isEmpty(input) {
    return input === '';
}

// Make the main function available to other packages that require us
module.exports = isNullOrEmpty;

module.exports.isNullOrEmpty = isNullOrEmpty;
module.exports.isNull = isNull;
