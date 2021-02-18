const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  invoke: async () => {
    const data = await ipcRenderer
      .invoke("invoke-test", "try to connect to database")
      .then(result => {
        console.log("invoke success", result);
      });
  },
  send: () => {
    ipcRenderer.send("send-test", "to main from send");
  }
});
