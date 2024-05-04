import InputBox from '../components/input/input';
import Footer from '../components/Footer/footer';
import CardPlaceholderSkeleton from '../components/CardPlaceholderSkeleton/card-placeholder-skeleton';
import SimpleCard from '../components/Card/simple-card';

const sampleMealData = [
  {
    name: 'Chicken Fried Rice',
    ingredients: [
      '2 cups of cooked rice',
      '1 cup of diced chicken breast',
      '2 eggs',
      '1 cup of mixed vegetables (peas, carrots, corn)',
      '3 tablespoons of soy sauce',
      '1 tablespoon of sesame oil',
      '2 cloves of garlic, minced',
      '2 tablespoons of vegetable oil',
    ],
    steps: [
      'In a large skillet or wok, heat vegetable oil over medium-high heat.',
      'Add diced chicken breast and minced garlic, cooking until chicken is fully cooked.',
      'Push chicken to one side of the skillet and crack eggs into the other side. Scramble the eggs until cooked.',
      'Add mixed vegetables to the skillet and cook until they are tender.',
      'Stir in cooked rice, soy sauce, and sesame oil, mixing everything together.',
      'Continue to cook and stir until everything is well combined and heated through.',
      'Serve hot and enjoy!',
    ],
  },
  {
    name: 'Grilled Chicken and Rice',
    ingredients: [
      '2 chicken breasts',
      '1 cup of uncooked rice',
      '1 tablespoon of olive oil',
      'Salt and pepper to taste',
      'Your choice of seasonings (e.g., paprika, garlic powder, Italian seasoning)',
    ],
    steps: [
      'Preheat grill to medium-high heat.',
      'Season chicken breasts with salt, pepper, and your choice of seasonings.',
      'Brush olive oil on the chicken breasts and place them on the grill. Cook for about 6-7 minutes on each side or until fully cooked.',
      'While the chicken is grilling, cook the rice according to package instructions.',
      'Once the chicken is cooked, slice it and serve over the cooked rice.',
      'Enjoy your delicious grilled chicken and rice!',
    ],
  },
];

function SurprisePage() {
  return (
    <>
      <div className="container">
        <h1 className="flex justify-center">
          Unleash Culinary Adventures, One Surprise at a Time!
        </h1>
        <br />
        <InputBox placeholder={'Type your preference here...'} />
        <CardPlaceholderSkeleton />
        {sampleMealData.map((meal, index) => (
          <SimpleCard
            key={index}
            nameOfMeal={meal.name}
            description="Enjoy this delicious meal prepared using your chosen ingredients."
            ingredients={meal.ingredients}
            steps={meal.steps}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
export default SurprisePage;
