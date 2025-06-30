
import React from 'react';
import { Card } from '@/components/ui/card';
import { BookOpen, GraduationCap, Heart, Baby, Globe, Users } from 'lucide-react';

const categories = [
  {
    name: 'Fiction',
    icon: BookOpen,
    description: 'Novels, short stories & classics',
    color: 'bg-blue-50 hover:bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    name: 'Academic',
    icon: GraduationCap,
    description: 'Textbooks & educational',
    color: 'bg-green-50 hover:bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    name: 'Romance',
    icon: Heart,
    description: 'Love stories & relationships',
    color: 'bg-pink-50 hover:bg-pink-100',
    iconColor: 'text-pink-600'
  },
  {
    name: 'Children',
    icon: Baby,
    description: 'Kids books & picture books',
    color: 'bg-yellow-50 hover:bg-yellow-100',
    iconColor: 'text-yellow-600'
  },
  {
    name: 'Travel',
    icon: Globe,
    description: 'Travel guides & memoirs',
    color: 'bg-purple-50 hover:bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    name: 'Biography',
    icon: Users,
    description: 'Life stories & memoirs',
    color: 'bg-gray-50 hover:bg-gray-100',
    iconColor: 'text-gray-600'
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Browse by Genre</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our vast collection spanning fiction, non-fiction, academics, and more
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name}
                className={`p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${category.color}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className={`p-3 rounded-full bg-white shadow-sm mb-4`}>
                    <IconComponent className={`h-6 w-6 ${category.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
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
