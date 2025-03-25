---
createTime: 2025/03/24
---

> [!TIP]
> 用途：文件下载、图片预览等

## 1、Blob[Blob URL]

```javascript
axios
  .get("/api/file/202409270925510140b9f478123a47ef", {
    responseType: "arraybuffer",
  })
  .then((res) => {
    // 常见的文件类型
    // image/*
    // application/pdf
    // video/*
    // audio/*
    const url = URL.createObjectURL(
      new Blob([res.data], { type: "application/pdf" })
    );
    return url;
  });
```

## 2、Data URL

```javascript
axios
  .get("/api/file/202409270925510140b9f478123a47ef", {
    responseType: "arraybuffer",
  })
  .then((res) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        resolve(fileReader.result);
      };

      // 常见的文件类型
      // image/*
      // application/pdf
      // video/*
      // audio/*
      fileReader.readAsDataURL(new Blob([res.data], { type: "image/*" }));
    });
  });
```
