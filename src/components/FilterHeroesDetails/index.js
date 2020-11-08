/* eslint-disable react/prop-types */
import React from 'react';
import logo from '../../assets/logo/Group.png';
import lupa from '../../assets/busca/Lupa/Shape.png';
import { HeaderTitle, Logo, Filter } from './styles';

const FilterHeroesDetails = ({ setHeroFilter, history }) => {
  return (
    <HeaderTitle>
      <Logo>
        <img
          src={logo}
          alt="Logo da marvel"
          onClick={() => history.push('/')}
        />
      </Logo>
      <Filter>
        <img src={lupa} alt="lupa" />
        <input
          type="text"
          placeholder="Procures por heróis"
          onChange={(e) => setHeroFilter(e.target.value)}
        />
      </Filter>
    </HeaderTitle>
  );
};

export default FilterHeroesDetails;
