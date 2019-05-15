import db from '../db';

async function getUsers(req, res) {
  const user = await db.user.findAll();

  return res.status(200).json(user);
}

export default {
  getUsers,
};
