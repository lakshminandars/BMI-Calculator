// button

function calculateBMI(){
    const height=parseFloat(document.getElementById("height").value)/100;
    const weight=parseFloat(document.getElementById("weight").value);
    const bmi=weight/(height*height);
    const bmiResult=document.getElementById('bmi-result');
    const bmiStatus=document.getElementById('bmi-status');

    if (!isNaN(bmi)) {
        bmiResult.textContent = bmi.toFixed(2);
        let status = '';

        if (bmi < 18.5) {
            status = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            status = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            status = 'Overweight';
        } else {
            status = 'Obese';
        }

        bmiStatus.textContent = status;
        
        speakStatus(status);
    } else {
        bmiResult.textContent = '0';
        bmiStatus.textContent = 'Unknown';
        
        speakStatus('Unknown');
    }
    
}



function speakStatus(status) {
    const utterance = new SpeechSynthesisUtterance(`Your BMI is ${document.getElementById('bmi-result').textContent} and your status is ${status}.`);
    speechSynthesis.speak(utterance);
}

// Add event listener for the button
document.getElementById('calculateBMI').addEventListener('click', calculateBMI);


