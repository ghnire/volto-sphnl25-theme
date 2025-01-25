import PlannerTemplate from './components/Blocks/Listing/PlannerTemplate';
import AppCompactTemplate from './components/Blocks/Listing/AppCompactTemplate';

const applyConfig = (config) => {
  config.blocks.blocksConfig.listing.variations = [
    ...config.blocks.blocksConfig.listing.variations,
    {
      id: 'listingPlanner',
      title: 'Planner',
      template: PlannerTemplate,
    },
    {
      id: 'listingApps',
      title: 'App list compact',
      template: AppCompactTemplate,
    },
  ];
  config.blocks.themes = [
    {
      style: {
        '--theme-color': 'white',
        '--theme-high-contrast-color': 'darkslategrey',
        '--theme-foreground-color': '#293676',
        '--theme-low-contrast-foreground-color': '#5e6a72',
      },
      name: 'default',
      label: 'Default',
    },
    {
      style: {
        '--theme-color': 'darkslategrey',
        '--theme-high-contrast-color': 'black',
        '--theme-foreground-color': 'lemonchiffon',
        '--theme-low-contrast-foreground-color': 'lightgrey',
      },
      name: 'green',
      label: 'Green',
    },
    {
      style: {
        '--theme-color': '#293676',
        '--theme-high-contrast-color': '#5e6a72',
        '--theme-foreground-color': 'white',
        '--theme-low-contrast-foreground-color': 'lightgrey',
      },
      name: 'sparkblue',
      label: 'SparkBlue',
    },
  ];
  return config;
};

export default applyConfig;
