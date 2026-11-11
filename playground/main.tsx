import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { CatalogPage } from "./CatalogPage";
import logo from "./assets/sugar-logo.png";
import { blocks, upstream, type Group } from "./catalog";
import "@fontsource-variable/inter";
import "../tokens.css";
import "./playground.css";

const DetailPage = lazy(() => import("./DetailPage"));
const SoundsPage = lazy(() => import("./SoundsPage"));
const readRoute = () => window.location.hash.slice(1) || "/";

function readFavorites(): string[] {
  try {
    const stored: unknown = JSON.parse(localStorage.getItem("sv-favorites") ?? "[]");
    return Array.isArray(stored) ? stored.filter(id => blocks.some(block => block.id === id)) : [];
  } catch {
    return [];
  }
}

function App() {
  const [route, setRoute] = useState(readRoute);
  const [favorites, setFavorites] = useState(readFavorites);
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<Group>("全部");
  const previous = useRef(route);
  const listScroll = useRef(0);
  const block = blocks.find(item => route === "/component/" + item.id);
  const isSounds = route === "/sounds";
  const isFavorites = route === "/favorites";
  const isCatalog = route === "/" || isFavorites;

  useEffect(() => {
    const onRoute = () => setRoute(readRoute());
    window.addEventListener("hashchange", onRoute);
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    return () => window.removeEventListener("hashchange", onRoute);
  }, []);

  useLayoutEffect(() => {
    const backToGrid = isCatalog && previous.current.startsWith("/component/");
    window.scrollTo(0, backToGrid ? listScroll.current : 0);
    previous.current = route;
    document.title = block ? block.name + " · SugarV" : isSounds ? "界面音效 · SugarV" : isFavorites ? "收藏 · SugarV" : "SugarV 组件库";
  }, [route, block, isSounds, isFavorites, isCatalog]);

  useEffect(() => {
    try { localStorage.setItem("sv-favorites", JSON.stringify(favorites)); } catch { /* storage can be unavailable */ }
  }, [favorites]);

  function toggleFavorite(id: string) {
    setFavorites(saved => saved.includes(id) ? saved.filter(value => value !== id) : [...saved, id]);
  }

  function resetSearch() {
    setQuery("");
    setGroup("全部");
    listScroll.current = 0;
    window.scrollTo(0, 0);
  }

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#/" aria-label="SugarV 首页" onClick={resetSearch}><img className="brand-mark" src={logo} alt="" /><span>SugarV</span></a>
          <nav className="site-nav" aria-label="主导航">
            <a href="#/" aria-current={route === "/" || block ? "page" : undefined} onClick={resetSearch}>组件库</a>
            <a href="#/sounds" aria-current={isSounds ? "page" : undefined} onClick={resetSearch}>音效</a>
            <a href="#/favorites" aria-current={isFavorites ? "page" : undefined} onClick={resetSearch}>收藏</a>
          </nav>
          <a className="button header-github" href={upstream} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
        </div>
      </header>

      <Suspense fallback={<main className="container route-loading"><LoaderCircle className="spinner" size={25} aria-label="加载页面" /></main>}>
        {isCatalog ? (
          <CatalogPage favoritesOnly={isFavorites} favorites={favorites} toggleFavorite={toggleFavorite} query={query} setQuery={setQuery} group={group} setGroup={setGroup} rememberScroll={() => { listScroll.current = window.scrollY; }} />
        ) : isSounds ? <SoundsPage /> : block ? (
          <DetailPage key={block.id} block={block} saved={favorites.includes(block.id)} toggleFavorite={() => toggleFavorite(block.id)} />
        ) : (
          <main className="container empty-state"><h1>找不到这个组件</h1><a className="button" href="#/">返回组件库</a></main>
        )}
      </Suspense>

      <footer className="site-footer container">
        <span>SugarV</span>
        <span>组件与音效来自 <a href={upstream} target="_blank" rel="noreferrer">Bencho</a> · Lorenzo Cabra · <a href={upstream + "/blob/main/LICENSE"} target="_blank" rel="noreferrer">MIT License</a></span>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
