const workouts = [
  {
    category: 'push',
    type: 'Salle',
    name: 'Push Salle A',
    subtitle: 'Séance axée sur les pectoraux, épaules et triceps.',
    exercises: [
      ['Chest press', '3 x 6-8 • Repos 3 min • Mouvement de base pour les pecs, triceps, deltoïdes antérieurs.'],
      ['Shoulder press', '3 x 6-8 • Repos 3 min • Développement des épaules et du triceps.'],
      ['Pec fly', '3 x 8-12 • Repos 2-3 min • Isolation des pectoraux.'],
      ['Triceps extension poulie', '3 x 8-12 • Repos 3 min • Isolation triceps, surcharge progressive.'],
      ['Overhead triceps', '2-3 x 10-12 • Repos 3 min • Accent sur la longue portion du triceps.'],
      ['Élévations latérales', '3 x 12-20 • Repos 2 min • Deltoïde moyen, largeur d’épaules.']
    ]
  },
  {
    category: 'push',
    type: 'Salle',
    name: 'Push Salle B',
    subtitle: 'Variante avec développé incliné et travail arrière d’épaule.',
    exercises: [
      ['Développé incliné machine ou haltères', '3 x 6-8 • Repos 3 min • Pectoraux hauts, épaules antérieures, triceps.'],
      ['Converging chest press', '3 x 8-10 • Repos 3 min • Pecs avec trajectoire guidée, bon contrôle.'],
      ['Pec fly', '3 x 8-12 • Repos 2-3 min • Isolation pecs, étirement et contraction.'],
      ['Shoulder press', '3 x 6-8 • Repos 3 min • Poussée verticale principale.'],
      ['Rear delt / oiseau machine', '3 x 12-15 • Repos 2 min • Arrière d’épaule, équilibre du haut du corps.'],
      ['Triceps extension poulie', '3 x 8-12 • Repos 3 min • Travail direct des triceps.'],
      ['Overhead triceps', '3 x 8-12 • Repos 3 min • Longue portion du triceps.'],
      ['Élévations latérales', '3 x 12-20 • Repos 2 min • Deltoïde moyen, largeur d’épaules.']
    ]
  },
  {
    category: 'push',
    type: 'Maison',
    name: 'Push Maison A',
    subtitle: 'Version maison avec haltères et poids de corps.',
    exercises: [
      ['Pompes déclinées', '4 x 8-20 • Repos 2-3 min • Pecs hauts, triceps.'],
      ['Développé haltères au sol', '3 x 8-15 • Repos 3 min • Remplace le chest press, pecs + triceps.'],
      ['Pike push up', '3 x 6-15 • Repos 2-3 min • Épaules, surtout deltoïdes antérieurs.'],
      ['Extension triceps au-dessus de la tête', '3 x 10-20 • Repos 2-3 min • Triceps, longue portion.'],
      ['Élévations latérales haltères', '3 x 12-20 • Repos 2 min • Deltoïde moyen.'],
      ['Pompes serrées', '2 x échec contrôlé • Repos 2 min • Finisher triceps.']
    ]
  },
  {
    category: 'push',
    type: 'Maison',
    name: 'Push Maison B',
    subtitle: 'Alternative plus orientée volume et contrôle.',
    exercises: [
      ['Pompes classiques ou elevated', '4 x 10-20 • Repos 2-3 min • Base pecs/triceps.'],
      ['Pike push up', '3 x 6-15 • Repos 2-3 min • Travail épaules.'],
      ['Développé haltères au sol prise neutre', '3 x 8-15 • Repos 3 min • Pecs et triceps, plus confortable.'],
      ['Écartés au sol avec haltères', '3 x 12-20 • Repos 2 min • Isolation pecs.'],
      ['Extension triceps unilatérale', '3 x 10-20 • Repos 2 min • Triceps, bon contrôle.'],
      ['Élévations latérales', '3 x 15-20 • Repos 2 min • Volume épaules.']
    ]
  },
  {
    category: 'pull',
    type: 'Salle',
    name: 'Pull Salle A',
    subtitle: 'Séance dos et biceps avec tirage vertical et horizontal.',
    exercises: [
      ['Tractions ou lat pulldown', '3 x 6-8 • Repos 3 min • Grand dorsal et biceps.'],
      ['Low row', '3 x 6-8 • Repos 3 min • Tirage horizontal pour le milieu du dos.'],
      ['Biceps curl barre ou pupitre', '3 x 8-10 • Repos 2-3 min • Priorité biceps.'],
      ['Rear delt', '3 x 10-15 • Repos 2 min • Arrière d’épaule et haut du dos.'],
      ['Hammer curl', '3 x 8-12 • Repos 2-3 min • Brachial, brachio-radial, avant-bras.']
    ]
  },
  {
    category: 'pull',
    type: 'Salle',
    name: 'Pull Salle B',
    subtitle: 'Variante avec plus de volume sur les bras et le dos.',
    exercises: [
      ['Lat pulldown prise différente', '3 x 8-10 • Repos 3 min • Dos large, variation du tirage vertical.'],
      ['Rowing barre ou low row', '3 x 6-8 • Repos 3 min • Épaisseur du dos.'],
      ['Curl à la poulie', '3 x 10-12 • Repos 2-3 min • Tension continue sur les biceps.'],
      ['Reverse grip curl pronation', '3 x 8-12 • Repos 2 min • Avant-bras + brachial.'],
      ['Rear delt', '3 x 12-15 • Repos 2 min • Stabilisation et posture.']
    ]
  },
  {
    category: 'pull',
    type: 'Maison',
    name: 'Pull Maison A',
    subtitle: 'Séance simple à la maison avec haltères.',
    exercises: [
      ['Curl haltère strict', '3 x 8-15 • Repos 2-3 min • Biceps en priorité.'],
      ['Curl marteau haltère', '3 x 8-15 • Repos 2-3 min • Brachial et avant-bras.'],
      ['Rowing haltère unilatéral', '3 x 10-15 • Repos 2-3 min • Dos, grand dorsal, milieu du dos.'],
      ['Oiseau buste penché', '3 x 12-20 • Repos 2 min • Arrière d’épaule.'],
      ['Curl concentration', '2-3 x 10-15 • Repos 2 min • Finisher biceps.']
    ]
  },
  {
    category: 'pull',
    type: 'Maison',
    name: 'Pull Maison B',
    subtitle: 'Accent sur le rowing, les curls et l’arrière d’épaule.',
    exercises: [
      ['Rowing haltère buste penché', '3 x 10-15 • Repos 2-3 min • Dos et gainage.'],
      ['Curl haltère alterné', '3 x 8-15 • Repos 2-3 min • Biceps, contrôle et amplitude.'],
      ['Curl marteau', '3 x 10-15 • Repos 2 min • Brachial, avant-bras.'],
      ['Oiseau haltères', '3 x 15-20 • Repos 2 min • Arrière d’épaule.'],
      ['Curl isométrique en fin de série', '2 x 20-30 sec • Repos 1-2 min • Burn biceps.']
    ]
  },
  {
    category: 'jambes',
    type: 'Salle',
    name: 'Jambes Salle',
    subtitle: 'Séance complète jambes avec base quadri, ischios et mollets.',
    exercises: [
      ['Squat barre ou smith machine', '3 x 6-10 • Repos 3 min • Mouvement principal.'],
      ['Leg press', '3 x 8-12 • Repos 3 min • Gros volume quadriceps, fessiers, ischios.'],
      ['Prone leg curl', '3 x 6-8 • Repos 3 min • Ischios-jambiers.'],
      ['Hip abduction', '3 x 8-12 • Repos 2-3 min • Moyen fessier, abducteurs.'],
      ['Hip adduction', '3 x 8-12 • Repos 2-3 min • Adducteurs.'],
      ['Calf raise', '4 x 10-20 • Repos 2 min • Mollets.']
    ]
  },
  {
    category: 'jambes',
    type: 'Maison',
    name: 'Jambes Maison',
    subtitle: 'Version maison orientée volume, stabilité et travail unilatéral.',
    exercises: [
      ['Squat maison', '4 x 15-25 • Repos 2-3 min • Quadriceps, fessiers, endurance musculaire.'],
      ['Bulgarian split squat avec haltères', '3 x 8-15 / jambe • Repos 2-3 min • Quadriceps, fessiers, stabilité.'],
      ['Romanian deadlift haltères', '3 x 10-20 • Repos 2-3 min • Ischios-jambiers, fessiers.'],
      ['Hip thrust ou glute bridge haltères', '3 x 12-20 • Repos 2 min • Fessiers.'],
      ['Calf raise unilatéral', '4 x 15-25 • Repos 1-2 min • Mollets.'],
      ['Abdos jambes vers le haut', '3 x 15-20 • Repos 1-2 min • Abdos.']
    ]
  }
];

const grid = document.querySelector('#workoutGrid');
const template = document.querySelector('#workoutCardTemplate');
const chips = document.querySelectorAll('.chip');

function render(filter = 'all') {
  grid.innerHTML = '';
  workouts.filter(w => filter === 'all' || w.category === filter).forEach(workout => {
    const card = template.content.cloneNode(true);
    const article = card.querySelector('.card');
    card.querySelector('.card__tag').textContent = `${workout.type} • ${workout.category.toUpperCase()}`;
    card.querySelector('.card__title').textContent = workout.name;
    card.querySelector('.card__subtitle').textContent = workout.subtitle;
    const list = card.querySelector('.exercise-list');
    workout.exercises.forEach(([name, meta]) => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="exercise-name">${name}</span><span class="exercise-meta">${meta}</span>`;
      list.appendChild(li);
    });
    grid.appendChild(card);
  });
}

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    render(chip.dataset.filter);
  });
});

render();