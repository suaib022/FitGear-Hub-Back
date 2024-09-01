export const CATEGORIES = {
  Cardio: 'Cardio',
  Strength: 'Strength',
  Functional: 'Functional',
  BodyWeight: 'Body Weight',
  Accessories: 'Accessories',
  Recovery: 'Recovery',
  Flooring: 'Flooring',
  Storage: 'Storage',
  Specialty: 'Specialty',
  GymPackages: 'Gym Packages',
};

export type TCategories = keyof typeof CATEGORIES;

export const categories: TCategories[] = [
  'Cardio',
  'Strength',
  'Functional',
  'BodyWeight',
  'Accessories',
  'Recovery',
  'Flooring',
  'Storage',
  'Specialty',
  'GymPackages',
];
