import type { ComponentType } from 'react';
import type { ViewType } from '../../../shared/types';
import {
  ArchiveBoxIcon,
  BidsIcon,
  CheckCircleIcon,
  ClockIcon,
  ProjectsIcon,
  XCircleIcon,
  ZapIcon,
} from '../../../shared/components/Icons';

export type ProjectTabKey =
  | 'all'
  | 'with_offers'
  | 'without_offers'
  | 'pending_review'
  | 'in_progress'
  | 'completed'
  | 'canceled';

export interface ProjectSection {
  key: ProjectTabKey;
  view: ViewType;
  labelKey: string;
  icon: ComponentType<{ className?: string }>;
}

export const PROJECT_SECTIONS: ProjectSection[] = [
  { key: 'all', view: 'projects', labelKey: 'projectsView.tabs.all', icon: ProjectsIcon },
  { key: 'with_offers', view: 'projectsWithOffers', labelKey: 'projectsView.tabs.withOffers', icon: BidsIcon },
  { key: 'without_offers', view: 'projectsWithoutOffers', labelKey: 'projectsView.tabs.withoutOffers', icon: ArchiveBoxIcon },
  { key: 'pending_review', view: 'projectsPendingReview', labelKey: 'projectsView.tabs.pendingReview', icon: ClockIcon },
  { key: 'in_progress', view: 'projectsInProgress', labelKey: 'projectsView.tabs.inProgress', icon: ZapIcon },
  { key: 'completed', view: 'projectsCompleted', labelKey: 'projectsView.tabs.completed', icon: CheckCircleIcon },
  { key: 'canceled', view: 'projectsCanceled', labelKey: 'projectsView.tabs.canceled', icon: XCircleIcon },
];

export const PROJECT_SECTION_VIEWS = PROJECT_SECTIONS.map((section) => section.view);

const PROJECT_VIEW_TABS = Object.fromEntries(
  PROJECT_SECTIONS.map((section) => [section.view, section.key])
) as Record<string, ProjectTabKey>;

const PROJECT_DETAIL_VIEWS: ViewType[] = [
  'projectDetail',
  'createProject',
  'bidDetail',
  'taskDetail',
];

export function getProjectTabForView(view: ViewType): ProjectTabKey {
  return PROJECT_VIEW_TABS[view] ?? 'all';
}

export function isProjectListView(view: ViewType): boolean {
  return PROJECT_SECTION_VIEWS.includes(view);
}

export function isProjectAreaView(view: ViewType): boolean {
  return isProjectListView(view) || PROJECT_DETAIL_VIEWS.includes(view);
}
