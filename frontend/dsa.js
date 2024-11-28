// Count occurenece 
const orders = [
    { id: "1", status: "pending" },
    { id: "2", status: "pending" },
    { id: "3", status: "cancelled" },
    { id: "4", status: "shipped" }
]

const isPending = orders.reduce((acc, order) => {
    return order.status == "pending" ? true : acc
}, false)
console.log(isPending)
/**
 OUTPUT
 {
    pending:2,
    cancelled:1,
    shipped:1
 }
 */

// console.log(orders)
let data = orders.reduce((acc, order) => {
    return {
        ...acc, [order.status]: (acc[order.status] || 0) + 1
    }
}, {})

// console.log(data)

const files = [
    "index.js",
    ["flater.js", "map.js"],
    ["any.js", ["all.js", "count.js"]]
]
// console.log(files)
const flattedFiles = files.flat(2)
// console.log(flattedFiles)

const blogPosts = [
    {
        author: "Sarah Johnson",
        post: "10 Tips for Better Time Management",
        likes: [
            {
                userId: "user123",
                username: "JohnDoe",
                timestamp: "2024-03-15T09:23:00Z"
            },
            {
                userId: "user456",
                username: "AliceSmith",
                timestamp: "2024-03-15T10:45:00Z"
            },
            {
                userId: "user789",
                username: "BobWilson",
                timestamp: "2024-03-15T11:30:00Z"
            }
        ],
        dislikes: [
            {
                userId: "user101",
                username: "CarolBrown",
                timestamp: "2024-03-15T13:15:00Z"
            }
        ]
    },
    {
        author: "Mike Chen",
        post: "My Journey Learning Web Development",
        likes: [
            {
                userId: "user202",
                username: "TechGuru",
                timestamp: "2024-03-14T15:20:00Z"
            },
            {
                userId: "user303",
                username: "CodeMaster",
                timestamp: "2024-03-14T16:45:00Z"
            }
        ],
        dislikes: [
            {
                userId: "user404",
                username: "WebNewbie",
                timestamp: "2024-03-14T17:30:00Z"
            },
            {
                userId: "user505",
                username: "DebugKing",
                timestamp: "2024-03-14T18:20:00Z"
            }
        ]
    },
    {
        author: "Emma Davis",
        post: "The Best Coffee Shops in Portland",
        likes: [
            {
                userId: "user606",
                username: "CoffeeLover",
                timestamp: "2024-03-13T08:15:00Z"
            },
            {
                userId: "user707",
                username: "PortlandFoodie",
                timestamp: "2024-03-13T09:30:00Z"
            },
            {
                userId: "user808",
                username: "CafeHopper",
                timestamp: "2024-03-13T10:45:00Z"
            }
        ],
        dislikes: []
    }
];

// Using Reduce get the author,post,likes and dislike in a single object
/**
    OUTPUT
    {
        SarahJohnson:{
            post:"The Best Coffee Shops in Portland",
            like:3,
            dislike:1
        },
        EmmaDavis:{
            post:"The Best Coffee Shops in Portland",
            like:3,
            dislike:1
        }
        MikeChen:{
            post:"The Best Coffee Shops in Portland",
            like:3,
            dislike:1
        }
    }
 
 */

const postRating = blogPosts.reduce((acc, post) => {
    return {
        ...acc, [post.author]: {
            post: post.post,
            like: post.likes.length,
            dislike: post.dislikes.length
        }
    }
}, {})

console.log(postRating)

console.log(postRating["Sarah Johnson"])