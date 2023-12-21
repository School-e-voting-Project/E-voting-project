# INSTRUCTIONS

## SETUP

### From Github

1. Clone project using `git clone`.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the server and run the application.

### From Scratch

[Check this link](https://chat.openai.com/share/b6c06dab-5fc6-481f-a0be-2fbbecef0f7e)

## MAKING CHANGES

### Changing site name and favicon

- Make changes to `title` in `index.html`
- Get `favicon` from [favicon.ico](https://favicon.io/favicon-converter/)
- Add files to icons folder:

 ```plaintext
     project-root
     └── src
         └── assets
             └── icons
                 └── your_icon_file1.png
                 └── your_icon_file2.png
                 └── ...
 ```

- Change favicon in `link` in `index.html`

### Adding images

- Adding images to project

 ```plaintext
   project-root
    └── src
        └── assets
            └── candidates
                └── your_image_file1.jpg
                └── your_image_file2.png
                └── ...
 ```

- Exporting images
     Make changes to `Images.jsx` (assets folder) following the examples given.  

- Using Images:
Make changes to `contestants.js` (constants folder).

### Changing Logo

1. Adding logo:

 ```plaintext
  project-root
    └── src
        └── assets
            └── icons
                └── your_logo.png

 ```

2. Linking the logo:

- On `Header.jsx` (components folder),

```jsx
// change the path
import img from "@/assets/icons/logo1.jpg";
```

### Changing Text in Election page

#### Header Text

Changes can be made in `Header.jsx` (components folder).

#### Card Text

Changes can be made in the `contestants.js` (constants folder)

### Changing Text in Congratulations Page

Changes can be made in the `Congratulations.jsx` (pages folder)


