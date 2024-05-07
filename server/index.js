import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
const app = express();
app.use(express.json());
const openai = new OpenAI({
  apiKey: '',
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from our server!');
});

app.listen(8080, () => {
  console.log('server listening on port 8080');
});

let categories = [
  'biryani',
  'burger',
  'dessert',
  'dosa',
  'idly',
  'pasta',
  'pizza',
  'rice',
  'samosa',
];

// Define a route handler for GET requests to the '/food-image' path
app.get('/food-image', async (req, res) => {
  try {
    // Select a category from the front of the queue
    const category = categories.shift();
    // Add the category back to the end of the queue
    categories.push(category);

    const response = await fetch(
      `https://foodish-api.com/api/images/${category}/`
    );
    // Parse the response as JSON
    const data = await response.json();
    // Send the data back to the client(frontend)
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching image from Foodish API' });
  }
});

app.get('/generate-food', async (req, res) => {
  // Ensure there are ingredients provided in the query string
  if (!req.query.ingredients) {
    return res.status(400).json({ error: 'No ingredients provided' });
  }
  // Convert ingredients query string into an array (assuming ingredients are comma-separated)
  const ingredients = req.query.ingredients.split(',');

  // Create a natural language prompt from the ingredients
  const prompt = `Given the ingredients: ${ingredients.join(
    ', '
  )}, suggest a few meals and provide detailed steps for cooking each meal.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant  designed to output JSON.',
        },
        { role: 'user', content: prompt },
      ],
    });
    // Extract the relevant data from the completion
    const meals = JSON.parse(completion.choices[0].message.content).meals;
    // send only relevant data
    res.json(meals);
    console.log(completion);
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    res.status(500).json({ error: 'Failed to generate meals' });
  }
});

app.post('/surprise-me', async (req, res) => {
  // Ensure there are cuisine and dietary requirements provided in the query string
  console.log(req.body.cuisine);
  console.log(req.body.diet);
  if (!req.body.cuisine || !req.body.diet) {
    return res
      .status(400)
      .json({ error: 'No cuisine or dietary requirements provided' });
  }

  // Get the cuisine and dietary requirements from the body
  const cuisine = req.body.cuisine;
  const diet = req.body.diet;

  // Create a natural language prompt for the OpenAI API
  const prompt = `Given that the user prefers ${cuisine} cuisine and follows a ${diet} diet, suggest three novel and unexpected recipes that they may not have considered on their own, and provide detailed steps for cooking each meal.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant  designed to output JSON.',
        },
        { role: 'user', content: prompt },
      ],
    });

    // Extract the relevant data from the completion
    const surpriseRecipes = JSON.parse(
      completion.choices[0].message.content
    ).recipes;

    console.log(surpriseRecipes);

    // Send the surprise recipes back to the client
    res.json(surpriseRecipes);
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    res.status(500).json({ error: 'Failed to generate surprise recipes' });
  }
});
