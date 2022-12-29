import type { ComponentChildren } from 'preact';

export type Props = {
  class?: string;
  children: ComponentChildren;
}


export default function ThemeButton(props: Props) {
  const classes = ['text-inherit', props.class].join(' ');
  const onClick = () => {
    const classList = document.documentElement.classList;

    localStorage.theme = localStorage.theme === 'light' ? 'dark' : 'light';

    if (localStorage.theme === 'dark') classList.add('dark');
    else classList.remove('dark');
  }

  return (
    <button class={classes} onClick={onClick}>
      { props.children }
    </button>
  );
}
