const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  invoke: async () => {
    try {
      const data = await ipcRenderer
        .invoke("invoke-test", "try to connect to database:preload.js")
        .then(v => {
          return v;
        });
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  send: () => {
    ipcRenderer.send("send-test", "to main from send");
  }
});
