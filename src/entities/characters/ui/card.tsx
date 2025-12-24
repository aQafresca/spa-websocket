import { type TCharacterCard } from '@/entities/characters/module/types';
import { CharCardLabel } from '@/shared/constants';

export const CharacterCard = (props: TCharacterCard) => {
  return (
    <div>
      <img src={props.image} alt={props.name} loading="lazy" width={'300px'} height={'280px'} />

      <div>
        <h3>{props.name}</h3>

        <ul>
          <li>
            <span>{CharCardLabel.gender}</span>
            <span>{props.gender}</span>
          </li>
          <li>
            <span>{CharCardLabel.status}</span>
            <span>{props.status}</span>
          </li>
          <li>
            <span>{CharCardLabel.species}</span>
            <span>{props.species}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
