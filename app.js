const textArea = document.querySelector("#editor");
const preview = document.querySelector("#preview");

function createHr() {
  const heading = document.querySelectorAll("h1, h2");
  heading.forEach((element) =>
    element.appendChild(document.createElement("hr"))
  );
}

/* function lineBreak() {
  const value = document.getElementById("editor").value;
  value.match(/\n/g);
} */

textArea.addEventListener("input", (e) => {
  e.preventDefault();
  textArea.value = e.target.value;
  preview.innerHTML = marked(e.target.value);
  createHr();
});

window.addEventListener("load", () => {
  textArea.value = `# Markdown syntax guides

## Headers

# This is a Heading h1
## This is a Heading h2 
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3
1. Item 3a
1. Item 3b

## Images

![This is a alt text.](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Inline code

May the \`Force\` be with you`;
  preview.innerHTML = marked(textArea.value);
  createHr();
});
