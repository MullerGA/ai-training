// Écran de leçon (vidéo + notes) — inspiré de Prompting.vue
const Lesson = () => {
  const [playing, setPlaying] = React.useState(false);
  return (
    <div
      className="container-xl"
      style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 32 }}
    >
      <div className="v-stack gap-6">
        <div className="h-stack gap-2 ds-caption">
          <span>Module 2 · Bien formuler ses prompts</span>
          <Icon.chevronRight size={12} />
          <span style={{ color: "var(--slate-900)", fontWeight: 500 }}>
            Chapitre 3 · Anatomie d'un bon prompt
          </span>
        </div>

        {/* Video player */}
        <div
          style={{
            background: "var(--slate-900)",
            borderRadius: 12,
            overflow: "hidden",
            position: "relative",
            aspectRatio: "16 / 9",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 35% 40%, rgba(59,130,246,0.22) 0%, transparent 55%), radial-gradient(circle at 75% 70%, rgba(99,102,241,0.18) 0%, transparent 55%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => setPlaying((p) => !p)}
              style={{
                width: 76,
                height: 76,
                borderRadius: 9999,
                background: "rgba(255,255,255,0.95)",
                border: 0,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--slate-900)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
              }}
            >
              {playing ? <Icon.pause size={28} /> : <Icon.play size={28} />}
            </button>
          </div>
          {/* Controls bar */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              padding: "16px 20px",
              background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
            }}
          >
            <div className="h-stack gap-3" style={{ color: "white" }}>
              <button
                onClick={() => setPlaying((p) => !p)}
                style={{
                  background: "transparent",
                  border: 0,
                  color: "white",
                  cursor: "pointer",
                  display: "flex",
                }}
              >
                {playing ? <Icon.pause size={20} /> : <Icon.play size={20} />}
              </button>
              <span style={{ fontSize: 12, fontFamily: "var(--font-mono)" }}>02:14</span>
              <div
                style={{
                  flex: 1,
                  height: 4,
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: 9999,
                }}
              >
                <div
                  style={{ width: "37%", height: "100%", background: "white", borderRadius: 9999 }}
                />
              </div>
              <span style={{ fontSize: 12, fontFamily: "var(--font-mono)" }}>06:00</span>
              <Icon.volume size={18} />
            </div>
          </div>
        </div>

        <div>
          <h1 className="ds-h2" style={{ marginBottom: 8 }}>
            Anatomie d'un bon prompt
          </h1>
          <p className="ds-lead" style={{ fontSize: 15, color: "var(--slate-600)" }}>
            Un prompt efficace repose sur 4 ingrédients qu'on peut combiner dans n'importe quel
            ordre. Dans cette vidéo, on les applique à un cas concret de rédaction.
          </p>
        </div>

        {/* Note callout */}
        <Card>
          <CardBody
            style={{
              background: "var(--blue-50)",
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
            }}
          >
            <IconFrame tone="blue">
              <Icon.lightbulb />
            </IconFrame>
            <div>
              <div style={{ fontWeight: 600, color: "var(--slate-900)", marginBottom: 4 }}>
                À retenir
              </div>
              <div className="ds-p" style={{ color: "var(--slate-700)" }}>
                Les 4 ingrédients : <strong>rôle</strong>, <strong>contexte</strong>,{" "}
                <strong>tâche</strong>, <strong>format attendu</strong>. Oublier un seul d'entre eux
                suffit à rendre la réponse moins exploitable.
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Transcript preview */}
        <Card>
          <CardHeader title="Transcription" desc="Extrait du chapitre" />
          <CardBody style={{ fontSize: 14, color: "var(--slate-700)", lineHeight: 1.7 }}>
            <p style={{ margin: "0 0 12px 0" }}>
              Imagine que tu demandes simplement :{" "}
              <em style={{ color: "var(--slate-500)" }}>
                "écris-moi un mail pour annoncer la réunion"
              </em>
              . Le modèle n'a ni ton rôle, ni le contexte, ni le ton attendu…
            </p>
            <p style={{ margin: 0 }}>
              Maintenant, reformulons :{" "}
              <em style={{ color: "var(--blue-700)" }}>
                "Tu es chef de projet. Rédige un mail court et chaleureux pour annoncer la réunion
                kick-off de mercredi 14h à mon équipe de 8 personnes. Ton : direct mais convivial.
                Format : objet + 3 lignes max."
              </em>{" "}
              La différence parle d'elle-même.
            </p>
          </CardBody>
        </Card>

        {/* Nav */}
        <div className="h-stack" style={{ justifyContent: "space-between" }}>
          <Button variant="outline" icon={<Icon.arrowLeft />}>
            Chapitre précédent
          </Button>
          <Button variant="gradient" iconRight={<Icon.arrowRight />}>
            Chapitre suivant · Atelier pratique
          </Button>
        </div>
      </div>

      {/* Sidebar — chapters outline */}
      <div className="v-stack gap-3">
        <Card>
          <CardBody style={{ padding: 0 }}>
            <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--slate-200)" }}>
              <div className="ds-caption" style={{ marginBottom: 4 }}>
                CHAPITRES
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--slate-900)" }}>
                Module 2 · 6 chapitres
              </div>
            </div>
            <div>
              {[
                { n: 1, title: "Pourquoi ce parcours", dur: "3 min", state: "done" },
                { n: 2, title: "Les grands concepts", dur: "8 min", state: "done" },
                { n: 3, title: "Anatomie d'un bon prompt", dur: "6 min", state: "current" },
                { n: 4, title: "Atelier : reformuler un brief", dur: "10 min", state: "next" },
                { n: 5, title: "Chaîne de prompts", dur: "5 min", state: "next" },
                { n: 6, title: "Quiz de validation", dur: "5 min", state: "locked" },
              ].map((c) => (
                <div
                  key={c.n}
                  className="h-stack gap-3"
                  style={{
                    padding: "10px 16px",
                    borderLeft:
                      c.state === "current" ? "3px solid var(--blue-600)" : "3px solid transparent",
                    background: c.state === "current" ? "var(--blue-50)" : "transparent",
                    opacity: c.state === "locked" ? 0.5 : 1,
                    cursor: "pointer",
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
                      width: 22,
                      height: 22,
                      fontSize: 11,
                    }}
                  >
                    {c.state === "done" ? <Icon.check size={11} /> : c.n}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 13,
                        color: "var(--slate-900)",
                        fontWeight: c.state === "current" ? 600 : 400,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {c.title}
                    </div>
                    <div className="ds-caption">{c.dur}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
window.Lesson = Lesson;
