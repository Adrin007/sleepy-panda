import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';

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
        sx={{ width:{sm:"30rem",xs:"20rem"}, height:{sm:"20rem",xs:"14rem"},borderRadius:"15px"}}
        variant="quilted"
        cols={4}
        rowHeight={121}
        className='quilted'
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img className='inner'
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
    img: 'https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3IlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    title: 'Burger',
    rows: 1,
    cols: 2,
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGhvdGVsJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    title: 'Camera',
    rows: 1,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGhvdGVsJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    title: 'Hats',
    rows:3,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1602773756015-2ddf281a24f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGhvdGVsJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    title: 'Honey',
    author: '@arwinneil',
    rows: 3,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGhvdGVsJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    title: 'Basketball',
    rows: 1,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1630587148265-761cbd139043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxob3RlbCUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    title: 'Mushrooms',
    rows: 3,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1576698483491-8c43f0862543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxob3RlbCUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    title: 'Tomato basil',
    rows:2,
    cols:2,
  },
  {
    img: 'https://images.unsplash.com/photo-1631049035115-f96132761a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxob3RlbCUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    title: 'Sea star',
    rows:1,
    cols:2,
  }
];
