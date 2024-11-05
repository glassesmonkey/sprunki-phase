

let wispClient: any = null;

async function getWispClient() {
  if (!wispClient) {
    const { buildWispClient } = await import('@wisp-cms/client');
    wispClient = buildWispClient({
      baseUrl: "https://www.wisp.blog",
      blogId: "cm339hugj0000ji8l6gyb2s78", // 请替换为您的实际 Blog ID
    });
  }
  return wispClient;
}

export { getWispClient };