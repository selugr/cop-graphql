const Subscription = {
  commentAdded: (parent, args, { pubsub }, info) => ({
    subscribe: () => {
      console.log("Comment Added Suscription");
      return pubsub.asyncIterator(["COMMENT_ADDED"]);
    },
  }),
};

export default Subscription;
