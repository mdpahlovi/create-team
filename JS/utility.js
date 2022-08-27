function cost(inputFieldId, fieldName) {
    const inputField = document.getElementById(inputFieldId);
    if (inputField.value == "") {
        alert(`Please Input ${fieldName}`);
        return 0;
    } else {
        const inputFieldValue = parseInt(inputField.value);
        return inputFieldValue;
    }
}
function valueOutput(fieldId, value = "00") {
    document.getElementById(fieldId).innerText = value;
}
