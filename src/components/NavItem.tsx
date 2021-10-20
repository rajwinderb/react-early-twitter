interface NavItemProps {
  label: string;
}

function NavItem(props: NavItemProps): JSX.Element {
  return (
    <>
      <span> -&gt; </span>
      <a href="#">~{props.label}</a>
    </>
  );
}

export default NavItem;
