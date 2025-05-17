import { Given } from '@badeball/cypress-cucumber-preprocessor';
import { visitEdc } from '../../../src/support/setup';

Given('the user is logged into Emby Data Check Tool', () => {
  visitEdc();
});
