let result = document.getElementById("output");
let historyList = document.getElementById("historyList");

function insert(num) {
    result.value += num;
}

function total() {
    try {
        let expression = result.value;
        let total = eval(result.value);
        result.value = total;

        // Save to history
        let li = document.createElement("li");
        li.textContent = `${expression} = ${total}`;
        historyList.prepend(li); // Add to the top of the list
    } catch (err) {
        result.value = "Invalid!----->Input";
    }
}

function suraj() {
    result.value = "";
}

function delet() {
    result.value = result.value.slice(0, -1);
}

function clearHistory() {
    historyList.innerHTML = '';
}

result.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        total();
    }
});

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if ((charCode >= 48 && charCode <= 57) || charCode == 8 || charCode == 46 || charCode == 37 || charCode == 39 || charCode == 43 || charCode == 45 || charCode == 42 || charCode == 47) {
        return true;
    }
    return false;
}
result.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        total();
    } else if (event.key === "Backspace") {
        result.value = "0";
        event.preventDefault();  // Prevent the default backspace behavior
    }
});


window.onload = function () {
    result.focus();
}