export const increment_counter="increment_counter";
export const decrement_counter="decrement_counter";
export const reset_counter="reset_counter";

export const incrementCounter=()=>({
    type:increment_counter
});
export const decrementCounter=()=>({
    type:decrement_counter
});
export const resetCounter=()=>({
    type:reset_counter
});