import React, { useEffect } from 'react';
import './news.css';
import { NewsData } from '../../types';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

interface NewsProps {
  title: string;
  news: NewsData[];
  error: string;
}

export const News = ({ news, title, error }: NewsProps) => {
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error]);

  if (!news || news.length === 0) {
    return error ? <h1>{error}</h1> : null;
  }

  return (
    <div>
      <ToastContainer />
      <h2>{`${title}:`}</h2>
      <ul className='news-list'>
        {news.map(({ objectID, url, title, points, num_comments, created_at, author }) => (
          <li key={objectID} className='news'>
            <div className='description'>
              <a href={url} className='news-title'>{title || 'No title'}</a>
              <span className='text'>{`${points || 0} points`}</span>
              <span className='comments'>{`${num_comments || 0} comments`}</span>
              <span className='date'>{new Date(created_at).toLocaleDateString()}</span>
              <span className='author'>{author || 'no author'}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
