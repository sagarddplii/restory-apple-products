# Shopify Admin API Setup Guide

## 🔑 Getting Your Admin API Access Token

To connect your custom admin dashboard to Shopify, you need to get an Admin API access token.

### Step 1: Create a Private App in Shopify

1. **Go to your Shopify Admin**: `https://apple-reborn-0clup.myshopify.com/admin`
2. **Navigate to**: Settings → Apps and sales channels
3. **Click**: "Develop apps" → "Create an app"
4. **Name your app**: "ReStory Admin Dashboard"
5. **Click**: "Create app"

### Step 2: Configure API Permissions

In your new app, go to "Configuration" and enable these permissions:

**Admin API access scopes:**
- ✅ `read_products` - Read products
- ✅ `write_products` - Create/update products  
- ✅ `read_product_listings` - Read product listings
- ✅ `write_product_listings` - Manage product listings
- ✅ `read_inventory` - Read inventory
- ✅ `write_inventory` - Manage inventory

### Step 3: Install and Get Token

1. **Click**: "Install app" 
2. **Copy the Admin API access token**
3. **Update the token** in your code

### Step 4: Update Your Code

Replace `YOUR_ADMIN_ACCESS_TOKEN` in `src/lib/shopifyAdmin.ts` with your actual token:

```typescript
const SHOPIFY_ADMIN_TOKEN = 'your_actual_token_here';
```

## 🚀 Testing the Connection

1. **Start your dev server**: `npm run dev`
2. **Go to**: `http://localhost:8080/admin`
3. **Try uploading a product** - it should create in Shopify!
4. **Check your Shopify admin** to see the new product

## 🔒 Security Note

- **Never commit** your Admin API token to version control
- **Use environment variables** in production
- **Keep your token secure** - it has full admin access

## 🆘 Troubleshooting

**If you get "Unauthorized" errors:**
- Check your token is correct
- Verify app permissions are enabled
- Make sure the app is installed

**If products don't appear:**
- Check your Storefront API token is working
- Verify products are published in Shopify
- Check browser console for errors
