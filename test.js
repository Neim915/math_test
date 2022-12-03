var score = 0
var ready = false
var correct_answer

function initialize()
{}

function shuffle_qs(){
    var abab = document.getElementById("q-1")
    var bcbc = document.getElementById("q-2")
    var abbc = document.getElementById("q-operation")
    var ans1 = document.getElementById("answer-1")
    var ans2 = document.getElementById("answer-2")
    var ans3 = document.getElementById("answer-3")
    var operation_array = ["+","-",":","X","%"]
    var random_num = Math.floor(Math.random()*operation_array.length);
    abbc.innerHTML = operation_array[random_num]
    if (random_num == 0)
    {
        number_1 =Math.floor(Math.random() * 49 + 1);
        number_2 =Math.floor(Math.random() * 49 + 1)
        abab.innerHTML = number_1.toString()
        bcbc.innerHTML = number_2.toString()
        guess_1 = number_1 + number_2
        guess_2 = guess_1 + Math.floor(Math.random()*2 + 1)
        guess_3 = guess_1 - Math.floor(Math.random()*2 + 1)
        correct_answer = guess_1
        guess = [guess_1,guess_2,guess_3]
        guess = shuffle(guess)
        ans1.innerHTML = guess[0].toString()
        ans2.innerHTML = guess[1].toString()
        ans3.innerHTML = guess[2].toString()
    }
    else if (random_num == 1)
    {
        number_1 =Math.floor(Math.random() * 49 + 1);
        number_2 =Math.floor(Math.random() * 49 + 1)
        if (number_1 >= number_2)
        {
            abab.innerHTML = number_1.toString()
            bcbc.innerHTML = number_2.toString()
            guess_1 = number_1 - number_2
        }
        else
        {
            abab.innerHTML = number_2.toString()
            bcbc.innerHTML = number_1.toString()
            guess_1 = number_2 - number_1
        }
        if (guess_1 == 0)
        {
            guess_2 = Math.floor(Math.random()*9 + 1)
            guess_3 = 10
        }
        else
        {
            guess_2 = guess_1 + Math.floor(Math.random()*2 + 1)
            guess_3 = guess_1 - Math.floor(Math.random()*2 + 1)
        }
        correct_answer = guess_1
        guess = [guess_1,guess_2,guess_3]
        guess = shuffle(guess)
        ans1.innerHTML = guess[0].toString()
        ans2.innerHTML = guess[1].toString()
        ans3.innerHTML = guess[2].toString()
    }
    else if (random_num == 2 || random_num == 3){
        type = Math.floor(Math.random()*3 + 1);
        if (type == 1)
        {
            number_1 =Math.floor(Math.random() * 10 + 1);
            number_2 =Math.floor(Math.random() * 9 + 2);
        }
        else if(type == 2)
        {
            number_1 =Math.floor(Math.random() * 13 + 1);
            number_2 =Math.floor(Math.random() * 6 + 2);
        }
        else if(type == 3)
        {
            number_1 =Math.floor(Math.random() * 3 + 1);
            number_2 =Math.floor(Math.random() * 24 + 2);
        }
        if (random_num == 2){
            abab.innerHTML = (number_1*number_2).toString();
            bcbc.innerHTML = number_2.toString();
            guess_1 = number_1
            guess_2 = guess_1 + Math.floor(Math.random()*2 + 1)
            guess_3 = guess_1 - Math.floor(Math.random()*3 + 1)
            correct_answer = guess_1
        }
        else
        {
            abab.innerHTML = number_1.toString();
            bcbc.innerHTML = number_2.toString();
            guess_1 = number_1*number_2
            guess_2a = guess_1 + 10
            guess_3a = guess_1 - Math.floor(Math.random()*5 + 1)
            guess_4a = guess_1 - 10 
            guess_5a = guess_1 + Math.floor(Math.random()*5 + 1)
            guess_wrongg = [guess_2a,guess_3a,guess_4a,guess_5a]
            guess_wrong = shuffle(guess_wrongg)
            guess_2 = guess_wrong[0]
            guess_3 = guess_wrong[1]
            correct_answer = guess_1
        }
        guess = [guess_1,guess_2,guess_3]
        guess = shuffle(guess)
        ans1.innerHTML = guess[0].toString()
        ans2.innerHTML = guess[1].toString()
        ans3.innerHTML = guess[2].toString()
    }
    else if (random_num == 4){
        number_1 =Math.floor(Math.random() * 78 + 21);
        number_2 =Math.floor(Math.random() * 15 + 5);
        abab.innerHTML = number_1.toString();
        bcbc.innerHTML = number_2.toString();
        guess_1 = number_1 % number_2
        if (guess_1 == 0)
        {
            guess_2 = Math.floor(Math.random()*3 + 1)
            guess_3 = guess_2 + Math.floor(Math.random()*2 + 1)
        }
        else
        {
            guess_2 = (guess_1 + Math.floor(Math.random()*3 + 1))%(number_2)
            guess_3 = (guess_1 - Math.floor(Math.random()*2 + 1))%(number_2)
        }
        correct_answer = guess_1
        guess = [guess_1,guess_2,guess_3]
        guess = shuffle(guess)
        ans1.innerHTML = guess[0].toString()
        ans2.innerHTML = guess[1].toString()
        ans3.innerHTML = guess[2].toString()
    }    
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function start_timer(){
    var timeLeft = 60;
    var elem = document.getElementById('the-time');
    var timerId = setInterval(countdown, 1000);
    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            timesup()
        } else {
        elem.innerHTML = 'TIME ' + timeLeft
        timeLeft--;
        }
  }
}

function timesup()
{
    var elem = document.getElementById('the-time');
    elem.innerHTML = 'TIME ' + 60
    ready = false
    alert("Time's up. Thank you for Playing")
}

function correct()
{
    var elem2 = document.getElementById('the-score');
    score = score += 1
    elem2.innerHTML = 'SCORE ' + score.toString()
}

function wrong_answer()
{
    var elem2 = document.getElementById('the-score');
    score = score -= 1
    elem2.innerHTML = 'SCORE ' + Math.max(0,score).toString()
}

function start(){
    if (ready == false)
    {
        let startt = confirm("Play Game?")
        if (startt == true)
        {
            var elem2 = document.getElementById('the-score');
            score = 0
            elem2.innerHTML = 'SCORE ' + score
            start_timer()
            shuffle_qs()
            ready = true
        }}}

function testing_1()
{
    if (ready == true)
    {
        var button1_val = document.getElementById("answer-1").innerHTML
    if (button1_val == correct_answer.toString())
    {
        var elem2 = document.getElementById('the-score');
        score = score += 1
        elem2.innerHTML = 'SCORE ' + score.toString()
    }
    else{
        wrong_answer()
    }
    shuffle_qs()
    }
    
}

function testing_2()
{
    if (ready)
    {
        var button2_val = document.getElementById("answer-2").innerHTML
        if (button2_val == correct_answer.toString())
        {
            correct()
        }
        else
        {
            wrong_answer()
        }
        shuffle_qs()
    } 
}

function testing_3()
{
    if (ready == true)
    {
        var button3_val = document.getElementById("answer-3").innerHTML
        if (button3_val == correct_answer.toString())
        {
            correct()
        }
        else{
            wrong_answer()
        }
        shuffle_qs()
    }
}
  

