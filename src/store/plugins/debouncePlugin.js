import debounce from "lodash/debounce";

export default ({ options, store }) => {
    if (options.debounce) {
        // 我们正在用新的 action 来覆盖这些 action
        return Object.keys(options.debounce).reduce(
            (debouncedActions, action) => {
                debouncedActions[action] = debounce(
                    store[action],
                    options.debounce[action]
                );
                return debouncedActions;
            }, {});
    }
};
