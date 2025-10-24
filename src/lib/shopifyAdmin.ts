const SHOPIFY_API_VERSION = '2025-07';
const SHOPIFY_STORE_PERMANENT_DOMAIN = 'apple-reborn-0clup.myshopify.com';
const SHOPIFY_ADMIN_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/admin/api/${SHOPIFY_API_VERSION}`;
const SHOPIFY_ADMIN_TOKEN = 'YOUR_ADMIN_ACCESS_TOKEN'; // You'll need to get this from Shopify

export interface ShopifyAdminProduct {
  id?: string;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  status: 'active' | 'archived' | 'draft';
  tags: string;
  variants: Array<{
    id?: string;
    title: string;
    price: string;
    sku?: string;
    inventory_quantity?: number;
    option1?: string;
    option2?: string;
    option3?: string;
  }>;
  options: Array<{
    name: string;
    values: string[];
  }>;
  images: Array<{
    id?: string;
    src: string;
    alt?: string;
  }>;
}

export interface CreateProductData {
  title: string;
  description: string;
  price: number;
  condition: string;
  storage: string;
  category: string;
  images: File[];
}

export async function adminApiRequest(endpoint: string, method: string = 'GET', data?: any) {
  const response = await fetch(`${SHOPIFY_ADMIN_URL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': SHOPIFY_ADMIN_TOKEN
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function createProduct(productData: CreateProductData): Promise<ShopifyAdminProduct> {
  try {
    // First, upload images to Shopify
    const uploadedImages = await uploadImages(productData.images);
    
    // Create the product
    const product = {
      product: {
        title: productData.title,
        body_html: `<p>${productData.description}</p>`,
        vendor: 'ReStory',
        product_type: productData.category,
        status: 'active',
        tags: `certified,pre-owned,${productData.condition},${productData.storage}`,
        variants: [{
          title: 'Default Title',
          price: productData.price.toString(),
          sku: `RS-${Date.now()}`,
          inventory_quantity: 1,
          option1: productData.condition,
          option2: productData.storage
        }],
        options: [
          {
            name: 'Condition',
            values: [productData.condition]
          },
          {
            name: 'Storage',
            values: [productData.storage]
          }
        ],
        images: uploadedImages
      }
    };

    const response = await adminApiRequest('/products.json', 'POST', product);
    return response.product;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}

export async function uploadImages(files: File[]): Promise<Array<{src: string, alt?: string}>> {
  const uploadedImages = [];
  
  for (const file of files) {
    try {
      // Convert file to base64
      const base64 = await fileToBase64(file);
      
      // Upload to Shopify
      const uploadData = {
        image: {
          attachment: base64,
          filename: file.name
        }
      };
      
      const response = await adminApiRequest('/products/images.json', 'POST', uploadData);
      uploadedImages.push({
        src: response.image.src,
        alt: file.name
      });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }
  
  return uploadedImages;
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove the data:image/...;base64, prefix
      resolve(result.split(',')[1]);
    };
    reader.onerror = error => reject(error);
  });
}

export async function getProducts(): Promise<ShopifyAdminProduct[]> {
  try {
    const response = await adminApiRequest('/products.json');
    return response.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function updateProduct(productId: string, productData: Partial<CreateProductData>): Promise<ShopifyAdminProduct> {
  try {
    const product = {
      product: {
        id: productId,
        ...(productData.title && { title: productData.title }),
        ...(productData.description && { body_html: `<p>${productData.description}</p>` }),
        ...(productData.price && { 
          variants: [{ 
            id: productId, 
            price: productData.price.toString() 
          }] 
        })
      }
    };

    const response = await adminApiRequest(`/products/${productId}.json`, 'PUT', product);
    return response.product;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}

export async function deleteProduct(productId: string): Promise<void> {
  try {
    await adminApiRequest(`/products/${productId}.json`, 'DELETE');
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
}
