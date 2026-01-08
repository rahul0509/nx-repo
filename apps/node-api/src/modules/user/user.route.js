const fs = require('fs');
const path = require('path');
const router = require('express').Router();

function candidatePaths() {
  return [
    path.resolve(__dirname, '../../data-config/json/user.json'),
    path.resolve(__dirname, '../../../data-config/json/user.json'),
    path.resolve(
      process.cwd(),
      'apps',
      'node-api',
      'src',
      'data-config',
      'json',
      'user.json'
    ),
    path.resolve(
      process.cwd(),
      'apps',
      'node-api',
      'data-config',
      'json',
      'user.json'
    ),
    path.resolve(
      process.cwd(),
      'dist',
      'apps',
      'node-api',
      'data-config',
      'json',
      'user.json'
    ),
    path.resolve(process.cwd(), 'dist', 'data-config', 'json', 'user.json'),
    path.resolve(process.cwd(), 'data-config', 'json', 'user.json'),
  ];
}

function findOrCreateFile() {
  const candidates = candidatePaths();
  let filePath = candidates.find((p) => fs.existsSync(p));
  if (!filePath) {
    filePath = candidates[0];
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (!fs.existsSync(filePath))
      fs.writeFileSync(filePath, JSON.stringify([], null, 2), 'utf8');
  }
  return filePath;
}

async function readUsers() {
  const filePath = findOrCreateFile();
  const fileData = await fs.promises.readFile(filePath, 'utf8');
  return { users: JSON.parse(fileData || '[]'), filePath };
}

async function writeUsers(filePath, users) {
  await fs.promises.writeFile(filePath, JSON.stringify(users, null, 2), 'utf8');
}

router.get('', async (req, res) => {
  try {
    const { users } = await readUsers();
    res.json({ message: 'success', data: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to read users file' });
  }
});

router.post('', async (request, response) => {
  const newUser = request.body;
  try {
    const { users, filePath } = await readUsers();
    users.push(newUser);
    await writeUsers(filePath, users);
    response.json({ message: 'User created successfully', data: users });
  } catch (err) {
    console.error(err);
    response.status(500).json({ message: 'Failed to update users file' });
  }
});

module.exports = router;
