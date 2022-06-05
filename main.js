//https://teachablemachine.withgoogle.com/models/1r9qG3azJ/

cat=0;
dog=0;
cow=0;
lion=0;

function start() {
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1r9qG3azJ/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        Red = Math.floor(Math.random() * 255)+1;
        Green = Math.floor(Math.random() * 255)+1;
        Blue = Math.floor(Math.random() * 255)+1;
        
        document.getElementById("Detected").innerHTML = "I Can Hear - "+results[0].label;
        document.getElementById("Detected").style.color = "rgb("+Red+","+Green+","+Blue+")";
        document.getElementById("voice").innerHTML = "Accuracy - "+(results[0].confidence * 100).toFixed(2)+" %";
        document.getElementById("voice").style.color = "rgb("+Red+","+Green+","+Blue+")";

        img = document.getElementById("image");

        if(results[0].label == "Dog Sound"){
            img.src = "https://media3.giphy.com/media/mmyMZ84jnSlu8/giphy.gif";
            dog = dog+1;
            document.getElementById("Detected").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "Meowing"){
            img.src = "https://c.tenor.com/Tkmzq2w3mMgAAAAC/meow-cat.gif";
            cat = cat+1;
            document.getElementById("Detected").innerHTML = "Detected Cat - "+ cat;
        }
        else if(results[0].label == "Roar"){
            img.src = "https://i.pinimg.com/originals/5e/0f/02/5e0f02142a9a47095ebc1f16266d9459.gif";
            lion = lion+1;
            document.getElementById("Detected").innerHTML = "Detected Lion - "+ lion;
        }
        else if(results[0].label == "Mooing"){
            img.src = "https://c.tenor.com/ioqB2XAdaQgAAAAC/cute-cow.gif";
            cow = cow+1;
            document.getElementById("Detected").innerHTML = "Detected Cow - "+ cow;
        }
    }
}
