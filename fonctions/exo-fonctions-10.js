
const dureesTaches = [25, 40, 15, 60, 5, 45];

const estTacheLongue = (duree) => duree >= 30;


const filtrerTachesLongues = (tableauDurees) => {
  const tachesLongues = [];

  for (let i = 0; i < tableauDurees.length; i++) {
    const duree = tableauDurees[i];

    if (estTacheLongue(duree)) {
      tachesLongues.push(duree);
    }
  }

  return tachesLongues;
};


const dureesLongues = filtrerTachesLongues(dureesTaches);


console.log("Toutes les tâches :", dureesTaches);
console.log("Tâches longues :", dureesLongues);
