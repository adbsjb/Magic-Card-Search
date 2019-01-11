* Fixes
	* Add delay on API requests so Scryfall doesn't hate me
	* Fix double quote marks breaking out of strings. Maybe put this in `replaceSymbols()` function: `newString = newString.replace(/\"/g, '\\"');` Although this broke much more than it fixed when I tried. Also may have to wait until spoiler season to test as scryfall doesn't really use double quotes often.


* Additions
	* Add getters and setters for all card properties for easy managing of all non "normal" cards (split, transform etc.)