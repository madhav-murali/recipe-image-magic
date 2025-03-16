
import React, { useState } from 'react';
import Header from '../components/Header';
import PromptInput from '../components/PromptInput';
import ImageCard from '../components/ImageCard';
import RecipeDisplay from '../components/RecipeDisplay';
import Footer from '../components/Footer';
import { mockRecipe } from '../lib/mockData';
import { toast } from 'sonner';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState<typeof mockRecipe | null>(null);
  const [submitCount, setSubmitCount] = useState(0);

  const handlePromptSubmit = async (prompt: string) => {
    setIsLoading(true);
    
    // Simulate API call
    try {
      setTimeout(() => {
        setRecipe(mockRecipe);
        setIsLoading(false);
        setSubmitCount(prev => prev + 1);
        toast.success("Recipe generated successfully!");
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to generate recipe. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-16 md:pb-24">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Transform food ideas into <span className="text-primary">culinary art</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Enter any food description and instantly get a beautiful image and recipe
            </p>
          </div>
          
          <PromptInput onSubmit={handlePromptSubmit} isLoading={isLoading} />
        </section>
        
        {/* Results Section */}
        {(isLoading || recipe) && (
          <section className="container mx-auto px-4 md:px-8">
            {isLoading ? (
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="aspect-square rounded-2xl bg-gray-100 loading-pulse"></div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="h-full rounded-2xl bg-gray-100 loading-pulse"></div>
                  </div>
                </div>
              </div>
            ) : recipe ? (
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <ImageCard 
                      imageUrl={recipe.imageUrl} 
                      title={recipe.title} 
                      key={`image-${submitCount}`}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <RecipeDisplay 
                      title={recipe.title}
                      description={recipe.description}
                      instructions={recipe.instructions}
                      ingredients={recipe.ingredients}
                      cookTime={recipe.cookTime}
                      difficulty={recipe.difficulty}
                      key={`recipe-${submitCount}`}
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </section>
        )}
        
        {/* Features Section */}
        {!recipe && !isLoading && (
          <section className="container mx-auto px-4 md:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our AI-powered platform turns your food descriptions into visually appealing images and detailed recipes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl neo-morphism">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  1
                </div>
                <h3 className="text-xl font-medium mb-2">Enter Your Idea</h3>
                <p className="text-muted-foreground">
                  Describe any dish or ingredient you're curious about
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-2xl neo-morphism">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  2
                </div>
                <h3 className="text-xl font-medium mb-2">AI Generation</h3>
                <p className="text-muted-foreground">
                  Our AI creates a stunning image and detailed recipe
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-2xl neo-morphism">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  3
                </div>
                <h3 className="text-xl font-medium mb-2">Enjoy & Share</h3>
                <p className="text-muted-foreground">
                  Download your creation and share it with others
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
