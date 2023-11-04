export default defineEventHandler((event) => {
  return [
    { name: "The Righteous Reign of God", quarter: "Summer 2023" },
    { name: "Jesus Calls Us", quarter: "Spring 2023" },
    { name: "From Darkness to Light", quarter: "Winter 2022-2023" },
    {
      name: "God's Exceptional Choice",
      quarter: "Fall 2022",
      units: [
        {
          name: "God Calls Abraham's Family",
          lessons: [
            { name: "The Call of Abram", slug: "call-of-abram" },
            {
              name: "God Chooses The Younger Twin",
              slug: "god-chooses-younger-twin",
            },
            { name: "Jacob Called Israel", slug: "jacob-called-israel" },
            {
              name: "The Scepter Given to Judah",
              slug: "scepter-given-to-judah",
            },
          ],
        },
        {
          name: "Out of Slavery to Nationhood",
          lessons: [
            { name: "The Birth of Moses", slug: "2022/10/birth-of-moses" },
            { name: "Song of Moses", slug: "2022/10/song-of-moses" },
            { name: "The Call of Gideon", slug: "2022/10/call-of-gideon" },
            { name: "Who Is King?", slug: "2022/10/who-is-king" },
            {
              name: "David Anointed as King",
              slug: "2022/10/david-anointed-king",
            },
          ],
        },
        {
          name: "We Are God's Artwork",
          lessons: [
            { name: "God Picked You!", slug: "2022/11/god-picked-you" },
            { name: "Christ Is Wisdom" },
            { name: "We Are God's Handiwork" },
            { name: "God Gives Tools for Our Protection" },
          ],
        },
      ],
    },
  ];
});
