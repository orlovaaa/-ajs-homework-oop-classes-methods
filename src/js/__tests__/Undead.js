
import Undead from '../Undead';

test('Undead', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'ajoq',
    type: 'Undead',
  };
  const received = new Undead('ajoq', 'Undead');
  expect(received).toEqual(expected);
});

test('type error in Undead', () => {
  function typeUndead() {
    return new Undead('ajoq', 'sometype');
  }
  expect(typeUndead).toThrowError(new Error('Некорректный тип персонажа'));
});