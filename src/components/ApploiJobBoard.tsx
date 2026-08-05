const srcDoc = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html, body { margin: 0; padding: 0; font-family: system-ui, sans-serif; }
    </style>
  </head>
  <body>
    <script src="https://apploi.link"><\/script>
  </body>
</html>`;

const ApploiJobBoard = () => (
  <iframe
    title="Apploi job board"
    srcDoc={srcDoc}
    sandbox="allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox"
    loading="lazy"
    className="w-full h-[900px] md:h-[1200px] rounded-xl border border-border bg-card"
  />
);

export default ApploiJobBoard;
