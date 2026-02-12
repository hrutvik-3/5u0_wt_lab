function performSearch() {
    const inputText = document.getElementById("inputText").value;
    const searchText = document.getElementById("searchText").value;
    const output = document.getElementById("outputText");

    try {
        const regex = new RegExp(searchText, "g");
        const matches = inputText.match(regex);
        output.value = matches ? matches.join("\n") : "No matches found";
    } catch (error) {
        output.value = "Invalid regular expression";
    }
}

function performReplace() {
    const inputText = document.getElementById("inputText").value;
    const searchText = document.getElementById("searchText").value;
    const replaceText = document.getElementById("replaceText").value;
    const output = document.getElementById("outputText");

    try {
        const regex = new RegExp(searchText, "g");
        output.value = inputText.replace(regex, replaceText);
    } catch (error) {
        output.value = "Invalid regular expression";
    }
}

function performFormat() {
    const inputText = document.getElementById("inputText").value;
    const output = document.getElementById("outputText");

    // Capitalize first letter of each word
    output.value = inputText.replace(/\b\w/g, char => char.toUpperCase());
}
