export interface QuantumJob {
  id: string;
  status: 'QUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED';
  startTime: string;
  duration: number | null; // in seconds
  qubits: number;
  shots: number;
  device: string;
  userId: string;
  circuitDepth: number;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  estimatedTime?: number; // estimated completion time in seconds
  errorMessage?: string;
}

export const mockQuantumJobs: QuantumJob[] = [
  {
    id: "qjb_ibmq_001",
    status: "COMPLETED",
    startTime: "2024-01-08T14:30:15Z",
    duration: 45,
    qubits: 5,
    shots: 1024,
    device: "ibmq_lima",
    userId: "user_alice",
    circuitDepth: 12,
    priority: "HIGH"
  },
  {
    id: "qjb_ibmq_002",
    status: "RUNNING",
    startTime: "2024-01-08T14:45:22Z",
    duration: null,
    qubits: 16,
    shots: 8192,
    device: "ibmq_mumbai",
    userId: "user_bob",
    circuitDepth: 24,
    priority: "HIGH",
    estimatedTime: 120
  },
  {
    id: "qjb_ibmq_003",
    status: "QUEUED",
    startTime: "2024-01-08T14:48:30Z",
    duration: null,
    qubits: 27,
    shots: 4096,
    device: "ibmq_cairo",
    userId: "user_charlie",
    circuitDepth: 35,
    priority: "MEDIUM",
    estimatedTime: 180
  },
  {
    id: "qjb_ibmq_004",
    status: "COMPLETED",
    startTime: "2024-01-08T14:15:10Z",
    duration: 67,
    qubits: 7,
    shots: 2048,
    device: "ibmq_casablanca",
    userId: "user_diana",
    circuitDepth: 18,
    priority: "LOW"
  },
  {
    id: "qjb_ibmq_005",
    status: "FAILED",
    startTime: "2024-01-08T14:25:45Z",
    duration: 15,
    qubits: 65,
    shots: 1024,
    device: "ibmq_montreal",
    userId: "user_eve",
    circuitDepth: 45,
    priority: "HIGH",
    errorMessage: "Circuit compilation error: Gate sequence invalid"
  },
  {
    id: "qjb_ibmq_006",
    status: "QUEUED",
    startTime: "2024-01-08T14:50:12Z",
    duration: null,
    qubits: 12,
    shots: 4096,
    device: "ibmq_belem",
    userId: "user_frank",
    circuitDepth: 22,
    priority: "LOW",
    estimatedTime: 95
  },
  {
    id: "qjb_ibmq_007",
    status: "RUNNING",
    startTime: "2024-01-08T14:42:18Z",
    duration: null,
    qubits: 20,
    shots: 16384,
    device: "ibmq_guadalupe",
    userId: "user_grace",
    circuitDepth: 28,
    priority: "MEDIUM",
    estimatedTime: 150
  },
  {
    id: "qjb_ibmq_008",
    status: "COMPLETED",
    startTime: "2024-01-08T14:10:33Z",
    duration: 89,
    qubits: 8,
    shots: 8192,
    device: "ibmq_quito",
    userId: "user_henry",
    circuitDepth: 15,
    priority: "MEDIUM"
  },
  {
    id: "qjb_ibmq_009",
    status: "QUEUED",
    startTime: "2024-01-08T14:52:40Z",
    duration: null,
    qubits: 33,
    shots: 2048,
    device: "ibmq_kolkata",
    userId: "user_ivy",
    circuitDepth: 40,
    priority: "HIGH",
    estimatedTime: 200
  },
  {
    id: "qjb_ibmq_010",
    status: "RUNNING",
    startTime: "2024-01-08T14:38:55Z",
    duration: null,
    qubits: 14,
    shots: 4096,
    device: "ibmq_lagos",
    userId: "user_jack",
    circuitDepth: 26,
    priority: "LOW",
    estimatedTime: 110
  },
  {
    id: "qjb_ibmq_011",
    status: "COMPLETED",
    startTime: "2024-01-08T14:05:20Z",
    duration: 34,
    qubits: 3,
    shots: 1024,
    device: "ibmq_manila",
    userId: "user_karen",
    circuitDepth: 8,
    priority: "LOW"
  },
  {
    id: "qjb_ibmq_012",
    status: "FAILED",
    startTime: "2024-01-08T14:35:12Z",
    duration: 8,
    qubits: 127,
    shots: 8192,
    device: "ibmq_washington",
    userId: "user_liam",
    circuitDepth: 55,
    priority: "HIGH",
    errorMessage: "Hardware calibration error: Qubit connectivity issues"
  },
  {
    id: "qjb_ibmq_013",
    status: "QUEUED",
    startTime: "2024-01-08T14:55:08Z",
    duration: null,
    qubits: 9,
    shots: 2048,
    device: "ibmq_nairobi",
    userId: "user_mia",
    circuitDepth: 19,
    priority: "MEDIUM",
    estimatedTime: 75
  },
  {
    id: "qjb_ibmq_014",
    status: "RUNNING",
    startTime: "2024-01-08T14:46:30Z",
    duration: null,
    qubits: 18,
    shots: 4096,
    device: "ibmq_oslo",
    userId: "user_noah",
    circuitDepth: 31,
    priority: "HIGH",
    estimatedTime: 140
  },
  {
    id: "qjb_ibmq_015",
    status: "COMPLETED",
    startTime: "2024-01-08T14:00:45Z",
    duration: 123,
    qubits: 25,
    shots: 16384,
    device: "ibmq_perth",
    userId: "user_olivia",
    circuitDepth: 42,
    priority: "HIGH"
  }
];

export const getJobsByStatus = (status: QuantumJob['status']) => {
  return mockQuantumJobs.filter(job => job.status === status);
};

export const getJobDistribution = () => {
  const distribution = mockQuantumJobs.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return Object.entries(distribution).map(([status, count]) => ({
    status,
    count,
    percentage: Math.round((count / mockQuantumJobs.length) * 100)
  }));
};

export const getTrendData = () => {
  // Generate hourly completion trend for the last 6 hours
  const hours = Array.from({ length: 6 }, (_, i) => {
    const hour = new Date();
    hour.setHours(hour.getHours() - (5 - i));
    return hour.getHours();
  });

  return hours.map(hour => ({
    hour: `${hour}:00`,
    completed: Math.floor(Math.random() * 8) + 2,
    failed: Math.floor(Math.random() * 3),
    running: Math.floor(Math.random() * 5) + 1
  }));
};