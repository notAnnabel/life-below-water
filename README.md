# Welcome to Life below water!

This is a project based on 14 UN sustainability goal, life below water, using React Router.


## Features of the experience

- A simulated p5.js wave that can become 'polluted' with the buttons linked with the backend on the left hand side of the screen.
- Animals that move at varied speeds across the screen

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

this project has been deployed using vercel
https://life-below-water-git-master-annabels-projects-e959169c.vercel.app/


### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Class properties
there are two main classes, wave, and Animal (from which Fish and Shark inherit)

# wave
-	setup() creates the calculation of the distance of the circles that make up the wave. It does this for the entire window width. It also creates an array of y axis values to be iterated over in the renderWave() and calcWave() methods. 
-	renderWave() colours the wave (with the non-polluted colour to begin with). It also calculates the circle positions of the wave. Each wave is calculated from halfway up the window height to 50 units beneath the window height, this is done to ensure there are no gaps left at the bottom of the window as the waves peak and dip. 
-	calcWave() calculates the sine motion of the wave. This is done as explained above. 
-	Draw() simply calls the calcWave() and render() methods. 

# animal 
-	moving() increments the x axis position of the animal by the fishSpeed. When the image is off the screen, it is then repositioned at -60 on the x axis. This is to give the fish some time to loop back around in a more natural way. The fish’s y coordinate is randomised within a set way once it reappears on screen. 
-	kill() changes the currently drawn image to the assigned dead image in the fish instance. 
-	revive() changes the currently drawn image to the assigned alive image in the fish instance 


## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
