# Featured Project Popup

This folder contains a portfolio version that matches the live template at:

https://vincentdoctolerocalica.github.io/portfolio/

## Files

- `index.html` - portfolio page with the project popup modal.
- `style.css` - original dark portfolio style plus popup styling.
- `script.js` - typing effect, scroll animation, top button, and project popup behavior.

## Edit Project Links

Open `script.js` and update the `projects` array:

```js
const projects = [
  {
    id: "portfolio",
    icon: "🌐",
    title: "Modern Portfolio Website",
    description: "A responsive personal website designed to showcase web development and automation skills.",
    url: "https://vincentdoctolerocalica.github.io/portfolio/"
  }
];
```

Replace the `url` value for each project with the correct project live site or GitHub link.

## How It Works

- Click `View Project Index` in the hero to open the popup.
- Click any featured project card to open the same popup and focus that project.
- Click `Open Site` inside the popup to visit the project link in a new tab.
- Press `Esc`, click the `×`, or click outside the popup to close it.
