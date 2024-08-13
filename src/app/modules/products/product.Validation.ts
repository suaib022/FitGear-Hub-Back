import { z } from 'zod';

const CreateProductValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string !',
      required_error: 'Name is required !',
    }),
    price: z
      .number({
        invalid_type_error: 'Price must be a number !',
        required_error: 'Price is required !',
      })
      .positive({ message: 'Price must be a positive number' }),
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
    quantity: z
      .number({
        invalid_type_error: 'Quantity must be a number !',
        required_error: 'Quantity is required !',
      })
      .positive({ message: 'Quantity must be a positive number' }),
  }),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z
      .number()
      .positive({ message: 'Price must be a positive number' })
      .optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    quantity: z.number().optional(),
  }),
});

export const ProductValidations = {
  CreateProductValidationSchema,
  updateProductValidationSchema,
};
