
import React from 'react';
import { Card } from '@/components/ui/card';
import { BookOpen, GraduationCap, Heart, Baby, Globe, Users } from 'lucide-react';

const categories = [
  {
    name: 'Fiction',
    icon: BookOpen,
    description: 'Novels, classics & literature',
    color: 'bg-parchment-100 hover:bg-parchment-200',
    iconColor: 'text-leather-600',
    borderColor: 'border-leather-300'
  },
  {
    name: 'Academic',
    icon: GraduationCap,
    description: 'Textbooks & scholarly works',
    color: 'bg-leather-50 hover:bg-leather-100',
    iconColor: 'text-leather-700',
    borderColor: 'border-leather-400'
  },
  {
    name: 'Romance',
    icon: Heart,
    description: 'Love stories & relationships',
    color: 'bg-parchment-200 hover:bg-parchment-300',
    iconColor: 'text-leather-500',
    borderColor: 'border-leather-300'
  },
  {
    name: 'Children',
    icon: Baby,
    description: 'Kids books & picture stories',
    color: 'bg-parchment-100 hover:bg-parchment-200',
    iconColor: 'text-leather-600',
    borderColor: 'border-leather-300'
  },
  {
    name: 'Travel',
    icon: Globe,
    description: 'Travel guides & memoirs',
    color: 'bg-leather-100 hover:bg-leather-200',
    iconColor: 'text-leather-700',
    borderColor: 'border-leather-400'
  },
  {
    name: 'Biography',
    icon: Users,
    description: 'Life stories & memoirs',
    color: 'bg-parchment-200 hover:bg-parchment-300',
    iconColor: 'text-leather-600',
    borderColor: 'border-leather-300'
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 vintage-paper">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-leather-800 mb-4">Literary Collections</h2>
          <p className="text-leather-600 max-w-2xl mx-auto font-serif text-lg">
            Explore our carefully curated selection of books spanning diverse genres and timeless wisdom
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name}
                className={`p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 animate-fade-in aged-border ${category.color} ${category.borderColor}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className={`p-4 rounded-full bg-parchment-50 shadow-md mb-4 border-2 ${category.borderColor}`}>
                    <IconComponent className={`h-6 w-6 ${category.iconColor}`} />
                  </div>
                  <h3 className="font-display font-semibold text-leather-800 mb-2">{category.name}</h3>
                  <p className="text-sm text-leather-600 font-serif">{category.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
