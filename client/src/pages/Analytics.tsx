import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataVisualization from "@/components/DataVisualization";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MOCK_DATA = {
  gasUsage: Array.from({ length: 30 }, (_, i) => ({
    timestamp: new Date(Date.now() - i * 24 * 60 * 60 * 1000),
    value: Math.random() * 100
  })),
  transactions: Array.from({ length: 30 }, (_, i) => ({
    timestamp: new Date(Date.now() - i * 24 * 60 * 60 * 1000),
    value: Math.floor(Math.random() * 1000)
  }))
};

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("30d");
  
  const { data: analyticsData, isLoading } = useQuery({
    queryKey: ["analytics", timeRange],
    queryFn: async () => MOCK_DATA, // Replace with actual API call
    staleTime: 5 * 60 * 1000 // 5 minutes
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Analytics Dashboard</h1>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px] border-green-500/30 bg-black/40 text-white">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent className="bg-black/90 border-green-500/30 text-white">
            <SelectItem value="24h">Last 24 hours</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-black/40 border-green-500/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Gas Usage</CardTitle>
          </CardHeader>
          <CardContent>
            {analyticsData && (
              <DataVisualization 
                data={analyticsData.gasUsage}
                height={300}
                color="#00ff4c"
              />
            )}
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-green-500/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Transaction Volume</CardTitle>
          </CardHeader>
          <CardContent>
            {analyticsData && (
              <DataVisualization 
                data={analyticsData.transactions}
                height={300}
                color="#00ff4c"
              />
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-black/40 border-green-500/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Network Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2 p-4 rounded-lg bg-green-900/10 border border-green-500/20">
              <h3 className="text-lg font-medium text-white/80">Average Block Time</h3>
              <p className="text-3xl font-bold text-green-400">2.1s</p>
            </div>
            <div className="space-y-2 p-4 rounded-lg bg-green-900/10 border border-green-500/20">
              <h3 className="text-lg font-medium text-white/80">Total Validators</h3>
              <p className="text-3xl font-bold text-green-400">1,234</p>
            </div>
            <div className="space-y-2 p-4 rounded-lg bg-green-900/10 border border-green-500/20">
              <h3 className="text-lg font-medium text-white/80">Network TPS</h3>
              <p className="text-3xl font-bold text-green-400">2,500</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}