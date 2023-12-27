/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCookbook} from '../actions/actions';

const CookbookDisplay = (props) => {
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
          {chapterList && chapterList.map((item) => (
            <li key={item._id}>
              <h2>{item.title}</h2>
              {/* {item.url && <img src={getImage(item.url)} alt={`Image for ${item.title}`} />} */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CookbookDisplay;
