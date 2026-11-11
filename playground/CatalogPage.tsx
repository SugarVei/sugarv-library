import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Bookmark, Search, X } from "lucide-react";
import { blockUrl, blocks, groups, upstream, type Group } from "./catalog";
import { Preview } from "./Preview";
import heroArt from "./assets/hero.webp";

type CatalogProps = {
  favoritesOnly: boolean;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  query: string;
  setQuery: (query: string) => void;
  group: Group;
  setGroup: (group: Group) => void;
  rememberScroll: () => void;
};

export function CatalogPage({ favoritesOnly, favorites, toggleFavorite, query, setQuery, group, setGroup, rememberScroll }: CatalogProps) {
  const search = useRef<HTMLInputElement>(null);
  const catalog = useRef<HTMLElement>(null);
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const shown = blocks.filter(block => {
    if (favoritesOnly && !favorites.includes(block.id)) return false;
    if (group !== "全部" && group !== block.group) return false;
    const searchable = [block.name, block.id, block.label, block.group, block.description].join(" ").toLowerCase();
    return terms.every(term => searchable.includes(term));
  });

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable]")) return;
      if (event.key === "/" || event.key.toLowerCase() === "k" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        search.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="container catalog-page">
      {!favoritesOnly && (
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-art"><img src={heroArt} alt="" fetchPriority="high" /></div>
          <div className="hero-copy">
            <h1 id="hero-title">SugarV 组件库</h1>
            <p>浏览、试玩并复用 React 交互组件。</p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => catalog.current?.scrollIntoView({ behavior: "smooth" })}>
                浏览组件 <ArrowDown size={19} />
              </button>
              <a className="button hero-link" href={upstream} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="catalog" id="catalog" ref={catalog} aria-labelledby="catalog-title">
        <div className="catalog-heading">
          <div className="heading-count">
            {favoritesOnly ? <h1 id="catalog-title">收藏组件</h1> : <h2 id="catalog-title">全部组件</h2>}
            <span aria-live="polite" aria-label={shown.length + " 个组件"}>{shown.length}</span>
          </div>
          <label className="search">
            <Search size={19} />
            <input ref={search} type="search" placeholder="搜索组件..." aria-label="搜索组件" value={query} onChange={event => setQuery(event.target.value)} />
            {query ? (
              <button className="icon-button clear-search" aria-label="清空搜索" onClick={() => { setQuery(""); search.current?.focus(); }}><X size={16} /></button>
            ) : <kbd aria-hidden="true">/</kbd>}
          </label>
        </div>
        <div className="filters" role="group" aria-label="按交互方式筛选">
          {groups.map(option => (
            <button className="filter" key={option} aria-pressed={group === option} onClick={() => setGroup(option)}>{option}</button>
          ))}
        </div>

        {shown.length > 0 ? (
          <div className="catalog-grid">
            {shown.map(block => {
              const saved = favorites.includes(block.id);
              return (
                <article className="component-card" key={block.id}>
                  <Preview block={block} />
                  <div className="card-meta">
                    <div className="card-text">
                      <h3><a href={blockUrl(block.id)} onClick={rememberScroll}>{block.name}</a></h3>
                      <p title={block.description}>{block.description}</p>
                    </div>
                    <button className="icon-button bookmark" aria-label={"收藏 " + block.name} aria-pressed={saved} title={saved ? "取消收藏" : "收藏"} onClick={() => toggleFavorite(block.id)}>
                      <Bookmark size={17} fill={saved ? "currentColor" : "none"} />
                    </button>
                    <a className="icon-button card-arrow" href={blockUrl(block.id)} onClick={rememberScroll} aria-label={"查看 " + block.name + " 源码"} title="查看组件与源码">
                      <ArrowRight size={19} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="empty-state">
            {favoritesOnly && !favorites.length ? <Bookmark size={28} /> : <Search size={28} />}
            <h2>{favoritesOnly && !favorites.length ? "还没有收藏组件" : "没有找到组件"}</h2>
            {favoritesOnly && !favorites.length
              ? <a className="button" href="#/">浏览组件 <ArrowRight size={16} /></a>
              : <button className="button" onClick={() => { setGroup("全部"); setQuery(""); }}>清空筛选</button>}
          </div>
        )}
      </section>
    </main>
  );
}
