const chalk = require("chalk");
const axios = require("axios");
const sound = require("sound-play");
const path = require("path");
const arrayOfMusic = [
  "foo.mp3",
  "foo1.mp3",
  "foo2.mp3",
  "foo3.mpe",
  "foo4.mp3",
  "foo5.mp3",
];
const randMusic = arrayOfMusic[Math.floor(Math.random() * arrayOfMusic.length)];
const filePath = path.join(`${__dirname}/media`, randMusic);
sound.play(filePath, 1);
setInterval(()=>{
    sound.play(filePath, 1);
},120000);
const timer = () => {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log("\t"+chalk.bgRedBright("!")+chalk.greenBright.bold(time)+chalk.bgRed("!"));
};

const stopCallingTheTimer = setInterval(timer, 1000);

setTimeout(() => {
  const relaxArrayString = [
    "Go and do some yoga!",
    "Go and do some Exercise!",
    "Go and do some Meditation!",
    "Go and do some Running!",
    "Go and do some Swimming!",
    "Go and do some Gym!",
    "Go and do some Workout!",
    "Go and do some Reading!",
    "Go and do some Writing!",
    "Go and do some Cooking!",
    "Go and do some Cleaning of House!",
    "Go and do some Shopping!",
  ];
  const randRelaxArrayString = Math.floor(
    Math.random() * relaxArrayString.length
  );
  console.log(
    chalk.cyanBright(
      ` Relax you are Doing Great! \n ${relaxArrayString[randRelaxArrayString]}`
    )
  );
  clearInterval(stopCallingTheTimer);
}, 60 * (1000 * 30));

const newsData = async () => {
  const arrayOfNewsTopicFromPrograming = [
    "javascript",
    "nodejs",
    "reactjs",
    "angularjs",
    "vuejs",
    "typescript",
    "mongodb",
    "mysql",
    "postgresql",
    "sqlite",
    "oracle",
    "sqlserver",
    "firebase",
    "firestore",
    "nestjs",
    "expressjs",
    "react-native",
    "flutter",
    "kotlin",
    "swift",
    "c",
    "c++",
    "c#",
    "apache",
    "nginx",
    "ubuntu",
    "debian",
  ];
  const url = `https://hn.algolia.com/api/v1/search?query=${
    arrayOfNewsTopicFromPrograming[
      Math.floor(Math.random() * arrayOfNewsTopicFromPrograming.length)
    ]
  }`;
  const response = await axios.get(url);
  const data = response.data.hits;
  const rand = Math.floor(Math.random() * data.length);
  console.log(
    "[+] " + chalk.underline.white(`${data[rand].title}\n`),
    chalk.underline.blue(chalk.bold.cyanBright("~>") + `${data[rand].url}`)
  );
};
setInterval(newsData, 10000);
