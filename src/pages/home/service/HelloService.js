import client from "../../../shared/http-client/Client";

const HelloService = () => {
    const hello = async () => {
        const {data} = await client.get('hello');
        return data;
    }

    return {hello}
}

export default HelloService;