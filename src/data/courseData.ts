// Re-export types from types.ts
export type { SubTopic, Meeting, Assignment, RubricItem } from './types';

// Import and export course data from meetings
import { allMeetings } from './meetings';

export const courseData = allMeetings;