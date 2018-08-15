export const getAllListings = ({Listings}) => (
  Object.keys(Listings).map(id => Listings[id])
);

export const getUserListings = (state, filter) => {
  console.log("state in selector: ", state);
  let Listings = state.entities.Listings;
  let result = [];
    for (let id in Listings) {
      if (Listings[id].userId == filter) {
        result.push(Listings[id]);
      }
    }
    return result;
};
