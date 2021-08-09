import db from "./db/index.js"
import Category from "./models/category.js"

const insertCat = async () =>{

    await db.dropDatabase()
    const categories = [
        {
            title: "Sports",
            body: "Sports",
            imgUrl: "https://m.media-amazon.com/images/I/81S+7h513XL._AC_SL1500_.jpg"
        },
        {
            title: "Comics",
            body: "Comics",
            imgUrl: "https://www.comicbookrevolution.com/wp-content/uploads/2021/04/Amazing-Spider-Man-Sinister-War-2.jpg"
        },
        {
            title: "Movies",
            body: "Movies",
            imgUrl: "https://duetaz.org/wp-content/uploads/2018/07/Movie-Night.jpg"
        },
        {
            title: "Gaming",
            body: "Gaming",
            imgUrl: "https://static01.nyt.com/images/2021/07/23/business/23OnTech-Games-video-Still/23OnTech-Games-video-Still-videoLarge.png"
        }
    ]
    await Category.instertMany(categories)

    db.close
}

insertCat()