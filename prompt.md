# PROMPT.MD — WWDC27 Apple Design Award Master Specification: stud.io

## Executive Vision Statement
**stud.io** is an Apple Design Award-caliber, multi-country student learning platform crafted with Jony Ive-level simplicity, fluid liquid-glass physics, and deep spatial hierarchy. It eliminates academic cognitive clutter by transforming complex exam prep, past paper pattern analytics, dual-host NotebookLM AI audio podcasts, Duolingo gamified quest trees, and active recall suites into a single, breathtaking interface.

---

## 1. Apple Design System Tokens & Aesthetics

### Color Palette (Obsidian Spatial Glass)
- **Canvas Base**: `#030712` (Deep Space Obsidian)
- **Glass Surface Level 1**: `rgba(15, 23, 42, 0.65)` with `backdrop-filter: blur(24px) saturate(180%)`
- **Glass Surface Level 2 (Elevated)**: `rgba(30, 41, 59, 0.75)` with `backdrop-filter: blur(32px)`
- **Glass Border Spec**: `1px solid rgba(255, 255, 255, 0.08)` & hover `1px solid rgba(139, 92, 246, 0.4)`
- **Primary Accent (Electric Violet)**: `#8b5cf6` (`linear-gradient(135deg, #8b5cf6, #6366f1)`)
- **Secondary Accent (Cyber Cyan)**: `#06b6d4`
- **Success & Retention (Emerald)**: `#10b981`
- **Gamification Flame (Amber)**: `#f59e0b`
- **Hearts & Alerts (Rose)**: `#ef4444`

### Typography Hierarchy
- **Primary Display**: `Plus Jakarta Sans`, `-apple-system`, `SF Pro Display`
- **Body & Controls**: `Inter`, `-apple-system`, `SF Pro Text`
- **Code & Mathematics**: `Fira Code`, `SF Mono`, monospace
- **Scale**:
  - `Hero Display`: 4.2rem / 1.08 Line Height / 800 Weight
  - `Section Title`: 2.2rem / 1.2 Line Height / 700 Weight
  - `Card Header`: 1.25rem / 1.3 Line Height / 600 Weight
  - `Body Standard`: 0.95rem / 1.5 Line Height / 400 Weight
  - `Caption/Badge`: 0.8rem / 1.4 Line Height / 600 Weight

### Motion Physics & Micro-Interactions
- **Transition Standard**: `all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`
- **Hover Lift**: `transform: translateY(-4px) scale(1.01)` with `box-shadow: 0 16px 36px rgba(139, 92, 246, 0.25)`
- **Node Pulse**: SVG drop-shadow pulse and 60fps canvas waveform visualizations.

---

## 2. Platform Architecture & Modules

```
stud.io UI/UX Hierarchy
├── 1. Landing Page (Hero, Live Neural Demo, Country Vault, Feature Showcase)
├── 2. Onboarding Modal (3-Step Country Selection -> Board -> Difficulty -> Multi-Agent Terminal)
├── 3. Executive Dashboard Shell (Top Bar Stats + Left Floating Navigation Dock)
├── 4. Module 1: Past Paper Pattern Intelligence (10-Yr Heatmaps & Predicted Questions)
├── 5. Module 2: NotebookLM Dual-Host AI Studio (Canvas Waveform, Audio Sync, Chalkboard)
├── 6. Module 3: Duolingo Quest Track (SVG Path Tree, XP Leaderboard, 5-Heart Quizzes)
├── 7. Module 4: Active Recall Suite (Leitner 5-Box, Feynman AI Mentor, Blurting Workspace)
├── 8. Module 5: Pomodoro & Ambient Studio (Web Audio Rain, Binaural 10Hz, Lo-Fi)
├── 9. Module 6: NeuroAdapt™ Cognitive Dashboard (16-D Feature Vector & MLP Neural Net)
├── 10. Module 7: Running Notes NLP Analyzer (Confusion Marker Detection & Patch Quizzes)
├── 11. Module 8: Exam Simulator & Worksheet Generator
└── 12. Module 9: Digital Library Vault & Beyond-Syllabus Academy
```

---

## 3. Data Schema & Neural Engine Equations

### A. IndexedDB Object Stores
- `users`: `{ id, country, syllabus_id, grade, streak, xp, hearts, cognitive_profile }`
- `syllabi`: `{ id, country_name, exam_board, subject, chapter_matrix, heatmap_data }`
- `neuro_profile`: `{ profile_id, feature_vector_16d, mlp_weights, decay_multiplier }`
- `student_notes`: `{ note_id, text_content, confusion_terms, patch_quizzes }`
- `leitner_cards`: `{ card_id, topic, front, back, box_number, review_date }`

### B. NeuroAdapt Neural Network Inference
$$\text{Input Vector } X = [x_1, x_2, \dots, x_{16}]^T$$
$$H_1 = \text{ReLU}(W_1 X + B_1)$$
$$H_2 = \text{ReLU}(W_2 H_1 + B_2)$$
$$Y = \sigma(W_3 H_2 + B_3)$$

---

## 4. Prompt Generator Instructions for External Design Systems
When pasting this specification into Figma AI, Midjourney, v0.dev, or Claude Artifacts:
1. Enforce **Dark Mode Obsidian Canvas (`#030712`)** with backdrop blur glass panels (`rgba(15, 23, 42, 0.65)`).
2. Use rounded pill badges, subtle glowing stroke borders, and SF Pro style typography.
3. Ensure no visual clutter; prioritize whitespace, typography contrast, and high-impact micro-animations.
