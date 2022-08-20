const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAllFriend,
  createFriend,
  deleteFriend
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/user:id/friends
router
  .route('/:id/friends')
  .get(getAllFriend);

// /api/users/user:id/friends/friend:id
router
  .route('/:id/friends/:id')
  .post(createFriend)
  .delete(deleteFriend);

module.exports = router;
