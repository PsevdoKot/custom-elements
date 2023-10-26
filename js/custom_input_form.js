var selector = document.querySelector('input[type="tel"]');
var im = new Inputmask("+7(999) 999-99-99");

im.mask(selector);

new JustValidate('.custom-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    },
    email: {
      required: true,
      email: true
    }
  },
  
  messages: {
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Минимальная длина имени - 2',
      maxLength: 'Максимальная длина имени - 20'
    },
    tel: {
      required: 'Вы не ввели телефон',
      function: 'Введите корректный телефон'
    },
    email: {
      required: 'Вы не ввели  e-mail',
      email: 'Введите корректный e-mail'
    }
  }
});
