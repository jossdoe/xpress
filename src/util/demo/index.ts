// This directory holds all functions related to the Xpress demo linked in the README.md.
// It gives us an easy way of pushing any changes to the demo in an uncomplicated way
// without having to reinvent the wheel every time, concerning DB population, pre-input of
// login-credentials, building a loading screen etc.
//
// You can enable demo mode in `config/general.config.ts` by inserting a `demo`-object into
// the `settings`-object. You can see the structure in the `ListSettings`-type. Any login
// credentials entered here will automatically be inserted into the Login-Component.

export { LoadingScreen } from './LoadingScreen';
export { setupDemoDatabase } from './setupDemoDatabase';
