import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
const port = 4000;

const allowedOrigins = ['http://localhost:3000', 'https://project-zeta-gray.vercel.app'];

// Configure CORS
app.use(cors({
    origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }, // Replace with the origin you want to allow
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.urlencoded({ extended: true }));


  //1. GET a random truth question
    app.get("/truth/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * gameCard[0].Truth.length);
    res.json(gameCard[0].Truth[randomIndex]);
  });
  
  //1. GET a random dare
    app.get("/dare/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * gameCard[0].Dare.length);
    res.json(gameCard[0].Dare[randomIndex]);
  });

app.listen(port, () => {
    console.log(`Api Successfully started server on port ${port}.`);
  });

  var gameCard = [ {

    Truth: [
        {
            id: 1,
            question: "When was the last time you lied?",
            type: "Best",
        },
        {
            id: 2,
            question: "When was the last time you cried?",
            type: "Best",
        },
        {
            id: 3,
            question: "What's your biggest fear?",
            type: "Best",
        },
        {
            id: 4,
            question: "What's your biggest fantasy?",
            type: "Best",
        },
        {
            id: 5,
            question: "Who's the last person you searched on Instagram?",
            type: "Best",
        },
        {
            id: 6,
            question: "What's the strangest thing you've ever eaten?",
            type: "Best",
        },
        {
            id: 7,
            question: "What's your relationship dealbreaker?",
            type: "Best",
        },
        {
            id: 8,
            question: "What's a secret you've never told anyone?",
            type: "Best",
        },
        {
            id: 9,
            question: "Do you have a hidden talent?",
            type: "Best",
        },
        {
            id: 10,
            question: "Who was your first celebrity crush?",
            type: "Best",
        },
        {
            id: 11,
            question: "Have you ever cheated in an exam?",
            type: "Best",
        },
        {
            id: 12,
            question: "If you were going to be on a reality TV show, which would it be?",
            type: "Best",
        },
        {
            id: 13,
            question: "What's your biggest insecurity?",
            type: "Best",
        },
        {
            id: 14,
            question: "What's the biggest mistake you've ever made?",
            type: "Best",
        },
        {
            id: 15,
            question: "What's one thing you hate people knowing about you?",
            type: "Best",
        },
        {
            id: 16,
            question: "What's the worst thing anyone's ever done to you?",
            type: "Best",
        },
        {
            id: 17,
            question: "What's the best thing anyone's ever done for you?",
            type: "Best",
        },
        {
            id: 18,
            question: "What's your worst habit?",
            type: "Best",
        },
        {
            id: 19,
            question: "What's the biggest misconception about you?",
            type: "Best",
        },
        {
            id: 20,
            question: "What's one thing you wish people knew about you?",
            type: "Best",
        },
        {
            id: 21,
            question: "Why did your last relationship break down?",
            type: "Best",
        },
        {
            id: 22,
            question: "What's the most you've spent on a night out?",
            type: "Best",
        },
        {
            id: 23,
            question: "Have you ever returned or re-gifted a present?",
            type: "Best",
        },
        {
            id: 24,
            question: "Do you have a favourite sibling?",
            type: "Best",
        },
        {
            id: 25,
            question: "What have you purchased that's been the biggest waste of money?",
            type: "Best",
        },
        {
            id: 26,
            question: "How would you rate your looks on a scale of 1 to 10?",
            type: "Best",
        },
        {
            id: 27,
            question: "What celebrity do you look up to?",
            type: "Best",
        },
        {
            id: 28,
            question: "If you could be one celebrity for a day, who would it be?",
            type: "Best",
        },
        {
            id: 29,
            question: "If you could do any job in the world, what would it be?",
            type: "Best",
        },
        {
            id: 30,
            question: "What's your dream life?",
            type: "Best",
        },
        {
            id: 31,
            question: "What do you value the most - money, fame, success, friends, family, etc?",
            type: "Best",
        },
        {
            id: 32,
            question: "What’s your biggest red flag?",
            type: "Best",
        },
        {
            id: 33,
            question: "What’s one movie you’re embarrassed to admit you enjoy?",
            type: "Best",
        },
        {
            id: 34,
            question: "What music artist do you secretly think is overrated?",
            type: "Best",
        },
        {
            id: 35,
            question: "What’s your most controversial political opinion?",
            type: "Best",
        },
        {
            id: 36,
            question: "Name something you can’t live without",
            type: "Best",
        },
        {
            id: 37,
            question: "Where do you think you’ll be in five years time?",
            type: "Best",
        },
        {
            id: 38,
            question: "How well do you think you’d do in a horror movie?",
            type: "Best",
        },
        {
            id: 39,
            question: "How many stuffed animals do you own?",
            type: "Best Did you ever get in trouble at school? And if so what for?",
        },
        {
            id: 40,
            question: "Did you ever get in trouble at school? And if so what for?",
            type: "Best",
        },
        {
            id: 41,
            question: "Do you have any phobias?",
            type: "Best",
        },
        {
            id: 42,
            question: "What's the drunkest you've ever been?",
            type: "Funny",
        },
        {
            id: 43,
            question: "What's the most embarrassing thing you've ever done?",
            type: "Funny",
        },
        {
            id: 44,
            question: "What's the most disgusting thing you've ever done?",
            type: "Funny",
        },
        {
            id: 45,
            question: "What's the most embarrassing thing you've done in a taxi?",
            type: "Funny",
        },
        {
            id: 46,
            question: "What's the silliest reason you've left a club early?",
            type: "Funny",
        },
        {
            id: 47,
            question: "Tell me about your first kiss",
            type: "Funny",
        },
        {
            id: 48,
            question: "What was the most inappropriate time you farted?",
            type: "Funny",
        },
        {
            id: 49,
            question: "What's something you really hope your family never finds out about?",
            type: "Funny",
        },
        {
            id: 50,
            question: "Who do you think is the worst-dressed person in this room?",
            type: "Funny",
        },
        {
            id: 51,
            question: "Have you ever practised kissing in a mirror?",
            type: "Funny",
        },
        {
            id: 52,
            question: "What's your worst fashion moment?",
            type: "Funny",
        },
        {
            id: 53,
            question: "What's your biggest pet peeve?",
            type: "Funny",
        },
        {
            id: 54,
            question: "What TV character do you relate to the most?",
            type: "Funny",
        },
        {
            id: 55,
            question: "Who do you like best - Kris, Kourtney, Kim, Khloé, Kendall or Kylie?",
            type: "Funny",
        },
        {
            id: 56,
            question: "Have you ever dined and dashed?",
            type: "Funny",
        },
        {
            id: 57,
            question: "Have you ever had sex on the beach?",
            type: "Funny",
        },
        {
            id: 58,
            question: "Would you like to be a member of the mile-high club?",
            type: "Funny",
        },
        {
            id: 59,
            question: "Would you consider going on Love Island?",
            type: "Funny",
        },
        {
            id: 60,
            question: "What's the worst meal you've ever cooked?",
            type: "Funny",
        },
        {
            id: 61,
            question: "Have you ever done a strip tease for a partner?",
            type: "Funny",
        },
        {
            id: 62,
            question: "If you could pick one other player to take with you to a deserted island, who would it be?",
            type: "Funny",
        },
        {
            id: 63,
            question: "If you suddenly had a million pounds, how would you spend it?",
            type: "Funny",
        },
        {
            id: 64,
            question: "Who in the group would you want by your side in a zombie apocalypse?",
            type: "Funny",
        },
        {
            id: 65,
            question: "Which fashion trend are you embarrassed to admit you’ve taken part in?",
            type: "Funny",
        },
        {
            id: 66,
            question: "Have you ever had an imaginary friend?",
            type: "Funny",
        },
        {
            id: 67,
            question: "How often do you wash your sheets?",
            type: "Funny",
        },
        {
            id: 68,
            question: "Do you believe in aliens?",
            type: "Funny",
        },
        {
            id: 69,
            question: "Where's the weirdest place you peed?",
            type: "Weird",
        },
        {
            id: 70,
            question: "Have you ever peed in the shower?",
            type: "Weird",
        },
        {
            id: 71,
            question: "What's the strangest dream you've had?",
            type: "Weird",
        },
        {
            id: 72,
            question: "Where's the weirdest place you've had sex?",
            type: "Weird",
        },
        {
            id: 73,
            question: "What's one thing you only do when you're alone?",
            type: "Weird",
        },
        {
            id: 74,
            question: "What's the strangest rumour you've heard about yourself?",
            type: "Weird",
        },
        {
            id: 75,
            question: "What's your favourite gross food combination?",
            type: "Weird",
        },
        {
            id: 76,
            question: "What's the weirdest lie you've ever told?",
            type: "Weird",
        },
        {
            id: 77,
            question: "Do you have any fake social media accounts?",
            type: "Weird",
        },
        {
            id: 78,
            question: "Have you ever peed in the pool?",
            type: "Weird",
        },
        {
            id: 79,
            question: "What turn you on?",
            type: "Weird",
        },
        {
            id: 80,
            question: "What's the weirdest thing you've ever eaten?",
            type: "Weird",
        },
        {
            id: 81,
            question: "What is a weird food that you love?",
            type: "Weird",
        },
        {
            id: 82,
            question: "What was your biggest childhood fear?",
            type: "Weird",
        },
        {
            id: 83,
            question: "Did you ever have a crush on a teacher at school?",
            type: "Weird",
        },
        {
            id: 84,
            question: "What’s the weirdest thing you’re obsessed with on TikTok?",
            type: "Weird",
        },
        {
            id: 85,
            question: "What’s the most surprising thing your bag right now?",
            type: "Weird",
        },
        {
            id: 86,
            question: "Who is your weird celebrity crush?",
            type: "Weird",
        },
        {
            id: 87,
            question: "What’s the weirdest habit you have when you’re alone?",
            type: "Weird",
        },
        {
            id: 88,
            question: "What's the worst thing you've ever done at work?",
            type: "Juicy",
        },
        {
            id: 89,
            question: "Do you have any fetishes?",
            type: "Juicy",
        },
        {
            id: 90,
            question: "What's something you're glad your family doesn't know about you?",
            type: "Juicy",
        },
        {
            id: 91,
            question: "Have you ever cheated on someone?",
            type: "Juicy",
        },
        {
            id: 92,
            question: "What's the worst thing you've ever done?",
            type: "Juicy",
        },
        {
            id: 93,
            question: "What are your thoughts on polyamory?",
            type: "Juicy",
        },
        {
            id: 94,
            question: "What's the worst intimate experience you've ever had?",
            type: "Juicy",
        },
        {
            id: 95,
            question: "What's the best intimate experience you've ever had?",
            type: "Juicy",
        },
        {
            id: 96,
            question: "Have you ever broken the law?",
            type: "Juicy",
        },
        {
            id: 97,
            question: "Have you ever stayed friends with someone because it benefitted you beyond just the friendship?",
            type: "Juicy",
        },
        {
            id: 98,
            question: "Who would you like to kiss in this room?",
            type: "Juicy",
        },
        {
            id: 99,
            question: "Have you ever had a run in with the law?",
            type: "Juicy",
        },
        {
            id: 100,
            question: "What's the worst thing you've ever said to anyone?",
            type: "Juicy",
        },
        {
            id: 101,
            question: "Have you ever been caught doing something you shouldn't have?",
            type: "Juicy",
        },
        {
            id: 102,
            question: "What's the worst date you've been on?",
            type: "Juicy",
        },
        {
            id: 103,
            question: "What's the best date you've been on?",
            type: "Juicy",
        },
        {
            id: 104,
            question: "What happened on the latest night out you had?",
            type: "Juicy",
        },
        {
            id: 105,
            question: "What's your biggest regret?",
            type: "Juicy",
        },
        {
            id: 106,
            question: "Have you ever said something you regret about someone in this room?",
            type: "Juicy",
        },
        {
            id: 107,
            question: "Have you ever lied to get out of a bad date?",
            type: "Juicy",
        },
        {
            id: 108,
            question: "What's the most trouble you've been in?",
            type: "Juicy",
        },
        {
            id: 109,
            question: "When did you last have sex outside?",
            type: "Juicy",
        },
        {
            id: 110,
            question: "What's the worst thing you've lied about?",
            type: "Juicy",
        },
        {
            id: 111,
            question: "What's one thing you wish you'd lied about?",
            type: "Juicy",
        },
        {
            id: 112,
            question: "Name a time you think you were a bad partner",
            type: "Juicy",
        },
        {
            id: 113,
            question: "If you had to cut one friend out of your life, who would it be?",
            type: "Juicy",
        },
        {
            id: 114,
            question: "What's your guilty pleasure?",
            type: "Juicy",
        },
        {
            id: 115,
            question: "If you had to get back with an ex, who would you choose?",
            type: "Juicy",
        },
        {
            id: 116,
            question: "Do you have a favourite friend?",
            type: "Juicy",
        },
        {
            id: 117,
            question: "What's your biggest turn on?",
            type: "Juicy",
        },
        {
            id: 118,
            question: "If you could swap lives with someone in this room, who would it be?",
            type: "Juicy",
        },
        {
            id: 119,
            question: "Have you ever told a lie about your BFF to make yourself look better?",
            type: "Juicy",
        },
        {
            id: 120,
            question: "Have you ever had a holiday romance?",
            type: "Juicy",
        },
        {
            id: 121,
            question: "Have you ever had a festival romance?",
            type: "Juicy",
        },
        {
            id: 122,
            question: "What is something you would do if you knew there were no consequences?",
            type: "Juicy",
        },
        {
            id: 123,
            question: "What’s your toxic trait?",
            type: "Juicy",
        },
        {
            id: 124,
            question: "Do you still have feelings for any of your exes?",
            type: "Juicy",
        },
        {
            id: 125,
            question: "What’s more important you - love or money?",
            type: "Juicy",
        },
        {
            id: 126,
            question: "Who do you think should pay on a first date?",
            type: "Juicy",
        },
        {
            id: 127,
            question: "What nickname do you call your partner/ they call you?",
            type: "Juicy",
        },
    ],

    Dare: [
        {
            id: 1,
            dare: "Try to juggle 3 things of the group's choice",
            type: "Best",
        },
        {
            id: 2,
            dare: "Show the most embarrassing photo on your phone",
            type: "Best",
        },
        {
            id: 3,
            dare: "Show the last five people you texted and what the messages said",
            type: "Best",
        },
        {
            id: 4,
            dare: "Let the rest of the group DM someone from your Instagram account",
            type: "Best",
        },
        {
            id: 5,
            dare: "Do 100 squats",
            type: "Best",
        },
        {
            id: 6,
            dare: "Let the group look in your Instagram DMs",
            type: "Best",
        },
        {
            id: 7,
            dare: "Show us your screen time report",
            type: "Best",
        },
        {
            id: 8,
            dare: "Keep three ice cubes in your mouth until they melt",
            type: "Best",
        },
        {
            id: 9,
            dare: "Yell out the first word that comes to your mind",
            type: "Best",
        },
        {
            id: 10,
            dare: "Keep your eyes closed until it's your go again",
            type: "Best",
        },
        {
            id: 11,
            dare: "Empty out your wallet/purse and show everyone what's inside",
            type: "Best",
        },
        {
            id: 12,
            dare: "Pretend to be the person to your right for 10 minutes",
            type: "Best",
        },
        {
            id: 13,
            dare: "Eat a snack without using your hands",
            type: "Best",
        },
        {
            id: 14,
            dare: "Whisper a secret to the person on your left",
            type: "Best",
        },
        {
            id: 15,
            dare: "Say two honest things about everyone else in the group",
            type: "Best",
        },
        {
            id: 16,
            dare: "Tell the saddest story you know",
            type: "Best",
        },
        {
            id: 17,
            dare: "Hold your drink with two hands for the rest of the evening",
            type: "Best",
        },
        {
            id: 18,
            dare: "Put on make-up without a mirror and leave it like that for the rest of the game",
            type: "Best",
        },
        {
            id: 19,
            dare: "Neck the drink (responsibly) of the person on your right",
            type: "Best",
        },
        {
            id: 20,
            dare: "Say yes to everything for the next 1 minute",
            type: "Best",
        },
        {
            id: 21,
            dare: "Show your favourite picture of yourself",
            type: "Best",
        },
        {
            id: 22,
            dare: "Post a TikTok draft",
            type: "Best",
        },
        {
            id: 23,
            dare: "Make a rap about your favourite book",
            type: "Best",
        },
        {
            id: 24,
            dare: "Do 50 push ups",
            type: "Best",
        },
        {
            id: 25,
            dare: "Reveal what you think everyone in the group will be up to in five years time",
            type: "Best",
        },
        {
            id: 26,
            dare: "Give everyone in the room a backhanded compliment",
            type: "Best",
        },
        {
            id: 27,
            dare: "Let the group style your hair and leave it that way for the entire game",
            type: "Best",
        },
        {
            id: 28,
            dare: "Only talk in whispers for the next 10 minutes",
            type: "Best",
        },
        {
            id: 29,
            dare: "Say a secret about someone in the room but not reveal their name",
            type: "Best",
        },
        {
            id: 30,
            dare: "Eat five spoonfuls of a condiment of your choice",
            type: "Funny",
        },
        {
            id: 31,
            dare: "Pretend to be a food item of your choice",
            type: "Funny",
        },
        {
            id: 32,
            dare: "Eat a raw piece of garlic",
            type: "Funny",
        },
        {
            id: 33,
            dare: "Give a lap dance to someone of your choice",
            type: "Funny",
        },
        {
            id: 34,
            dare: "Repeat everything the person on your right is saying until it's your turn again",
            type: "Funny",
        },
        {
            id: 35,
            dare: "Like the first 15 posts on your Facebook newsfeed",
            type: "Funny",
        },
        {
            id: 36,
            dare: "Eat a spoonful of mustard",
            type: "Funny",
        },
        {
            id: 37,
            dare: "Show your orgasm face",
            type: "Funny",
        },
        {
            id: 38,
            dare: "Seductively eat a banana",
            type: "Funny",
        },
        {
            id: 39,
            dare: "Do your best sexy crawl",
            type: "Funny",
        },
        {
            id: 40,
            dare: "Twerk for a minute",
            type: "Funny",
        },
        {
            id: 41,
            dare: "Try and make the group laugh as quickly as possible",
            type: "Funny",
        },
        {
            id: 42,
            dare: "Let another person in the group touch up your makeup",
            type: "Funny",
        },
        {
            id: 43,
            dare: "Talk in an American accent for the rest of the evening",
            type: "Funny",
        },
        {
            id: 44,
            dare: "Do your best celebrity impression",
            type: "Funny",
        },
        {
            id: 45,
            dare: "Play air guitar for 2 minutes straight",
            type: "Funny",
        },
        {
            id: 46,
            dare: "Howl like a wolf for two minutes",
            type: "Funny",
        },
        {
            id: 47,
            dare: "Dance without music for two minutes",
            type: "Funny",
        },
        {
            id: 48,
            dare: "Pole dance with an imaginary pole",
            type: "Funny",
        },
        {
            id: 49,
            dare: "Belt out the chorus of a cheesy ballad at full volume",
            type: "Funny",
        },
        {
            id: 50,
            dare: "Let someone else tickle you and try not to laugh",
            type: "Funny",
        },
        {
            id: 51,
            dare: "Down your drink (responsibly",
            type: "Funny",
        },
        {
            id: 52,
            dare: "Try and make yourself cry in front of the group",
            type: "Funny",
        },
        {
            id: 53,
            dare: "Give a celebrity lookalike for every person in the room",
            type: "Funny",
        },
        {
            id: 54,
            dare: "Attempt to impersonate everyone in the room",
            type: "Funny",
        },
        {
            id: 55,
            dare: "Fill your mouth with drink and gargle your answer to the next Truth",
            type: "Funny",
        },
        {
            id: 56,
            dare: "Make another player jump in the next 10 minutes",
            type: "Funny",
        },
        {
            id: 57,
            dare: "Attempt the first TikTok dance on your for you page",
            type: "Funny",
        },
        {
            id: 58,
            dare: "Try not to laugh for the next 10 minutes",
            type: "Funny",
        },
        {
            id: 59,
            dare: "For the next 10 minutes, every time someone asks you something, respond with a bark",
            type: "Funny",
        },
        {
            id: 60,
            dare: "Call the first person in your phonebook and howl like a wolf",
            type: "Funny",
        },
        {
            id: 61,
            dare: "Let the person next to you wax you wherever they want",
            type: "Funny",
        },
        {
            id: 62,
            dare: "Download any food app and order a random food item to someone's table",
            type: "Funny",
        },
        {
            id: 63,
            dare: "Do the cinnamon challenge",
            type: "Funny",
        },
        {
            id: 64,
            dare: "Run out of the house and shout i'm not like a regular mom, I'm a cool mom!",
            type: "Funny",
        },
        {
            id: 65,
            dare: "Rap the whole of WAP while dancing seductively",
            type: "Funny",
        },
        {
            id: 66,
            dare: "Go outside and sing 'Football's Coming Home' at full volume",
            type: "Funny",
        },
        {
            id: 67,
            dare: "Narrate the game like a newsreader for the next round",
            type: "Funny",
        },
        {
            id: 68,
            dare: "While pretending to drink a martini, give a Kris Jenner-esque speech to all the players in the room (FYI, they're loooooooong)",
            type: "Funny",
        },
        {
            id: 69,
            dare: "Take a group picture (ala 2000s S Club 7 vibes) and announce you're starting a new band called 'The Glen Coco's'",
            type: "Funny",
        },
        {
            id: 70,
            dare: "Allow someone else in the group to blindfold you and feed you one item out of the fridge",
            type: "Funny",
        },
        {
            id: 71,
            dare: "Let the group decide your outfit for the night",
            type: "Funny",
        },
        {
            id: 72,
            dare: "Do a shot of vinegar",
            type: "Funny",
        },
        {
            id: 73,
            dare: "Show a picture of your most cringe outfit",
            type: "Funny",
        },
        {
            id: 74,
            dare: "Read out the last five things on your search history",
            type: "Funny",
        },
        {
            id: 75,
            dare: "Let another player draw a tattoo on your foot in permanent marker",
            type: "Funny",
        },
        {
            id: 76,
            dare: "Give a foot massage to the person on your right",
            type: "Weird",
        },
        {
            id: 77,
            dare: "Put 10 different available liquids into a cup and drink it",
            type: "Weird",
        },
        {
            id: 78,
            dare: "Try and get all the toes on one foot in your mouth",
            type: "Weird",
        },
        {
            id: 79,
            dare: "Try to put your whole fist in your mouth",
            type: "Weird",
        },
        {
            id: 80,
            dare: "Tell everyone an embarrassing story about yourself",
            type: "Weird",
        },
        {
            id: 81,
            dare: "Try to lick your elbow",
            type: "Weird",
        },
        {
            id: 82,
            dare: "Peel a banana with your toes",
            type: "Weird",
        },
        {
            id: 83,
            dare: "Say everything in a whisper for the next 10 minutes",
            type: "Weird",
        },
        {
            id: 84,
            dare: "Smell another player's armpit",
            type: "Weird",
        },
        {
            id: 85,
            dare: "Put as many snacks into your mouth at once as you can",
            type: "Weird",
        },
        {
            id: 86,
            dare: "Put your clothing on backwards for the rest of the evening",
            type: "Weird",
        },
        {
            id: 87,
            dare: "Put on as many layers as possible in 60 seconds",
            type: "Weird",
        },
        {
            id: 88,
            dare: "Smile as widely as you can and hold it for two minutes",
            type: "Weird",
        },
        {
            id: 89,
            dare: "Sit on the floor for the rest of the evening",
            type: "Weird",
        },
        {
            id: 90,
            dare: "Eat a raw egg",
            type: "Weird",
        },
        {
            id: 91,
            dare: "Sit in the corner of the room without speaking to anyone for the next 10 minutes",
            type: "Weird",
        },
        {
            id: 92,
            dare: "Let someone order something random on your Amazon account (£10 or under)",
            type: "Weird",
        },
        {
            id: 93,
            dare: "Eat a spoonful of black pepper",
            type: "Weird",
        },
        {
            id: 94,
            dare: "Eat a whole block of cheese",
            type: "Weird",
        },
        {
            id: 95,
            dare: "Walk around the room like a chicken for one minute",
            type: "Weird",
        },
        {
            id: 96,
            dare: "Eat a raw onion like an apple",
            type: "Weird",
        },
        {
            id: 97,
            dare: "Do your best Shrek impression",
            type: "Weird",
        },
        {
            id: 98,
            dare: "Serenade the person to your left",
            type: "Weird",
        },
        {
            id: 99,
            dare: "Share with the group your worst vomit story",
            type: "Weird",
        },
        {
            id: 100,
            dare: "Swap shoes with the person sitting to your right (if they’re comfortable with this)",
            type: "Weird",
        },
        {
            id: 101,
            dare: "Read out the last dirty text you sent",
            type: "Juicy",
        },
        {
            id: 102,
            dare: "Say something dirty to the person on your left",
            type: "Juicy",
        },
        {
            id: 103,
            dare: "Remove four items of clothing",
            type: "Juicy",
        },
        {
            id: 104,
            dare: "Send a sext to the last person in your phonebook",
            type: "Juicy",
        },
        {
            id: 105,
            dare: "Post the oldest selfie on your phone on Instagram Stories",
            type: "Juicy",
        },
        {
            id: 106,
            dare: "Scroll through your phone book until someone says stop. You either have to call or delete that person.",
            type: "Juicy",
        },
        {
            id: 107,
            dare: "Tell the group two truths and a lie, and they have to guess which one the lie is",
            type: "Juicy",
        },
        {
            id: 108,
            dare: "Reply to the first five Instagram Stories on your timeline",
            type: "Juicy",
        },
        {
            id: 109,
            dare: "Share the first celebrity on your timeline's Instagram to your Story",
            type: "Juicy",
        },
        {
            id: 110,
            dare: "Give a personalised insult to everyone in the room",
            type: "Juicy",
        },
        {
            id: 111,
            dare: "Do a Facebook Live and say everything your friends tell you to",
            type: "Juicy",
        },
        {
            id: 112,
            dare: "Update your relationship status to 'engaged' on Facebook",
            type: "Juicy",
        },
        {
            id: 113,
            dare: "Call a person in the room's dad and tell him you think he's sexy",
            type: "Juicy",
        },
        {
            id: 114,
            dare: "Post a random baby scan on Facebook",
            type: "Juicy",
        },
        {
            id: 115,
            dare: "Update your Facebook status to tell your friends you're moving to Australia",
            type: "Juicy",
        },
        {
            id: 116,
            dare: "Comment a fire emoji on the first five pictures on your Instagram feed",
            type: "Juicy",
        },
        {
            id: 117,
            dare: "Add a family member to your girls' group chat and start a weird conversation",
            type: "Juicy",
        },
        {
            id: 118,
            dare: "Perform a seductive dance for the whole group",
            type: "Juicy",
        },
        {
            id: 119,
            dare: "Add all of your exes into a group chat and asked what went wrong",
            type: "Juicy",
        },
        {
            id: 120,
            dare: "Write your name on the floor using your tongue",
            type: "Juicy",
        },
        {
            id: 121,
            dare: "Do an imitation of your favourite TikToker",
            type: "Juicy",
        },
        {
            id: 122,
            dare: "Share a picture of your current crush to the rest of the group",
            type: "Juicy",
        },  
    ],
  }
  ];
