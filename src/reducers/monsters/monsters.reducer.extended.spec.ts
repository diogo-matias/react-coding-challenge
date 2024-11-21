import monstersData from '../../../data/monsters.json';
import { Players } from '../../models/interfaces/battle.interface';
import { fetchBattleWins, setRandomMonster } from './monsters.actions.extended';
import {
  monstersReducerExtended,
  MonsterState,
} from './monsters.reducer.extended';

const initialState: MonsterState = {
  selectRandomMonster: null,
  winner: null,
};

describe('Monsters Reducer', () => {
  it('should add the random monster to the state', () => {
    const payload = monstersData.monsters[0];

    const state = monstersReducerExtended(
      initialState,
      setRandomMonster(payload),
    );

    const expectedState: MonsterState = {
      ...initialState,
      selectRandomMonster: payload,
    };

    expect(expectedState).toEqual(state);
  });

  it('should add the winner to the state', () => {
    const action = {
      type: fetchBattleWins.fulfilled,
      payload: {
        winner: {
          ...monstersData.monsters[0],
        },
        tie: false,
      },
    };

    const state = monstersReducerExtended(initialState, action);

    const expectedState: MonsterState = {
      ...initialState,
      winner: action.payload,
    };

    expect(expectedState).toEqual(state);
  });
});
