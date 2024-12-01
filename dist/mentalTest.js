document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
        submitBtn.addEventListener("click", function() {
            const form = document.getElementById("mentalTestForm");
            const resultDiv = document.getElementById("result");
            const resetBtn = document.getElementById("resetBtn");
            let goodCount = 0;
            let badCount = 0;
            let allSelected = true; // Flag to check if all questions are answered

            // Collect answers and count good/bad conditions
            for (let i = 1; i <= 20; i++) { // Adjust this to match the number of questions
                const question = form["q" + i];
                if (question) {
                    const answer = question.value;
                    if (answer === "") {
                        allSelected = false; // If any question is unanswered
                    } else if (answer === "good") {
                        goodCount++;
                    } else if (answer === "bad") {
                        badCount++;
                    }
                }
            }

            if (!allSelected) {
                resultDiv.innerText = "Please make sure to choose an answer for every question.";
                resultDiv.style.color = "red";
                resultDiv.style.display = "block";
                return; // Stop processing if not all questions are answered
            }

            // Determine the result based on counts
            let result;
            if (badCount > goodCount) {
                result = "Your mental condition seems to need attention. It's important to seek help and should do counseling with a mentalist.";
                resultDiv.style.color = "red";
            } else if (badCount == goodCount){
                result = "It seems that there is a little stress and depression. You should exercise, hang out, and relax.";
                resultDiv.style.color = "orange";
            } else {
                result = "You seem to be in a good mental state. Keep up the good work.";
                resultDiv.style.color = "green";
            }

            // Display the result
            resultDiv.innerText = result;
            resultDiv.style.display = "block";
            resetBtn.style.display = "block";
        });
    }
});