// سوال 15 کتاب الگوریتم
function analyzeParticipants(participants) {
  let totalMaleParticipantsWithFieldCode24 = 0;
  let totalParticipantsUnder18 = 0;
  let totalParticipantsWithFieldCode24 = 0;

  participants.forEach((participant) => {
    if (participant.genderCode === 1 && participant.fieldCode === 24) {
      totalMaleParticipantsWithFieldCode24++;
    }
    if (participant.age < 18) {
      totalParticipantsUnder18++;
    }
    if (participant.fieldCode === 24) {
      totalParticipantsWithFieldCode24++;
    }
  });

  const totalParticipants = participants.length;
  const percentageWithFieldCode24 =
    (totalParticipantsWithFieldCode24 / totalParticipants) * 100;

  console.log(
    `Total male participants with field code 24: ${totalMaleParticipantsWithFieldCode24}`
  );
  console.log(`Total participants under 18: ${totalParticipantsUnder18}`);
  console.log(
    `Percentage of participants with field code 24: ${percentageWithFieldCode24.toFixed(
      2
    )}%`
  );
}

const participants = [
  {
    name: "sajad",
    participantNumber: 1,
    diplomaCode: 0,
    age: 17,
    fieldCode: 24,
    genderCode: 1,
  },
  {
    name: "Sara",
    participantNumber: 2,
    diplomaCode: 1,
    age: 19,
    fieldCode: 24,
    genderCode: 2,
  },
  {
    name: "taha",
    participantNumber: 1,
    diplomaCode: 2,
    age: 23,
    fieldCode: 22,
    genderCode: 1,
  },
];

analyzeParticipants(participants);
