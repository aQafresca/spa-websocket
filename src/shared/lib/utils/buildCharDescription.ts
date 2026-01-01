import type { ICharacterCard, ICharacterFull } from '@/entities/characters/module';
import { CHAR } from '@/shared/constants';

export const buildCardDescription = (character: ICharacterCard) => [
  { label: CHAR.STATUS, value: character.status },
  { label: CHAR.SPECIES, value: character.species },
  { label: CHAR.GENDER, value: character.gender },
];

export const buildFullDescription = (character: ICharacterFull) => [
  ...buildCardDescription(character),
  { label: CHAR.ORIGIN, value: character.origin.name },
  { label: CHAR.LOCATION, value: character.location.name },
];
