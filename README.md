# DENO TEST

Commands:

```sh
docker-compose up -d --build # start project
docker exec -it deno-fresh-test bash # access deno container's terminal 
docker-compose down # stop project
```

See [deno.json file](./deno.json) for executable `deno` commands in Deno
container.

In deno container, you can run:

```sh
deno run --reload my_module.ts # refetch and recompile modules
# As we are vendoring remote modules thanks to the vendor:true config in deno.json, following command will immediately cache dependencies in the vendor:
deno install --entrypoint main.ts # or target another file
```
