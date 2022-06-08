import Bowerman from '../Bowerman';

test('Bowman', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'ajoq',
    type: 'Bowman',
  };
  const received = new Bowerman('ajoq', 'Bowman');
  expect(received).toEqual(expected);
});

test('type error in Bowman', () => {
  function typeBowman() {
    return new Bowerman('ajoq', 'sometype');
  }
  expect(typeBowman).toThrowError(new Error('Некорректный тип персонажа'));
});