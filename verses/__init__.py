from typing import Mapping, Sequence

from pydantic import BaseModel, validator

__version__ = "0.1.0"

__books__ = set(
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

Verse = str


class Chapter(BaseModel):
    verses: Sequence[Verse]

    def verse(self, start: int, end: int = None) -> Sequence[Verse]:
        """Retrieve verse(s) by natural index"""
        if not 0 < start <= (start if end is None else end) <= len(self.verses):
            raise ValueError(
                f"Verse referenece must be between 1 and {len(self.verses)}"
            )

        start -= 1
        if end is None:
            return self.verses[start]

        return self.verses[start:end]


class Book(BaseModel):
    name: str
    chapters: Sequence[Chapter]

    @validator("name")
    def name_in_books(cls, v):
        if v not in __books__:
            raise ValueError(f"unknown Book name: {v}")

        return v

    def chapter(self, i) -> Chapter:
        """Retrieve chapter by natural index"""
        i -= 1
        if not 0 <= i < len(self.chapters):
            raise ValueError(
                f"Chapter reference must be between 1 and {len(self.chapters)}"
            )

        return self.chapters[i]

    @classmethod
    def from_raw(cls, name: str, data: Mapping[str, tuple[str, ...]]):
        return cls(
            name=name,
            chapters=(tuple([Chapter(verses=v) for v in data.values()])),
        )
