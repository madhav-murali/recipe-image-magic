
export interface Recipe {
  title: string;
  description: string;
  instructions: string[];
  ingredients: string[];
  cookTime: string;
  difficulty: string;
  imageUrl: string;
}

export const mockRecipe: Recipe = {
  title: "Rustic Sourdough Rosemary Bread",
  description: "A fragrant, artisanal sourdough bread infused with fresh rosemary and a touch of sea salt, perfect for serving alongside soups or as the base for gourmet sandwiches.",
  instructions: [
    "Combine the active sourdough starter, water, and flour in a large bowl. Mix until no dry flour remains.",
    "Add chopped rosemary, salt, and olive oil. Mix thoroughly, then cover and let rest for 30 minutes.",
    "Perform a series of stretch and folds every 30 minutes for 2 hours.",
    "Shape the dough into a ball and place in a floured banneton. Cover and refrigerate overnight.",
    "Preheat your oven to 450°F (230°C) with a Dutch oven inside.",
    "Score the dough and carefully transfer it to the preheated Dutch oven.",
    "Bake covered for 30 minutes, then uncovered for 15-20 minutes until golden brown.",
    "Allow to cool completely on a wire rack before slicing."
  ],
  ingredients: [
    "150g active sourdough starter",
    "350g water",
    "500g bread flour",
    "10g salt",
    "2 tbsp fresh rosemary, finely chopped",
    "1 tbsp olive oil",
    "Extra flour for dusting"
  ],
  cookTime: "1 hour (plus proofing)",
  difficulty: "Intermediate",
  imageUrl: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
};
