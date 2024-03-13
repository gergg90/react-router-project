import { EVENTS } from "../consts";

export const useNavigation = () => {
  const navigate = (href) => {
    window.history.pushState({}, "", href);
    const navigationEvent = new Event(EVENTS.PUSHSTATE);
    window.dispatchEvent(navigationEvent);
  };

  return { navigate };
};
