// directive lifecycle functions

// beforeMount - called when the directive is first bound to the element and before parent component
// is mounted
// mounted - called when the directive is mounted to the document
// beforeUpdate - called before the directive is updated
// updated - called after the directive is updated
// beforeUnmount - called before a directive is unmounted from the document
// unmounted - called after the dirtective is unmounted from the document

// hook arguments

// el - the element the binding sits on, has same properties as an element selected with vanilla JS
// binding - an object which contains the arguments that are passed into the hooks (readonly)
// vnode - allows to directly to the node in the virtual DOM (readonly)
// prevNode - the previous vnode object before the directive was uploaded, applies to beforeUpdate
// and updated hooks only

export default {
  // (el, binding)
  beforeMount(el, { arg, value, modifiers }) {
    const modifierClass = modifiers.green ? ` style="color: green"` : '';

    el.innerHTML += arg === 'full'
      ? value : `<span${modifierClass}>hey ${value}</span>`;
  },
};
