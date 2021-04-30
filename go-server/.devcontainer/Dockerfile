# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.163.1/containers/go/.devcontainer/base.Dockerfile
ARG VARIANT="1"

FROM mcr.microsoft.com/vscode/devcontainers/go:0-${VARIANT}

ARG PROTC_VERSION="protoc-3.15.5-linux-x86_64.zip"
ARG PB_REL=""https://github.com/protocolbuffers/protobuf/releases""

# [Optional] Install a version of Node.js using nvm for front end dev
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "source /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

WORKDIR /home/vscode/
USER vscode

RUN curl -LO $PB_REL/download/v3.15.5/$PROTC_VERSION
RUN unzip $PROTC_VERSION -d ./.local
RUN echo protoc --version
RUN rm $PROTC_VERSION

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment the next line to use go get to install anything else you need
# RUN go get -x <your-dependency-or-tool>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1



