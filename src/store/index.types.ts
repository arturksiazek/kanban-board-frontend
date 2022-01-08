interface Task {
  id: string;
  name: string;
  description: string;
  projectId: string;
  listId: string;
  index: number;
  createdAt: string;
  updatedAt: string;
  project: Project;
  list: ListItem;
}

interface Project {
  id: string;
  name: string;
  boardId: string;
  index: number;
  createdAt: string;
  updatedAt: string;
}

interface ListItem {
  id: string;
  name: string;
  boardId: string;
  index: number;
  createdAt: string;
  updatedAt: string;
  tasks: Task[];
}

interface Board {
  id: string;
  name: string;
  slug: string;
  index: number;
  createdAt: string;
  updatedAt: string;
  lists: ListItem[];
}

export interface State {
  board: Board | null;
  task: Task | null;
  projects: Array<Project> | null;
}
