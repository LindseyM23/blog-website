// BlogData.js
import React from "react";
import Femininity from "../pages/Femininity";

const blogData = {
  music: [
    {
      id: 1,
      date: '2024-01-01',
      author: 'Author One',
      heading: 'The Evolution of Music',
      category: 'Music',
      shortDescription: 'A brief history of music from classical to modern.',
      content: 'Detailed content about the evolution of music...',
      comments: [],
    },
    {
      id: 2,
      date: '2024-01-02',
      author: 'Author Two',
      heading: 'Top 10 Songs of 2024',
      category: 'Music',
      shortDescription: 'A rundown of the top songs of the year.',
      content: 'Detailed content about the top songs of 2024...',
      comments: [],
    },
    {
      id: 3,
      date: '2024-01-03',
      author: 'Author Three',
      heading: 'The Impact of Music on Culture',
      category: 'Music',
      shortDescription: 'How music influences cultural trends.',
      content: 'Detailed content about the impact of music...',
      comments: [],
    },
    {
      id: 4,
      date: '2024-01-04',
      author: 'Author Four',
      heading: 'Music and Mental Health',
      category: 'Music',
      shortDescription: 'Exploring the relationship between music and mental well-being.',
      content: 'Detailed content about music and mental health...',
      comments: [],
    },
  ],

  food: [
    {
      id: 1,
      date: '2024-01-05',
      author: 'Author Five',
      heading: 'Healthy Eating Habits',
      category: 'Food',
      shortDescription: 'Tips for maintaining a healthy diet.',
      content: 'Detailed content about healthy eating...',
      comments: [],
    },
    {
      id: 2,
      date: '2024-01-06',
      author: 'Author Six',
      heading: 'Top 5 Recipes for 2024',
      category: 'Food',
      shortDescription: 'A collection of must-try recipes this year.',
      content: 'Detailed content about the top recipes...',
      comments: [],
    },
    {
      id: 3,
      date: '2024-01-07',
      author: 'Author Seven',
      heading: 'Food Trends to Watch',
      category: 'Food',
      shortDescription: 'The latest trends in the culinary world.',
      content: 'Detailed content about food trends...',
      comments: [],
    },
    {
      id: 4,
      date: '2024-01-08',
      author: 'Author Eight',
      heading: 'The Importance of Local Ingredients',
      category: 'Food',
      shortDescription: 'Why you should choose local produce.',
      content: 'Detailed content about local ingredients...',
      comments: [],
    },
  ],

  tech: [
    {
      id: 1,
      date: '2024-01-09',
      author: 'Author Nine',
      heading: 'The Future of AI',
      category: 'Tech',
      shortDescription: 'Exploring the advancements in artificial intelligence.',
      content: 'Detailed content about the future of AI...',
      comments: [],
    },
    {
      id: 2,
      date: '2024-01-10',
      author: 'Author Ten',
      heading: 'Tech Gadgets You Need',
      category: 'Tech',
      shortDescription: 'The must-have gadgets for tech enthusiasts.',
      content: 'Detailed content about tech gadgets...',
      comments: [],
    },
    {
      id: 3,
      date: '2024-01-11',
      author: 'Author Eleven',
      heading: 'Cybersecurity in 2024',
      category: 'Tech',
      shortDescription: 'How to stay safe online.',
      content: 'Detailed content about cybersecurity...',
      comments: [],
    },
    {
      id: 4,
      date: '2024-01-12',
      author: 'Author Twelve',
      heading: 'Sustainable Tech Innovations',
      category: 'Tech',
      shortDescription: 'Innovative tech solutions for a sustainable future.',
      content: 'Detailed content about sustainable tech...',
      comments: [],
    },
  ],

  femininity: [
    {
      id: 1,
      date: '2024-01-13',
      author: 'Author Thirteen',
      heading: 'Empowering Female Voices',
      category: 'Feminine Reading',
      shortDescription: 'Highlighting books by women for women.',
      content: 'Detailed content about empowering female authors...',
      comments: [],
    },
    {
      id: 2,
      date: '2024-01-14',
      author: 'Author Fourteen',
      heading: 'Top 5 Feminist Reads',
      category: 'Feminine Reading',
      shortDescription: 'Essential reading for the feminist in you.',
      content: 'Detailed content about feminist literature...',
      comments: [],
    },
    {
      id: 3,
      date: '2024-01-15',
      author: 'Author Fifteen',
      heading: 'The Evolution of Feminist Literature',
      category: 'Feminine Reading',
      shortDescription: 'How feminist literature has changed over the years.',
      content: 'Detailed content about feminist literature evolution...',
      comments: [],
    },
    {
      id: 4,
      date: '2024-01-16',
      author: 'Author Sixteen',
      heading: 'Women in Literature',
      category: 'Feminine Reading',
      shortDescription: 'Celebrating women writers and their impact.',
      content: 'Detailed content about women in literature...',
      comments: [],
    },
  ],
};

// The BlogData component returns the blog data as an object.
const BlogData = () => {
  return blogData;
};

export default BlogData;
