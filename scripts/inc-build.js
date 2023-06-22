/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const { version } = require('../package.json')
const fs = require('fs')

console.log('Incrementing build number...')

fs.readFile('src/metadata/metadata.json', function (err, content) {
  if (err) throw err

  const metadata = JSON.parse(content)
  metadata.build += 1

  fs.writeFile('src/metadata/metadata.json', JSON.stringify(metadata), function (err) {
    if (err) throw err

    console.log(`Current version: ${version}-${metadata.build}`)
  })
})
