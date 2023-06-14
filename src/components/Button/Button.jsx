import { PureComponent } from 'react';
import './Button.scss';

export default class Button extends PureComponent {
  render() {
    const { onConfirm, children } = this.props;
    return (
      <button
        id="LoadMoreButton"
        type="button"
        className="Button"
        onClick={onConfirm}
      >
        {children}
      </button>
    );
  }
}
