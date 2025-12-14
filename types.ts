import React from 'react';

export interface MetricCardProps {
  label: string;
  value: string;
  trend: number;
  icon: React.ReactNode;
  delay?: number;
}

export interface GroupData {
  id: number;
  name: string;
  members: number;
  mentions: number;
  status: 'excellent' | 'positive' | 'neutral' | 'attention' | 'critical';
  tags: string[];
}

export interface AlertData {
  id: number;
  group: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  time: string;
}