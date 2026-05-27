const formCard = document.querySelector('.details-card:not(#result-card)');
const resultCard = document.getElementById('result-card');
const calculateBtn = document.querySelector('.calculate-buttons');
const backBtn = document.getElementById('back-btn');
const gradeDisplay = document.getElementById('grade');
const remarkDisplay = document.getElementById('remark');
const commentDisplay = document.getElementById('comment');
const statusDisplay = document.getElementById('status');
const scoreDisplay = document.getElementById('mark');
const nameDisplay = document.getElementById('name-summary');
const clearBtn = document.querySelector('.refresh-buttons');
const icon = document.getElementById("result-icons")
const iconColor = document.getElementById('resulticon');
const dottedLines = document.querySelector('.grade-container');
const results = document.querySelector('.result');

calculateBtn.addEventListener('click', function (event) {
    event.preventDefault();

    let grade = '';
    let remark = '';
    let comment = '';
    let status = '';

    results.style.backgroundColor = '';
    dottedLines.style.borderColor = '';
    gradeDisplay.style.color = '';
    remarkDisplay.style.color = '';
    statusDisplay.style.color = '';

    if (icon) icon.className = "fa-solid";
    if (iconColor) iconColor.className = "resulticon";

    const name = document.getElementById('full-name');
    const fullName = name.value;
    if (fullName === '') {
        alert('please Enter your full name')
        return;
    }
    const score = document.getElementById('score')
    const scoree = score.value
    const currentScore = Number(scoree)
    if (isNaN(currentScore)) {
        alert('please enter a valid number')
        return;
    }
    if (currentScore < 0 || currentScore > 100) {
        alert('please enter a number between 0 and 100')
        return;
    }
    if (currentScore >= 90) {
        grade = 'A'
        remark = 'Excellent!'
        comment = 'Great job! Keep up the excellent work.'
        status = 'Pass'
        results.style.backgroundColor = '#f0fdf4'
        dottedLines.style.borderColor = '#bbf7d0'
        gradeDisplay.style.color = '#0b702a'
        remarkDisplay.style.color = '#0b702a'
        statusDisplay.style.color = '#0b702a'
        if (icon) icon.classList.add('fa-check-circle');
        if (iconColor) iconColor.classList.add("resulticon");
    } else if (currentScore >= 80) {
        grade = 'B'
        remark = 'Very Good!'
        comment = "Well done! You're doing really well."
        status = 'Pass'
        results.style.backgroundColor = '#eff6ff'
        dottedLines.style.borderColor = '#bfdbfe'
        gradeDisplay.style.color = 'blue'
        remarkDisplay.style.color = 'blue'
        statusDisplay.style.color = 'blue'
        if (icon) icon.classList.add('fa-award');
        if (iconColor) iconColor.classList.add('b');
    } else if (currentScore >= 70) {
        grade = 'C'
        remark = 'Good Job!'
        comment = "Nice work! Keep practicing and you will improve even more."
        status = 'Pass'
        results.style.backgroundColor = '#fffbeb'
        dottedLines.style.borderColor = '#fde68a'
        gradeDisplay.style.color = '#f59e0b'
        remarkDisplay.style.color = '#f59e0b'
        statusDisplay.style.color = '#f59e0b'
        if (icon) icon.classList.add('fa-thumbs-up');
        if (iconColor) iconColor.classList.add('c');
    } else if (currentScore >= 60) {
        grade = 'D'
        remark = 'Pass!'
        comment = "Good effort! Keep learning and building confidence."
        status = 'Pass'
        results.style.backgroundColor = '#fff7ed'
        dottedLines.style.borderColor = '#fed7aa'
        gradeDisplay.style.color = '#f97316'
        remarkDisplay.style.color = '#f97316'
        statusDisplay.style.color = '#f97316'
        if (icon) icon.classList.add('fa-book-open');
        if (iconColor) iconColor.classList.add('d');
    } else {
        grade = 'F'
        remark = 'Needs Improvement!'
        comment = "Keep practicing! you've got room for improvement."
        status = 'Fail'
        results.style.backgroundColor = '#fef2f2'
        dottedLines.style.borderColor = '#fecaca'
        gradeDisplay.style.color = '#ef4444'
        remarkDisplay.style.color = '#ef4444'
        statusDisplay.style.color = '#ef4444'
        if (icon) icon.classList.add('fa-rotate-right');
        if (iconColor) iconColor.classList.add('f');
    }
    gradeDisplay.textContent = grade;
    remarkDisplay.textContent = remark;
    commentDisplay.textContent = comment;
    statusDisplay.textContent = status;
    scoreDisplay.textContent = currentScore;
    nameDisplay.textContent = fullName;

    formCard.classList.add('hidden-mobile');
    resultCard.classList.remove('hidden-mobile');
});

clearBtn.addEventListener('click', function () {
    const name = document.getElementById('full-name');
    name.value = ""

    const score = document.getElementById('score')
    score.value = ""

    gradeDisplay.textContent = '';
    remarkDisplay.textContent = '';
    commentDisplay.textContent = '';
    statusDisplay.textContent = '';
    scoreDisplay.textContent = '';
    nameDisplay.textContent = '';


    results.style.backgroundColor = '';
    dottedLines.style.borderColor = '';
    gradeDisplay.style.color = '';
    remarkDisplay.style.color = '';
    statusDisplay.style.color = '';

    resultCard.classList.add('hidden-mobile');
    formCard.classList.remove('hidden-mobile');
})

backBtn.addEventListener('click', function () {
    resultCard.classList.add('hidden-mobile');
    formCard.classList.remove('hidden-mobile');
});

