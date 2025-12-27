import { Link } from '@tanstack/react-router';

import { type ICharacterCard } from '@/entities/characters/module';
import { CharCardLabel } from '@/shared/constants';
import { CharacterDetailRoute } from '@/shared/routes';

export const CharacterCard = ({ image, id, name, species, status, gender }: ICharacterCard) => {
  return (
    <Link to={CharacterDetailRoute.to} params={{ characterId: String(id) }} preload={'intent'}>
      <img src={image} alt={name} loading="lazy" width={'300px'} height={'280px'} />

      <div>
        <h3>{name}</h3>

        <ul>
          <li>
            <span>{CharCardLabel.gender}</span>
            <span>{gender}</span>
          </li>
          <li>
            <span>{CharCardLabel.status}</span>
            <span>{status}</span>
          </li>
          <li>
            <span>{CharCardLabel.species}</span>
            <span>{species}</span>
          </li>
        </ul>
      </div>
    </Link>
  );
};
