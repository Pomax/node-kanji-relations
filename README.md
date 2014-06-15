# Kanji-relations

This is a node.js package for finding and navigating grapheme
relations for Japanese Kanji. If you don't know what that means,
consider the notion that 休 looks like a combination of ⺅ and 木.
That's the kind of thing we're talking about.

## Installation

`npm install kanji-relations`

## Use

`var relations = require('kanji-relations');`

## API

> .get(kanji) -> object

gets a kanji's information

>  .getParents(kanji) -> array[string]

gets all parents that build a particular kanji

> .getChildren(kanji) -> array[string]

gets all kanji that can be formed with this kanji

> .getChildren(kanji1, kanji2, ...) -> array[string]

gets all kanji that can be formed with all indicated parents.
This is essentially the union of the arrays that result from
calling `get(kanji)` for each kanji in the argument list.
