import { readdir } from 'node:fs/promises';

export async function ls() {
  const files = [];
  const directories = [];

  const content = await readdir(process.cwd(), { withFileTypes: true });

  for (const file of content) {
    const type = file.isFile() ? 'file' : 'directory';

    if (type === 'directory') {
      directories.push({ name: file.name, type });
    } else {
      files.push({ name: file.name, type });
    }
  }

  const result = [
    ...directories.sort((dir1, dir2) => dir1.name.localeCompare(dir2.name)),
    ...files.sort((file1, file2) => file1.name.localeCompare(file2.name)),
  ];

  console.table(result);
}
