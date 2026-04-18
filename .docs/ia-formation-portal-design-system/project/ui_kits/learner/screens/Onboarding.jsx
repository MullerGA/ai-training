// Onboarding — quelques étapes pour définir le parcours
const Onboarding = () => {
  const [step, setStep] = React.useState(1);
  const total = 4;

  const roles = [
    "Manager",
    "Opérations",
    "Rédaction / communication",
    "Commercial",
    "Support",
    "Autre",
  ];
  const goals = [
    "Gagner du temps sur mes tâches récurrentes",
    "Mieux rédiger et synthétiser",
    "Analyser des documents",
    "Automatiser une partie de mon travail",
    "Former mon équipe",
  ];

  const [role, setRole] = React.useState(null);
  const [selGoals, setSelGoals] = React.useState([]);
  const toggleGoal = (g) =>
    setSelGoals((s) => (s.includes(g) ? s.filter((x) => x !== g) : [...s, g]));

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 40px" }}>
      {/* Stepper */}
      <div className="h-stack gap-2" style={{ marginBottom: 32 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 4,
              borderRadius: 9999,
              background: i < step ? "var(--blue-600)" : "var(--slate-200)",
            }}
          />
        ))}
      </div>
      <div className="ds-caption" style={{ marginBottom: 10 }}>
        ÉTAPE {step} SUR {total}
      </div>

      {step === 1 && (
        <>
          <h1 className="page-title" style={{ marginBottom: 8 }}>
            Bienvenue sur Magora.
          </h1>
          <p className="page-lead" style={{ marginBottom: 32 }}>
            On prend 2 minutes pour personnaliser ton parcours. Rassure-toi : rien n'est définitif,
            tu pourras tout ajuster plus tard.
          </p>
          <Card>
            <CardBody style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <IconFrame tone="blue">
                <Icon.sparkles />
              </IconFrame>
              <div>
                <div style={{ fontWeight: 600, color: "var(--slate-900)", marginBottom: 2 }}>
                  3 questions rapides
                </div>
                <div className="ds-caption">
                  On te proposera un parcours adapté à ton rôle et tes objectifs.
                </div>
              </div>
            </CardBody>
          </Card>
        </>
      )}

      {step === 2 && (
        <>
          <h1 className="page-title" style={{ marginBottom: 8 }}>
            Quel est ton rôle dans l'entreprise ?
          </h1>
          <p className="page-lead" style={{ marginBottom: 24 }}>
            Ça nous aide à choisir les exemples les plus pertinents.
          </p>
          <div className="grid grid-2">
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className="card"
                style={{
                  textAlign: "left",
                  padding: 16,
                  cursor: "pointer",
                  border: role === r ? "2px solid var(--blue-600)" : "1px solid var(--slate-200)",
                  background: role === r ? "var(--blue-50)" : "white",
                  fontFamily: "inherit",
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--slate-900)" }}>{r}</div>
              </button>
            ))}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h1 className="page-title" style={{ marginBottom: 8 }}>
            Qu'aimerais-tu accomplir ?
          </h1>
          <p className="page-lead" style={{ marginBottom: 24 }}>
            Sélectionne un ou plusieurs objectifs. Tu peux toujours les modifier.
          </p>
          <div className="v-stack gap-2">
            {goals.map((g) => {
              const on = selGoals.includes(g);
              return (
                <button
                  key={g}
                  onClick={() => toggleGoal(g)}
                  className="card"
                  style={{
                    textAlign: "left",
                    padding: 14,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    border: on ? "2px solid var(--blue-600)" : "1px solid var(--slate-200)",
                    background: on ? "var(--blue-50)" : "white",
                    fontFamily: "inherit",
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 6,
                      border: on ? 0 : "1.5px solid var(--slate-300)",
                      background: on ? "var(--blue-600)" : "white",
                      color: "white",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {on && <Icon.check size={14} />}
                  </div>
                  <span style={{ fontSize: 14, color: "var(--slate-900)" }}>{g}</span>
                </button>
              );
            })}
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div
              style={{
                width: 64,
                height: 64,
                margin: "0 auto 20px",
                borderRadius: 9999,
                background: "linear-gradient(135deg,#3b82f6,#4f46e5)",
                color: "white",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon.sparkles size={28} />
            </div>
            <h1 className="page-title" style={{ marginBottom: 8 }}>
              Ton parcours est prêt.
            </h1>
            <p className="page-lead" style={{ margin: "0 auto 28px", maxWidth: 480 }}>
              On t'a sélectionné <strong style={{ color: "var(--slate-900)" }}>4 modules</strong>{" "}
              pour démarrer, environ 1h15 au total. Tu peux commencer quand tu veux.
            </p>
          </div>
          <Card>
            <CardBody>
              <div className="h-stack gap-3">
                <IconFrame tone="blue">
                  <Icon.bookOpen />
                </IconFrame>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: "var(--slate-900)" }}>
                    Fondamentaux de l'IA générative
                  </div>
                  <div className="ds-caption">4 modules · 1h15 · niveau débutant</div>
                </div>
              </div>
            </CardBody>
          </Card>
        </>
      )}

      {/* Nav */}
      <div className="h-stack" style={{ justifyContent: "space-between", marginTop: 32 }}>
        <Button
          variant="ghost"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
        >
          Retour
        </Button>
        <Button
          variant="gradient"
          iconRight={step < total ? <Icon.arrowRight /> : null}
          onClick={() => setStep((s) => Math.min(total, s + 1))}
          disabled={(step === 2 && !role) || (step === 3 && selGoals.length === 0)}
        >
          {step < total ? "Continuer" : "Commencer mon parcours"}
        </Button>
      </div>
    </div>
  );
};
window.Onboarding = Onboarding;
