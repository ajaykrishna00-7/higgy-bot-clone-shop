
import React from 'react';
import { Card } from '@/components/ui/card';
import { Pill, Heart, Baby, Sparkles, Activity, Stethoscope } from 'lucide-react';

const categories = [
  {
    name: 'Medicines',
    icon: Pill,
    description: 'Prescription & OTC drugs',
    color: 'bg-blue-50 hover:bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    name: 'Health Care',
    icon: Stethoscope,
    description: 'Medical devices & equipment',
    color: 'bg-green-50 hover:bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    name: 'Personal Care',
    icon: Sparkles,
    description: 'Skincare & hygiene products',
    color: 'bg-purple-50 hover:bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    name: 'Baby Care',
    icon: Baby,
    description: 'Baby food, diapers & more',
    color: 'bg-pink-50 hover:bg-pink-100',
    iconColor: 'text-pink-600'
  },
  {
    name: 'Wellness',
    icon: Activity,
    description: 'Fitness & nutrition',
    color: 'bg-orange-50 hover:bg-orange-100',
    iconColor: 'text-orange-600'
  },
  {
    name: 'Women Care',
    icon: Heart,
    description: 'Feminine hygiene & health',
    color: 'bg-red-50 hover:bg-red-100',
    iconColor: 'text-red-600'
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of healthcare products, medicines, and wellness solutions
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
