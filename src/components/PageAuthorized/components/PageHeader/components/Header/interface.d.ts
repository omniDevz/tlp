export interface HeaderProps {
  isMenuIcon: boolean;
  title: string;
  onClick: function();
  type: 'icon' | 'back' | 'exit';
  text?: string;
}
