import { readFileSync } from "fs";
import path from "path";

interface Config {
  anchorUrl: string;
  relayPort: number;
  registryPort: number;
}

const CONFIG_PATH = path.resolve(process.cwd(), "did.config.json");

function loadConfig(): Config {
  try {
    const raw = readFileSync(CONFIG_PATH, "utf-8");
    const parsed = JSON.parse(raw);

    return parsed as Config;
  } catch (e) {
    console.error(`Failed to load conig at ${CONFIG_PATH}`, e);
    process.exit(1);
  }
}

const config = loadConfig();

export default config;