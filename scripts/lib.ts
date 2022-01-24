/**
 * @file Clean the lib folder.
 */
import {promises as fs} from 'fs';
import path from 'path';
import rimraf from 'rimraf';

const BASE_PATH = 'lib';

/**
 * Clean the lib folder of unwanted files and folders.
 * @returns {Promise<void>} - Promise that resolves when the lib folder is cleaned.
 */
const cleanLib = async (): Promise<void> => {
  const items = await fs.readdir(BASE_PATH, {withFileTypes: true});
  for (const item of items) {
    if (item.isDirectory() && item.name === 'src') {
      continue;
    }
    await rimrafPromise(path.join(BASE_PATH, item.name), {});
  }
};

/**
 * Rimraf promise version.
 * @param path - Path to the file or folder to delete.
 * @param options - Options to pass to rimraf.
 * @returns {Promise<void>} - Promise that resolves when the file or folder is deleted.
 */
const rimrafPromise = (path: string, options: any): Promise<void> => new Promise((res, rej) => {
  rimraf(path, options, (err?: Error) => err ? rej(err) : res());
});

(async (): Promise<void> => {
  await cleanLib();

  const srcPath = path.join(BASE_PATH, 'src');
  const items = await fs.readdir(srcPath, {withFileTypes: true});
  for (const item of items) {
    await fs.rename(path.join(srcPath, item.name), path.join(BASE_PATH, item.name));
  }

  await rimrafPromise(srcPath, {});
})();
