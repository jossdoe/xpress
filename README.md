## About Xpress

![Xpress Screenshot](http://cdn.gitpush.it/xpress2.png)

**DEMO: <https://xpress-demo.now.sh>**

I developed Xpress to keep track of the workflow in a digital newsroom that controls the sites and social media profiles of several daily newspapers. We were often faced with the problem of severe multitasking, handling several different sources of articles that needed to be distributed to several different channels. At the core of our work we needed to keep track of three things:

- :newspaper: Articles that needed to be placed on the frontpages of our sites throughout the day
- :thumbsup: Articles that needed to be posted through social media channels
- :fire: So-called 'Turbos' that were articles that needed special attention to detail (e.g. very popular topics, special importance)

Keeping track of these tasks can quickly get out of hand if you don't develop some kind of system to stay on top of multi-tasking. This is where Xpress entered the picture.

### How To Use Xpress

Each of the three central tasks mentioned above has its own view in the App. Each view consists of lists for each newspaper that needs to be managed. The 'Turbos' view provides more details that might be necessary for a quick and robust workflow. The views for 'Frontpages' and 'Social' are kept simple, only displaying the info that's most necessary: The topic, the URL & whether or not the article has been checked off. You can clear lists via the settings panel that can be expanded in the top right corner. In there you can also toggle visibility for specific lists on a per-user basis.

The side-bar on the left side serves as a way to let data flow into the App. You can enter Turbos and links through two forms. You can also set up one or several scrapers to automatically give you updates on content that gets published by your sources, list-specific or not. Once set up, scraped articles can be imported with just a click into the App.

### Reading the code

If you want to go ahead and dive into the code of Xpress, I would suggest starting by reading through the `config`-files below, then continuing with the files in the `context`-folder. At that point, you will understand the data-flow of the app, which is almost completely seperated from the components.

## Installation

Xpress runs with React/CRA/TypeScript on the frontend and with Google Firebase as auth and database (the Firestore, to be more precise), with optional scraping which needs to be provided by a seperate backend. While the scraping part might need some tinkering to get set up, the rest is pretty straight forward.

- Clone or download this repository and run `npm install`
- Create a folder named `config` in the `src`-directory
- Inside the `config`-folder, create three files named `general.config.ts`, `firebase.config.ts` and `scraperstyles.config.ts` – populate them with the following code (and edit it according to the comments)

### `general.config.ts`

```javascript
import { ListSettings, LocalListType, GlobalListType } from 'types';

export const settings: ListSettings = {
  // If you have a scraping backend that you want to use, switch this to 'true'
  enableScraper: false,

  // If you want to use conditional coloring for the scraped data, switch this to 'true'
  enableScraperColors: false,

  // Optional filter for scraped data that only applies to the list-specific scrapers
  // Example: Entering 'www.example.com' will filter out any URLs that contain that string
  // Leave it as an empty string to disable the function
  excludeFromScraper: ''
};

// This array defines which lists you have in the application, you can add objects using the same notation
// Keep in mind that it was designed as one list per newspaper-site
export const lists: Array<LocalListType> = [
  {
    // The title of the newspaper/list, keep it short & unique
    title: 'Example List',

    // Always keep the type 'local'
    type: 'local',

    // The frontpage of your website, this is only used in the scraper-section
    frontpage: 'https://www.example.com',

    // The URL of your scraping API that returns data as JSON
    // If you don't use scraping, just leave it as an empty string
    scraperUrl: ''
  },
  {
    title: 'Secound List',
    type: 'local',
    frontpage: 'https://www.example.com',
    scraperUrl: ''
  }
];

// Globals are scrapers that are not assigned to a specific list
// You can add or remove entries as you like
// If you don't use global scrapers, just keep it as an empty array – don't remove it
export const globals: Array<GlobalListType> = [
  {
    // The title of your scraper
    title: 'Politics',

    // Always keep the type global
    type: 'global',

    // The URL of your scraping API
    scraperUrl: ''
  },
  {
    title: 'Breaking News',
    type: 'global',
    scraperUrl: ''
  }
];
```

### `scraperstyles.config.ts`

```javascript
// In this file, we define the styling of the scrapers
// If you don't use scraping, just copy this code into the file and leave it alone
import { DefaultStyleType, StyleType } from 'types';

// This is the default style of scraper elements
// Feel free to play around with colors, but don't remove it
export const defaultStyle: DefaultStyleType = {
  borderLeft: '#3498db',
  categoryBackground: '#3498db',
  categoryFontColor: '#fdfdfd'
};

// This is where your conditional style rules go
// You can check for specific strings and apply colors based on them
// If you want the same style for different conditions, you will have to add another style for each condition
// If you don't use conditional styles, just leave it an empty array - dont remove it
export const styles: Array<StyleType> = [
  {
    // This defines whether the URL or the kicker is the element that gets checked for the condition
    checkElement: 'url',

    // This is the string that needs to be in the element for the style to get applied
    included: 'example.com/',

    // The colors that get applied
    borderLeft: '#34495e',
    categoryBackground: '#34495e',
    categoryFontColor: '#fdfdfd'
  },
  {
    checkElement: 'url',
    included: '/politics/',
    borderLeft: '#9b59b6',
    categoryBackground: '#9b59b6',
    categoryFontColor: '#fdfdfd'
  }
];
```

On to setting up Firebase:

- Create a new Firestore for Xpress. (If it asks you about security rules, set it to production mode, not test mode.)
- Inside your Firestore, add a collection named 'links'. (It will force you to create an empty document, that's fine.)

- Navigate to the security rules tab of your Firestore and replace the contents with the following:

```
// Allow read/write access on all documents to any user signed in to the application
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.uid != null;
    }
  }
}
```

(It might take a few minutes for this to take effect.)

- Switch to the authentication tab of Firebase. Enable login with mail and password. Create one or more user/s for Xpress.
- Lastly, populate `firebase.config.ts` with your credentials (you'll find them inside your Firebase dashboard) in the following way:

### `firebase.config.ts`

```javascript
// This is where your Firebase-credentials go, you get them inside of their dashboard
export default {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
};
```

- If you don't use scraping, you're done! :tada: Run `npm start` to check if everything's working fine.

### Setting up scraping

The backend-code for scraping is not included in this project, since I don't want to expose sensitive data specific to my work place. I might write an open-source version at some point. However, any simple node server with cheerio/puppeteer (or whatever language and technology you may want to use) will do! The important part is transforming the output data into something that fits the data structure of Xpress, or the other way around. You should be able to figure it out by reading through the `src/context/ScraperContext.tsx`-file and editing it to your liking.

## Backlog

- Adding dark mode
- Edit mode for all lists (e.g. ability to edit & delete single links)
- Persisting view state in local storage or session (e.g. visibility of lists)
