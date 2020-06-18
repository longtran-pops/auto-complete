/**
 * This is the fake API, please DON'T NOT EDIT THIS FILE
 */

export default {
  search(key) {
    console.log(`Start calling Search API with "${key}" at: ${new Date().toLocaleTimeString()}`)
    return new Promise((resolve) => {
        console.log(
          `Complete calling Search API with "${key}" at: ${new Date().toLocaleTimeString()}`
        )
        resolve(
          db.filter((item) =>
            item.toLocaleLowerCase().startsWith(key.toLocaleLowerCase())
          )
        )
    })
  },
}


const db = [
  'Ellis Myers',
  'Mabel Golden',
  'Jenna Diaz (Jinni)',
  'Elin Sheppard',
  'Irene Ford (Rina)',
  'Teresa Bowers (Tessa)',
  'Bethany Holmes',
  'Halima Hunt',
  'Christina Pham (Christa)',
  'Fannie Shelton',
]