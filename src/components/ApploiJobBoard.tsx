const APPLOI_SRCDOC = `<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <style>
      body { font-family: system-ui, sans-serif; margin: 0; padding: 15px; }
    </style>
  </head>
  <body>
    <script src='https://apploi.link/rise2growth-career-page'><\/script>
  </body>
</html>`;

const ApploiJobBoard = () => (
  <iframe
    srcDoc={APPLOI_SRCDOC}
    style={{ width: "100%", height: "400px", border: "none" }}
    title="Rise 2 Growth Careers"
    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
  />
);

export default ApploiJobBoard;
