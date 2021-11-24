"""
King James Version (KJV)

Outside of the United Kingdom, the KJV is in the public domain.
Within the United Kingdom, the rights to the KJV are vested in the Crown.
"""

from .exodus import exodus
from .genesis import genesis

canon = tuple(
    [
        book.replace("_", " ")
        for book in (
            "genesis exodus leviticus numbers deuteronomy joshua judges ruth 1_samuel 2_samuel "
            "1_kings 2_kings 1_chronicles 2_chronicles ezra nehemiah esther job psalms proverbs "
            "ecclesiastes song_of_solomon isaiah jeremiah lamentations ezekiel daniel hosea joel "
            "amos obadiah jonah micah nahum habakkuk zephaniah haggai zechariah malachi matthew "
            "mark luke john acts romans 1_corinthians 2_corinthians galatians ephesians philippians "
            "colossians 1_thessalonians 2_thessalonians 1_timothy 2_timothy titus philemon hebrews "
            "james 1_peter 2_peter 1_john 2_john 3_john jude revelation"
        ).split()
    ]
)
old_testament = canon[:39]
new_testament = canon[39:]
