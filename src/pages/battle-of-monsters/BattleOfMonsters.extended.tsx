import React from 'react';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard.extended';
import { MonstersList } from '../../components/monsters-list/MonstersList.extended';
import { Title } from '../../components/title/Title';
import { fetchMonstersData } from '../../reducers/monsters/monsters.actions';
import {
  selectMonsters,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.extended.styled';
import {
  fetchBattleWins,
  setRandomMonster,
} from '../../reducers/monsters/monsters.actions.extended';
import {
  selectMonsterWins,
  selectRandomMonster,
} from '../../reducers/monsters/monsters.selectors.extended';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay.extended';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const randomMonster = useSelector(selectRandomMonster);
  const winnerMonster = useSelector(selectMonsterWins);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  useEffect(() => {
    const result = monsters.filter(
      monster => monster.id !== selectedMonster?.id,
    );
    const index = Math.floor(Math.random() * result.length);
    const randomSelected = result.find((_, i) => i === index);

    dispatch(setRandomMonster(randomSelected || null));
  }, [selectedMonster, dispatch, monsters]);

  const handleStartBattleClick = () => {
    dispatch(
      fetchBattleWins({
        monster1Id: selectedMonster?.id ?? '',
        monster2Id: randomMonster?.id ?? '',
      }),
    );
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />
      {winnerMonster?.name && (
        <WinnerDisplay text={winnerMonster?.name ?? ''} />
      )}

      <BattleSection>
        <MonsterBattleCard
          monster={selectedMonster}
          title={selectedMonster?.name || 'Player'}></MonsterBattleCard>
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          monster={randomMonster}
          title="Computer"></MonsterBattleCard>
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
