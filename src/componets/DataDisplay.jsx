/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../actions/actions';

const DataDisplay = (props) => {
  const dispatch = useDispatch();
  const {data, error} = useSelector((state) => state.potatis);
  //   console.log('by this point all is good: ', state.potatis);

  const [imageUrls, setImageUrls] = useState([]);


  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const getImage = (url) => {
    const imgTags = document.getElementsByTagName('img');
    return imgTags[0];
  }
  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data && data.map((item) => (
            <li key={item._id}>
              <p>{item.title}</p>
              {item.url && <img src={getImage(item.url)} alt={`Image for ${item.title}`} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataDisplay;
