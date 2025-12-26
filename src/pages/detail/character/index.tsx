import { useCharacterById } from '@/entities/characters/api';
import { CharacterDetailInfo } from '@/entities/characters/ui';
import { DetailLayout } from '@/shared/components/detail-layout';
import { CharacterDetailRoute } from '@/shared/routes';

const CharacterDetailPage = () => {
  const { characterId } = CharacterDetailRoute.useParams();
  const { data } = useCharacterById(characterId);

  return (
    <DetailLayout title={data.name}>
      <CharacterDetailInfo {...data} />
    </DetailLayout>
  );
};

export default CharacterDetailPage;
