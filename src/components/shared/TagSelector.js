import { useEffect, useState } from 'react';

import './TagSelector.css'
import { getTags } from '../../pages/adverts/service';

function TagSelector() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [predefinedTags, setPredefinedTags] = useState([])

  useEffect(() => {
    const fetchTags = async () => {
      const tags = await getTags()
      setPredefinedTags(tags)
    }
    fetchTags()
}, [])

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      const updatedTags = selectedTags.filter((selectedTag) => selectedTag !== tag);
      setSelectedTags(updatedTags);
    } else  {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className='tagSelector-container'>
      <div className='tagSelector-selections'>
        {predefinedTags.map((tag, index) => (
          <label className='tagSelector-label'>
            { console.log(tag, index) }
            <input
              type='checkbox'
              key={index}
              placeholder={tag}
              value={tag}
              className={selectedTags.includes(tag) ? 'tag selected' : 'tag'}
              onClick={() => handleTagClick(tag)}
            />{tag}
          </label>
        ))}
      </div>
      {
        selectedTags.length > 0 ?
          <p className='tagSelector-selected'>
            Selección: {selectedTags.join(', ')}
          </p>
        : ""
      }
    </div>
  );
}

export default TagSelector;

