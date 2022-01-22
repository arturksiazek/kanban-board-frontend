import { createStore } from "vuex";
import axios from "@/plugins/axios";
import { State } from "./index.types";

export default createStore<State>({
  state: {
    board: null,
    task: null,
    projects: null,
  },
  getters: {
    getColumns: (state) => state.board?.lists,
    getNextColumn: (state) => {
      return state.board?.lists.find(
        (list) =>
          state.task?.list?.index && list.index === state.task?.list?.index + 1
      );
    },
  },
  mutations: {
    setBoard: (state, board) => {
      state.board = board;
    },

    setTask: (state, task) => {
      state.task = task;
    },

    setProjects: (state, projects) => {
      state.projects = projects;
    },
  },
  actions: {
    async fetchBoard({ commit }, boardSlug) {
      const { data } = await axios.get(`/board/${boardSlug}`);

      commit("setBoard", data);

      return data;
    },

    async fetchTask({ commit }, taskSlug) {
      const { data } = await axios.get(`/task/${taskSlug}`);

      commit("setTask", data);

      return data;
    },

    async fetchProjects({ commit }, boardId) {
      const { data } = await axios.get(`/project/${boardId}`);

      commit("setProjects", data);

      return data;
    },

    async updateTask({ commit }, task) {
      const { data } = await axios.put(`/task/${task.slug}`, { task });

      commit("setTask", task);

      return data;
    },

    async changeTaskList({ state }, { task, newListId }) {
      await state.board?.lists.find((list) => {
        if (list.id === newListId) {
          list.tasks.push(task);

          return list;
        }
      });

      await state.board?.lists.find((list) => {
        if (list.id === task.listId) {
          list.tasks = list.tasks.filter((element) => element.id !== task.id);

          return list;
        }
      });
    },
  },
});
