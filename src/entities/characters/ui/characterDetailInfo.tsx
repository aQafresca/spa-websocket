import type { ICharacterFull } from '@/entities/characters/module';
import { CharCardLabel } from '@/shared/constants';

export const CharacterDetailInfo = ({ image, name, species, status, gender, origin, location }: ICharacterFull) => {
  return (
    <div>
      <img src={image} alt={name} width={200} height={200} />
      <ul>
        <li>
          <span>{CharCardLabel.species}</span>
          <span>{species}</span>
        </li>
        <li>
          <span>{CharCardLabel.status}</span>
          <span>{status}</span>
        </li>
        <li>
          <span>{CharCardLabel.gender}</span>
          <span>{gender}</span>
        </li>
        <li>
          <span>{CharCardLabel.origin}</span>
          <span>{origin.name}</span>
        </li>
        <li>
          <span>{CharCardLabel.location}</span>
          <span>{location.name}</span>
        </li>
      </ul>
    </div>
  );
};
