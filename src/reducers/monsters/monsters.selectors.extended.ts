import { RootState } from '../../app/store';

export const selectMonsterWins = (state: RootState) =>
  state.monstersExtended.winner?.winner;
export const selectRandomMonster = (state: RootState) =>
  state.monstersExtended.selectRandomMonster;
