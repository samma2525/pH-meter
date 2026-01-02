let voltValue;
let R = 8.314; // J/(mol·K)
let F = 96485; // C/mol
let T = 298; // K  
let Ln10 = Math.log(10);



document.getElementById("mySubmit").onclick = function() {
    voltValue = document.getElementById("voltInput").value;
    document.getElementById("pHtext").textContent = calculatePH(voltValue);
}

function calculatePH(voltValue) {
    if (voltValue > 0.828 || voltValue < 0) {
        document.getElementById("Note").textContent = "Please enter a possible voltage value, the range is between 0.828 & 0.";
    } else {
        document.getElementById("Note").textContent = "Please enter a possible voltage value, the range is between 0.828 & 0.";
        let pH = (voltValue * F) / (2.303 * R * T);
        return pH.toFixed(2);
    }
}