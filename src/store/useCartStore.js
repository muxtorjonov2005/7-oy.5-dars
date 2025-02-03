import { create } from "zustand";

function createCartStore(set) {
  return {
    cart: [],
    add: function (value) {
      set(function(state) {
        let copied = [...state.cart]
        copied.push(value);
        return { cart: copied };
      })
    },
    edit: function (value) {
      set(function (state) {
        let copied = [...state.cart];
        copied = copied.map((c) => {
          if (c.id === value.id) {
            return value;
          }
          return c;
        });
      });
    },
    remove: function (id) {
        set(function(state) {
            let copied = [...state.cart]
            copied = copied.filter((c) => c.id!== id);
            return { cart: copied };
        })
    }
  };
}

const useCartStore = create(createCartStore);

export default useCartStore;
