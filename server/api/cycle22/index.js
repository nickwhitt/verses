export default defineEventHandler(async (event) => {
  return {
    name: "2022-2023",
    quarters: [
      {
        name: "God's Exceptional Choice",
        title: "Fall",
        units: [
          {
            unit: 1,
            name: "God Calls Abraham's Family",
            lessons: [
              await $fetch("/api/cycle22/call-of-abram"),
              await $fetch("/api/cycle22/god-chooses-younger-twin"),
              {
                date: "2022-09-18",
                title: "Jacob Called Israel",
                description: "Genesis 32:22-32",
                slug: "/2022/09/jacob-called-israel",
                books: "Gen",
              },
              {
                date: "2022-09-25",
                title: "The Scepter Given to Judah",
                description: "Genesis 35:22b-26; 38:24-26; 49:10-12",
                slug: "/2022/09/scepter-given-to-judah",
                books: "Gen",
              },
            ],
          },
          {
            unit: 2,
            name: "Out of Slavery to Nationhood",
            lessons: [
              {
                date: "2022-10-02",
                title: "The Birth of Moses",
                slug: "/2022/10/birth-of-moses",
                description: "Exodus 2:1-10",
                books: "Exo",
              },
              {
                date: "2022-10-09",
                title: "Song of Moses",
                slug: "/2022/10/song-of-moses",
                description: "Deuteronomy 32:3-6, 10-14, 18",
                books: "Deu",
              },
              {
                date: "2022-10-16",
                title: "The Call of Gideon",
                slug: "/2022/10/call-of-gideon",
                description: "Judges 6:1-2, 7-16a",
                books: "Jdg",
              },
              {
                date: "2022-10-23",
                title: "Who Is King?",
                slug: "/2022/10/who-is-king",
                description: "1 Samuel 8:4-7; 10:17-24",
                books: "1Sa",
              },
              {
                date: "2022-10-30",
                title: "David Anointed as King",
                slug: "/2022/10/david-anointed-king",
                description: "1 Samuel 16:1-13",
                books: "1Sa",
              },
            ],
          },
          {
            unit: 3,
            name: "We Are God's Artwork",
            lessons: [
              {
                date: "2022-11-06",
                title: "God Picked You!",
                slug: "/2022/11/god-picked-you",
                description: "Ephesians 1:1-14",
                books: "Eph",
              },
              {
                date: "2022-11-13",
                title: "Christ Is Wisdom",
                slug: "/2022/11/christ-is-wisdom",
                description: "Ephesians 1:15-23",
                books: "Eph",
              },
              {
                date: "2022-11-20",
                title: "We Are God's Handiwork",
                slug: "/2022/11/we-are-gods-handiwork",
                description: "Ephesians 2:1-10",
                books: "Eph",
              },
              {
                date: "2022-11-27",
                title: "God Gives Tools for Our Protection",
                slug: "/2022/11/god-gives-tools",
                description: "Ephesians 6:10-18",
                books: "Eph",
              },
            ],
          },
        ],
      },
      {
        name: "From Darkness to Light",
        title: "Winter",
        units: [
          {
            unit: 1,
            name: "God's Preparation",
            lessons: [
              {
                date: "2022-12-04",
                title: "Zacharias Hears from God",
                description: "Luke 1:8-20",
                books: "Luk",
              },
              {
                date: "2022-12-11",
                title: "Zacharias Speaks",
                description: "Luke 1:57-66, 76-79",
                books: "Luk",
              },
              {
                date: "2022-12-18",
                title: "John the Baptist Appears",
                description: "Luke 3:2b-6, 15-18",
                books: "Luk",
              },
              {
                date: "2022-12-25",
                title: "Mary Rejoices",
                description: "Luke 1:46-55",
                books: "Luk",
              },
            ],
          },
          {
            unit: 2,
            name: "God's Promises",
            lessons: [
              {
                date: "2023-01-01",
                title: "God Promises to Hear and Forgive",
                description: "2 Chronicles 7:12-22",
                books: "2Ch",
              },
              {
                date: "2023-01-08",
                title: "God Promises to Restore",
                description: "Isaiah 43:1-4, 10-12",
                books: "Luk",
              },
              {
                date: "2023-01-15",
                title: "God Promises to Guide",
                description: "Isaiah 48:3-8a, 17",
                books: "Isa",
              },
              {
                date: "2023-01-22",
                title: "God Promises Light",
                description: "Isaiah 58:6-10",
                books: "Isa",
              },
              {
                date: "2023-01-29",
                title: "God Promises His Presence",
                description: "Joel 2:21-27",
                books: "Joe",
              },
            ],
          },
          {
            unit: 3,
            name: "God's Call",
            lessons: [
              {
                date: "2023-02-05",
                title: "Resume of Those Called",
                description: "1 Corinthians 1:18-31",
                books: "1Co",
              },
              {
                date: "2023-02-12",
                title: "Reminder of the Call",
                description: "2 Timothy 1:3-14",
                books: "2Ti",
              },
              {
                date: "2023-02-19",
                title: "Responsibility of Those Called",
                description: "James 2:1-12",
                books: "Jas",
              },
              {
                date: "2023-02-26",
                title: "Results of the Call",
                description: "1 Peter 2:1-10",
                books: "1Pe",
              },
            ],
          },
        ],
      },
      {
        name: "Jesus Calls Us",
        title: "Spring",
        units: [
          {
            unit: 1,
            name: "Called from the Margins of Society",
            lessons: [
              {
                date: "2023-03-05",
                title: "The Prodigal Son",
                description: "Luke 15:11-24",
                books: "Luk",
              },
              {
                date: "2023-03-12",
                title: "The Greatest in the Kingdom",
                description: "Matthew 18:1-9",
                books: "Mat",
              },
              {
                date: "2023-03-19",
                title: "Jesus Talks with a Samaritan",
                description: "John 4:7-15, 28-30, 39-41",
                books: "Jhn",
              },
              {
                date: "2023-03-26",
                title: "Jesus Overpowers Legion",
                description: "Mark 5:1-13, 18-20",
                books: "Mar",
              },
            ],
          },
          {
            unit: 2,
            name: "Experiencing the Resurrection",
            lessons: [
              {
                date: "2023-04-02",
                title: "The Empty Tomb",
                description: "Luke 24:1-12",
                books: "Luk",
              },
              {
                date: "2023-04-09",
                title: "Disciples Believe the Resurrection",
                description: "Luke 24:13-27, 30-31",
                books: "Luk",
              },
              {
                date: "2023-04-16",
                title: "Jesus Cooks Breakfast",
                description: "John 21:1-14",
                books: "Jhn",
              },
              {
                date: "2023-04-23",
                title: "Jesus Reinstates Peter",
                description: "John 21:15-19",
                books: "Jhn",
              },
            ],
          },
          {
            unit: 3,
            name: "The Birth of the Church",
            lessons: [
              {
                date: "2023-04-30",
                title: "Jesus Makes a Promise",
                description: "Acts 1:1-11",
                books: "Act",
              },
              {
                date: "2023-05-07",
                title: "The Day of Pentecost",
                description: "Acts 2:1-8, 14-24, 37-40",
                books: "Act",
              },
              {
                date: "2023-05-14",
                title: "Jumping for Joy",
                description: "Acts 3:1-11",
                books: "Act",
              },
              {
                date: "2023-05-21",
                title: "An Ethiopian is Baptized",
                description: "Acts 8:29-39",
                books: "Act",
              },
              {
                date: "2023-05-28",
                title: "Saul of Tarsus",
                description: "Acts 9:9-17",
                books: "Act",
              },
            ],
          },
        ],
      },
      {
        name: "The Righteous Reign of God",
        title: "Summer",
        units: [
          {
            unit: 1,
            name: "The Prophets Proclaim God's Power",
            lessons: [
              {
                date: "2023-06-04",
                title: "God Reigns",
                description: "Isaiah 52:7-12",
                books: "Isa",
              },
              {
                date: "2023-06-11",
                title: "God's Kingdom of Peace",
                description: "Isaiah 65:17-25",
                books: "Isa",
              },
              {
                date: "2023-06-18",
                title: "God's Servant-King",
                description: "Ezekiel 37:21-28",
                books: "Eze",
              },
              {
                date: "2023-06-24",
                title: "Renewed in God's Love",
                description: "Zephaniah 3:14-20",
                books: "Luk",
              },
              {
                date: "2023-07-02",
                title: "Peace to the Nations",
                description: "Zechariah 9:9-13, 16-17",
                books: "Zec",
              },
            ],
          },
          {
            unit: 2,
            name: "Jesus Envisions the Kingdom",
            lessons: [
              {
                date: "2023-07-09",
                title: "The Kingdom Has Come Upon You",
                description: "Matthew 12:22-32",
                books: "Mat",
              },
              {
                date: "2023-07-16",
                title: "The Sower and the Seed",
                description: "Matthew 13:1-9, 18-23",
                books: "Mat",
              },
              {
                date: "2023-07-23",
                title: "Weeds Among the Wheat",
                description: "Matthew 13:24-30, 36-43",
                books: "Mat",
              },
              {
                date: "2023-07-30",
                title: "Finding and Gathering",
                description: "Matthew 13:44-52",
                books: "Mat",
              },
            ],
          },
          {
            unit: 3,
            name: "God's Eternal Reign",
            lessons: [
              {
                date: "2023-08-06",
                title: "Inheriting the Kingdom",
                description: "Galatians 5:13-26",
                books: "Gal",
              },
              {
                date: "2023-08-13",
                title: "The Nature of the Kingdom",
                description: "Romans 14:10-23",
                books: "Rom",
              },
              {
                date: "2023-08-20",
                title: "Judgment in the Kingdom",
                description: "1 Corinthians 4:1-6, 17-21",
                books: "1Co",
              },
              {
                date: "2023-08-27",
                title: "God's Kingdom Will Be All in All",
                description: "1 Corinthians 15:20-28",
                books: "1Co",
              },
            ],
          },
        ],
      },
    ],
  };
});
