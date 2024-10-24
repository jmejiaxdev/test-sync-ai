import TestRailsService from "../services/test-rails.service";
import ConsoleUtils from "../utils/console.utils";

export default async function handler() {
  console.log("\nGet suites from TestRails\n");

  try {
    await TestRailsService.getSuites();
  } catch (err) {
    ConsoleUtils.logError(err);
  }
}
