import type { ICharacterFull } from '@/entities/characters/module';
import { buildFullDescription } from '@/shared/lib/utils/buildCharDescription.ts';

export const CharacterDetailInfo = (props: ICharacterFull) => {
  const { image, name } = props;
  const description = buildFullDescription(props);

  return (
    <div className={'flex flex-col gap-6 items-center sm:flex-row sm:items-center'}>
      <img src={image} alt={name} width={200} height={200} className="max-w-xs  rounded-md object-cover shadow" />
      <ul className={'flex flex-col sm:gap-3'}>
        {description.map((detail) => (
          <li key={detail.label} className={'flex gap-3'}>
            <span>{detail.label}</span>
            <span>{detail.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
