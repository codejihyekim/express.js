exports.signUP = (req, res) => {
    const {username, password, name, telephone} = req.body
    console.log(`넘어온 JSON값: ${JSON.stringify(req.body)}`)
    console.log(`username: ${username}`)
    console.log(`password: ${password}`)
    console.log(`name: ${name}`)
    console.log(`telephone: ${telephone}`)
    res.status(200).json(req.body)
  }