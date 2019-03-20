import * as R from "ramda";

const initialState = {
  openSubMenus: [],
  expandMenu: false
};

const MenuActions = Object.freeze({
  TOGGLE_SUB_MENU: "TOGGLE_SUB_MENU",
  EXPAND_MENU: "EXPAND_MENU"
});

const openSubMenuLens = R.lensProp("openSubMenus");

const toggleSubMenu = R.curry((id, data) =>
  R.ifElse(R.includes(id), R.without(id), R.append(id))(data)
);

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case MenuActions.TOGGLE_SUB_MENU:
      return R.over(openSubMenuLens, toggleSubMenu(payload.id), state);

    default:
      return state;
  }
};

function toggleSubMenuAction(id) {
  return {
    type: MenuActions.TOGGLE_SUB_MENU,
    payload: { id }
  };
}

function bindActionCreators(dispatch) {
  return {
    toggleSubMenu: R.compose(
      dispatch,
      toggleSubMenuAction
    )
  };
}

export { reducer, initialState, bindActionCreators };
