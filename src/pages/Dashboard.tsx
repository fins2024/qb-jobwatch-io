import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from "recharts";
import { 
  Activity, Clock, CheckCircle, XCircle, 
  RefreshCw, PlayCircle, Pause, AlertTriangle 
} from "lucide-react";
import { mockQuantumJobs, getJobDistribution, getTrendData, QuantumJob } from "@/data/mockJobs";

const Dashboard = () => {
  const [jobs, setJobs] = useState<QuantumJob[]>(mockQuantumJobs);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoRefresh) {
      interval = setInterval(() => {
        // Simulate real-time updates
        setJobs(prev => {
          const updated = [...prev];
          // Randomly update some running jobs
          updated.forEach(job => {
            if (job.status === 'RUNNING' && Math.random() > 0.7) {
              if (Math.random() > 0.8) {
                job.status = 'COMPLETED';
                job.duration = Math.floor(Math.random() * 200) + 30;
              }
            }
          });
          return updated;
        });
        setLastUpdated(new Date());
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoRefresh]);

  const statusCounts = {
    queued: jobs.filter(j => j.status === 'QUEUED').length,
    running: jobs.filter(j => j.status === 'RUNNING').length,
    completed: jobs.filter(j => j.status === 'COMPLETED').length,
    failed: jobs.filter(j => j.status === 'FAILED').length,
  };

  const distributionData = getJobDistribution();
  const trendData = getTrendData();

  const COLORS = {
    QUEUED: '#fbbf24',
    RUNNING: '#3b82f6', 
    COMPLETED: '#10b981',
    FAILED: '#ef4444'
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      QUEUED: 'secondary',
      RUNNING: 'default',
      COMPLETED: 'default',
      FAILED: 'destructive'
    } as const;
    return variants[status as keyof typeof variants] || 'secondary';
  };

  const formatDuration = (seconds: number | null) => {
    if (!seconds) return 'N/A';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const handleRefresh = () => {
    setLastUpdated(new Date());
    // In a real app, this would fetch new data
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 gradient-text">Quantum Jobs Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time monitoring of IBM Quantum computing jobs
          </p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <div className="text-sm text-muted-foreground">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={autoRefresh ? 'bg-accent text-accent-foreground' : ''}
          >
            {autoRefresh ? <Pause className="h-4 w-4 mr-2" /> : <PlayCircle className="h-4 w-4 mr-2" />}
            Auto-refresh
          </Button>
          <Button variant="outline" size="sm" onClick={handleRefresh}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Status Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="card-quantum">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Queued Jobs</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusCounts.queued}</div>
            <p className="text-xs text-muted-foreground">Waiting for execution</p>
          </CardContent>
        </Card>

        <Card className="card-quantum">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Running Jobs</CardTitle>
            <Activity className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusCounts.running}</div>
            <p className="text-xs text-muted-foreground">Currently executing</p>
          </CardContent>
        </Card>

        <Card className="card-quantum">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Jobs</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusCounts.completed}</div>
            <p className="text-xs text-muted-foreground">Successfully finished</p>
          </CardContent>
        </Card>

        <Card className="card-quantum">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Jobs</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusCounts.failed}</div>
            <p className="text-xs text-muted-foreground">Execution failed</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="card-quantum">
          <CardHeader>
            <CardTitle>Job Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ status, percentage }) => `${status}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.status as keyof typeof COLORS]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="card-quantum">
          <CardHeader>
            <CardTitle>Execution Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="failed" stroke="#ef4444" strokeWidth={2} />
                <Line type="monotone" dataKey="running" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Jobs Table */}
      <Card className="card-quantum">
        <CardHeader>
          <CardTitle>Recent Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium">Job ID</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-left py-3 px-4 font-medium">Device</th>
                  <th className="text-left py-3 px-4 font-medium">Qubits</th>
                  <th className="text-left py-3 px-4 font-medium">Duration</th>
                  <th className="text-left py-3 px-4 font-medium">User</th>
                </tr>
              </thead>
              <tbody>
                {jobs.slice(0, 10).map((job) => (
                  <tr key={job.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">{job.id}</td>
                    <td className="py-3 px-4">
                      <Badge variant={getStatusBadge(job.status)}>
                        {job.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm">{job.device}</td>
                    <td className="py-3 px-4 text-sm">{job.qubits}</td>
                    <td className="py-3 px-4 text-sm">{formatDuration(job.duration)}</td>
                    <td className="py-3 px-4 text-sm">{job.userId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;