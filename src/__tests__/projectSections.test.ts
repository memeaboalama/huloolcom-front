import { describe, it, expect } from 'vitest';
import {
  getProjectTabForView,
  isProjectAreaView,
  isProjectListView,
  PROJECT_SECTIONS,
  PROJECT_SIDEBAR_SECTIONS,
} from '../features/admin/constants/projectSections';

describe('admin project sidebar sections', () => {
  it('defines all uniquely routed project sections', () => {
    expect(PROJECT_SECTIONS.map((section) => section.key)).toEqual([
      'all',
      'with_offers',
      'without_offers',
      'pending_review',
      'pending',
      'in_progress',
      'completed',
      'canceled',
    ]);
    expect(new Set(PROJECT_SECTIONS.map((section) => section.view)).size).toBe(8);
  });

  it('shows only the requested sections in the sidebar and places pending before in progress', () => {
    expect(PROJECT_SIDEBAR_SECTIONS.map((section) => section.key)).toEqual([
      'all',
      'with_offers',
      'pending',
      'in_progress',
      'completed',
    ]);
  });

  it('maps every routed section back to its project tab', () => {
    PROJECT_SECTIONS.forEach((section) => {
      expect(getProjectTabForView(section.view)).toBe(section.key);
      expect(isProjectListView(section.view)).toBe(true);
    });
  });

  it('keeps project detail routes inside the project area', () => {
    expect(isProjectAreaView('projectDetail')).toBe(true);
    expect(isProjectAreaView('createProject')).toBe(true);
    expect(isProjectListView('projectDetail')).toBe(false);
    expect(getProjectTabForView('dashboard')).toBe('all');
  });
});
