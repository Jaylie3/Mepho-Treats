# Owner guide

## Update prices and products

Open `data/menu.json`. Each product is listed under `items`; update its `price`, `name`, `size` or `notes`. Flavours are listed under `flavours`. Keep each product `id` unique because the cart uses it to identify products.

## Ordering settings

The `settings` object contains delivery fee, free-delivery threshold, WhatsApp number and order status. Confirm the WhatsApp number before publishing.

## Sold-out products

Phase 1 does not yet have a sold-out toggle in the menu UI. For now, remove or temporarily comment out the product in the JSON data and redeploy. A proper `available` toggle is a sensible next improvement.

## Photos and logo

Place optimized product images in `public/images/`. Use the original logo artwork without stretching or recolouring. The current homepage artwork is a temporary CSS illustration and must be replaced with the supplied logo and real product photos before launch.

## Publish changes

Commit changes to Git and push to the connected Vercel repository. Vercel will build and deploy the update.
