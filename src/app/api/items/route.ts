import Item from '@/src/models/items';
import { connectToDB } from '@/src/utils/database';

export const GET = async (request: any) => {
  try {
    await connectToDB();
    const items = await Item.find({});
    return new Response(JSON.stringify(items), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch data', { status: 500 });
  }
};
