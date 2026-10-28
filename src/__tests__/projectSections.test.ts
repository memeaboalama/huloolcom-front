import { describe, it, expect } from 'vitest';
import {
  getProjectTabForView,
  isProjectAreaView,
  isProjectListView,
  PROJECT_SECTIONS,
} from '../features/admin/constants/projectSections';

describe('admin project sidebar sections', () => {
  it('defines seven uniquely routed sections', () => {
    expect(PROJECT_SECTIONS.map((section) => section.key)).toEqual([
      'all',
      'with_offers',
      'without_offers',
      'pending_review',
      'in_progress',
      'completed',
      'canceled',
    ]);
    expect(new Set(PROJECT_SECTIONS.map((section) => section.view)).size).toBe(7);
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
