module.exports = {
  apps: [
    {
      name: "videosdk-recording-fail-template",
      script: "yarn",
      args: "serve",
      cwd: "/project/Recording-Template",
      interpreter: "none",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M"
    }
  ]
}
