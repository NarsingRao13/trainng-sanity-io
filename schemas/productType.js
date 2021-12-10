export default [
  {
    title: "Product Type",
    name: "productType",
    type: "document",
    fields: [
      {
        title: "Type",
        name: "type",
        type: "string",
        options: {
          list: [
            { title: "Electronics", value: "electronics" },
            { title: "Beauty", value: "beauty" },
            { title: "HouseHold", value: "houseHold" },
          ],
          isHighlighted: true,
        },
      },
      {
        title: "Prodcut Type Description",
        name: "ptDescription",
        type: "array",
        of: [
          { type: "block" },
          {
            title: "Image",
            name: "image",
            type: "image",
            fields: [
              {
                type: "text",
                name: "alt",
                title: "Description",
                options: {
                  isHighlighted: true,
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
