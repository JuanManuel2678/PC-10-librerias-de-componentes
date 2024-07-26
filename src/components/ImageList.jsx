import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 600, height: 630 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem  key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
             sx={{borderRadius: '20px'}}
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'image-product-1.jpg',
    title: 'Breakfast',
    rows: 4,
    cols: 4,
    
  },
  {
    img: 'image-product-2.jpg',
    title: 'Burger',
  },
  {
    img: 'image-product-3.jpg',
    title: 'Camera',
  },
  {
    img: 'image-product-4.jpg',
    title: 'Coffee',
  },
  {
    img: 'image-product-1.jpg',
    title: 'Coffee',
  }
];
