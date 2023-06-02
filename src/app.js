export const handler = async(event) => {
    // TODO implement
    console.log("adding some logs from clean cloud")
    const response = {
        statusCode: 200,
        body: JSON.stringify(event),
    };
    return response;
};
