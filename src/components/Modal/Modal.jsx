import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.getElementById('modal-root');
export default class Modal extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.onButtonClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onButtonClose);
  }

  onBackgroundClose = evt => {
    if (evt.target !== evt.currentTarget) {
      return;
    }
    this.props.onClose();
  };
  onButtonClose = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className="Overlay" onClick={this.onBackgroundClose}>
        <div className="Modal">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
