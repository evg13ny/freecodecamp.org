One of the simplest and most widely known _ciphers_ is a _Caesar cipher_, also known as a _shift cipher_. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the <u>ROT13</u> cipher, where the values of the letters are shifted by 13 places. Thus `A ↔ N`, `B ↔ O` and so on.

Write a function which takes a <u>ROT13</u> encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

---

* `rot13("SERR PBQR PNZC")` should decode to the string `FREE CODE CAMP`
* `rot13("SERR CVMMN!")` should decode to the string `FREE PIZZA!`
* `rot13("SERR YBIR?")` should decode to the string `FREE LOVE?`
* `rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` should decode to the string `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG`.