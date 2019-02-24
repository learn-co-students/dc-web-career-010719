count = 1
document.addEventListener("DOMContentLoaded", function(e) {
    let counter = document.querySelector("#counter");
    let num = parseInt(counter.innerText);
    function increment(){
      counter.innerText = ++num
    }
    function decrement(){
      counter.innerText = --num
    }
    let setIncrement = setInterval(increment, 1000);
    let plusElement = document.getElementById('+')
    let minusElement = document.getElementById('-')
    plusElement.addEventListener("click", increment)
    minusElement.addEventListener("click", decrement)

    /*

      function likeNum() {
          let li = document.querySelector(`.likes #${num}`)
          if (null == li) {
            li = document.createElement('li')
            li.id = num
            li.dataset.likes = 0;
            document.querySelector('.likes').appendChild(li);
          }

          li.dataset.likes ++;
          li.innerHTML = `${num} like ${li.dataset.likes} times`;
      }

    */

    let likesElement = document.querySelector('.likes')
    const likes = {}

    function like() {
      if (num in likes) {
        likes[num]++
      } else {
        likes[num] = 1
      }

      displayLikes()
    }

    function displayLike(num) {
      const likeLine = `<li>${num} was liked ${likes[num]} time(s)</li>`
      likesElement.innerHTML += likeLine

      /*
        let el = document.createElement('li')
        li.innerHTML = `${num} was liked ${likes[num]} time(s)`
        likesElement.appendChil(li)
      */
    }

    function displayLikes() {
      likesElement.innerHTML = ''
      for (const num in likes) {
        displayLike(num)
      }
    }

    let likeElement = document.getElementById('<3')
    likeElement.addEventListener('click', like)

    let pauseButton = document.getElementById('pause');
    let pause = false;

    function time() {
      if (!pause) {
        pause = true;
        pauseButton.innerText = 'resume';
        clearInterval(setIncrement);
      } else {
        pause = false;
        pauseButton.innerText = 'pause';
        setIncrement = setInterval(increment, 1000);
      }

      document.querySelectorAll('button:not(#pause)').forEach((button) => {
        button.disabled = pause;
      })
    }
    pauseButton.addEventListener('click', time);


    function newComment(e) {
      e.preventDefault()
      let comment = document.querySelector("input").value
      let reallyNewComment = document.createElement("p")
      reallyNewComment.innerText = comment
      document.querySelector("#list").appendChild(reallyNewComment)

    }
    let submitButton = document.querySelector("#submit")
    submitButton.addEventListener("click", newComment)
  })
