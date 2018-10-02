# v1.5.4 - Set improvement edition
Allowed promo and misc sets to be shown when hovered over

* Promo sets now appear in dropdown menu
* Sets now show rarity colour on the logo 



# v1.5.3 - Favicon edition
Added a favicon and fixed some bugs

* Added favicon from https://www.flaticon.com
* Fixed pressing enter on general search
* Clicking on cards in general search now opens it in named search



# v1.5.2 - General search start edition
Started working on a general search that uses Scryfall's search syntax

* Search syntax: https://scryfall.com/docs/reference



# v1.5.1 - Mythic edition
Added card rarity and other fixes

* Streamlined the way in which calls set api to reduce load times
* Added rarity of cards even if it looks horrible



# v1.5 - Sets Edition
Added different sets functionality

* Allowed choosing the sets of certain cards



# v1.4.1 - Button edition
Started to work on new search feature

* Added buttons for new search feature



# v1.4.1 - Bug fix edition
Bug fixes

* Fixed rulings JSON error
* Re-jigged input form elements
* Re-organised js code



# v1.4 - Frustrating edition
Added CardMarket link and varios other fixes

* Got frustrated at the complicated CardMarket API and just used a link to it in the end. I might look into it later on
* Added half mana symbols
* Made the rulings text look better
* Fixed the image size so it doesn't overlap



# v1.3 - Beautiful edition
Used Bootstrap to make the site look better and added rulings

* Now using bootstrap buttons and collapse components
* Uses Scryfall API to get card rulings if it has any
* Added a clear button to clear the search



# v1.2 - Mobile friendly edition
Made the site adaptive to screen sizes



# v1.1.1 - Google analytics edition
Added Google analytics



# v1.1 - Symbols everywhere edition
Added more symbols and fixed a bug

* Added support for almost all symbols on magic cards
* Fixed a bug where only one mana symbol would appear for each 1,2,3 and 4 colourless mana
* Added a border checkbox



# v1.0 - Cardboard Tutor edition
Actually gave this project a name! (Also borders)

* Changed the name of the project and all references within
* Added borders for both black and silver bordered cards




# v0.2 - Better autocomplete edition
Made the autocomplete better

* Autocomplete:
   * Now uses the Scryfall API instead of pre-downloaded JSON
   * Now should only have one autocomplete box shown at once if typing fast




# v0.1 - Super basic edition
Pretty much just the basics.

* Uses Scryfall api to download JSON for specified card
* Simple autocomplete that uses pre-downloaded JSON file
* Option to display card image
* Symbol images for WUBRG, colourless mana (1-4 + X) and tapping
