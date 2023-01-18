const configChatbot = {};
configChatbot.btn = '.chatbot__btn';
configChatbot.key = 'fingerprint';
configChatbot.replicas = {
    bot: {
      0: {
        content: ['Ahoj! Som Danil Bot', 'Som rovnaký ako Danil, ale oveľa lepší konverzátor', 'Ako Vam môžem pomôcť?'], human: [0, 1, 2]
      },
      1: { content: ['👋 ', 'Ako sa máte?', 'Dúfam, že sa vám páčilo prehliadanie môjho portfólia.', 'Je ešte niečo, s čím môžem pomôcť?'], human: [1, 2] },
      2: { content: ['Môžete ich vidieť na karte "Portfólio".', 'Je ešte niečo, s čím môžem pomôcť?'], human: [2, 4] },
      3: { content: ['Super!', 'Ako sa voláte?'], human: [3] },
      4: { content: ['{{name}}, pošlite mi email!', 'danildeveloper01@gmail.com', 'Alebo môžete uverejniť príspevok na sociálnych sieťach', 'Odkaz na ne nájdete v záložke „Kontakty“.', 'Je ešte niečo, s čím môžem pomôcť?'], human: [1, 4] },
      6: { content: ['Ďakujeme Vám za Váš záujem', 'Všetko najlepšie', 'Dovidenia!']},      
    },
    human: {
      0: { content: 'Chcem len pozdraviť', bot: 1 },
      1: { content: 'Chcem vidieť vašu prácu', bot: 2 },
      2: { content: 'Chcem s vami spolupracovať', bot: 3 },
      3: { content: '', bot: 4, name: 'name' },
      4: { content: 'Vdaka za pomoc', bot: 6 }
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