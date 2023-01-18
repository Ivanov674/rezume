const configChatbot = {};
configChatbot.btn = '.chatbot__btn';
configChatbot.key = 'fingerprint';
configChatbot.replicas = {
    bot: {
      0: {
        content: ['Привіт! Я Danil Bot', 'Я такий же, як Даниїл, але набагато кращий співрозмовник', 'Чим я можу Вам допомогти?'], human: [0, 1, 2]
      },
      1: { content: ['👋 ', 'Як справи?', 'Сподіваюся Вам сподобалося переглядати моє портфоліо', 'Чи можу я допомогти Вам їще чимось?'], human: [1, 2] },
      2: { content: ['Ви можете переглянути їх у вкладці "Портфоліо"', 'Чим я можу ще допомогти?'], human: [2, 4] },
      3: { content: ['Чудово!', 'Як Вас звати?'], human: [3] },
      4: { content: ['{{name}}, напишіть мені повідомлення на пошту!', 'danildeveloper01@gmail.com', 'Або Ви можете написати в соціальних мережах', 'Посилання на них можна знайти у вкладці "Контакти"', 'Чи можу я ще чимось допомогти?'], human: [1, 4] },
      6: { content: ['Дякую за Ваш інтерес', 'Всього Вам найкращого', 'До побачення!']},      
    },
    human: {
      0: { content: 'Я просто хочу сказати привіт', bot: 1 },
      1: { content: 'Я хочу побачити Ваші роботи', bot: 2 },
      2: { content: 'Я хочу співпрацювати з Вами', bot: 3 },
      3: { content: '', bot: 4, name: 'name' },
      4: { content: 'Дякую за допомогу', bot: 6 }
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