import { Command } from "commander";

const program = new Command();

program
  .version("0.1.0")
  .description(
    "An example cli to use as a template, shows links to https://http.dog/"
  )
  .argument("<http_code>", "http status code to get the image for")
  .action(function (http_code) {
    if (Number.parseInt(http_code)) {
      console.log(`https://http.dog/${http_code}.jpg`);
    } else {
      console.error(
        `Error: ${http_code} is not a number; it is a ${typeof http_code}`
      );
    }
  });

program.parse();
