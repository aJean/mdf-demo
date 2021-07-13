import React, { useEffect } from 'react';
import { Link, connect, ConnectProps } from 'mdf';
import styles from './home.scss?module';
import './normal.scss';

/**
 * @file user home page
 * @path /
 */

const mapStateToProps = ({ pay }: any) => pay;

type Props = ReturnType<typeof mapStateToProps> & ConnectProps;

const Home = function (props: Props) {
  const { name, beauty, dispatch } = props;

  const changeBeautyHandle = () => {
    dispatch({ type: 'pay/addBeauty' });
  };

  return (
    <div className={styles.home}>
      <h2>mdf-node 混合项目</h2>
      <div>
        <button className={styles.link} onClick={changeBeautyHandle}>
          测试 server --- {name}-model: {beauty}
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Home);