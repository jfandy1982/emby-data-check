import { Given } from '@badeball/cypress-cucumber-preprocessor';
import { registerUserInteraction } from '@edc/test/cucumber';
import { visitEdc } from '../../../src/support/setup';

registerUserInteraction();

Given('the user is logged into Emby Data Check Tool', () => {
  visitEdc();
});
