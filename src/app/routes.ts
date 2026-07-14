import { createBrowserRouter } from 'react-router';
import { Layout } from '@/app/components/layout';
import { HomePage } from '@/app/pages/home';
import { ServicesPage } from '@/app/pages/services';
import { AboutPage } from '@/app/pages/about';
import { DiscoveryPage } from '@/app/pages/discovery';
import { TeamPage } from '@/app/pages/team';
import { SupportPage } from '@/app/pages/support';
import { DownloadsPage } from '@/app/pages/downloads';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'services',
        Component: ServicesPage,
      },
      {
        path: 'about',
        Component: AboutPage,
      },
      {
        path: 'discovery',
        Component: DiscoveryPage,
      },
      {
        path: 'team',
        Component: TeamPage,
      },
      {
        path: 'support',
        Component: SupportPage,
      },
      {
        path: 'downloads',
        Component: DownloadsPage,
      },
    ],
  },
]);