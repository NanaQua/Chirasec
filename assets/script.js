function checkAdmissionStatus() {
    const name = document.getElementById("checkName").value;
    const statusMessage = document.getElementById("statusMessage");

    // Dummy admission check (in practice, fetch admission status from the server/database)
    if (name.toLowerCase() === "john doe") { // Replace with dynamic check in the backend
        statusMessage.textContent = "Congratulations! You have been admitted to CHIRASEC.";
        statusMessage.style.color = "green";
    } else {
        statusMessage.textContent = "Sorry, admission is still in process or not granted.";
        statusMessage.style.color = "red";
    }
}
