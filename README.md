# React Image List Demo

You can view this demo at https://naughty-shirley-502d0c.netlify.com/

This demo uses new React features Hooks and Suspense to optimize the UX of an image list. This uses Hooks to handle resize and intersection observer events and Suspense to handle image loading with a fallback when the image takes longer than 500ms.

There are 5 steps to this demo:

- Simple image list with text below
- Fixed size to eliminate label content moving as images load
- Resize logic to handle window size smaller than image width so image size is reduced
- Use of intersection observer to only load images when they are within 100px of window
- Add loading fallback when image fails to load withing 500ms

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
