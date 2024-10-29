FROM denoland/deno:2.0.3

# The port that your application listens to.
EXPOSE 1993

# Create a custom user with UID 2810 and GID 2810
# RUN groupadd -f -g 2810 deno_group
# RUN if ! id -u deno_user > /dev/null 2>&1; then \
#         useradd -m -u 2810 -g deno_group deno_user; \
#     fi

# Create the working directory with the desired ownership and permissions
# RUN mkdir -p /www/deno-fresh-test && \
#     chown -R deno:deno /www/deno-fresh-test

# Copy the contents of the current working directory into the Docker image
COPY --chown=deno:deno . /www/deno-fresh-test

RUN chown -hR deno:deno /www/deno-fresh-test

# TODO: FIND A WAY TO SET DENO AS OWNER OF THE PROJECT ROOT DIR THEN UNCOMMENT THE FOLLOWING LINE
# USER deno

WORKDIR /www/deno-fresh-test

# Compile the main app so that it doesn't need to be compiled each startup/entry.
# RUN deno cache main.ts

