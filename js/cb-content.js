const configChatbot = {};
configChatbot.btn = '.chatbot__btn';
configChatbot.key = 'fingerprint';
configChatbot.replicas = {
    bot: {
      0: {
        content: ['Hi! I am Danil Bot', 'I am just like Danil, but a far better conversationalist', 'How can i help you today?'], human: [0, 1, 2]
      },
      1: { content: ['Well hello there!👋', 'Thanks for saying hi ', 'I hope you`ve enjoyed browsing my work', 'Can i help you with anything else?'], human: [1, 2] },
      2: { content: ['You can see them in the portfolio tab', 'What else can i do to help?'], human: [2, 4] },
      3: { content: ['Ok, great!', 'What is your name?'], human: [3] },
      4: { content: ['{{name}}, send me a message by mail!', 'danildeveloper01@gmail.com', 'or you can post on social media', 'You can find a link to them in the contacts tab', 'Is there anything else I can help?'], human: [1, 4] },
      6: { content: ['Thanks for your interest', 'All the best to you', 'Goodbye!']},      
    },
    human: {
      0: { content: 'I just wandet to say hello', bot: 1 },
      1: { content: 'I want to see your work', bot: 2 },
      2: { content: 'I`d like to hire you!', bot: 3 },
      3: { content: '', bot: 4, name: 'name' },
      4: { content: 'Thanks for the help', bot: 6 }
    }
  }
configChatbot.root = SimpleChatbot.createTemplate();
configChatbot.url = '/chatbot/chatbot.php';
let chatbot = new SimpleChatbot(configChatbot);
document.querySelector(configChatbot.btn).onclick = function (e) {
  this.classList.add('d-none');
  const $tooltip = this.querySelector('.chatbot__tooltip');
  if ($tooltip) {
    $tooltip.classList.add('d-none');
  }
  configChatbot.root.classList.toggle('chatbot_hidden');
  chatbot.init();
};
let fingerprint = localStorage.getItem(configChatbot.key);
if (!fingerprint) {
  Fingerprint2.get(function (components) {
    fingerprint = Fingerprint2.x64hash128(components.map(function (pair) {
      return pair.value
    }).join(), 31)
    localStorage.setItem(configChatbot.key, fingerprint)
  });
};