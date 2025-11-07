// Este é um script para ser rodado com Node.js
// Use: node setup.js

const firebase = require("firebase/compat/app");
require("firebase/compat/firestore");

// =======================================================
// 1. CONFIGURAÇÃO DO FIREBASE
// =======================================================
const firebaseConfig = {
  apiKey: "AIzaSyCO4KtG1vMPqLOBPJ2z2Uw2A2V0iQQeY1k",
  authDomain: "fit-love-demo.firebaseapp.com",
  projectId: "fit-love-demo",
  storageBucket: "fit-love-demo.firebasestorage.app",
  messagingSenderId: "735744448777",
  appId: "1:735744448777:web:0a3925a0df07d18cb09bd8",
};

// =======================================================
// 2. OS DADOS COMPLETOS DOS SEUS TREINOS (ATUALIZADO)
// =======================================================
const treinos = {
  treinoABC: [
    {
      nome: "Supino Vertical Na Maquina",
      serie: "3 x 12",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "40 kg", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Voador - Peck Deck",
      serie: "4 x 10",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "25 kg", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Supino Inclinado Com Halteres",
      serie: "4 x 10",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "10 kg", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Tríceps Pulley",
      serie: "3 x 10",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "30 kg", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Tríceps Corda No Cross Over",
      serie: "3 x 10",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "25 kg", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Desenvolvimento No Aparelho",
      serie: "4 x 10",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "20 kg", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Elevação Lateral",
      serie: "3 x 10",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "7 kg", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Elevação Frontal Com Halteres",
      serie: "3 x 10",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "7 kg", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Abdominal Amplitude Máxima",
      serie: "4 x 12",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Agachamento Com Apoio",
      serie: "4 x 12",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Elevação de Coxa",
      serie: "3 x 10",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Cadeira Extensora",
      serie: "4 x 10",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Leg Press",
      serie: "3 x 12",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Adução de Coxa",
      serie: "3 x 12",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Abdução de Coxa",
      serie: "3 x 12",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Flexão Em Pé Máquina",
      serie: "4 x 10",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Panturrilha Em Pé",
      serie: "3 x 15",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Panturrilha Sentado",
      serie: "3 x 15",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Puxada Alta Aberta",
      serie: "3 x 10",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "35 kg", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Puxada Alta Fechada",
      serie: "3 x 10",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Remada Baixa Fechada",
      serie: "3 x 10",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "25 kg", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Remada Cavalinho No Aparelho",
      serie: "3 x 10",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "15 kg", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Voador Inverso",
      serie: "3 x 10",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "25 kg", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Rosca Direta",
      serie: "3 x 10",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "8 kg", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Rosca Scott",
      serie: "3 x 10",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Rosca Alternada",
      serie: "3 x 10",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
  ],
  treinoABCD: [
    {
      nome: "Supino Reto Com Barra",
      serie: "3 x 10",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Crucifixo",
      serie: "3 x 15",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Voador - Peck Deck",
      serie: "3 x 7+10",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "DIMINU...", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Supino Inclinado Com Halteres",
      serie: "4 x 12",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Tríceps Inverso Na Polia",
      serie: "4 x 8",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "ALTA", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Tríceps Pulley",
      serie: "4 x 15",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "LEVE", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Desenvolvimento Articulado",
      serie: "3 x 15",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "MÉDIA", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Esteira",
      serie: "1 x 20 MIN",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Cadeira Extensora",
      serie: "3 x 6+8+12",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "DIMINU...", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Agachamento Livre",
      serie: "3 x 10",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Hack",
      serie: "2 x 20",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "LEVE", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Afundo Com Halteres",
      serie: "2 x 15",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Adução de Coxa",
      serie: "4 x 12",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Abdominal Amplitude Máxima",
      serie: "4 x 12",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Rosca Scott",
      serie: "3 x 8+10",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "DIMINU...", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Rosca Martelo Inclinado",
      serie: "3 x 12",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Rosca Alternada Com Isometria",
      serie: "3 x 12",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Esteira",
      serie: "1 x 20 MIN",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Pull Down Com Corda",
      serie: "3 x 10",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Puxada Alta Aberta",
      serie: "3 x 10",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Puxada Alta Fechada",
      serie: "3 x 10",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Remada Baixa Aberta",
      serie: "3 x 10",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Remada Baixa Fechada",
      serie: "3 x 10",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Abdução de Coxa",
      serie: "3 x 15",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Leg Press Inclinado",
      serie: "4 x 12",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Flexora",
      serie: "4 x 12",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Agachamento Sumô Halteres",
      serie: "3 x 15",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Stiff",
      serie: "3 x 10",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Panturrilha Em Pé",
      serie: "4 x 15",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Panturrilha Sentado",
      serie: "4 x 12",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Abdominal Prancha",
      serie: "3 x 1 MIN",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Alongamento de Abdômen",
      serie: "3 x 1 MIN",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Alongamento Deitado de Dorsal",
      serie: "3 x 1 MIN",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Perdigueiro Estático",
      serie: "3 x 1 MIN",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
  ],
  treinoHipertrofia: [
    {
      nome: "Supino Reto (Barra ou Halter)",
      serie: "4x 8-12",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Supino Inclinado (Halter)",
      serie: "3x 10-12",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Crucifixo Inclinado (Polia ou Halter)",
      serie: "3x 12-15",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Desenvolvimento (Máquina ou Halter)",
      serie: "4x 8-12",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Elevação Lateral (Halter)",
      serie: "4x 12-15",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Tríceps Testa (Barra W ou Halteres)",
      serie: "3x 10-12",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Tríceps Corda (Polia)",
      serie: "3x 12-15",
      treinoDia: "A",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Barra Fixa (ou Puxada Frontal Polia)",
      serie: "4x 8-12",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Remada Curvada (Barra)",
      serie: "4x 8-12",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Remada Unilateral (Halter 'Serrote')",
      serie: "3x 10-12",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Crucifixo Invertido (Máquina ou Halter)",
      serie: "4x 12-15",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Puxada Alta (Polia)",
      serie: "3x 10-15",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Rosca Direta (Barra W)",
      serie: "3x 10-12",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Rosca Martelo (Halter)",
      serie: "3x 12-15",
      treinoDia: "B",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Agachamento Livre (Barra)",
      serie: "4x 8-12",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Leg Press 45°",
      serie: "4x 10-15",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Cadeira Extensora",
      serie: "3x 12-15",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Afundo (Halteres)",
      serie: "3x 10-12",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Panturrilha em Pé (Máquina ou Smith)",
      serie: "5x 15-20",
      treinoDia: "C",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Levantamento Terra Romeno",
      serie: "4x 10-12",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Cadeira Flexora",
      serie: "4x 12-15",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Elevação Pélvica (Barra)",
      serie: "4x 10-15",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Mesa Flexora",
      serie: "3x 12-15",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Cadeira Abdutora",
      serie: "3x 15-20",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
    {
      nome: "Panturrilha Sentado (Máquina)",
      serie: "5x 15-20",
      treinoDia: "D",
      cargaPorPerfil: { diogo: "-", tiago: "-" },
      gifUrl: "",
    },
  ],
};

// =======================================================
// 3. O SCRIPT QUE FAZ A MÁGICA
// =======================================================

// Inicializa o app Firebase (APENAS UMA VEZ)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

async function cadastrarTreinos() {
  console.log("Iniciando cadastro APENAS dos treinos...");

  try {
    // Apagar coleção 'treinos' antiga (GARANTIA EXTRA)
    // Isso pode demorar um pouco se tiver muitos docs. Se preferir, faça manualmente.
    console.log(
      "Tentando apagar coleção 'treinos' existente (pode demorar)..."
    );
    const treinosCollectionRef = db.collection("treinos");
    const snapshot = await treinosCollectionRef.get();
    if (!snapshot.empty) {
      const batchDelete = db.batch();
      snapshot.docs.forEach((doc) => {
        batchDelete.delete(doc.ref);
        // ATENÇÃO: Se tiver subcoleções profundas, a exclusão precisa ser recursiva.
        // Para 'exercicios', este método pode não apagar tudo.
        // É MAIS SEGURO APAGAR MANUALMENTE PELO CONSOLE.
      });
      // await batchDelete.commit(); // Comentado por segurança, delete manualmente.
      console.log(
        "Coleção 'treinos' deveria ter sido apagada. Verifique no console."
      );
    } else {
      console.log("Coleção 'treinos' não encontrada ou já vazia.");
    }

    // Cadastrar Treinos com a NOVA estrutura
    for (const treinoId in treinos) {
      console.log(`--- Iniciando cadastro do ${treinoId} ---`);

      const listaDeExercicios = treinos[treinoId];
      const treinoRef = db.collection("treinos").doc(treinoId);

      // Garante que o documento de treino exista
      await treinoRef.set({ nome: treinoId }, { merge: true });

      const batch = db.batch();
      for (const exercicio of listaDeExercicios) {
        const exercicioRef = treinoRef.collection("exercicios").doc(); // ID automático
        batch.set(exercicioRef, exercicio);
      }
      await batch.commit();
      console.log(
        `✅ ${listaDeExercicios.length} exercícios do ${treinoId} cadastrados.`
      );
    }

    console.log("\n🎉 CADASTRO DOS TREINOS CONCLUÍDO! 🎉");
    console.log("Verifique os dados no console do Firebase.");
  } catch (error) {
    console.error("❌ ERRO DURANTE O CADASTRO:", error);
  }
}

// Roda a função
cadastrarTreinos();
