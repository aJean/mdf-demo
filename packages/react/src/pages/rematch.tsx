import React from 'react';
import { plugin, PluginType, connect, ConnectedProps, RootState } from 'mdf';
import './normal.scss';

/**
 * @file rematch page
 * @path /rematch
 */

const mapStateToProps = ({ rematch_model }: RootState) => rematch_model;

type Props = ReturnType<typeof mapStateToProps> & ConnectedProps;

class RematchView extends React.Component<Props> {
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch.rematch_model.setPlayers([1, 2, 3]);
  }

  render() {
    const { players } = this.props;

    return (
      <div>
        <h2>rematch 就是玩</h2>
        <button onClick={this.handleClick}>duang</button>
        { players.map((num: any) => <p key={num}>{num}</p>) }
      </div>
    );
  }
};

export default connect(mapStateToProps)(RematchView);
