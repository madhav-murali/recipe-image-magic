
import React from 'react';
import { Clock, Award, ChefHat } from 'lucide-react';

interface RecipeDisplayProps {
  title: string;
  description: string;
  instructions: string[];
  ingredients: string[];
  cookTime: string;
  difficulty: string;
}

const RecipeDisplay: React.FC<RecipeDisplayProps> = ({
  title,
  description,
  instructions,
  ingredients,
  cookTime,
  difficulty,
}) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-subtle p-6 md:p-8 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">{title}</h2>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{cookTime}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Award className="h-4 w-4" />
          <span>{difficulty}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ChefHat className="h-4 w-4" />
          <span>AI Generated</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Ingredients</h3>
          <ul className="space-y-2">
            {ingredients.map((ingredient, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2"></span>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Instructions</h3>
          <ol className="space-y-4">
            {instructions.map((instruction, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-sm font-medium">
                  {idx + 1}
                </span>
                <span className="flex-1">{instruction}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDisplay;
