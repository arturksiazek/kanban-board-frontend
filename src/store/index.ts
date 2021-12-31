import { createStore } from "vuex";
import axios from "@/plugins/axios";
import { State } from "./index.types";

export default createStore<State>({
  state: {
    board: null,
    task: null,
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

    async updateTask({ commit }, task) {
      const { data } = await axios.put(`/task/${task.slug}`, { task });

      commit("setTask", data);

      return data;
    },
  },
  modules: {},
});
