const button1 = document.getElementById('button1');

button1.addEventListener('click', function onClick() {
  button1.style.backgroundColor = 'salmon';
  button1.style.color = 'white';

  button2.style.backgroundColor = 'white';
  button2.style.color = 'black';

  button3.style.backgroundColor = 'white';
  button3.style.color = 'black';

  button4.style.backgroundColor = 'white';
  button4.style.color = 'black';

  button5.style.backgroundColor = 'white';
  button5.style.color = 'black';

});

button2.addEventListener('click', function onClick() {
  button2.style.backgroundColor = 'salmon';
  button2.style.color = 'white';

  button1.style.backgroundColor = 'white';
  button1.style.color = 'black';

  button3.style.backgroundColor = 'white';
  button3.style.color = 'black';

  button4.style.backgroundColor = 'white';
  button4.style.color = 'black';

  button5.style.backgroundColor = 'white';
  button5.style.color = 'black';

});

button3.addEventListener('click', function onClick() {
  button3.style.backgroundColor = 'salmon';
  button3.style.color = 'white';

  button2.style.backgroundColor = 'white';
  button2.style.color = 'black';

  button1.style.backgroundColor = 'white';
  button1.style.color = 'black';

  button4.style.backgroundColor = 'white';
  button4.style.color = 'black';

  button5.style.backgroundColor = 'white';
  button5.style.color = 'black';

});

button4.addEventListener('click', function onClick() {
  button4.style.backgroundColor = 'salmon';
  button4.style.color = 'white';

  button2.style.backgroundColor = 'white';
  button2.style.color = 'black';

  button3.style.backgroundColor = 'white';
  button3.style.color = 'black';

  button1.style.backgroundColor = 'white';
  button1.style.color = 'black';

  button5.style.backgroundColor = 'white';
  button5.style.color = 'black';

});

button5.addEventListener('click', function onClick() {
  button5.style.backgroundColor = 'salmon';
  button5.style.color = 'white';

  button2.style.backgroundColor = 'white';
  button2.style.color = 'black';

  button3.style.backgroundColor = 'white';
  button3.style.color = 'black';

  button4.style.backgroundColor = 'white';
  button4.style.color = 'black';

  button1.style.backgroundColor = 'white';
  button1.style.color = 'black';

});



function changeTextContent(level){
  if(level == 1){
    document.getElementById("subheader").textContent = "What is an API?";
    document.getElementById("mainText").textContent = "API is short for application programming interface, and it's what allows for applications to talk to each other. Currently APIs adhere to standards that allow them to be understood be developers and makes communication more seamless. The API serves as a intermediary between the client and the server, allowing it to make requests for certain pieces of data that the server allows. The API allows for only small packets of data to be transported without privacy concerns. It gives companies and users access to the endpoint data of the API without revealing trade secrets or other information regarding how that data was attained. These can be found all over the web and you've probably interacted with hundreds of these without even knowing it.";
  } else if (level == 2){
    document.getElementById("subheader").textContent = "Different Types of APIs";
    document.getElementById("mainText").textContent = "There are three main types of APIs when it comes to categorizing them by usage. Private APIs.The purpose of these application software interfaces is to enhance corporate offerings and solutions. These APIs can be used by contractors or in-house developers to build new systems or customer-facing apps by using pre-existing systems, as well as to integrate an organization's IT systems or applications. Apps may be made available to the general public, which are called Public APIs, but only individuals who are in direct contact with the API publisher can access the interface. The private approach gives a business complete control over API usage. Associated APIs This kind of API is shared with business partners who have an agreement with the publisher, yet it is publicly advertised. Software integration between two companies is the most typical use case for partner APIs. Businesses that give partners access to data or capabilities get additional sources of income, and ensuring that they maintain a solid user experience and brand identity.";
  } else if (level == 3){
    document.getElementById("subheader").textContent = "API Applications";
    document.getElementById("mainText").textContent = "At this point you should understand what an API is in theory, but now, to really hammer the concept, we can examine some real world examples/applications of APIs. Something as simple as the login to your favorite website might have the option to login through a third party, something like Facebook or Google. One concern you may have had is one of privacy, that this website now has access to your social media accounts. But, thanks to APIs, this couldn't be further from the truth. Websites like these make API calls to the third party and check that you are signed in. That confirmation then serves as authenticiation on the original website and you are logged in. Another option you've probably interacted with is the weather. If you search up the weather on Google, instead of sourcing that data themselves, Google makes an API request  to a weather service and displays the data from that request. APIs are one of the many reasons the internet as a whole acts as an interconnected service that is better than the sum of it's parts. APIs are also not exclusively public, and play a large role when it comes to maintaining the integrity of internal applications, such as finances or streaming services.";
  } else if (level == 4){
    document.getElementById("subheader").textContent = "Coding Your First API";
    document.getElementById("mainText").textContent = "Now the fun part, coding your first API. Although APIs are language agnostic, in this example we will be using Javascript, as that is one of the most widely used languages, and will likely be utilized by all developers at some point throughout their career, so familiarity with the language is integral. In this example we'll be coding a short website that will display the weather. Once you have your boilerplate HTML code ready (type ! in VSC as a shortcut), create your script.js file, and link your JS file to your html you're ready to begin. In this example we will be using rapidAPI and their fetch request. Create an account with RapidAPI and navigate to the OpenWeatherMap API page, and select the basic plan for this API (which should be free). Locate the current weather data endpoint, and input your city i.e. London,uk. Hit the button that says Test Endpoint and confirm that the response body contains that data. Next locate the Code Snippet, select JavaScript, and under JavaScript, select fetch. Here you will find the code to make an API request. Subsitute the portion that says [your rapidapi key] with your actual key. Be sure not to share this key with anyone, because it may lead to your API timing out or being charged for calls you did not make. Copy this code and put into your application, and when you check the console, you should see your data. Now it's up to you to decide which parts you want to use or display.";
  } else{
    document.getElementById("subheader").textContent = "Project Ideas";
    document.getElementById("mainText").textContent = "Now that you have some basic familirity with APIs I'll give you a few projects you can follow in order of ascending difficulty to attain mastery of this concept. Firstly, try using thecatapi to generate a random catgif on every click of a button. Once you've gotten familiar with this tier of projects, try moving on to more complex APIs like the openAI API which would enable you to create a real time chat application. Lastly, try creating your own API as a part of a larger project, whether that be geared towards consumers or developers. These projects might initially seem daunting, but with practice and experience you'll eventually find yourself much more comfortable with the language as a whole.";
  }
}