import { MonsterServiceExtended } from './monsters.service.extended';
import { API_URL } from '../../constants/env';
import { Battle, Players } from '../../models/interfaces/battle.interface';
import monstersData from '../../../data/monsters.json';

const mockedReturnValue: Battle = {
  ...monstersData.battle[0],
};

describe('Monsters Service Extended', () => {
  it('should get the winner of the battle of monsters', async () => {
    const payload: Players = {
      monster1Id: monstersData.monsters[0].id,
      monster2Id: monstersData.monsters[1].id,
    };

    jest
      .spyOn(MonsterServiceExtended, 'battle')
      .mockResolvedValue(mockedReturnValue);

    const response = await MonsterServiceExtended.battle(payload);

    expect(response).toEqual(mockedReturnValue);
  });
});
