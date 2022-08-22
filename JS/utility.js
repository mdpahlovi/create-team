function cost(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    if (inputField.value == "") {
        alert("Please Input Price");
    } else {
        const inputFieldValue = parseInt(inputField.value);
        return inputFieldValue;
    }
}
