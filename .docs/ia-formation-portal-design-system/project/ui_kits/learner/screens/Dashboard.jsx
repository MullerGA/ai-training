// Dashboard / accueil learner — inspiré de Home.vue du repo
const Dashboard = () => {
  const modules = [
    {
      n: 1,
      title: "Introduction à l'IA générative",
      duration: "15 min",
      pct: 100,
      state: "done",
      desc: "Comprendre les bases et le fonctionnement des LLM.",
    },
    {
      n: 2,
      title: "Bien formuler ses prompts",
      duration: "20 min",
      pct: 60,
      state: "current",
      desc: "Structure, contexte, rôle, format attendu.",
    },
    {
      n: 3,
      title: "Cas d'usage au quotidien",
      duration: "25 min",
      pct: 0,
      state: "next",
      desc: "Rédaction, synthèse, analyse, automatisation.",
    },
    {
      n: 4,
      title: "Limites, risques et RGPD",
      duration: "15 min",
      pct: 0,
      state: "locked",
      desc: "Hallucinations, données sensibles, bonnes pratiques.",
    },
  ];
  return (
    <div className="container-xl v-stack gap-8">
      {/* Hero */}
      <div>
        <div className="h-stack gap-3" style={{ marginBottom: 10 }}>
          <Badge variant="gradient" dot>
            Parcours en cours
          </Badge>
          <span className="ds-caption">Mis à jour il y a 2 min</span>
        </div>
        <h1 className="page-title">Bonjour Claire, reprenons là où tu t'étais arrêtée.</h1>
        <p className="page-lead">
          Encore 2 modules avant de valider ton parcours{" "}
          <strong style={{ color: "var(--slate-900)" }}>Fondamentaux de l'IA générative</strong>. On
          continue ?
        </p>
      </div>

      {/* Resume card (full-width) */}
      <Card>
        <CardBody style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div className="num-circle" style={{ width: 56, height: 56, fontSize: 18 }}>
            2
          </div>
          <div style={{ flex: 1 }}>
            <div className="ds-caption" style={{ marginBottom: 4 }}>
              MODULE EN COURS · 12 min restantes
            </div>
            <div className="ds-h3" style={{ marginBottom: 10 }}>
              Bien formuler ses prompts
            </div>
            <div className="h-stack gap-3">
              <div style={{ flex: 1 }}>
                <Progress value={60} gradient />
              </div>
              <span className="ds-caption" style={{ fontWeight: 600, color: "var(--slate-700)" }}>
                60%
              </span>
            </div>
          </div>
          <Button variant="gradient" size="lg" iconRight={<Icon.arrowRight />}>
            Reprendre
          </Button>
        </CardBody>
      </Card>

      {/* Stats grid */}
      <div className="grid grid-4">
        <Card>
          <CardBody>
            <div className="h-stack gap-3">
              <IconFrame tone="blue">
                <Icon.bookOpen />
              </IconFrame>
              <div>
                <div className="ds-caption">Modules terminés</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "var(--slate-900)" }}>
                  1 / 4
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="h-stack gap-3">
              <IconFrame tone="green">
                <Icon.clock />
              </IconFrame>
              <div>
                <div className="ds-caption">Temps cumulé</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "var(--slate-900)" }}>
                  47 min
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="h-stack gap-3">
              <IconFrame tone="amber">
                <Icon.target />
              </IconFrame>
              <div>
                <div className="ds-caption">Exercices validés</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "var(--slate-900)" }}>
                  6 / 12
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="h-stack gap-3">
              <IconFrame tone="slate">
                <Icon.trendingUp />
              </IconFrame>
              <div>
                <div className="ds-caption">Série</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "var(--slate-900)" }}>
                  5 jours
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Parcours modules */}
      <div>
        <div className="h-stack" style={{ justifyContent: "space-between", marginBottom: 14 }}>
          <h2 className="ds-h2">Ton parcours</h2>
          <Button variant="ghost" size="sm" iconRight={<Icon.arrowRight />}>
            Voir tout
          </Button>
        </div>
        <div className="v-stack gap-3">
          {modules.map((m) => (
            <Card key={m.n}>
              <CardBody style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div
                  className={m.state === "done" ? "num-circle" : "num-circle"}
                  style={{
                    background:
                      m.state === "done"
                        ? "var(--green-500)"
                        : m.state === "current"
                          ? "var(--blue-600)"
                          : m.state === "locked"
                            ? "var(--slate-200)"
                            : "#eff6ff",
                    color:
                      m.state === "next"
                        ? "var(--blue-600)"
                        : m.state === "locked"
                          ? "var(--slate-400)"
                          : "white",
                  }}
                >
                  {m.state === "done" ? <Icon.check size={18} /> : m.n}
                </div>
                <div style={{ flex: 1 }}>
                  <div className="h-stack gap-2" style={{ marginBottom: 4 }}>
                    <span className="ds-h4" style={{ margin: 0 }}>
                      {m.title}
                    </span>
                    {m.state === "done" && (
                      <Badge variant="success" dot>
                        Terminé
                      </Badge>
                    )}
                    {m.state === "current" && (
                      <Badge variant="info" dot>
                        En cours
                      </Badge>
                    )}
                  </div>
                  <div className="ds-caption" style={{ marginBottom: 8 }}>
                    {m.desc}
                  </div>
                  <div
                    className="h-stack gap-4"
                    style={{ fontSize: 12, color: "var(--slate-500)" }}
                  >
                    <span className="h-stack gap-1">
                      <Icon.clock size={12} /> {m.duration}
                    </span>
                    {m.pct > 0 && m.pct < 100 && <span>· {m.pct}% complété</span>}
                  </div>
                </div>
                <Button
                  variant={m.state === "current" ? "gradient" : "outline"}
                  size="sm"
                  disabled={m.state === "locked"}
                >
                  {m.state === "done"
                    ? "Revoir"
                    : m.state === "current"
                      ? "Continuer"
                      : m.state === "locked"
                        ? "Verrouillé"
                        : "Commencer"}
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* Tip */}
      <Card>
        <CardBody
          style={{
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
            background: "var(--blue-50)",
          }}
        >
          <IconFrame tone="blue">
            <Icon.lightbulb />
          </IconFrame>
          <div>
            <div className="ds-h4" style={{ marginBottom: 4 }}>
              Astuce du jour
            </div>
            <div className="ds-p" style={{ color: "var(--slate-700)" }}>
              Pour un prompt efficace, donne un <strong>rôle</strong>, un <strong>contexte</strong>,
              une <strong>tâche</strong> et un <strong>format attendu</strong>. C'est la règle des 4
              ingrédients qu'on voit au module&nbsp;2.
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

window.Dashboard = Dashboard;
