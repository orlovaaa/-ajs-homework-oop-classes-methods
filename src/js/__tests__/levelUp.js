import Zombie from '../Zombie';

test('level up', () => {
  const expected = {
    attack: 48,
    defence: 12,
    health: 100,
    level: 2,
    name: 'ajoq',
    type: 'Zombie',
  };
  const received = new Zombie('ajoq', 'Zombie');
  received.levelUp();
  expect(received).toEqual(expected);
});

test('health error in level up', () => {
  function healthLevelUp() {
    const npc = new Zombie('ajoq', 'Zombie');
    npc.health = 0;
    return npc.levelUp();
  }
  expect(healthLevelUp).toThrowError(new Error('Персонаж мертв'));
});