import Bowerman from '../Bowerman';

test('damage', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 85,
    level: 1,
    name: 'ajoq',
    type: 'Bowman',
  };
  const received = new Bowerman('ajoq', 'Bowman');
  received.damage(20);
  expect(received).toEqual(expected);
});

test('health error in damage', () => {
  function healthDamage() {
    const npc = new Bowerman('ajoq', 'Bowman');
    npc.health = -12;
    return npc.damage(45);
  }
  expect(healthDamage).toThrowError(new Error('Персонаж уже мертв'));
});