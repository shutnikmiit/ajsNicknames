import Validator from '../app';

test('Валидное имя', () => {
  expect(new Validator().validateUsername('m0nstercat')).toEqual('Ваше имя соответствует правилам!');
});

test('Невалидные символы в имени', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('m0nsterкот)');
  }).toThrow(new Error('В Вашем имени допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)!'));
});

test('Когда в имени больше трех цифр подряд', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('m000nstercat');
  }).toThrow(new Error('В Вашем имени не может быть трёх цифр подряд!'));
});

test('Невалидное значение в начале', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('_m0nstercat');
  }).toThrow(new Error('Ваше имя не может начинаться с цифр, тире или подчеркивания!'));
});

test('Невалидное значение в конце', () => {
  expect(() => {
    const name = new Validator();
    return name.validateUsername('m0nstercat_');
  }).toThrow(new Error('Ваше имя не может заканчиваться цифрами, тире или подчеркиванием!'));
});
