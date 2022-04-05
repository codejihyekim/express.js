const { Router } = require('express');
const express = require('express');
const userRouter = express.Router()

userRouter.use((req, res, next) => {
  console.log('### 로그인 서버 ###');
  next();
});

userRouter.post('/sigh-up', (req, res) => {
  const {username, password, name, telephone} = req.body
  console.log(`넘어온 JSON값: ${JSON.stringify(req.body)}`)
  console.log(`username: ${username}`)
  console.log(`password: ${password}`)
  console.log(`name: ${name}`)
  console.log(`telephone: ${telephone}`)
  res.json(req.body.name)
})

module.exports = userRouter;