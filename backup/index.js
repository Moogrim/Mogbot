const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Ready');
});

//bot responses
var responses = [
	{ input:'mogbot test', answer: 'success' },
	{ input:'mogbot test2', answer: 'hey it works' }
]

client.on('message', (message) => {

});

var jokes = [
	{ answer: 'Mog likes butts. Just plain, old butts.' },
	{ answer: 'Mog has a poopy taint.' },
	{ answer: 'Mog smells like beef.' },
	{ answer: 'Mog looks like if a deer gave birth to a walrus.' },
	{ answer: 'Mog has pantsu on his face.' },
	{ answer: 'Mog likes butts. Like, really, really likes butts. Man butts.' },
	{ answer: 'Mog once paid a hooker to watch him repeatedly create new characters on a game.' },
	{ answer: 'Mog\'s Grindr profile name is Ramit Inmah Ashol.'},
	{ answer: 'Mog once farted, and the birds in his neighborhood all mysteriously started dying. Coincidence?' },
	{ answer: 'Mog does, indeed, have genitalia, despite what all the boys in the locker room are saying. They\'re just jealous.' },
	{ answer: 'Mog is a riddle inside of a puzzle wrapped in an enigma enveloped in mystery.' },
	{ answer: 'Mog is a nice guy and people say nice things about him.' },
	{ answer: 'Mog enjoys gangbangs.' },
	{ answer: 'The first time Mog went Super Saiyan, he quickly dispatched Frieza with minimal effort. The tyrant fell shortly after Mog showed pity.' },
	{ answer: 'Ten Mogs-a-leaping, nine Moggies dancing, eight Mogs-a-milking, seven Mogs-a-swimming, six Mogs-a-laying... FIIIIVE GOLDEN MOOOOOGS!' },
	{ answer: 'Seventy-seven times Mog is equal to mayonnaise plus the Terran Confed... Wait, where am I?' },
	{ answer: 'It is said that Willem Defoe is jealous of Mog. No one knows why.' },
	{ answer: 'Do you believe in life after Mog? I can feel something inside me say, "I really don\'t think I\'m Mog enough, no."' },
	{ answer: 'Worf, son of Mog, should lead the empire. All others are *without* honor.' },
	{ answer: 'Mog doesn\'t know how to use the three seashells.' },
	{ answer: '"Life in the Nine Hells of Baator? It\'s a walk in the park compared to New Jersey." - *Mog, 1973*' },
	{ answer: 'Every time Mog is touched, he gets this feeling. And every time we kiss, Mog swears he could fly.' }
]

//randomize a thing from the array
var randomTruth = function() {
	var joke = jokes[Math.floor(Math.random() * jokes.length)]
	return formatJoke(joke)
}

//Format the output to return in a new line and plug in the output variables
function formatJoke(joke) {
	return joke.answer
}

var dares = [
	{ answer: 'I dare Mog to put on a donkey show. I mean a full-on south-of-the-border, drunk-on-tequila, jalapeno-urethra, in love with those ears, donkey show.' },
	{ answer: 'I dare Mog to eat a dick. No, I dare him to eat two. TWO DICKS. AT THE SAME TIME.' },
	{ answer: 'I dare Mog to send us all nudes. And I don\'t mean pictures of noodles.' },
	{ answer: 'I dare Mog to fuck a Seal. I mean the singer you go clubbing with, not like the babies you club. He\'s Irish, you know.' },
	{ answer: 'I dare Mog to sing the complete works of Simon and Garfunkle while high off his balls on PCP. Sounds like a hell of a show, amirite?' },
	{ answer: 'I dare Mog to dream. I dare everyone to dream. Be more than the sum of your parts. Be the whole pie. Be a dreamer. Namaste.' },
	{ answer: 'I dare Mog to snort a line of wasabi from a hooker\'s butt crack. It\'ll clear your sinuses, that\'s for sure.' },
	{ answer: 'I dare Mog to recreate every pose in the Gnomish Kama Sutra with a midget Peter Dinklage lookalike.' },
	{ answer: 'I dare Mog to paint the Mona Lisa from memory, only this time with a party hat and a kazoo.' },
	{ answer: 'I dare Mog to build a working perpetual motion machine that doubles as a marital device. **A weapon to surpass Metal Gear...!**' },
	{ answer: 'I dare Mog to beat Dark Souls naked. And I\'m not talking about his character. :wink:' },
	{ answer: 'I dare Mog to understand. Understand all that is, all that was, and all that ever will be. All is one, and one is all.' },
	{ answer: 'I dare Mog to stick his dick in crazy.' },
	{ answer: 'I dare Mog to trust a Scicilian when death is on the line.' },
	{ answer: 'I dare Mog to be all that he can be. In the army.' },
	{ answer: 'I dare Mog to grab life by the balls. Life must be his boyfriend\'s name.' }
]

var randomDare = function() {
	var dare = dares[Math.floor(Math.random() * dares.length)]
	return formatDare(dare)
}

function formatDare(dare) {
	return dare.answer
}

//tell a joke
client.on('message', (message) => {
	if (message.content === '/truth') {
		const msg = message.content.split(' ');
		message.delete(1);
		message.reply(randomTruth());
	}
});

//setup automatic messagess
var autoTruthInterval = 72000;

client.setInterval(function(message){
	const channel = client.channels.get("183744999416922112");
	channel.send(randomTruth());
}, autoTruthInterval * 1000);

//tell a different joke
client.on('message', message => {
	if (message.content === '/dare') {
                message.delete(1);
		message.reply(randomDare());
	}
});

//mogbot loves you
client.on('message', message => {
	if (message.content.includes('love me') || message.content.includes('LOVE ME')) {
		message.reply("I love you. I'll always love you.");
	}
});

var hello = [
	{ answer: 'Hello there!' },
	{ answer: 'Hi to you, too.' },
	{ answer: 'Ahoy, matey!' },
	{ answer: 'Hail, friend!' },
	{ answer: 'Well hello to you, too.' },
	{ answer: 'Hi. *frollics back into the sky*' },
	{ answer: 'Hello!' },
	{ answer: 'Hullo.' },
	{ answer: 'sup' },
	{ answer: 'Hey! What\'s up?' },
	{ answer: 'Hi! How\'s it going?' }
]

var randomGreeting = function() {
        var greeting = hello[Math.floor(Math.random() * hello.length)]
        return formatGreeting(greeting)
}

//Format the output to return in a new line and plug in the output variables
function formatGreeting(greeting) {
        return greeting.answer
}

//mogbot says hi
client.on('message', message => {
        if ((message.content === 'hi') || 
	(message.content === 'Hi') ||
	(message.content === 'HI') ||
	(message.content === 'sup') ||
	(message.content === 'hi!')) {
                message.reply(randomGreeting());
        }
});

//I believe in a thing called love
client.on('message', message => {
        if (message.content === 'I believe in a thing called love') {
                message.channel.send('JUST LISTEN TO THE RHYTHM OF YOUR HEART');
        }
});


//test message
client.on('message', message => {
	if (message.content === 'mogbot ping') {
		message.channel.send('pong');
	}
});

//Greet a new user when they join the server
//client.on('guildMemberAdd', member => {
//	const channel = member.guild.channels.find('name', 'member-log');
//	if (!channel) return;
//	channel.send('Welcome to Kupochat, ${member}! Make yourself at home. I recommend posting pictures of adorable animals.');
//});

const token = process.env.TOKEN;
client.login(token);

