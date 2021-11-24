from typing import Sequence

from pydantic import BaseModel

__version__ = "0.1.0"

Verse = str


class Chapter(BaseModel):
    verses: Sequence[Verse]

    def __init__(self, *verses: Verse) -> None:
        super().__init__(verses=verses)

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
    chapters: Sequence[Chapter]

    def __init__(self, *chapters: Chapter) -> None:
        super().__init__(chapters=chapters)

    def chapter(self, i) -> Chapter:
        """Retrieve chapter by natural index"""
        i -= 1
        if not 0 <= i < len(self.chapters):
            raise ValueError(
                f"Chapter reference must be between 1 and {len(self.chapters)}"
            )

        return self.chapters[i]
