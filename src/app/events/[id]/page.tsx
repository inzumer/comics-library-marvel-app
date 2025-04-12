'use client';

/** Resources */
import { useParams } from 'next/navigation';
import { InfoPanel } from '@components';
import { useFetch } from '@hooks';
import { API_PATH, SECTIONS } from '@constants';
import { ApiCategory } from '@types';

const Page = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetch<ApiCategory>(`${API_PATH.RESOURCES_BY_ID}?${SECTIONS.EVENTS}&id=${id}`);

  const itemData = data?.results?.[0] || null;

  const srcImg = `${itemData?.thumbnail?.path}.${itemData?.thumbnail?.extension}`;

  return <InfoPanel id='events' loading={isLoading} imageSrc={srcImg} title={itemData?.title} description={itemData?.description} series={itemData?.series?.items} comics={itemData?.comics?.items} stories={itemData?.stories?.items} characters={itemData?.characters?.items} />;
};

export default Page;
