export default (req: Request) => {
    console.log(req);
    return new Response(`Hello, from Deno v$!`);
};
