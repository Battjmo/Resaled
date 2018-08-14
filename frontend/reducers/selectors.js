export const getAllListings = ({Listings}) => (
  Object.keys(Listings).map(id => Listings[id])
);

export const getUserListings = ({ entities: {Listings}, filter}) => {
  let result = [];
    for (let id in Listings) {
      if (Listings[id].userId === filter) {
        result.push(Listings[id]);
      }
    }
    return result;
};
