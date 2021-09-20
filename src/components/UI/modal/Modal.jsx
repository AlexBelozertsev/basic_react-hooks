import React from 'react';
import style from './Modal.module.css';

const Modal = ({ children, visible, setVisible }) => {
    const rootClasses = [style.Modal__backdrop]

    if (visible) {
        rootClasses.push(style.active);
    }
    return ( 
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)} >
            <div className={style.Modal__content} onClick={(e) => e.stopPropagation()} >
                {children}
            </div>
        </div>
    );
}
 
export default Modal;