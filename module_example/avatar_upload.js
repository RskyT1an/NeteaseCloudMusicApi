const { avatar_upload, login_cellphone } = require('../main')
const fs = require('fs')
const path = require('path')

async function main() {
  const result = await login_cellphone({
    phone: '1186318958',
    password: 'lht001002',
  })
  const filePath = './test.jpg'
  await avatar_upload({
    imgFile: {
      name: path.basename(filePath),
      data: fs.readFileSync(filePath),
    },
    imgSize: 1012, //图片尺寸,需要正方形图片
    cookie: result.body.cookie,
  })
}
main()
