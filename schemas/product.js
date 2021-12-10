export default [
  {
    title: "Products",
    name: "products",
    type: "document",
    fields: [
      {
        title: "Product Name",
        name: "productName",
        type: "string",
      },
      {
        title: "Product ID",
        name: "productID",
        type: "string",
      },
      {
        title: "Price",
        name: "price",
        type: "number",
      },
      {
        title: "Product Type",
        name: "proType",
        type: "reference",
        to: [{ type: "productType" }],
      },
      {
        title: "Description",
        name: "productDescription",
        type: "string",
      },
      {
        title: "Product Image",
        name: "productImage",
        type: "image",
      },
      {
        title: "Slug",
        name: "slug",
        type: "slug",
      },
    ],
  },
];
