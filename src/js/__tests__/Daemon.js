import Daemon from '../Daemon';

test('Daemon', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'ajoq',
    type: 'Daemon',
  };
  const received = new Daemon('ajoq', 'Daemon');
  expect(received).toEqual(expected);
});

test('type error in Daemon', () => {
  function typeDaemon() {
    return new Daemon('ajoq', 'sometype');
  }
  expect(typeDaemon).toThrowError(new Error('Некорректный тип персонажа'));
});