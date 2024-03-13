export const useNavigation = () => {
  const NAVIGATION_EVENT = "pushstate";

  const navigate = (href) => {
    window.history.pushState({}, "", href);
    const navigationEvent = new Event(NAVIGATION_EVENT);
    window.dispatchEvent(navigationEvent);
  };

  return { navigate, NAVIGATION_EVENT };
};
