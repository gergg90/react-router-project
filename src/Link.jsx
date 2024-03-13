import { useNavigation } from "./hooks/useNavigation.js";

function Link({ target, to, ...props }) {
  const { navigate } = useNavigation();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}

export default Link;
