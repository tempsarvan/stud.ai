/**
 * stud.io NeuroAdapt Native Client-Side MLP Neural Network
 */
class NeuroNet {
  constructor() {
    this.inputNodes = 16;
    this.hidden1Nodes = 32;
    this.hidden2Nodes = 16;
    this.outputNodes = 5;

    this.W1 = this.randomMatrix(this.hidden1Nodes, this.inputNodes);
    this.B1 = new Array(this.hidden1Nodes).fill(0.1);
    
    this.W2 = this.randomMatrix(this.hidden2Nodes, this.hidden1Nodes);
    this.B2 = new Array(this.hidden2Nodes).fill(0.1);

    this.W3 = this.randomMatrix(this.outputNodes, this.hidden2Nodes);
    this.B3 = new Array(this.outputNodes).fill(0.1);
  }

  randomMatrix(rows, cols) {
    const mat = [];
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        row.push((Math.random() - 0.5) * 0.5);
      }
      mat.push(row);
    }
    return mat;
  }

  relu(arr) {
    return arr.map(x => Math.max(0, x));
  }

  sigmoid(arr) {
    return arr.map(x => 1 / (1 + Math.exp(-x)));
  }

  matMul(matrix, vector) {
    return matrix.map(row => {
      return row.reduce((sum, val, idx) => sum + val * (vector[idx] || 0), 0);
    });
  }

  addVectors(vecA, vecB) {
    return vecA.map((val, idx) => val + (vecB[idx] || 0));
  }

  predict(inputVector) {
    // Forward Pass Layer 1
    const z1 = this.addVectors(this.matMul(this.W1, inputVector), this.B1);
    const a1 = this.relu(z1);

    // Forward Pass Layer 2
    const z2 = this.addVectors(this.matMul(this.W2, a1), this.B2);
    const a2 = this.relu(z2);

    // Forward Pass Layer 3 (Outputs)
    const z3 = this.addVectors(this.matMul(this.W3, a2), this.B3);
    const outputs = this.sigmoid(z3);

    return {
      auditoryPreferenceScore: Math.round(outputs[0] * 100),
      visualPreferenceScore: Math.round(outputs[1] * 100),
      recommendedPomodoroMins: outputs[2] > 0.6 ? 50 : (outputs[2] > 0.3 ? 25 : 15),
      leitnerIntervalMultiplier: Number((0.5 + outputs[3] * 1.5).toFixed(2)),
      overallEfficiencyIndex: Math.round(outputs[4] * 100)
    };
  }
}

window.neuroNet = new NeuroNet();
