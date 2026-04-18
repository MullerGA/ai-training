// Progression / statistiques personnelles
const Progress2 = () => {
  const weeks = [3, 5, 2, 6, 4, 7, 3, 5, 8, 6, 4, 7];
  const max = Math.max(...weeks);
  return (
    <div className="container-xl v-stack gap-6">
      <div>
        <h1 className="page-title">Ta progression</h1>
        <p className="page-lead">
          Un aperçu clair de ton avancement, de tes acquis et des prochaines étapes recommandées.
        </p>
      </div>

      {/* KPI band */}
      <div className="grid grid-4">
        {[
          { icon: <Icon.bookOpen />, lbl: "Modules validés", val: "1 / 4", tone: "blue" },
          { icon: <Icon.clock />, lbl: "Heures cumulées", val: "2h 47", tone: "green" },
          { icon: <Icon.target />, lbl: "Score moyen", val: "84 %", tone: "amber" },
          { icon: <Icon.flag />, lbl: "Série active", val: "5 jours", tone: "slate" },
        ].map((k, i) => (
          <Card key={i}>
            <CardBody>
              <IconFrame tone={k.tone}>{k.icon}</IconFrame>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "var(--slate-900)",
                  marginTop: 12,
                  lineHeight: 1,
                }}
              >
                {k.val}
              </div>
              <div className="ds-caption" style={{ marginTop: 6 }}>
                {k.lbl}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <Card>
        <CardHeader title="Activité sur 12 semaines" desc="Minutes passées par semaine" />
        <CardBody>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 8,
              height: 140,
              padding: "0 4px",
            }}
          >
            {weeks.map((v, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: 32,
                    height: `${(v / max) * 100}%`,
                    background:
                      i === weeks.length - 1
                        ? "linear-gradient(180deg, #3b82f6 0%, #4f46e5 100%)"
                        : "var(--slate-200)",
                    borderRadius: 4,
                    minHeight: 4,
                  }}
                />
                <span style={{ fontSize: 10, color: "var(--slate-400)" }}>S{i + 1}</span>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Deux colonnes */}
      <div className="grid grid-2">
        <Card>
          <CardHeader title="Acquis" desc="Compétences validées" />
          <CardBody>
            <div className="v-stack gap-3">
              {[
                { skill: "Bases de l'IA générative", lvl: 100 },
                { skill: "Reconnaître les cas d'usage pertinents", lvl: 75 },
                { skill: "Formuler un prompt structuré", lvl: 60 },
                { skill: "Identifier les limites et risques", lvl: 30 },
              ].map((s, i) => (
                <div key={i}>
                  <div
                    className="h-stack"
                    style={{ justifyContent: "space-between", marginBottom: 6 }}
                  >
                    <span style={{ fontSize: 13, color: "var(--slate-900)", fontWeight: 500 }}>
                      {s.skill}
                    </span>
                    <span className="ds-caption" style={{ fontWeight: 600 }}>
                      {s.lvl}%
                    </span>
                  </div>
                  <Progress value={s.lvl} gradient={s.lvl === 100 ? false : true} />
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Recommandé pour toi" desc="Sur la base de tes modules validés" />
          <CardBody>
            <div className="v-stack gap-3">
              {[
                {
                  t: "Prompting avancé",
                  d: "Suite naturelle du module en cours",
                  icon: <Icon.sparkles />,
                },
                {
                  t: "Cas d'usage rédaction",
                  d: "Applique ce que tu viens d'apprendre",
                  icon: <Icon.fileText />,
                },
                {
                  t: "Quiz récap Module 1",
                  d: "Consolide tes bases en 5 min",
                  icon: <Icon.target />,
                },
              ].map((r, i) => (
                <div
                  key={i}
                  className="h-stack gap-3"
                  style={{
                    padding: 10,
                    borderRadius: 8,
                    border: "1px solid var(--slate-200)",
                    cursor: "pointer",
                  }}
                >
                  <IconFrame tone="blue">{r.icon}</IconFrame>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--slate-900)" }}>
                      {r.t}
                    </div>
                    <div className="ds-caption">{r.d}</div>
                  </div>
                  <Icon.arrowRight size={16} style={{ color: "var(--slate-400)" }} />
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
window.Progress2 = Progress2;
