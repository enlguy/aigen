I'm creating this as an experiment, to see how well AI can create a functional business site.  The goal, for now, is to make an SPA in NextJS for a business.  I'm also utilizing Typescript and TailwindCSS.

I've been using a mix of OpenAI and Copilot.  I started running into some serious memory issues with OpenAI's ChatGPT, and so moved my work over to MS Copilot.  Copilot has been great about picking up from where things were, by allowing me to upload an existing code block, or even image, to determine the site structure, color scheme, and design.  

The AI definitely needs guidance, but thus far, I have a decent looking site (still work to be done) that has been coded almost 100% by the AI.  I have had to specify changes, at times, or helped the AI debug (and the reason I say "almost 100%" is because once or twice I determined I could simply fix it much more efficiently by doing it myself, after the AI had failed to modify the code appropriately in those instances).  

I've found the AI to be most helpful in: <br><br>
  a) Saving time - not having to write all the code from scratch, but copy/paste and then tweak, has allowed the site to be built more quickly - though in the case of the hero section, it did start to take up more time than anticipated due to some challenges with the AI maintaining consisteny, or repeatedly providing code that would not work (forcing me to debug manually).  This was OpenAI's ChatGPT that was having these difficulties. <br><br>
  b) Image generation and design assets - I think this is a great boon of AI, in that I no longer have to scour license-free photo sites and hope to find something that will work, or spend a lot of money on a stock image.  The AI can create a lot of the visual assets for me from a text prompt, as well as understand the color palette and aesthetic well enough to help with general design.  

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
