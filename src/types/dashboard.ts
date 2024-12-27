// src/types/dashboard.ts
import { LucideIcon } from 'lucide-react'
import React from "react";

export interface DashboardCardProps {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export interface StatusIndicatorProps {
  icon: LucideIcon
  label: string
  value: string | number
  color?: string
}

export interface AlertItemProps {
  message: string
  type?: 'error' | 'warning' | 'info'
}

export interface TaskItemProps {
  task: string
  date: string
  status?: 'pending' | 'scheduled' | 'completed'
}

export interface TabButtonProps {
  value: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export interface GrowthTrendData {
  date: string
  ndvi: number
  moisture: number
  temp: number
}

export interface ResourceUsageData {
  time: string
  water: number
  nutrients: number
}