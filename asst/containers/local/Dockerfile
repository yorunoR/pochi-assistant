FROM python:3.12-bookworm

ENV LANG=C.UTF-8 TZ=Asia/Tokyo PYTHONPATH=.

WORKDIR /asst

RUN apt-get update -qq \
    && apt-get install -y --no-install-recommends \
    build-essential \
    && pip install --upgrade pip \
    && pip install uv \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
