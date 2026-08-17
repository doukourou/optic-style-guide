import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { RotateCcw, Upload, Info } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { frames } from "@/data/site";

export const Route = createFileRoute("/essayage-virtuel")({
  head: () => ({
    meta: [
      { title: "Essayage virtuel de lunettes — Optique Saint Mathias" },
      {
        name: "description",
        content:
          "Importez une photo de votre visage et essayez virtuellement nos montures : déplacez, agrandissez et comparez les modèles en quelques secondes.",
      },
      { property: "og:title", content: "Essayage virtuel — Optique Saint Mathias" },
      {
        property: "og:description",
        content: "Testez nos montures sur votre photo avant de venir en boutique.",
      },
    ],
  }),
  component: Essayage,
});

const DEFAULT_POS = { x: 50, y: 42 };

function Essayage() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [pos, setPos] = useState(DEFAULT_POS);
  const [scale, setScale] = useState(55);
  const [rotation, setRotation] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const currentFrame = frames[frameIndex]!;

  function onFile(file?: File) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(String(reader.result));
    reader.readAsDataURL(file);
    setPos(DEFAULT_POS);
  }

  function move(e: ReactPointerEvent<HTMLDivElement>) {
    if (!dragging.current || !stageRef.current) return;
    const r = stageRef.current.getBoundingClientRect();
    setPos({
      x: Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100)),
      y: Math.min(100, Math.max(0, ((e.clientY - r.top) / r.height) * 100)),
    });
  }

  function reset() {
    setPos(DEFAULT_POS);
    setScale(55);
    setRotation(0);
  }

  return (
    <div>
      <PageHero
        eyebrow="Essayage virtuel"
        title="Essayez nos montures depuis chez vous"
        subtitle="Téléversez une photo de face, choisissez un modèle et ajustez la position, la taille et l'inclinaison de la monture."
      />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div
            ref={stageRef}
            onPointerMove={move}
            onPointerUp={() => (dragging.current = false)}
            onPointerLeave={() => (dragging.current = false)}
            className="relative aspect-4/3 w-full touch-none overflow-hidden rounded-2xl border border-border bg-mist"
          >
            {photo ? (
              <>
                <img src={photo} alt="Votre photo" className="h-full w-full object-cover" />
                <img
                  src={currentFrame.src}
                  alt={currentFrame.name}
                  onPointerDown={(e) => {
                    e.preventDefault();
                    dragging.current = true;
                  }}
                  draggable={false}
                  className="absolute cursor-grab select-none active:cursor-grabbing"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    width: `${scale}%`,
                    transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                  }}
                />
              </>
            ) : (
              <label className="flex h-full cursor-pointer flex-col items-center justify-center gap-3 text-center">
                <Upload className="size-8 text-muted-foreground" />
                <span className="text-sm font-semibold text-ink">
                  Téléversez une photo de votre visage
                </span>
                <span className="max-w-xs text-xs text-muted-foreground">
                  Photo de face, bien éclairée. Elle reste sur votre appareil, aucun envoi n'est
                  effectué.
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => onFile(e.target.files?.[0])}
                />
              </label>
            )}
          </div>

          <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
            <Info className="mt-0.5 size-3.5 shrink-0 text-gold" />
            Aperçu indicatif, essayage réel recommandé en boutique.
          </p>
        </div>

        <div className="rounded-2xl border border-border p-6">
          <h2 className="text-lg">Choisir une monture</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {frames.map((f, i) => (
              <button
                key={f.id}
                onClick={() => setFrameIndex(i)}
                className={`rounded-xl border p-3 text-left transition-colors ${
                  i === frameIndex ? "border-gold bg-gold-soft/40" : "border-border hover:bg-mist"
                }`}
              >
                <img src={f.src} alt={f.name} loading="lazy" className="h-10 w-full object-contain" />
                <span className="mt-2 block text-xs font-semibold text-ink">{f.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-7 space-y-5">
            <div>
              <label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Taille
              </label>
              <input
                type="range"
                min={20}
                max={100}
                value={scale}
                onChange={(e) => setScale(Number(e.target.value))}
                className="mt-2 w-full accent-[var(--gold)]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Inclinaison
              </label>
              <input
                type="range"
                min={-20}
                max={20}
                value={rotation}
                onChange={(e) => setRotation(Number(e.target.value))}
                className="mt-2 w-full accent-[var(--gold)]"
              />
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={() => setFrameIndex((i) => (i + 1) % frames.length)}
              className="btn-primary"
            >
              Essayer une autre monture
            </button>
            <button
              onClick={() => {
                reset();
                setPhoto(null);
              }}
              className="btn-outline"
            >
              <RotateCcw className="size-4" /> Réinitialiser
            </button>
          </div>

          {photo && (
            <p className="mt-5 text-xs text-muted-foreground">
              Astuce : faites glisser la monture directement sur la photo pour l'aligner sur vos
              yeux.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
