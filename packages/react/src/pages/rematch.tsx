import React from 'react';
import { plugin, PluginType, connect, ConnectedProps, RootState } from 'mdf';
import Title from './components/rematch_hooks';
import './normal.scss';

/**
 * @file rematch page
 * @path /rematch
 */

const mapStateToProps = ({ rematch_model }: RootState) => rematch_model;

type Props = ReturnType<typeof mapStateToProps> & ConnectedProps;

class RematchView extends React.Component<Props> {
  componentDidMount() {
    plugin.invoke({ key: 'mdfInfo', type: PluginType.event });
  }

  handleClick = () => {
    const { dispatch } = this.props;
    dispatch.rematch_model.setPlayers([1, 2, 3]);
  };

  render() {
    const { players } = this.props;

    return (
      <div>
        <Title />
        <button onClick={this.handleClick}>duang</button>
        {players.map((num: any) => (
          <p key={num}>{num}</p>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(RematchView);
