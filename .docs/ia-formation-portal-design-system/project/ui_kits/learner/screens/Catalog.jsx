// Catalogue / recherche
const Catalog = () => {
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState("Tous");
  const cats = ["Tous", "IA générative", "Prompting", "Cas d'usage", "Conformité", "Outils"];
  const courses = [
    {
      title: "Fondamentaux de l'IA générative",
      desc: "Comprendre les modèles, leurs forces, leurs limites.",
      lvl: "Débutant",
      dur: "1h15",
      pct: 60,
      tag: "En cours",
    },
    {
      title: "Prompting avancé",
      desc: "Structurer des prompts complexes, chaînes et rôles.",
      lvl: "Intermédiaire",
      dur: "2h00",
      pct: 0,
    },
    {
      title: "Automatiser ses tâches de rédaction",
      desc: "Brief, relecture, reformulation, ton et style.",
      lvl: "Débutant",
      dur: "45 min",
      pct: 0,
    },
    {
      title: "IA & données sensibles — bonnes pratiques",
      desc: "RGPD, anonymisation, zones à éviter.",
      lvl: "Tous niveaux",
      dur: "30 min",
      pct: 100,
      tag: "Terminé",
    },
    {
      title: "Analyse et synthèse de documents",
      desc: "Extraire l'essentiel, comparer, poser les bonnes questions.",
      lvl: "Intermédiaire",
      dur: "1h30",
      pct: 0,
    },
    {
      title: "Construire un assistant pour son équipe",
      desc: "Définir son cas d'usage, itérer, mesurer.",
      lvl: "Avancé",
      dur: "2h30",
      pct: 0,
    },
  ];
  const filtered = courses.filter(
    (c) =>
      (cat === "Tous" ||
        c.desc.toLowerCase().includes(cat.toLowerCase()) ||
        c.title.toLowerCase().includes(cat.toLowerCase())) &&
      (q === "" || c.title.toLowerCase().includes(q.toLowerCase())),
  );
  return (
    <div className="container-xl v-stack gap-6">
      <div>
        <h1 className="page-title">Catalogue</h1>
        <p className="page-lead">
          Explore les parcours disponibles et reprends à ton rythme. Toute ta progression est
          sauvegardée.
        </p>
      </div>

      {/* Search + filters */}
      <div className="v-stack gap-3">
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--slate-400)",
              display: "flex",
            }}
          >
            <Icon.search size={18} />
          </div>
          <input
            className="input"
            placeholder="Rechercher un parcours, un sujet, un mot-clé…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            style={{ paddingLeft: 42, height: 44, fontSize: 15 }}
          />
        </div>
        <div className="h-stack gap-2" style={{ flexWrap: "wrap" }}>
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`btn btn-sm ${cat === c ? "btn-primary" : "btn-outline"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-3">
        {filtered.map((c, i) => (
          <Card key={i}>
            <div
              style={{
                height: 120,
                background: `linear-gradient(135deg, var(--slate-${i % 2 ? 100 : 50}) 0%, var(--blue-${i % 2 ? 100 : 50}) 100%)`,
                position: "relative",
                display: "flex",
                alignItems: "flex-end",
                padding: 16,
              }}
            >
              <div
                className="icon-frame icon-blue"
                style={{ background: "white", boxShadow: "var(--shadow-sm)" }}
              >
                {
                  [
                    <Icon.sparkles />,
                    <Icon.messageQ />,
                    <Icon.fileText />,
                    <Icon.flag />,
                    <Icon.layers />,
                    <Icon.users />,
                  ][i % 6]
                }
              </div>
              {c.tag && (
                <div style={{ position: "absolute", top: 12, right: 12 }}>
                  <Badge variant={c.tag === "Terminé" ? "success" : "info"} dot>
                    {c.tag}
                  </Badge>
                </div>
              )}
            </div>
            <CardBody>
              <div className="ds-h4" style={{ marginBottom: 6 }}>
                {c.title}
              </div>
              <div
                className="ds-p"
                style={{ marginBottom: 14, color: "var(--slate-600)", minHeight: 40 }}
              >
                {c.desc}
              </div>
              <div
                className="h-stack gap-3"
                style={{
                  fontSize: 12,
                  color: "var(--slate-500)",
                  marginBottom: c.pct > 0 ? 10 : 0,
                }}
              >
                <span className="h-stack gap-1">
                  <Icon.chart size={12} /> {c.lvl}
                </span>
                <span>·</span>
                <span className="h-stack gap-1">
                  <Icon.clock size={12} /> {c.dur}
                </span>
              </div>
              {c.pct > 0 && c.pct < 100 && <Progress value={c.pct} gradient />}
            </CardBody>
            <CardFooter>
              <span className="ds-caption">
                {c.pct === 100 ? "✓ Validé" : c.pct > 0 ? `${c.pct}% complété` : "3 modules"}
              </span>
              <Button
                variant={c.pct > 0 && c.pct < 100 ? "gradient" : "outline"}
                size="sm"
                iconRight={<Icon.arrowRight />}
              >
                {c.pct === 100 ? "Revoir" : c.pct > 0 ? "Reprendre" : "Commencer"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
window.Catalog = Catalog;
