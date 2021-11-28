"""
The Holy Scriptures: A New Translation
Jewish Publication Society, 1917 (JPS)

"""

from .genesis import genesis

canon = tanakh = tuple(
    [
        book.replace("_", " ")
        for book in (
            "genesis exodus leviticus numbers deuteronomy joshua judges 1_samuel 2_samuel "
            "1_kings 2_kings isaiah jeremiah ezekiel hosea joel amos obadiah jonah micah nahum "
            "habakkuk zephaniah haggai zechariah malachi psalms proverbs job song_of_songs ruth "
            "lamentations ecclesiastes esther daniel ezrah nehemiah 1_chronicle 2_chronicles "
        ).split()
    ]
)

torah = tanakh[:5]
prophets = neviim = tanakh[5:26]
writings = ketuvim = tanakh[26:]
