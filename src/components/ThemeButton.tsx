import type { ComponentChildren } from 'preact';

export type Props = {
  class?: string;
  children: ComponentChildren;
}


export default function ThemeButton(props: Props) {
  const classes = ['text-inherit', props.class].join(' ');
  const onClick = () => {
    const theme = localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
    const isDark = theme === 'dark';

    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', isDark);

    if ('giscusSend' in window) {
      const giscusTheme = isDark ? 'transparent_dark' : 'light';
      // @ts-ignore
      window.giscusSend({ setConfig: { theme: giscusTheme } });
    }
  }

  return (
    <button class={classes} onClick={onClick}>
      { props.children }
    </button>
  );
}
