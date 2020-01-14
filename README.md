## About Xpress

![Xpress Screenshot](http://cdn.gitpush.it/xpress1.png)

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

Xpress runs with React/CRA on the frontend and with Google Firebase as a backend (the Firestore, to be more precise), with optional scraping as another backend service. While the scraping part might need some tinkering to get set up, the rest is pretty straight forward.

- Clone or download this repository and run `npm install`
- Create a folder named `config` in the `src`-directory
- Inside the `config`-folder, create three files named `general.config.js`, `firebase.config.js` and `scraperstyles.config.js` – populate them with the following code (and edit it according to the comments)

### `general.config.js`

```javascript
export const settings = {
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
export const lists = [
  {
    // The title of the newspaper/list, keep it as short as possible - preferrably three letters
    title: 'XMP',

    // Always keep the type 'local'
    type: 'local',

    // The frontpage of your website, this is only used in the scraper-section
    frontpage: 'https://www.example.com',

    // The URL of your scraping API
    // If you don't use scraping, just leave it as an empty string
    scraperUrl: ''
  },
  {
    title: 'ABC',
    type: 'local',
    frontpage: 'https://www.example.com',
    scraperUrl: ''
  }
];

// Globals are scrapers that are not assigned to a specific list
// You can add or remove entries as you like
// If you don't use global scrapers, just keep it an empty array – don't remove it
export const globals = [
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

### `scraperstyles.config.js`

```javascript
// In this file, we define the styling of the scrapers

// This is the default style of scraper elements
// Feel free to play around with colors, but don't remove it
export const defaultStyle = {
  borderLeft: '#3498db',
  categoryBackground: '#3498db',
  categoryFontColor: '#fdfdfd'
};

// This is where your conditional style rules go
// You can check for specific strings and apply colors based on them
// If you want the same style for different conditions, you will have to add another style for each condition
// If you don't use conditional styles, just leave it an empty array - dont remove it
export const styles = [
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

- Create a new Firestore for Xpress.
- Add a collection named 'links'
- Create a user for Xpress, so you can log in
- Lastly, populate `firebase.config.js` with your credentials in the following notation:

### `firebase.config.js`

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

- If you don't use scraping, you're done! :tada:

### Setting up scraping

The backend-code for scraping is not included in this project, since I don't want to expose sensitive data specific to my work place. I might write an open-source version at some point. However, any simple node server with puppeteer will do! The tinkering part is transforming the output data into something that fits the data structure of Xpress, or the other way around. It should be fairly simple to figure out by reading through the `src/context/ScraperContext.js`-file and editing it to your liking.

## Backlog

- Transitioning to TypeScript
- Toasts
- Hover-styles and animations
- Adding dark mode
- Edit mode for all lists (e.g. ability to edit & delete single links)
- Transforming png-files to SVG
- Support for longer list names (means: editing the forms, so it still shows the full name)
- Persisting view state in local storage or session (e.g. visibility of lists)
