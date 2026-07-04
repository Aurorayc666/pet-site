export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  images: string[];
  features: string[];
}

export const products: Product[] = [
  {
    id: "foraging-meadow-mat",
    title: "Foraging Meadow Mat",
    price: 30,
    description:
      "A richly textured snuffle mat that hides treats among woven petals, turning mealtime into a calm, mentally enriching ritual.",
    images: ["/images/foraging-meadow-mat.JPG"],
    features: [
      "Hand-tied fleece texture",
      "Slow-feeding, anxiety-reducing design",
      "Machine washable",
      "Great for scent-based enrichment",
    ],
  },
  {
    id: "wanderer-rain-shell",
    title: "The Wanderer Rain Shell",
    price: 50,
    description:
      "A lightweight four-leg rain shell that keeps coats dry without sacrificing freedom of movement, cut for toy and small breeds.",
    images: ["/images/wanderer-rain-shell_1.JPG"],
    features: [
      "Water-repellent woven shell",
      "Adjustable four-leg coverage",
      "Reflective trim for visibility",
      "Machine washable",
    ],
  },
  {
    id: "anchor-potty-tray",
    title: "Anchor Potty Tray",
    price: 319,
    description:
      "A large, fixed-frame relief station built for bigger breeds, holding the training mat securely in place through daily use.",
    images: [
      "/images/anchor-potty-tray_1.JPG",
      "/images/anchor-potty-tray_2.JPG",
    ],
    features: [
      "Locking frame prevents shifting",
      "Bite-resistant construction",
      "Fits large-breed relief mats",
      "Easy-clean surface",
    ],
  },
  {
    id: "wander-canteen",
    title: "Wander Canteen",
    price: 26,
    description:
      "A clip-on travel canteen that pairs a fold-out drinking bowl with a feeding compartment, made for long walks and light adventures.",
    images: ["/images/wander-canteen.JPG"],
    features: [
      "Combined water and feed compartments",
      "Leak-proof fold-out bowl",
      "Clip-on carry hook",
      "Fits most collars and bags",
    ],
  },
  {
    id: "glide-retractable-leash",
    title: "Glide Retractable Leash",
    price: 41,
    description:
      "A smooth, self-retracting lead with a comfortable wrist strap, giving small and medium breeds room to roam without losing control.",
    images: ["/images/glide-retractable-leash.JPG"],
    features: [
      "Smooth-glide retracting mechanism",
      "Ergonomic no-slip handle",
      "Reinforced reflective cord",
      "Suited to small and medium breeds",
    ],
  },
  {
    id: "comfort-harness-lead",
    title: "Comfort Harness Lead",
    price: 10,
    description:
      "A soft, no-pull harness lead in one piece, distributing pressure evenly across the chest for gentle, comfortable walks.",
    images: [
      "/images/harness_1.JPG",
      "/images/harness_2.JPG",
      "/images/harness_3.JPG",
      "/images/harness_4.JPG",
    ],
    features: [
      "Even pressure distribution",
      "Soft, breathable strap",
      "Adjustable chest fit",
      "Lightweight everyday wear",
    ],
  },
  {
    id: "bamboo-charcoal-pads",
    title: "Bamboo Charcoal Absorbent Pads",
    price: 40,
    description:
      "Extra-absorbent training pads infused with bamboo charcoal to neutralize odor, with an adhesive base that stays put.",
    images: ["/images/bamboo-charcoal-pads.JPG"],
    features: [
      "Bamboo charcoal odor control",
      "Quick-absorb, leak-proof core",
      "Adhesive backing for a secure fit",
      "Large format for full coverage",
    ],
  },
  {
    id: "honey-fleece-pullover",
    title: "Honey Fleece Pullover",
    price: 8,
    description:
      "A soft, double-sided fleece pullover in a warm honey hue, made to keep small breeds cozy through cooler months.",
    images: ["/images/honey-fleece-pullover.JPG"],
    features: [
      "Double-sided brushed fleece",
      "Stretch fit for easy dressing",
      "Lightweight, non-restrictive cut",
      "Machine washable",
    ],
  },
  {
    id: "harvest-burrow-bed",
    title: "Harvest Burrow Bed",
    price: 30,
    description:
      "A half-enclosed burrow bed shaped like a cozy den, giving small breeds a warm, secure spot to settle in.",
    images: [
      "/images/bed_1.JPG",
      "/images/bed_2.JPG",
      "/images/bed_3.JPG",
      "/images/bed_4.JPG",
      "/images/bed_5.JPG",
    ],
    features: [
      "Semi-enclosed, den-style shape",
      "Plush, insulated lining",
      "Machine washable cover",
      "Sized for small breeds",
    ],
  },
];
