
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <Box display="flex" alignItems="center" marginBottom="16px">
      <TextField
        label="Search Movies"
        variant="outlined"
        value={query}
        onChange={handleInputChange}
        style={{ flexGrow: 1, marginRight: '8px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearchClick}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
