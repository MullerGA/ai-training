// Parcours / vue module détaillé
const Path = () => {
  const chapters = [
    { n: 1, title: "Pourquoi ce parcours", dur: "3 min", state: "done", type: "Vidéo" },
    { n: 2, title: "Les grands concepts", dur: "8 min", state: "done", type: "Lecture" },
    { n: 3, title: "Anatomie d'un bon prompt", dur: "6 min", state: "current", type: "Vidéo" },
    {
      n: 4,
      title: "Atelier : reformuler un brief",
      dur: "10 min",
      state: "next",
      type: "Exercice",
    },
    {
      n: 5,
      title: "Aller plus loin : chaîne de prompts",
      dur: "5 min",
      state: "next",
      type: "Lecture",
    },
    { n: 6, title: "Quiz de validation", dur: "5 min", state: "locked", type: "Quiz" },
  ];
  return (
    <div
      className="container-xl"
      style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 32 }}
    >
      <div className="v-stack gap-6">
        {/* Breadcrumb */}
        <div className="h-stack gap-2 ds-caption">
          <span>Catalogue</span>
          <Icon.chevronRight size={12} />
          <span>Fondamentaux IA</span>
          <Icon.chevronRight size={12} />
          <span style={{ color: "var(--slate-900)", fontWeight: 500 }}>
            Bien formuler ses prompts
          </span>
        </div>

        <div>
          <div className="h-stack gap-2" style={{ marginBottom: 10 }}>
            <Badge variant="info" dot>
              Module 2 sur 4
            </Badge>
            <Badge variant="outline">Niveau débutant</Badge>
          </div>
          <h1 className="page-title">Bien formuler ses prompts</h1>
          <p className="page-lead">
            Apprends à structurer tes demandes pour obtenir des réponses précises, utiles et
            directement exploitables dans ton travail.
          </p>
        </div>

        {/* Objectifs */}
        <Card>
          <CardHeader title="Objectifs du module" desc="Ce que tu sauras faire à la fin" />
          <CardBody>
            <div className="v-stack gap-3">
              {[
                "Identifier les 4 ingrédients d'un prompt efficace",
                "Reformuler une demande floue en prompt structuré",
                "Choisir le bon format de sortie selon ton besoin",
                "Itérer sur un prompt pour affiner le résultat",
              ].map((o, i) => (
                <div key={i} className="h-stack gap-3">
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 999,
                      background: "#dcfce7",
                      color: "#15803d",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon.check size={14} />
                  </div>
                  <div className="ds-p" style={{ color: "var(--slate-700)" }}>
                    {o}
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Chapitres */}
        <div>
          <h2 className="ds-h3" style={{ marginBottom: 12 }}>
            Chapitres
          </h2>
          <div
            className="v-stack"
            style={{
              border: "1px solid var(--slate-200)",
              borderRadius: 10,
              overflow: "hidden",
              background: "white",
            }}
          >
            {chapters.map((c, i) => (
              <div
                key={c.n}
                className="h-stack gap-4"
                style={{
                  padding: "14px 20px",
                  borderBottom: i < chapters.length - 1 ? "1px solid var(--slate-200)" : "none",
                  background: c.state === "current" ? "var(--blue-50)" : "white",
                  cursor: c.state === "locked" ? "not-allowed" : "pointer",
                  opacity: c.state === "locked" ? 0.5 : 1,
                }}
              >
                <div
                  className="num-circle num-small"
                  style={{
                    background:
                      c.state === "done"
                        ? "var(--green-500)"
                        : c.state === "current"
                          ? "var(--blue-600)"
                          : "var(--slate-100)",
                    color:
                      c.state === "done" || c.state === "current" ? "white" : "var(--slate-500)",
                  }}
                >
                  {c.state === "done" ? <Icon.check size={12} /> : c.n}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "var(--slate-900)",
                      marginBottom: 2,
                    }}
                  >
                    {c.title}
                  </div>
                  <div className="h-stack gap-3 ds-caption">
                    <span>{c.type}</span>
                    <span>·</span>
                    <span className="h-stack gap-1">
                      <Icon.clock size={11} /> {c.dur}
                    </span>
                  </div>
                </div>
                {c.state === "current" ? (
                  <Badge variant="info" dot>
                    En cours
                  </Badge>
                ) : c.state === "done" ? (
                  <Icon.check size={18} style={{ color: "var(--green-500)" }} />
                ) : c.state === "locked" ? (
                  <span className="ds-caption">Verrouillé</span>
                ) : (
                  <Icon.chevronRight size={16} style={{ color: "var(--slate-400)" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="v-stack gap-4">
        <Card>
          <CardBody>
            <div className="ds-caption" style={{ marginBottom: 6 }}>
              PROGRESSION DU MODULE
            </div>
            <div className="h-stack gap-2" style={{ marginBottom: 10 }}>
              <div
                style={{ fontSize: 28, fontWeight: 700, color: "var(--slate-900)", lineHeight: 1 }}
              >
                60%
              </div>
              <div className="ds-caption" style={{ paddingBottom: 2 }}>
                · 12 min restantes
              </div>
            </div>
            <Progress value={60} gradient />
            <div className="h-stack gap-2" style={{ marginTop: 16 }}>
              <Button variant="gradient" iconRight={<Icon.arrowRight />} style={{ flex: 1 }}>
                Reprendre
              </Button>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="À savoir" />
          <CardBody style={{ fontSize: 13, color: "var(--slate-600)", lineHeight: 1.6 }}>
            <div className="h-stack gap-2" style={{ marginBottom: 10 }}>
              <Icon.clock size={14} />
              <span>
                <strong style={{ color: "var(--slate-900)" }}>Durée</strong> · 20 min
              </span>
            </div>
            <div className="h-stack gap-2" style={{ marginBottom: 10 }}>
              <Icon.layers size={14} />
              <span>
                <strong style={{ color: "var(--slate-900)" }}>Format</strong> · Vidéo + exercice
              </span>
            </div>
            <div className="h-stack gap-2">
              <Icon.bookmark size={14} />
              <span>
                <strong style={{ color: "var(--slate-900)" }}>Validation</strong> · Quiz 5 questions
              </span>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
window.Path = Path;
