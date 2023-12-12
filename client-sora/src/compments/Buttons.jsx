const ButtonPrimary = (props) => {
  return (
    <button
      className="bg-slate-200 text-slate-800 rounded-full px-4 py-2"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

const ButtonSecondary = (props) => {
  return (
    <button
      className="bg-slate-200 text-slate-800 rounded-full px-4 py-2"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

const ButtonSubscribe = (props) => {
  return (
    <button
      className="bg-slate-200 text-slate-800 rounded-full px-4 py-2 w-40"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export { ButtonPrimary, ButtonSecondary, ButtonSubscribe };
