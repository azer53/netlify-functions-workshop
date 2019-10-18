exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hi Eli with async function",
      event: event
    })
  };
};
