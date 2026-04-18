// Exercice / pratique — inspiré des composants d'exercice du repo
const Exercise = () => {
  const [answer, setAnswer] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div
      className="container-xl"
      style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 32 }}
    >
      <div className="v-stack gap-5">
        <div className="h-stack gap-2 ds-caption">
          <span>Module 2 · Bien formuler ses prompts</span>
          <Icon.chevronRight size={12} />
          <span style={{ color: "var(--slate-900)", fontWeight: 500 }}>
            Atelier pratique · Reformuler un brief
          </span>
        </div>

        {/* Exercise header card */}
        <Card>
          <CardBody>
            <div className="h-stack gap-2" style={{ marginBottom: 12 }}>
              <Badge variant="info" dot>
                Exercice 2 sur 3
              </Badge>
              <Badge variant="outline">
                <Icon.clock size={11} /> 10 min
              </Badge>
              <Badge variant="outline">Pratique</Badge>
            </div>
            <div className="ds-h2" style={{ marginBottom: 8 }}>
              Reformule ce brief en prompt structuré
            </div>
            <div className="ds-p-lg" style={{ color: "var(--slate-600)" }}>
              À ton tour. Applique la règle des 4 ingrédients (rôle, contexte, tâche, format) au cas
              suivant.
            </div>
          </CardBody>
        </Card>

        {/* Scenario */}
        <Card>
          <CardHeader title="Contexte" desc="Le brief reçu par email" />
          <CardBody
            style={{
              background: "var(--slate-50)",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              color: "var(--slate-700)",
              lineHeight: 1.7,
              borderRadius: 0,
            }}
          >
            "Salut, tu peux me faire un petit résumé du dernier rapport RH pour la réu de jeudi ?
            Merci."
          </CardBody>
        </Card>

        {/* Answer textarea */}
        <div>
          <label className="form-label">Ton prompt reformulé</label>
          <textarea
            className="textarea"
            placeholder={
              'Ex : "Tu es analyste RH. Voici le rapport [document joint]. Prépare-moi une synthèse pour une réunion de 30 minutes avec 5 managers, jeudi. Format : 5 bullet points + 3 recommandations chiffrées."'
            }
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            style={{ minHeight: 160 }}
          />
          <div className="h-stack" style={{ justifyContent: "space-between", marginTop: 6 }}>
            <span className="ds-caption">{wordCount} mots · min. 30 recommandé</span>
            <span className="ds-caption h-stack gap-1">
              <Icon.lightbulb size={12} /> Pense aux 4 ingrédients
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="h-stack gap-2">
          <Button variant="gradient" onClick={() => setSubmitted(true)} disabled={wordCount < 5}>
            Valider ma réponse
          </Button>
          <Button variant="outline">Voir un exemple</Button>
          <div style={{ flex: 1 }} />
          <Button variant="ghost">Passer</Button>
        </div>

        {/* Feedback */}
        {submitted && (
          <Card>
            <CardBody
              style={{ background: "#f0fdf4", display: "flex", gap: 14, alignItems: "flex-start" }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9,
                  background: "#dcfce7",
                  color: "#15803d",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon.checkCircle />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: "#15803d", marginBottom: 6 }}>
                  Bien joué !
                </div>
                <div className="ds-p" style={{ color: "var(--slate-700)", marginBottom: 10 }}>
                  Tu as bien identifié le rôle et le contexte. Pour aller plus loin : précise
                  toujours le <strong>format de sortie</strong> et, quand c'est possible, un{" "}
                  <strong>exemple</strong> du résultat attendu.
                </div>
                <Button variant="outline" size="sm" iconRight={<Icon.arrowRight />}>
                  Passer à l'exercice suivant
                </Button>
              </div>
            </CardBody>
          </Card>
        )}
      </div>

      {/* Sidebar — Hints */}
      <div className="v-stack gap-3">
        <Card>
          <CardHeader title="Indices" desc="À utiliser en cas de besoin" />
          <CardBody>
            <div className="v-stack gap-3">
              {[
                { lbl: "Rôle", hint: "Qui doit répondre ? Analyste ? Rédacteur ?" },
                { lbl: "Contexte", hint: "Pour qui ? Quelle occasion ? Quel enjeu ?" },
                { lbl: "Tâche", hint: "Action précise et verbe d'action." },
                { lbl: "Format", hint: "Longueur, structure, ton, exemples." },
              ].map((h, i) => (
                <div
                  key={i}
                  style={{
                    padding: 10,
                    background: "var(--slate-50)",
                    borderRadius: 8,
                    border: "1px solid var(--slate-200)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--blue-700)",
                      marginBottom: 3,
                    }}
                  >
                    {h.lbl}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--slate-600)", lineHeight: 1.5 }}>
                    {h.hint}
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
window.Exercise = Exercise;
