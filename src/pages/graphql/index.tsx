import type { TCharacterCard } from '@/entities/characters/module/types.ts';
import { CharacterCard } from '@/entities/characters/ui/card.tsx';
import { useCharacterListGql } from '@/features/characters-list/model/useCharacterListGql.ts';
import { Route } from '@/routes/graphql.tsx';
import { ListContainer } from '@/shared/components/list-container/listContainer.tsx';
import { SearchForm } from '@/shared/components/search-form';
import { useListParams } from '@/shared/hooks/useListParams.ts';

export const GraphqlPage = () => {
  const { page, search } = Route.useSearch();
  const navigate = Route.useNavigate();

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
      <ListContainer<TCharacterCard>
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
