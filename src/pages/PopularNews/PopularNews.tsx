import { News } from '../../components/News';
import { useAppSelector } from '../../hook/useAppSelector';

export const PopularNews = () => {
  const { popularNews } = useAppSelector(store => store.news);
  const { popularNewsError } = useAppSelector(store => store.errors);

  return (
    <div>
      <News news={popularNews} error={popularNewsError} title='Popular News' />
    </div>
  );
};
