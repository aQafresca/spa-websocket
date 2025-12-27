import type { ICharacterCard } from '@/entities/characters/module';
import { CharacterCard } from '@/entities/characters/ui';
import { useCharacterListGql } from '@/features/characters-list/model/useCharacterListGql.ts';
import { ListContainer } from '@/shared/components/list-container/listContainer.tsx';
import { SearchForm } from '@/shared/components/search-form';
import { useListParams } from '@/shared/hooks';
import { CharacterRoute } from '@/shared/routes';

export const GraphqlPage = () => {
  const { page, search } = CharacterRoute.useSearch();
  const navigate = CharacterRoute.useNavigate();

  const listParams = useListParams({
    params: { page, search: search },
    onChange: (params) => navigate({ search: () => params }),
  });

  const state = useCharacterListGql({ page: listParams.page, search: listParams.search });

  return (
    <div>
      <div>Graph123</div>
      <SearchForm
        label={'characters'}
        initialValue={listParams.search}
        placeholder={'enter character name'}
        onSubmit={listParams.handleSearch}
      />
      <ListContainer<ICharacterCard>
        state={{
          ...state,
          handlePageChange: listParams.handlePageChange,
          handleSearch: listParams.handleSearch,
        }}
        emptyMessage={`${search} is not exists`}
        renderItem={(char) => <CharacterCard key={char.id} {...char} />}
      />
    </div>
  );
};
