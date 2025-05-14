import { resolve } from "node:path"
import { existsSync } from "node:fs"
import { rm, mkdir } from "node:fs/promises"

import { zip } from "zip-a-folder"

const SRC_DIR = resolve("src")
const DIST_DIR = resolve("dist")

const CHROME_ZIP_FILE = resolve(DIST_DIR, "chrome.zip")

if (existsSync(DIST_DIR))
    await rm(DIST_DIR, { recursive: true, force: true })

await mkdir(DIST_DIR)

await zip(SRC_DIR, CHROME_ZIP_FILE)
