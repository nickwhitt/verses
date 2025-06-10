export type Pentateuch = 'Genesis' | 'Exodus' | 'Leviticus' | 'Numbers' | 'Deuteronomy'
export type History = 'Joshua' | 'Judges' | 'Ruth' | '1 Samuel' | '2 Samuel' | '1 Kings' | '2 Kings' | '1 Chronicles' | '2 Chronicles' | 'Ezra' | 'Nehemiah' | 'Esther'
export type Wisdom = 'Job' | 'Psalms' | 'Proverbs' | 'Ecclesiastes' | 'Song of Songs'
export type Prophets = 'Isaiah' | 'Jeremiah' | 'Lamentations' | 'Ezekiel' | 'Daniel' | 'Hosea' | 'Joel' | 'Amos' | 'Obadiah' | 'Johanh' | 'Micah' | 'Nahum' | 'Habakkuk' | 'Zephaniah' | 'Haggai' | 'Zechariah' | 'Malachi'
export type Gospels = 'Matthew' | 'Mark' | 'Luke' | 'John'
export type Acts = 'Acts'
export type Epistles = 'Romans' | '1 Corinthians' | '2 Corinthians' | 'Galatians' | 'Ephesians' | 'Philippians' | 'Colossians' | '1 Thessalonians' | '2 Thessalonians' | '1 Timothy' | '2 Timothy' | 'Titus' | 'Philemon' | 'Hebrews' | 'James' | '1 Peter' | '2 Peter' | '1 John' | '2 John' | '3 John' | 'Jude' | 'Revelation'

export type Source = 'nasb20' | 'amp' | 'esv' | 'kjv' | 'nkjv' | 'jps85' | 'csb' | 'niv' | 'nlt' | 'heb' | 'lxx'
export type Book = Pentateuch | History | Wisdom | Prophets | Gospels | Acts | Epistles

export type Scripture = {
  source: Source,
  book: Book,
  chapter: number,
  verse: number,
  text: string,
}