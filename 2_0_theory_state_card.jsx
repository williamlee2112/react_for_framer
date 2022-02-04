{
    // section 1 example

    profile_image_url: "koen.jpg",
    name: "Koen Bok",
    handle: "@koenbok",
    tweets_count: 5869,
    tweets_images: ["motion.jpg", "switch.jpg", "react.jpg"],
    following_count: 2181,
    followers_count: 11400
    
    // section 2 example

    logged_in: true, // if not, we need to show a login screen
    selected_tab: "feed", // these can be `notifications` or `messages` too
    search_query: null, // maybe we're doing a search
    tweet: null, // or we might be writing a new tweet
    feed_loading: false, // so we can show a spinner
    feed: [
        { id: 456, name: "Krijn Rijshouwer", tweet: "Say hello to" ... },
        { id: 123, name: "Ryan Florence", tweet: "React gave me..." ... },
        // And many more tweets, things get added if you scroll down
    ]

  }