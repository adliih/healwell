# Heal Well Catalog

This app will basically render the catalog from our Heal Well database stored in Google Sheet.

The requirements are follow:

- Able to fetch google spreadsheet by id
- Able to get the sheet by name (e.g: "Product")
- Able to get the image that were attached inside the cell. The cell value is not in string (link format), but it is image inside cell.
- Only process non empty row.
- Render the catalog with predefined template

The structure of the product database is as follow:
| Product | Provider | Selling Price | Stock | - | - | Image |
|------------------|-----------------|---------------|-------|-----|-----|-------|
| Sadajiwa - 30ml | Rahsa Nusantara | Rp30,000 | 10 | - | - | <Image inside the cell>|

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
