import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchableFields: string[]) {
    const searchTerm = this?.query?.searchTerm;
    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: { $regex: searchTerm, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      });
    }

    return this;
  }

  filter() {
    const queryObj = { ...this.query };

    const excludeFields = ['searchTerm', 'sort', 'limit', 'page'];
    excludeFields.forEach((elem) => delete queryObj[elem]);

    Object.keys(queryObj).forEach((key) => {
      let value = queryObj[key];

      if (typeof value === 'string' && value.includes(',')) {
        value = value.split(',').map((item) => item.trim());
      }

      if (Array.isArray(value)) {
        queryObj[key] = { $in: value };
      }

      const minPrice = Number(this.query.minPrice);
      const maxPrice = Number(this.query.maxPrice);

      if (!isNaN(minPrice) && !isNaN(maxPrice)) {
        queryObj['price'] = { $gte: minPrice, $lte: maxPrice };
      } else if (!isNaN(minPrice)) {
        queryObj['price'] = { $gte: minPrice };
      } else if (!isNaN(maxPrice)) {
        queryObj['price'] = { $lte: Number(maxPrice) };
      }
    });

    delete queryObj.minPrice;
    delete queryObj.maxPrice;

    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);

    return this;
  }

  sort() {
    const sort =
      (this?.query?.sort as string)?.split(',')?.join(' ') || 'createdAt';
    this.modelQuery = this.modelQuery.sort(sort as string);

    return this;
  }

  paginate() {
    const page = Number(this?.query?.page) || 1;
    const limit = Number(this?.query?.limit) || 10;
    const skip = (page - 1) * limit;

    this.modelQuery = this.modelQuery.skip(skip).limit(limit);

    return this;
  }
}

export default QueryBuilder;
