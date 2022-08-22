function cost(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    if (inputField.value == "") {
        alert("Please Input Price");
        return 0;
    } else {
        const inputFieldValue = parseInt(inputField.value);
        return inputFieldValue;
    }
}
