FROM chainguard/wasmer:latest as runner
WORKDIR /app
COPY . /app
CMD ["run", ".","--net"]

# COPY helloworld.wasm ./
# CMD [ "run", "helloworld.wasm"]
# CMD ["-V"]

# 确认wasmer是否安装成功
# 容器启动时运行的命令
EXPOSE 8787/tcp
