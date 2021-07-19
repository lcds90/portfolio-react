import styles from './style.module.css';

type ButtonItemProps = {
  color: string;
  text: string;
};
type colorToApply = {
  [key: string]: string;
};
export const Button = ({ color, text }: ButtonItemProps) => {
  const checkColor = (): string => {
    // NOTE Object Literals
    const Colors: colorToApply = {
      primary: styles.itemPrimary,
      dark: styles.itemDark,
      light: styles.itemLight,
    } || styles.itemPrimary;

    return Colors[color];
  };

  return <button className={`${checkColor()} ${styles.button}`}>{text}</button>;
};
