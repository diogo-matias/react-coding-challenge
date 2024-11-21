import { createReducer } from '@reduxjs/toolkit';
import { Battle } from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';
import { fetchBattleWins, setRandomMonster } from './monsters.actions.extended';

export interface MonsterState {
  selectRandomMonster: Monster | null;
  winner: Battle | null;
}

const initialState: MonsterState = {
  selectRandomMonster: null,
  winner: null,
};

export const monstersReducerExtended = createReducer(initialState, builder => {
  builder.addCase(setRandomMonster, (state, { payload }) => {
    return {
      ...state,
      selectRandomMonster: payload,
    };
  });

  builder.addCase(fetchBattleWins.fulfilled, (state, { payload }) => {
    return {
      ...state,
      winner: payload,
    };
  });
});
