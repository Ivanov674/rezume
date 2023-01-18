const configChatbot = {};
configChatbot.btn = '.chatbot__btn';
configChatbot.key = 'fingerprint';
configChatbot.replicas = {
    bot: {
      0: {
        content: ['Привет! Я Danil Bot', 'Я такой же, как Данил, но гораздо лучший собеседник', 'Чем могу Вам помочь?'], human: [0, 1, 2]
      },
      1: { content: ['👋 ', 'Как дела?', 'Надеюсь Вам понравилось просмтривать мое портфолио?', 'Могу ли я ещё чем-то помочь?'], human: [1, 2] },
      2: { content: ['Вы можете посмотреть их во вкладке "Портфолио"', 'Могу ли я ещё чем-то помочь?'], human: [2, 4] },
      3: { content: ['Отлично!', 'Как Вас зовут?'], human: [3] },
      4: { content: ['{{name}}, напишите мне сообщение на почту!', 'danildeveloper01@gmail.com', 'Или Вы можете написать в социальных сетях', 'Ссылку на них можно найти во вкладке "Контакты"', 'Могу ли я ещё чем-то помочь?'], human: [1, 4] },
      6: { content: ['Спасибо за проявленный интерес', 'Всего наилучшего', 'До свидания!']},      
    },
    human: {
      0: { content: 'Я просто хочу сказать привет', bot: 1 },
      1: { content: 'Я хочу увидеть Ваши работы', bot: 2 },
      2: { content: 'Я хочу сотрудничать с Вами', bot: 3 },
      3: { content: '', bot: 4, name: 'name' },
      4: { content: 'Спасибо за помощь', bot: 6 }
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