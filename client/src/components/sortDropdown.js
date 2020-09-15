import React from 'react';
import { Dropdown, Input } from 'semantic-ui-react';

const sortOptions = [
    {
        key: 'Newest to Oldest',
        text: 'Newest to Oldest',
        value: 'Newest to Oldest'
    },
    {
        key: 'Oldest to Newest',
        text: 'Oldest to Newest',
        value: 'Oldest to Newest'
    },
]

const SortDropdown = () => (
    <Dropdown
    placeholder='Sort Dreams'
    selection
    options={sortOptions}
  />
    
)
  
  export default SortDropdown;