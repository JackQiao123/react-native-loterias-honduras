import { Platform } from 'react-native';

const config = {
  API_ENDPOINTS: {
    MAIN: 'https://loteriasdehonduras.com/mobile-api-new',
    APP: 'https://loteriasdehonduras.com/mobile-api-new'
  },

  // ADMOB
  ADMOB: {
    REWARDED_MAX: 4,
    SECRETS: Platform.select({
      ios: {
        BANNER: 'ca-app-pub-1196303242456869/9833359636',
        INTERSTITIAL: 'ca-app-pub-1196303242456869/2310092831'
      },
      android: {
        BANNER: 'ca-app-pub-1196303242456869/5403160031',
        INTERSTITIAL: 'ca-app-pub-1196303242456869/6879893233'
      }
    })
  },

  SETTINGS: {
    ENCRYPT: true,
    REFRESH_INTERVAL: 30000,
    APP_NAME: 'app_honduras'
  },

  VIEW_OPTIONS: {
    THEME: 'blue1',
    INITIAL_MENU: {
      ID: 'home',
      OPTIONS: {
        toggle: true,
        trigger: true
      }
    },
    MENUS: {
      SHOW_COMPANIES: true
    },
    LAYOUTS: {
      LOGO_ASPECT_RATIO: 247 / 110,
      SHOW_ALL_GAMES_AT_COMPANY: true,
      BREED_CRUMB_COMPANY_DISTINCTION: true,
      MENU_PRIMARY_DISTINCTION: true
    },
    NAVIGATIONS: {
      SHOW_TITLE: true
    }
  },
  ENUMS: {
    SCREEN_TYPE: {
      HOME: 1,
      MENU: 2,
      GAME: 3,
    },
    MENU_TYPE: {
      PRIMARY: 1,
      GAME: 2,
    }
  },

  VARIABLES: {
    app: null
  }
};

export default config;
