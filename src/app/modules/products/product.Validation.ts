import { z } from 'zod';

const CreateProductValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string !',
      required_error: 'Name is required !',
    }),
    price: z.number({
      invalid_type_error: 'Price must be a number !',
      required_error: 'Price is required !',
    }),
    description: z.string({
      invalid_type_error: 'Description must be a string !',
      required_error: 'Description is required !',
    }),
    image: z.string({
      invalid_type_error: 'Image must be a string !',
      required_error: 'Image is required !',
    }),
    category: z.string({
      invalid_type_error: 'Category must be a string !',
      required_error: 'Category is required !',
    }),
    quantity: z.number({
      invalid_type_error: 'Quantity must be a number !',
      required_error: 'Quantity is required !',
    }),
  }),
});

export const ProductValidations = {
  CreateProductValidationSchema,
};
