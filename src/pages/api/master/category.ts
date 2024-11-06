// src/app/api/category.ts
import { NextApiRequest, NextApiResponse } from 'next';

// Dummy data
const categories = [
  { id: 1, name: 'Category 1', slug: 'category-1' },
  { id: 2, name: 'Category 2', slug: 'category-2' },
];

// Handler function
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Dump request when accessing via GET
    console.log("GET request received at /api/category");
    console.log("Returning all categories:", categories);
    res.status(200).json(categories);

  } else if (req.method === 'POST') {
    // Dump request body when accessing via POST
    const { id, name, slug } = req.body;
    console.log("POST request received at /api/category");
    console.log("Request body:", req.body);

    if (id && name && slug) {
      // Simulate adding to a database (in this case, just to the array)
      const newCategory = { id, name, slug };
      categories.push(newCategory);

      console.log("New category added:", newCategory);
      res.status(201).json({ message: "Category created successfully", category: newCategory });
    } else {
      console.log("Error: Missing fields in request body.");
      res.status(400).json({ message: "Please provide id, name, and slug" });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
