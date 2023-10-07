import { Component } from 'react';
import css from './Counter.module.css';

export class Counter extends Component {
  state = {
    total: 1,
  };

  subNumber = () => {
   
    this.setState(prev => {
        if (prev.total === 1) {
            return;
          }
      return { total: prev.total - 1 };
    });
  };

  addNumber = () => {
    this.setState(prev => ({ total: prev.total + 1 }));
  };

  render() {
    return (
      <div className={css.counterSection}>
        <button className={css.btnLeft} onClick={this.subNumber}>
          -
        </button>
        <p className={css.counter}>{this.state.total}</p>
        <button className={css.btnRight} onClick={this.addNumber}>
          +
        </button>
      </div>
    );
  }
}

// Клас з методами динамічно змінює розмітку (рендерить). Варіант з return

/*export class Counter extends Component {
  state = {
    total: 0,
  };

  subNumber = () => {
    this.setState(prev => {
      return { total: prev.total - 1 };
    });
  };

  addNumber = () => {
    this.setState(prev => {
      return { total: prev.total + 1 };
    });
  };

  render() {
    return (
      <div className={css.counterSection}>
        <button className={css.btnLeft} onClick={this.subNumber}>
          -
        </button>
        <p className={css.counter}>{this.state.total}</p>
        <button className={css.btnRight} onClick={this.addNumber}>
          +
        </button>
      </div>
    );
  }
}*/

//Функція не рендерить розмітку
/*
let total = 0;
export const Counter = () => {
  function getNumber(event) {r
    console.log((total += 1));
  }
  return (
    <div className={css.counterSection}>
      <button className={css.btnLeft} onClick={getNumber}>
        -
      </button>
      <p className={css.counter}>{total}</p>
      <button className={css.btnRight} onClick={getNumber}>
        +
      </button>
    </div>
  );
};
*/
