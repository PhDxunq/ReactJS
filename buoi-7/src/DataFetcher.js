import React from 'react';

const DataFetcher = ({ render }) => {
  const data = ['Learn ReactJS', 'Practice ReactJS', 'Learn Redux', 'Code in ReactJS', 'Learn ReactJS Native'];
  
  return render(data);
};

export default DataFetcher;
