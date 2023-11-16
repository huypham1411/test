import Item from '@/src/models/items';
import { connectToDB } from '@/src/utils/database';

export const GET = async () => {
  try {
    await connectToDB();
    const items = await Item.find({});
    return new Response(JSON.stringify(items), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch data', { status: 500 });
  }
};

export const POST = async (request: any) => {
  try {
    await connectToDB();
    const { page, sort, priceFrom, priceTo, category, search } =
      await request.json();
    const baseQuery: any = {};
    if (priceFrom && priceTo) {
      baseQuery.price = { $gte: priceFrom, $lte: priceTo };
    }

    if (category && category !== 'All') {
      baseQuery.rarity = category;
    }

    if (search && search.trim() !== '') {
      const searchRegex = new RegExp(search.trim(), 'i');
      baseQuery.name = { $regex: searchRegex };
    }
    const itemsPerPage = 10;
    const items = await Item.find(baseQuery)
      .sort(sort)
      .skip((page - 1) * itemsPerPage)
      .limit(itemsPerPage);
    return new Response(JSON.stringify(items), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch data', { status: 500 });
  }
};
