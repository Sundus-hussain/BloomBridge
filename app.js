//details of the child
document.querySelector('.child-name').textContent = "Hi, I'm Aman";
document.querySelector('.child-photo').src = "aman1.png";


function navigateToSpeech() {
    document.getElementById("main").style.display = "none";
    document.getElementById("speech-therapy").style.display = "block";
  }
  
  function navigateTo(sectionId) {
    document.getElementById("main").style.display = "none";
    document.getElementById(sectionId).style.display = "block";
  }
  
  function goBack() {
    document.querySelectorAll('.therapy-screen').forEach(screen => {
      screen.style.display = 'none';
    });
    document.getElementById("main").style.display = "block";
  }
  
  function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.pitch = 1.2;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
  
  function speakEmotion(text) {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
  }

  function speakRoutine(text) {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
  }
// picture to word
const quizData = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
      correct: "Apple",
      options: ["Apple", "Car", "Dog"]
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Collage_of_Nine_Dogs.jpg",
      correct: "Dog",
      options: ["Cat", "Dog", "Ball"]
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
      correct: "Cat",
      options: ["Car", "Banana", "Cat"]
    }
  ];
  
  let currentQuiz = 0;
  
  function loadQuiz() {
    const quiz = quizData[currentQuiz];
    console.log("Loading image:", quiz.image);
  
    const img = document.getElementById("quiz-image");
    img.src = quiz.image;
    img.onerror = () => console.error("❌ Failed to load image:", quiz.image);
  
    document.getElementById("option1").textContent = quiz.options[0];
    document.getElementById("option2").textContent = quiz.options[1];
    document.getElementById("option3").textContent = quiz.options[2];
    document.getElementById("feedback").textContent = "";
  }
  
  function checkAnswer(answer) {
    const quiz = quizData[currentQuiz];
    const feedback = document.getElementById("feedback");
  
    if (answer === quiz.correct) {
      feedback.textContent = "✅ Correct!";
      feedback.style.color = "green";
      setTimeout(() => {
        currentQuiz = (currentQuiz + 1) % quizData.length;
        loadQuiz();
      }, 1000);
    } else {
      feedback.textContent = "❌ Try Again!";
      feedback.style.color = "red";
    }
  }
  
  function goBack() {
    document.querySelectorAll('.therapy-screen').forEach(screen => {
      screen.style.display = 'none';
    });
    document.getElementById("main").style.display = "block";
  }
  
  // Load quiz on page load
  window.onload = loadQuiz;
  
async function startEmotionRecognition() {
    const video = document.getElementById('video');
    const result = document.getElementById('emotion-result');
  
}

//for emotions
async function analyzeEmotion() {
    const fileInput = document.getElementById('fileInput');
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = ''; // Clear previous results

    if (!fileInput.files || fileInput.files.length === 0) {
      resultDiv.textContent = 'Please select an image first.';
      return;
    }

    const file = fileInput.files[0];

    // Display a loading message
    resultDiv.textContent = 'Analyzing emotion...';

    try {
      // Example placeholder: simulate API call or processing
      // Replace this with your actual emotion recognition logic
      
      await new Promise(resolve => setTimeout(resolve, 2000)); // simulate delay

      // Dummy emotion result
      const detectedEmotion = 'Happy 😊';

      // Show the result
      resultDiv.textContent = `Detected Emotion: ${detectedEmotion}`;
    } catch (error) {
      resultDiv.textContent = 'Error analyzing emotion. Please try again.';
      console.error(error);
    }
  }