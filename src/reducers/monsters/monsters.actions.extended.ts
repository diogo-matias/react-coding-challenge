import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterServiceExtended } from './monsters.service.extended';
import { Players } from '../../models/interfaces/battle.interface';

export const fetchBattleWins = createAsyncThunk(
  'monstersExtended/fetchBattleWins',
  async (props: Players) => {
    return MonsterServiceExtended.battle(props);
  },
);

export const setRandomMonster = createAction<Monster | null>(
  'monstersExtended/setRandomMonster',
);
