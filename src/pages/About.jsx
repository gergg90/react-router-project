import Link from "../Link.jsx";

const i18n = {
  es: {
    title: "Sobre nosotros",
    description: "Hola mi nombre es Germain",
  },
  en: {
    title: "About this",
    description: "Hi mi name is Germain",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.es;
};

function About({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? "es");

  return (
    <>
      <h1>{i18n.title}</h1>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>

      <p>{i18n.description}</p>

      <img
        src="https://storage.googleapis.com/pod_public/1300/177057.jpg"
        alt="imagencita"
      />
    </>
  );
}

export default About;
