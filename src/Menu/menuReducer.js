import * as R from "ramda";

const initialState = {
  expandedMenus: []
};

const MenuActions = Object.freeze({
  TOGGLE_MENU: "TOGGLE_MENU"
});

const expandedLens = R.lensProp('expandedMenus');

const toggleItem = R.curry((id, data) => R.ifElse(R.includes(id), R.without(id), R.append(id))(data));

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case MenuActions.TOGGLE_MENU:
      return R.over(
        expandedLens,
        toggleItem(payload.id),
        state
      );

    default:
      return state;
  }
};

function toggleMenuAction(id) {
  return {
    type: MenuActions.TOGGLE_MENU,
    payload: { id }
  };
}

function bindActionCreators(dispatch) {
  return {
    toggleMenu: R.compose(dispatch, toggleMenuAction)
  };
}

export { reducer, initialState, bindActionCreators };
