function calculateLove() {
    let name1 = document.getElementById('name1').value.trim();
    let name2 = document.getElementById('name2').value.trim();
    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }
    
    let loveScore = Math.floor(Math.random() * 101); 
    document.getElementById('percentage').textContent = loveScore;
    document.getElementById('progress').style.width = loveScore + "%";
    
    let message = "";
    let gif = "";
    
    if (loveScore > 80) {
        message = "You are a perfect match! 💑";
        gif = "https://media.giphy.com/media/3o6ZsYm5vJtWigK1Is/giphy.gif";
    } else if (loveScore > 50) {
        message = "There is potential! Keep working on it. 💕";
        gif = "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif";
    } else {
        message = "It might be tough, but love finds a way! 💔";
        gif = "https://media.giphy.com/media/26FPCXdkvDbKBbgOI/giphy.gif";
    }
    
    document.getElementById('message').textContent = message;
    document.getElementById('loveGif').src = gif;
    document.getElementById('loveGif').classList.remove('hidden');
    document.getElementById('result').classList.remove('hidden');
    
    new Howl({ src: ['https://www.myinstants.com/media/sounds/tada.mp3'] }).play();
    
    fetch('https://api.quotable.io/random?tags=love')
        .then(response => response.json())
        .then(data => {
            document.getElementById('loveQuote').textContent = `💌 "${data.content}" - ${data.author}`;
        });
}