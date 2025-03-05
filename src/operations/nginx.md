---
icon: vscode-icons:file-type-nginx
title: Nginx
createTime: 2024/12/15 14:39:46
permalink: /operations/nginx/
---

<!-- # Nginx -->

> 配置文件路径：`/nginx/conf/nginx.conf`

## 1、部署 History 路由模式项目

```nginx
http{
    server {
        listen 80; # 监听端口
        server_name www.mu00.cn; # 域名
        root /www/server/nginx/html;  # 根目录
        index index.html; # 首页

        # URL 匹配模式
        location / {
            try_files $uri $uri/ @router;
            expires -1;
        }

        location @router {
            rewrite ^.*$ /index.html last;
        }
    }
}
```

## 2、配置代理转发（解决跨域）

```nginx
http{
    server{
        location ~ ^/api {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            rewrite ^/api/(.*) /$1 break; # 去掉 /api 前缀
            proxy_pass https://www.mu00.cn:5050;  # 将请求转发到此URL
        }
    }
}
```

## 3、部署子目录项目

```nginx
http{
    server {
        listen 80; # 监听端口
        server_name www.mu00.cn; # 域名
        root /www/server/nginx/html;  # 根目录
        index index.html; # 首页

        location / {
            try_files $uri $uri/ @router;
            expires -1;
        }

        # 部署子目录项目(例如：后台管理)
        location /admin {
            alias /www/server/nginx/html/admin; # 指向新的项目目录
            try_files $uri $uri/ @router;
            expires -1;
        }

        location @router {
            rewrite ^.*$ /index.html last;
        }
    }
}
```

---

**项目进行打包时需要特殊处理，详情参照如下**

1.  [vue3-子目录部署打包配置](/front-end/vite.html#_7、vue3-子目录部署打包配置)

## 4、配置 SSL

> SSL 证书和密钥请自行申请

```nginx
http{
    server {
        listen 443 ssl; # 改为HTTPS的标准端口443，并启用ssl
        server_name www.mu00.cn; # 域名
         # SSL 证书和密钥配置 - 文件路径
        ssl_certificate      /data/cert/mu00.cn.pem;
        ssl_certificate_key  /data/cert/mu00.cn.key;

        # 其他推荐的SSL设置
        ssl_session_timeout 10m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;

        root /www/server/nginx/html;  # 根目录
        index index.html; # 首页

        # URL 匹配模式
        location / {
            try_files $uri $uri/ @router;
            expires -1;
        }

        location @router {
            rewrite ^.*$ /index.html last;
        }
    }
}
```

## 5、开启 Gzip 压缩

```nginx
server {
    location / {
        # 启用gzip_static，优先发送预压缩的 .gz 文件（如果存在）
        gzip_static on;
        # 兼容不支持gzip的客户端
        gzip on;
        # 配置gzip压缩的最小文件大小，避免压缩太小的文件
        gzip_min_lenggth 256;
        # 配置压缩类型，根据需要进行添加
        gzip_types text/plain text/css application/json
        application/javascript application/x-javascript
        text/xml application/xml application/xml+rss text/javascript;
    }
}
```
