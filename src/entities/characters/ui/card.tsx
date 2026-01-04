import { Link } from '@tanstack/react-router';

import type { ICharacterCardProps } from '@/entities/characters/module';
import { buildCardDescription } from '@/shared/lib/utils/buildCharDescription.ts';
import { CharacterDetailRoute } from '@/shared/routes';

export const CharacterCard = ({ character, isPriority }: ICharacterCardProps) => {
  const { image, id, name } = character;
  const descriptions = buildCardDescription(character);

  return (
    <Link
      className={
        'w-[300px] h-[450px] border border-primary rounded-md transition-transform duration-200 hover:scale-105'
      }
      to={CharacterDetailRoute.to}
      params={{ characterId: String(id) }}
      preload={'intent'}
    >
      <img
        src={image}
        alt={name}
        width={300}
        height={280}
        fetchPriority={isPriority ? 'high' : 'auto'}
        loading={isPriority ? 'eager' : 'lazy'}
        className="w-[300px] h-[280px] object-cover"
      />

      <ul className={'flex flex-col gap-2 p-3'}>
        <li>
          <h3 className={'text-center'}>{name}</h3>
        </li>
        {descriptions.map((detail) => (
          <li key={detail.label} className={'flex gap-2'}>
            <span>{detail.label}</span>
            <span>{detail.value}</span>
          </li>
        ))}
      </ul>
    </Link>
  );
};
