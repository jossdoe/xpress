// Link Types
export type LinkDatabaseType = {
  folder: string;
  id: string;
  isOnline: boolean;
  isPosted: boolean;
  isReady: boolean;
  list: string;
  title: string;
  topic: string;
  type: 'social' | 'front' | 'turbo';
  url: string;
  timestamp: any;
};

export const isLinkDatabaseType = (
  listToCheck: any
): listToCheck is LinkDatabaseType =>
  (listToCheck as LinkDatabaseType).type !== undefined;

export type LinkPostType = {
  folder: string;
  isOnline: boolean;
  isPosted: boolean;
  isReady: boolean;
  list: string;
  title: string;
  topic: string;
  type: 'social' | 'front' | 'turbo';
  url: string;
};

export type LinkUpdateType = {
  folder?: string;
  isOnline?: boolean;
  isPosted?: boolean;
  isReady?: boolean;
  list?: string;
  title?: string;
  topic?: string;
  type?: 'social' | 'front' | 'turbo';
  url?: string;
};

export type LinkTypeFormTypes = 'front' | 'social' | 'both';
export type LinkTypeDatabaseTypes = 'front' | 'social';

// Metadata Types (e.g. general.config.ts, MetaContext)
export type ListSettings = {
  enableScraper: boolean;
  enableScraperColors: boolean;
  excludeFromScraper: string;
};

export type LocalListType = {
  title: string;
  type: 'local';
  frontpage: string;
  scraperUrl: string;
};

export type GlobalListType = {
  title: string;
  type: 'global';
  scraperUrl: string;
};

export type ListTypes = LocalListType | GlobalListType;

// Typeguard for LocalListType
export const isLocalListType = (
  listToCheck: ListTypes
): listToCheck is LocalListType =>
  (listToCheck as LocalListType).frontpage !== undefined;

// Scraper Types
export type ScraperItemType = {
  id: number;
  time: string;
  headline: string;
  kicker: string;
  category: string;
  url: string;
  metaData: ListTypes;
};

export type RawLocalScraperItemType = {
  id: number;
  time: string;
  location: string;
  dach: string;
  headline: string;
  url: string;
};

export type RawGlobalScraperItemType = {
  title: string;
  link: string;
  time: string;
};

export type RawScraperItemTypes =
  | RawGlobalScraperItemType
  | RawLocalScraperItemType;

// Typeguard for the ScraperContext
export const isRawLocalScraperItem = (
  itemToCheck: RawScraperItemTypes
): itemToCheck is RawLocalScraperItemType =>
  (itemToCheck as RawLocalScraperItemType).dach !== undefined;

// scraperstyles.config.ts
export type DefaultStyleType = {
  borderLeft: string;
  categoryBackground: string;
  categoryFontColor: string;
};

export type StyleType = {
  checkElement: string;
  included: string;
  borderLeft: string;
  categoryBackground: string;
  categoryFontColor: string;
};

// Modal Types
export type ModalFormDataType = {
  firebaseId: string;
  setFirebaseId: (id: string) => void;
  titleValue: string;
  setTitleValue: (value: string) => void;
  topicValue: string;
  setTopicValue: (value: string) => void;
  folderValue: string;
  setFolderValue: (value: string) => void;
  urlValue: string;
  setUrlValue: (value: string) => void;
  isReady: boolean;
  setIsReady: (value: boolean) => void;
  isOnline: boolean;
  setIsOnline: (value: boolean) => void;
  isPosted: boolean;
  setIsPosted: (value: boolean) => void;
  switchValue: 'social' | 'front' | 'both';
  setSwitchValue: (value: 'social' | 'front' | 'both') => void;
  listArray: Array<string>;
  setListArray: (value: Array<string>) => void;
};

export const ModalFormDataDummy: ModalFormDataType = {
  firebaseId: '',
  setFirebaseId: (id: string) => {},
  titleValue: '',
  setTitleValue: (value: string) => {},
  topicValue: '',
  setTopicValue: (value: string) => {},
  folderValue: '',
  setFolderValue: (value: string) => {},
  urlValue: '',
  setUrlValue: (value: string) => {},
  isReady: false,
  setIsReady: (value: boolean) => {},
  isOnline: false,
  setIsOnline: (value: boolean) => {},
  isPosted: false,
  setIsPosted: (value: boolean) => {},
  switchValue: 'social',
  setSwitchValue: (value: string) => {},
  listArray: [],
  setListArray: (value: Array<string>) => {}
};
