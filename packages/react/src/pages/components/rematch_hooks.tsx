import React from 'react';
import { useSelector, useDispatch, RootState } from 'mdf';

/**
 * @file rematch 使用 hooks
 */

export default function Title() {
  const titleState = useSelector((state: RootState) => state.rematch_title);

  React.useEffect(() => {
    console.log('title');
  }, []);

  return (
    <div>
      <h3>{titleState.name}</h3>
    </div>
  );
}
