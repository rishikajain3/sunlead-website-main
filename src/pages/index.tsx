import * as React from 'react';
import PageLayout from '../page-layouts';
import { getMediaUrl } from '../utils/get-media-url';
import { Homepage } from '../types/homepage';
import { HomePageServiceImpl } from '../services/page/home-page.service';
import { Block } from 'baseui/block';
import { SEO } from '../components/seo';
import { Navbar } from '../components/nav-bar/navbar.component';

declare type IndexPageProps = {
  serverData: any;
};

const IndexPage: React.FC<IndexPageProps> = ({ serverData }) => {
  const homepage = serverData.homePageData as Homepage;

  return (
    <PageLayout>
      <SEO data={homepage.data.attributes.Seo} />
      <Block position={'relative'}>
        <Navbar />
      </Block>
    </PageLayout>
  );
};

export const getServerData = async () => {
  const serviceObject = new HomePageServiceImpl();
  const { data } = await serviceObject.getHomePage();
  return {
    props: {
      homePageData: data,
    },
  };
};

export default IndexPage;
