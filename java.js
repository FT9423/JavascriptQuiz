function pullAnswer(field) {
    let answer = document.getElementById(field);
    return answer.value;
}

function submitAnswers() {
    let answers = ["Hola", "Adios", "Por favor", "Gracias","Lo siento"];

    for (let i=0; i < 5; i++) {
        let fieldId = i + 1;
        let answer = pullAnswer("a" + fieldId);

        verifyAnswer(fieldId, answer == answers[i]);
    }
}

function verifyAnswer(field, isCorrect) {
    let verifyClass = isCorrect ? "answer correct" : "answer incorrect";
    let verifyIcon = isCorrect ? '<i class="fa fa-check-square correct" aria-hidden="true"></i>' : '<i class="fa fa-minus-square incorrect" aria-hidden="true"></i>';
    document.getElementById("a" + field).className = verifyClass;
    document.getElementById("icon" + field).innerHTML = verifyIcon;
}

function clearAnswers() {
    for (let i = 1; i < 6; i++){
        let field = document.getElementById("a" + i);
        field.value = null;
        field.className = null;
        document.getElementById("icon" + i).innerHTML = null;
    }
}