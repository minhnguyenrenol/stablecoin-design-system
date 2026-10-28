import * as React from 'react';

export interface StatCardProps {
  /** Inline-SVG glyph for the Deep-Blue icon well. */
  icon?: React.ReactNode;
  label: string;
  value: React.ReactNode;
  /** Currency suffix, e.g. "hCAD". */
  currency?: string;
  /** Trend / status pill text, e.g. "1,284". */
  trend?: string;
  trendVariant?: 'up' | 'reserve' | 'verify';
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/** KPI figure tile with icon well, label, tabular value, and optional trend. */
export function StatCard(props: StatCardProps): JSX.Element;
