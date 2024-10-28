let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let date=new Date()
    let hour=date.getHours()
    if(hour>=0 && hour<12){
        speak("Good Morning Ma'am")
    }
    else if(hour>=12 && hour<16){
        speak("Good Afternoon Ma'am")
    }
    else{
        speak("Good Evening Ma'am.. How can I help you?")
    }
}

// window.addEventListener("load", ()=>{
//     wishMe()
// })

let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(e)=>{
    let currentIndex=e.resultIndex
    let transcript=e.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click", ()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function getWeather(city) {
    const api = '77a8f82e0d57f1fbfd6eebfe7410a54a';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = data.weather[0].description;
            speak(`The weather in ${city} is ${weather}`);
        })
        .catch(error => console.error('Error:', error));
}


function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")||message.includes("hii")){
        speak("Hello, How can I help you?") 
        document.getElementById("logo").style.display = "block" // Show the robot image
        // document.getElementById("logo").style.display = "none"
        setTimeout(() => {
            document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 2000)
        }, 1000)
        setTimeout(() => {
            // document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 2000)
        }, 1000)
    }
    else if(message.includes("who are you")||message.includes("who developed you")||message.includes("who created you")||message.includes("what is your name")){
        speak("I am Myra, Your Virtual Assistant , created by Nityaa Maam")
        setTimeout(() => {
            document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 4000)
        }, 1000)
    }

    // else if(message.includes("nithya")||message.includes("nitya")||message.includes("nityaa")||message.includes("nitya maheshwari")){
    //     speak("Oh, you're curious about Nitya Maheshwari? Well, let me tell you.She is currently a 3rd-year BTech student pursuing Computer Science Engineering at Acropolis Institute of Technology and Research. She hascompleted her schooling with outstanding academic achievements: 95% in Class 10th and 93.8% in Class 12th from Chameli Devi Public School.She possess a solid understanding of Data Structures and Algorithms in C++ and is skilled in web development. Additionally, She has foundational knowledge of Python, Java, and MySQL.Known for my strong communication skills and collaborative spirit, She is curious, innovative, and always up for something new. If you are ever looking for someone who can balance creativity with analytical thinking, Nitya is your go-to person!")
    //     setTimeout(() => {    
    //         document.getElementById("logo").style.display = "none" // Hide the robot image
    //         document.getElementById("video").style.display = "block"
    //         document.getElementById("video").currentTime = 0 // Show the video
    //         document.getElementById("video").play() // Play the video
    //         setTimeout(() => {
    //             document.getElementById("video").pause() // pause the video
    //         }, 20000)
    //     }, 10000)
    // }

    else if(message.includes("how are you")){
        speak("I am fine, you are very kind to ask. What about you")
        setTimeout(() => {
            document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 4000)
        }, 1000)
    }
    else if(message.includes("fine")||message.includes("good")){
        speak("Great to hear that. What can I do for you?")
        setTimeout(() => {
            document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 3000)
        }, 1000)
    }
    else if(message.includes("i am good")){
        speak("Great to hear that.")
        setTimeout(() => {
            document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 1000)
        }, 1000)
    }
    else if(message.includes("meet you")){
        speak("Thank you! nice to meet you too. What can I do for you?")
        setTimeout(() => {
            document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 4000)
        }, 1000)
    }
    else if(message.includes("thank you")||message.includes("thanks")){
        speak("Happy to help.")
        setTimeout(() => {
            document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 1000)
        }, 1000)
    }
    else if(message.includes("bye")||message.includes("good bye")){
        speak("Bye, See you soon. Hope I was helpful.")
        setTimeout(() => {
            document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 4000)
        }, 1000)
    }
    else if(message.includes("you are so beautiful")||message.includes("beautiful")||message.includes("sexy")||message.includes("hot")){
        speak("Thanks, I like to think that beauty comes from within")
        setTimeout(() => {
            document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 4000)
        }, 1000)
    }
    else if(message.includes("i am sad")||message.includes("i am depressed")||message.includes("i am depressed")){
        speak("Sorry to hear that. What can I do for you?")
        setTimeout(() => {
            document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 3000)
        }, 1000)
    }
    else if (message.includes("i am bored")){
        speak("What can I do for you?")
        setTimeout(() => {
            document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 2000)
        }, 1000)
    }
    else if (message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/")
    }
    else if (message.includes("open google")){  
        speak("opening google")     
        window.open("https://www.google.com/")  
    }
    else if (message.includes("open facebook")){ 
        speak("opening facebook")      
        window.open("https://www.facebook.com/")  
    }
    else if (message.includes("open instagram")){
        speak("opening instagram")       
        window.open("https://www.instagram.com/")      
    }
    else if (message.includes("open twitter")){  
        speak("opening twitter")     
        window.open("https://www.twitter.com/")  
    }
    else if (message.includes("open linkedin")){
        speak("opening linkedin")       
        window.open("https://www.linkedin.com/")    
    }
    else if (message.includes("open chat gpt")){
        speak("opening chatgpt")       
        window.open("https://www.chatgpt.com/")    
    }
    else if (message.includes("open github")){ 
        speak("opening github")      
        window.open("https://www.github.com/")  
    }
    else if (message.includes("open stackoverflow")){  
        speak("opening stackoverflow")     
        window.open("https://www.stackoverflow.com/")  
    }
    else if (message.includes("open whatsapp")){  
        speak("opening whatsapp")     
        window.open("https://www.whatsapp.com/")  
    }
    else if(message.includes("tell me a joke")){
        speak("Why did the programmer quit his job? He didn't get arrays.")
    }
    else if(message.includes("what is my name")){
        speak("Your name is Nityaa.")
    }
    else if(message.includes("what is my age")){
        speak("You are 20 years old.")
        setTimeout(() => {
            document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 1000)
        }, 1000)
    }
    else if(message.includes("what is my favorite food")){
        speak("Your favorite food is Pizza.")
        setTimeout(() => {
            document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 2000)
        }, 1000)
    }
    else if(message.includes("what is my favorite colour")){ 
        speak("Your favorite color is Blue.")
        setTimeout(() => {
            document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 1000)
        }, 1000)
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        setTimeout(() => {
            document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 2000)
        }, 1000)
        window.open("calculator://")
        
    }
    else if(message.includes("time")){
       let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time)
       setTimeout(() => {
        document.getElementById("logo").style.display = "none" // Hide the robot image
        document.getElementById("video").style.display = "block"
        document.getElementById("video").currentTime = 0 // Show the video
        document.getElementById("video").play() // Play the video
        setTimeout(() => {
            document.getElementById("video").pause() // pause the video
        }, 2000)
    }, 1000)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
        speak(date)
        setTimeout(() => {
            document.getElementById("logo").style.display = "none" // Hide the robot image
            document.getElementById("video").style.display = "block"
            document.getElementById("video").currentTime = 0 // Show the video
            document.getElementById("video").play() // Play the video
            setTimeout(() => {
                document.getElementById("video").pause() // pause the video
            }, 2000)
        }, 1000)
    }
    else if(message.includes("weather")){
        speak("Which city do you want to know the weather of?")
        recognition.onresult = (e) => {
            let city = e.results[0][0].transcript.trim()
           
            speak(`The weather in ${city} is ${getWeather(city)}`)
        }
        recognition.start()
    }
    
    else{
        let finalText="This is what I found on Internet regarding"+message.replace("myra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message}`)
    }
 
}