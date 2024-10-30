FROM denoland/deno:2.0.4

# ARG USER_ID
# ARG GROUP_ID

# The port that your application listens to.
EXPOSE 1993

# Create a custom user with UID 2810 and GID 2810
# RUN groupadd -f -g $GROUP_ID deno_group
# RUN if ! id -u deno_user > /dev/null 2>&1; then \
#         useradd -m -u $USER_ID -g $GROUP_ID deno_user; \
#     fi

# Create the working directory with the desired ownership and permissions
# RUN mkdir -p /home/deno/deno-fresh-test && \
#     chown -R deno_user:deno_group /home/deno/deno-fresh-test

# USER deno_user:deno_group


# Add new group if on Mac and you can't create a group with GID 1993 like the deno group in container.
# RUN groupadd -f -g $GROUP_ID deno_group

# Change UID and GID to have the same as the host
# RUN usermod -u $USER_ID deno
# RUN groupmod -g $GROUP_ID deno_group

USER deno

# Copy the contents of the current working directory into the Docker image
COPY --chown=deno:deno . /home/deno/deno-fresh-test

WORKDIR /home/deno/deno-fresh-test

# Compile the main app so that it doesn't need to be compiled each startup/entry.
# RUN deno cache main.ts

