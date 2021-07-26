import style from './style.module.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Education = () => {
  return (
    <VerticalTimeline className={style.verticalLine}>
      <VerticalTimelineElement
        contentStyle={{ background: 'var(--primary-color-dark)', color: 'white', padding: '20px' }}
        contentArrowStyle={{ borderRight: '7px solid  var(--primary-color)' }}
        date='05/2021 - present'
        className={style.vlEl}
        iconStyle={{ background: 'green', color: '#fff' }}
      >
        <h3 className='vertical-timeline-element-title'>Estudante</h3>
        <h4 className='vertical-timeline-element-subtitle'>Desenvolvimento Web Fullstack</h4>
        <p>
          Trybe - 05/2021 até 05/2022
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={style.vlEl}
        contentStyle={{ background: 'var(--primary-color)', color: 'white', padding: '20px' }}
        contentArrowStyle={{ borderRight: '7px solid  var(--primary-color-dark)' }}
        date='08/2018 - 12/2020'
        iconStyle={{ background: 'var(--primary-color-dark)', color: '#fff' }}
      >
        <h3 className='vertical-timeline-element-title'>Graduado</h3>
        <h4 className='vertical-timeline-element-subtitle'>
          Tecnologia em Sistemas para Internet
        </h4>
        <p>
          UNINOVE - Universidade Nove de Julho
        </p>
      </VerticalTimelineElement>
      
    </VerticalTimeline>
  );
};
