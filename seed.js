import db from './db/index.js'
import User from './models/user.js'
import Category from './models/category.js'
import Thread from './models/thread.js'
import Post from './models/post.js'


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

const users= [
    {
    email: "cgibsonmm@gmail.com",
    passwordDigest: "123456Abc",
    username: "testuser",
    },
    {
    email: "s@s.com",
    passwordDigest: "123456Abc",
    username: "stephenH",
    },
    {
    email: "ash@ash",
    passwordDigest: "123456Abc",
    username: "ashley",
    },
    {
    email: "c@c.com",
    passwordDigest: "123456Abc",
    username: "caleb",
    },
    {
    email: "Aracelihair@gmail.com",
    passwordDigest: "123456Abc",
    username: "Celi",
    }
]

// const categories = [
//     {
//     title: "Sports",
//     body: "Sports",
//     imgUrl: "https://m.media-amazon.com/images/I/81S+7h513XL._AC_SL1500_.jpg",
//     },
//     {
//     title: "Comics",
//     body: "Comics",
//     imgUrl: "https://www.comicbookrevolution.com/wp-content/uploads/2021/04/Amazing-Spider-Man-Sinister-War-2.jpg",
//     },
//     {
//     title: "Gaming",
//     body: "Gaming",
//     imgUrl: "https://static01.nyt.com/images/2021/07/23/business/23OnTech-Games-video-Still/23OnTech-Games-video-Still-videoLarge.png",
//     },
//     {
//     title: "Movies",
//     body: "Movies",
//     imgUrl: "https://duetaz.org/wp-content/uploads/2018/07/Movie-Night.jpg",
//     },
//     ]
// const threads = [
//     {
//     title: "weird looking cat",
//     body: "THIS CAT PROBABLY SAW SOMETHING SCARY.",
//     imgUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F27%2Fwhite-cat-big-eyes-cat-ledge-1127317526-2000.jpg",
//     },
//     {
//     title: "ASHLEY",
//     body: "I AM ASHLEY",
//     imgUrl: "https://www.scarymommy.com/wp-content/uploads/2019/09/GettyImages-146582583-min-1.jpg"
//     },
//     {
//     title: "Inception",
//     body: "INCEPTION IS THE BEST ",
//     imgUrl: "https://www.scarymommy.com/wp-content/uploads/2019/09/GettyImages-146582583-min-1.jpg"
//     },
//     {
//     title: "Coders",
//     body: "What we look like when deploying XD",
//     imgUrl: "https://wyncode.co/uploads/2014/08/81.jpg",
//     },
//     {
//     title: "Rice with Beans",
//     body: "Yum",
//     imgUrl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/12/7/1/IE0213_Red_Beans_and_Rice.jpg.rend.hgtvcom.616.462.suffix/1552488799980.jpeg",
//     },
//     {
//     title: "I'M A LITTLE TEAPOT",
//     body: "Short and stout",
//     imgUrl: "https://primulaproducts.com/wp-content/uploads/2011/10/BlkTeapot-CastIron-Dimensions-scaled.jpg",
//     },
//     {
//     title: "I like pickled things",
//     body: "Pickling is a sport because it involves movement",
//     imgUrl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/10/11/0/EA1110_Pickle.jpg.rend.hgtvcom.616.462.suffix/1382538655602.jpeg",
//     },
//     {
//     posts: [
//     "6111919b7674d60015113abe"
//     ],
//     _id: "611190ee7674d60015113974",
//     title: "Rob Lowe is a sports fan",
//     body: "ROB LOWE IS A NFL FAN",
//     imgUrl: "https://www.scarymommy.com/wp-content/uploads/2019/09/GettyImages-146582583-min-1.jpg"
//     },
//     {
//     title: "Oh no 😳",
//     body: "😳😳",
//     imgUrl: "https://i1.sndcdn.com/avatars-000532708956-jsayvx-t240x240.jpg",
//     },
//     {
//     title: "😂😂",
//     body: "We all heard it",
//     imgUrl: "https://c8p9p3e5.rocketcdn.me/wp-content/uploads/2021/02/zoom-fart-meme.jpg",
//     },
//     {
//     _id: "611192287674d60015113b7c",
//     title: "Coding be like...",
//     body: "soo truuuuuuue",
//     imgUrl: "https://cdn.mos.cms.futurecdn.net/b4e6b7035c9252e4a7af8986e4dfda10.jpg",
//     },
//     {
//     title: "marriage",
//     body: "😂😂😂",
//     imgUrl: "https://i.chzbgr.com/full/9206653440/h96AAA1B8/funny-comic-about-marriage",
//     },
//     {
//     title: "Hawks re-sign Lou Williams",
//     body: "Lou Williams has been resigned to a 1 year 5 million deal!",
//     imgUrl: "https://www.nba.com/hawks/sites/hawks/files/gettyimages-1233401106.jpg?w=756&h=477",
//     },
//     {
//     title: "I LOVE CATS",
//     body: "CATS ARE THE BEST",
//     imgUrl: "https://www.scarymommy.com/wp-content/uploads/2019/09/GettyImages-146582583-min-1.jpg",
//     }
//     ]

// const posts =[
// {
// body: "pickled eggs",
// imgUrl: ""
// },
// {
// body: "😂",
// imgUrl: "https://www.memesmonkey.com/images/memesmonkey/88/887025897ef37af791851609a060c346.jpeg",
// },
// {
// body: "definitely how it is",
// imgUrl: "https://www.scarymommy.com/wp-content/uploads/2019/09/GettyImages-146582583-min-1.jpg",
// },
// {
// body: "hmmm ",
// imgUrl: "https://static.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-coverimage.jpg"
// },
// {
// body: "why my name no show?",
// imgUrl: "https://static.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-coverimage.jpg"
// },
// {
// body: "i will fight whoever says its not",
// imgUrl: "https://static.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-coverimage.jpg"
// },
// {
// _id: "6112838ca0d4630015d6c92e",
// body: "pickeld herring",
// imgUrl: ""
// },
// {
// body: "does this work?",
// imgUrl: "https://www.scarymommy.com/wp-content/uploads/2019/09/GettyImages-146582583-min-1.jpg",
// },
// {
// body: "dddd",
// imgUrl: "https://static.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-coverimage.jpg"
// },
// {
// body: "sooo weird",
// imgUrl: "https://static.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-coverimage.jpg"
// },
// {
// body: "sooo weird",
// imgUrl: "https://static.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-coverimage.jpg"
// },
// {
// body: "this is a post",
// imgUrl: "https://static.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-coverimage.jpg",
// }
// ]
    await User.insertMany(users)
    // await Category.insertMany(categories)
    // await Thread.insertMany(threads)
    // await Post.insertMany(posts)
    console.log('created')
}

const run = async () => {
    await main()
    db.close()
}

run()