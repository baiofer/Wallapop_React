import { useEffect, useState } from 'react';

import './TagSelector.css'
import { getTags } from '../../pages/adverts/service';
import { useAdvert } from '../../pages/adverts/context';

function TagSelector() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [predefinedTags, setPredefinedTags] = useState([])

  const { setTagsSelected } = useAdvert()

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
      setTagsSelected(updatedTags)
    } else  {
      setSelectedTags([...selectedTags, tag]);
      setTagsSelected([...selectedTags, tag])
    }
  };

  return (
    <div className='tagSelector-container'>
      <div className='tagSelector-selections'>
        {predefinedTags.map((tag, index) => (
          <label className='tagSelector-label'>
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

