import React from 'react';
import '@testing-library/jest-dom';

import monstersData from '../../../data/monsters.json';
import { render } from '@testing-library/react';
import { MonsterBattleCard } from './MonsterBattleCard.extended';

describe('MonsterBattleCardExtended', () => {
  it('renders the monster card correctly with a monster', () => {
    const component = render(
      <MonsterBattleCard monster={monstersData.monsters[0]} />,
    );

    const title = component.container.querySelector('#title');
    const image = component.container.querySelector('#image');
    const statsContainer =
      component.container.querySelector('#stats-container');

    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(statsContainer).toBeInTheDocument();
  });
});
