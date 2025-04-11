/** Resources */
import { useRouter } from 'next/router';
import Head from 'next/head';
import { InfoPanel } from '@components';
import { useFetch } from '@hooks';
import { API_PATH, SECTIONS } from '@constants';
import { ApiCategory } from '@types';

const Page = () => {
  const { query: { id } } = useRouter();

  const { data, isLoading } = useFetch<ApiCategory>(`${API_PATH.RESOURCES_BY_ID}?${SECTIONS.COMICS}&id=${id}`);

  const itemData = data?.results?.[0] || null;

  console.log('DATA: ', itemData?.characters?.items, itemData?.comics?.items);

  const srcImg = `${itemData?.thumbnail?.path}.${itemData?.thumbnail?.extension}`;

  return (
    <>
      <Head>
        <title>Comics</title>
        <meta name='description' content='Explore the Marvel universe through its iconic comics. From the legendary Avengers to the most feared villains, dive into their stories, powers, and fun facts—all in one place.' />
      </Head>
      <InfoPanel id='comics' loading={isLoading} imageSrc={srcImg} title={itemData?.title} description={itemData?.description} series={itemData?.series?.items} comics={itemData?.comics?.items} stories={itemData?.stories?.items} characters={itemData?.characters?.items} />
    </>
  );
};

Page.displayName = 'Page';

export default Page;
