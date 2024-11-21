import React from 'react';

import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  Image,
  ProgressBar,
  StatsContainer,
} from './MonsterBattleCard.extended.styled';
import { Typography, Divider } from '@mui/material';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  function renderStatsProgressBar(value: number | undefined, title: string) {
    if (!value) {
      return null;
    }

    return (
      <div>
        <Typography>{title}</Typography>
        <ProgressBar value={value} variant="determinate" />
      </div>
    );
  }

  return (
    <BattleMonsterCard centralized={Boolean(!monster)}>
      {monster?.imageUrl && <Image src={monster?.imageUrl} id="image" />}
      <BattleMonsterTitle id="title">{title!}</BattleMonsterTitle>
      {monster?.imageUrl && <Divider />}
      <StatsContainer id="stats-container">
        {renderStatsProgressBar(monster?.hp, 'Hp')}
        {renderStatsProgressBar(monster?.attack, 'Attack')}
        {renderStatsProgressBar(monster?.defense, 'Defense')}
        {renderStatsProgressBar(monster?.speed, 'Speed')}
      </StatsContainer>
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
