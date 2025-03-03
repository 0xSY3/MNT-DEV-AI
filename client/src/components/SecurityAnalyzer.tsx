import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShieldCheck, Loader2, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

interface SecurityAnalyzerProps {
  code: string;
}

interface SecurityIssue {
  severity: 'high' | 'medium' | 'low';
  description: string;
  line?: number;
  snippet?: string;
  recommendation?: string;
  impact?: string;
  agent?: string; // To identify which agent found the issue
}

const SecurityAnalyzer: React.FC<SecurityAnalyzerProps> = ({ code }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<SecurityIssue[]>([]);
  const [overallRisk, setOverallRisk] = useState<string>('');

  // Placeholder Agent Functions
  const VulnerabilityScannerAgent = async (code: string): Promise<SecurityIssue[]> => {
    // Simulate vulnerability scanning
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate analysis time
    return code.includes("reentrancy") ? [{
      severity: 'high',
      agent: 'Vulnerability Scanner',
      description: 'Potential reentrancy vulnerability found.',
      snippet: '// Potential vulnerable code here',
      recommendation: 'Review and mitigate reentrancy risk.',
      impact: 'High: Could lead to unauthorized fund withdrawals.',
    }] : [];
  };

  const GasOptimizationAgent = async (code: string): Promise<SecurityIssue[]> => {
    // Simulate gas optimization analysis
    await new Promise(resolve => setTimeout(resolve, 500));
    return code.includes("for") ? [{
      severity: 'low',
      agent: 'Gas Optimization Agent',
      description: 'Consider optimizing loops for gas efficiency.',
      snippet: 'for (let i = 0; i < largeNumber; i++) { ... }',
      recommendation: 'Minimize operations within loops.',
      impact: 'Low: Increased gas costs for users.',
    }] : [];
  };

  const BestPracticesValidatorAgent = async (code: string): Promise<SecurityIssue[]> => {
    // Simulate best practices validation
    await new Promise(resolve => setTimeout(resolve, 750));
    return !code.includes("modifier onlyOwner") ? [{
      severity: 'medium',
      agent: 'Best Practices Validator',
      description: 'Missing onlyOwner modifier on critical functions.',
      recommendation: 'Implement access control using onlyOwner modifier.',
      impact: 'Medium: Unauthorized access to functions.',
    }] : [];
  };

  const MantleL2OptimizationAgent = async (code: string): Promise<SecurityIssue[]> => {
    // Simulate Mantle L2 specific optimizations
    await new Promise(resolve => setTimeout(resolve, 1250));
    return code.includes("expensiveOperation()") ? [{
      severity: 'low',
      agent: 'Mantle L2 Optimization Agent',
      description: 'Consider moving expensive operations off-chain or optimizing for Mantle L2.',
      snippet: 'expensiveOperation();',
      recommendation: 'Explore Mantle L2 features for off-chain computation or state management.',
      impact: 'Low: Potential performance bottlenecks on Mantle L2.',
    }] : [];
  };


  const analyzeContract = async () => {
    if (!code.trim()) {
      return;
    }

    setIsAnalyzing(true);
    setAnalysisResults([]); // Clear previous results

    try {
      const vulnerabilityIssues = await VulnerabilityScannerAgent(code);
      const gasIssues = await GasOptimizationAgent(code);
      const bestPracticesIssues = await BestPracticesValidatorAgent(code);
      const mantleL2Issues = await MantleL2OptimizationAgent(code);

      const allIssues = [
        ...vulnerabilityIssues,
        ...gasIssues,
        ...bestPracticesIssues,
        ...mantleL2Issues,
      ];

      setAnalysisResults(allIssues);
      setOverallRisk(calculateOverallRisk(allIssues));

    } catch (error) {
      console.error('Security analysis error:', error);
      setAnalysisResults([{
        severity: 'medium',
        agent: 'System',
        description: 'Failed to perform security analysis. Please try again.',
      }]);
      setOverallRisk('medium');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const calculateOverallRisk = (issues: SecurityIssue[]) => {
    if (issues.some(i => i.severity === 'high')) return 'high';
    if (issues.some(i => i.severity === 'medium')) return 'medium';
    if (issues.some(i => i.severity === 'low')) return 'low';
    return 'safe';
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'medium':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'low':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <ShieldCheck className="h-5 w-5 text-white" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-red-500 border-red-500/30 bg-red-500/10';
      case 'medium':
        return 'text-yellow-500 border-yellow-500/30 bg-yellow-500/10';
      case 'low':
        return 'text-green-500 border-green-500/30 bg-green-500/10';
      default:
        return 'text-white border-green-500/30 bg-green-500/10';
    }
  };

  const getOverallRiskBadge = () => {
    const color = getSeverityColor(overallRisk);
    return (
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${color}`}>
        {getSeverityIcon(overallRisk)}
        <span className="ml-2 capitalize">{overallRisk} Risk</span>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <Button
        onClick={analyzeContract}
        disabled={isAnalyzing || !code}
        className="w-full bg-green-600/90 text-white hover:bg-green-500 
          border border-green-500/30 shadow-lg shadow-green-500/20 
          transition-all duration-200 hover:scale-[1.02] h-10"
      >
        {isAnalyzing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Analyzing...
          </>
        ) : (
          <>
            <ShieldCheck className="mr-2 h-4 w-4" />
            Analyze Contract
          </>
        )}
      </Button>

      {analysisResults.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-white">Security Analysis Results</h3>
            {getOverallRiskBadge()}
          </div>
          
          <div className="space-y-4">
            {analysisResults.map((issue, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${getSeverityColor(issue.severity)}`}
              >
                <div className="flex items-start gap-3">
                  {getSeverityIcon(issue.severity)}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium capitalize">
                        {issue.severity} Risk
                      </span>
                      <span className="text-sm opacity-60">Agent: {issue.agent}</span> {/* Display agent name */}
                      {issue.line && (
                        <span className="text-sm opacity-60">Line {issue.line}</span>
                      )}
                    </div>
                    
                    <p className="text-sm opacity-90 mb-3">{issue.description}</p>
                    
                    {issue.snippet && (
                      <div className="my-3 p-3 rounded bg-black/50 font-mono text-sm overflow-x-auto">
                        <pre>{issue.snippet}</pre>
                      </div>
                    )}
                    
                    {issue.impact && (
                      <div className="mt-2">
                        <span className="text-sm font-medium">Impact:</span>
                        <p className="text-sm opacity-90 mt-1">{issue.impact}</p>
                      </div>
                    )}
                    
                    {issue.recommendation && (
                      <div className="mt-2">
                        <span className="text-sm font-medium">Recommendation:</span>
                        <p className="text-sm opacity-90 mt-1">{issue.recommendation}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {analysisResults.length === 0 && !isAnalyzing && (
        <div className="text-sm text-white/60 text-center py-4">
          {code ? "Click analyze to check contract security" : "Enter contract code to analyze"}
        </div>
      )}
    </div>
  );
};

export default SecurityAnalyzer;