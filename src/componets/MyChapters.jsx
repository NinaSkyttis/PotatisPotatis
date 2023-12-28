/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCookbook} from '../actions/actions';

const MyChapters = (props) => {
  const dispatch = useDispatch();
  const {chapterList, error} = useSelector((state) => state.potatis);

  useEffect(() => {
    dispatch(fetchCookbook());
  }, [dispatch]);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {chapterList &&
              chapterList.map((item) => (
                <li key={item._id}>
                  <h2>{item.title}</h2>
                </li>
              ))}

        </ul>
      )}
    </div>
  );
};

export default MyChapters;
