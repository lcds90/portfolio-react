import style from './style.module.css';

import svg_wpp from '@svg/whatsapp.svg';
import svg_gmail from '@svg/gmail.svg';
import svg_github from '@svg/github.svg';
import svg_in from '@svg/linkedin.svg';

export const Contact = () => {
  type contactType = {
    link: string;
    svg: any;
  };

  const formOfContacts: contactType[] = [
    {
      link: 'https://web.whatsapp.com/send?phone=+5511949040112',
      svg: svg_wpp,
    },
    {
      link: 'mailto:lcds90@gmail.com',
      svg: svg_gmail,
    },
    {
      link: 'https://www.linkedin.com/in/lcds90/',
      svg: svg_in,
    },
    {
      link: 'https://github.com/lcds90',
      svg: svg_github,
    },
  ];

  const generateContact = (contact: contactType, index: number) => {
    return (
      <a key={index} className={style.contact} target='_blank' href={contact.link}>
        <img src={contact.svg.src} alt="" />
      </a>
    );
  };

  return (
    <section className={style.contactContainer}>
      {formOfContacts.map((c, i) => generateContact(c, i))}
    </section>
  );
};
