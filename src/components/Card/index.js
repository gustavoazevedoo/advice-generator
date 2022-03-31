import { useEffect, useState } from 'react';

import AdvicesService from '../../services/AdvicesService';

import styles from './styles.module.scss';
import dice from '../../assets/images/icon-dice.svg';
import divider from '../../assets/images/divider.svg';

export default function Card() {
  const [advice, setAdvice] = useState('');

  async function getRandomAdvice() {
    const adviceSlip = await AdvicesService.getAdviceSlip();

    setAdvice(adviceSlip);
  }

  useEffect(() => {
    getRandomAdvice();
  }, []);

  return (
    <div className={styles.cardConainer}>
      <header>
        advice #
        {String(advice.id).padStart(3, '0')}
      </header>
      <h1>
        “
        {advice.advice}
        ”
      </h1>
      <div className={styles.divider}>
        <img src={divider} alt="divider" />
      </div>
      <button
        type="button"
        onClick={() => getRandomAdvice()}
      >
        <img src={dice} alt="dice" />
      </button>
    </div>
  );
}
