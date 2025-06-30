
import React, { createContext, useContext, useState } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  genre: string;
  description: string;
}

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredBooks: Book[];
  allBooks: Book[];
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const books: Book[] = [
  {
    id: 1,
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    price: 399,
    originalPrice: 499,
    rating: 4.6,
    reviews: 1234,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop',
    genre: 'Fiction',
    description: 'A captivating novel about a reclusive Hollywood icon who finally decides to tell her story.'
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 450,
    originalPrice: 550,
    rating: 4.8,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    genre: 'Self-Help',
    description: 'The life-changing million copy bestseller on building good habits and breaking bad ones.'
  },
  {
    id: 3,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    price: 350,
    originalPrice: 450,
    rating: 4.4,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
    genre: 'Thriller',
    description: 'A psychological thriller about a woman who refuses to speak after allegedly murdering her husband.'
  },
  {
    id: 4,
    title: 'Educated',
    author: 'Tara Westover',
    price: 425,
    originalPrice: 525,
    rating: 4.7,
    reviews: 743,
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop',
    genre: 'Memoir',
    description: 'A memoir about education, transformation, and the price of learning to think for yourself.'
  },
  {
    id: 5,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 375,
    originalPrice: 475,
    rating: 4.3,
    reviews: 621,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
    genre: 'Fiction',
    description: 'A novel about all the choices that go into a life well lived, from the internationally bestselling author.'
  },
  {
    id: 6,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    price: 550,
    originalPrice: 650,
    rating: 4.5,
    reviews: 987,
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop',
    genre: 'History',
    description: 'A brief history of humankind that explores how we came to dominate the planet.'
  },
  {
    id: 7,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: 325,
    originalPrice: 425,
    rating: 4.6,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=400&fit=crop',
    genre: 'Finance',
    description: 'Timeless lessons on wealth, greed, and happiness from one of the most important financial writers.'
  },
  {
    id: 8,
    title: 'Becoming',
    author: 'Michelle Obama',
    price: 475,
    originalPrice: 575,
    rating: 4.8,
    reviews: 1567,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop',
    genre: 'Biography',
    description: 'An inspiring memoir by the former First Lady of the United States.'
  },
  {
    id: 9,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    price: 299,
    originalPrice: 399,
    rating: 4.4,
    reviews: 2134,
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop',
    genre: 'Fiction',
    description: 'A magical story about following your dreams and listening to your heart.'
  },
  {
    id: 10,
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    price: 425,
    originalPrice: 525,
    rating: 4.5,
    reviews: 834,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
    genre: 'Fiction',
    description: 'A coming-of-age mystery set in the marshlands of North Carolina.'
  },
  {
    id: 11,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 250,
    originalPrice: 350,
    rating: 4.2,
    reviews: 1876,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop',
    genre: 'Classic',
    description: 'The classic American novel of the Jazz Age and the pursuit of the American Dream.'
  },
  {
    id: 12,
    title: 'Born a Crime',
    author: 'Trevor Noah',
    price: 375,
    originalPrice: 475,
    rating: 4.7,
    reviews: 923,
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop',
    genre: 'Biography',
    description: 'Stories from a South African childhood during and after apartheid.'
  }
];

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = searchQuery
    ? books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : books;

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      filteredBooks,
      allBooks: books
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
