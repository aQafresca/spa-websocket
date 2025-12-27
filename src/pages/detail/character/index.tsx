import { useCharacterById } from '@/entities/characters/api';
import { CharacterDetailInfo } from '@/entities/characters/ui';
import { DetailLayout } from '@/shared/components/detail-layout';
import { useHandleClose } from '@/shared/hooks';
import { CharacterDetailRoute, CharacterRoute } from '@/shared/routes';

const CharacterDetailPage = () => {
  const { characterId } = CharacterDetailRoute.useParams();
  const { data } = useCharacterById(characterId);

  const handleClose = useHandleClose(CharacterRoute.to);

  return (
    <DetailLayout onClose={handleClose} title={data.name}>
      <CharacterDetailInfo {...data} />
    </DetailLayout>
  );
};

export default CharacterDetailPage;
