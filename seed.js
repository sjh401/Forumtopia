import db from './db/index.js'
import Topic from './models/topic.js'

const insertData = async () => {
  // reset database
  await db.dropDatabase()
  // products data that we want inserted into database
  const topics = [
    {
      title: 'Anime',
      body:
        'A place to discuss anime',
      imgUrl:
        'none',
    },
    {
      title: 'Pickles',
      body:
        'A place to discuss all things related to the mighty pickle',
      imgUrl:
        'none',
    },
    {
      title: 'Clogs',
      body:
        'A place to discuss the shoes that are painful to wear',
      imgUrl:
        'none',
    },
    {
      title: 'Jolly Ranchers',
      body:
        'A place to discuss those yummy hard candies',
      imgUrl:
        'none',
    },
    
  ]

  // insert products into database
  await Topic.insertMany(topics)
  console.log('Created topics!')

  // close database connection. done.
  db.close()
}

insertData()