---
createTime: 2025/02/13 16:19:36
---

# Tools 工具函数

## Calendar 日历生成

```js
/**
 * 日历生成器的基础配置
 * @typedef {Object} CalendarConfig
 * @property {function} adjustDay - 调整星期几的计算方法
 */

/**
 * 日历格式策略
 * @type {Object.<string, CalendarConfig>}
 */
const CALENDAR_STRATEGIES = {
  // 一二三四五六日
  DEFAULT: {
    adjustDay: (day) => (day === 0 ? 6 : day - 1),
  },
  // 日一二三四五六
  UTC: {
    adjustDay: (day) => day,
  },
};

/**
 * 获取月份的第一天和最后一天
 * @param {Number} year 年份
 * @param {Number} month 月份
 * @returns {Object} 包含首末日期和天数的对象
 */
function getMonthBoundary(year, month) {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  return {
    firstDay,
    lastDay,
    totalDays: lastDay.getDate(),
  };
}

/**
 * 填充日历行
 * @param {Array} row 当前行数组
 * @param {Number} targetLength 目标长度
 * @param {*} fillValue 填充值
 * @returns {Array} 填充后的数组
 */
function padRow(row, targetLength, fillValue = null) {
  if (row.length >= targetLength) return row;
  return [...row, ...Array(targetLength - row.length).fill(fillValue)];
}

/**
 * 生成日历数组
 * @param {Number} [year] 年份
 * @param {Number} [month] 月份
 * @param {string} [format='DEFAULT'] 日历格式
 * @returns {Array} 返回日历数组
 */
export function generateCalendar(year, month, format = "DEFAULT") {
  // 默认使用当前日期
  year ??= new Date().getFullYear();
  month ??= new Date().getMonth() + 1;

  // 获取日历策略
  const strategy = CALENDAR_STRATEGIES[format] || CALENDAR_STRATEGIES.DEFAULT;

  // 获取月份信息
  const { firstDay, totalDays } = getMonthBoundary(year, month);

  // 计算起始天的偏移
  const startDay = strategy.adjustDay(firstDay.getDay());

  // 生成日历数组
  const result = [];
  let currentRow = Array(startDay).fill(null);

  for (let day = 1; day <= totalDays; day++) {
    currentRow.push(day);

    if (currentRow.length === 7) {
      result.push(currentRow);
      currentRow = [];
    }
  }

  // 处理最后一行
  if (currentRow.length > 0) {
    result.push(padRow(currentRow, 7));
  }

  return result;
}

// 为保持向后兼容，保留原有的函数名
export const generateUTCCalendar = (year, month) =>
  generateCalendar(year, month, "UTC");
```

## File 文件 URL

```js
/**
 * 文件工具类
 */

// 定义文件扩展名和MIME类型的映射
const MIME_TYPE_MAP = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  bmp: "image/bmp",
  svg: "image/svg+xml",
  mp4: "video/mp4",
  mov: "video/quicktime",
  avi: "video/x-msvideo",
  mkv: "video/x-matroska",
  wmv: "video/x-ms-wmv",
  mp3: "audio/mpeg",
  wav: "audio/wav",
  aac: "audio/aac",
  flac: "audio/flac",
  ogg: "audio/ogg",
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  txt: "text/plain",
  json: "application/json",
  xml: "application/xml",
  zip: "application/zip",
  rar: "application/x-rar-compressed",
};

/**
 * 将文件或ArrayBuffer转换为Bolb
 * @param {File | ArrayBuffer} file
 * @param {string} [filePath]
 */
export const fileToBolb = (file, filePath) => {
  let type = "image/*";
  if (file instanceof File) {
    type = file.type;
  }
  if (filePath) {
    const extension = getFileExtension(filePath);
    type = inferFileType(extension) || type;
  }
  return new Blob([file], { type });
};

/**
 * 将文件或ArrayBuffer转换为BolbUrl，记得使用完要释放URL.createObjectURL
 * @param {File | ArrayBuffer} file
 * @param {string} [filePath]
 */
export const fileToBolbUrl = (file, filePath) => {
  return URL.createObjectURL(fileToBolb(file, filePath));
};

/**
 * 将文件或ArrayBuffer转换为DataURL
 * @param {File | ArrayBuffer} file
 * @param {string} [filePath]
 */
export const fileToDataUrl = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(fileToBolb(file, filePath));
  });
};

/**
 * 获取文件扩展名
 * @param {String} filePath
 * @returns
 */
function getFileExtension(filePath) {
  const match = filePath.match(/\.([^.]+)$/);
  if (!match) {
    return "";
  }
  return match[1];
}

/**
 * 根据文件扩展名推断文件MIME类型
 * @param {string} fileExtension
 * @returns {string|null}
 */
function inferFileType(fileExtension) {
  fileExtension = fileExtension.toLowerCase();

  if (MIME_TYPE_MAP.hasOwnProperty(fileExtension)) {
    return MIME_TYPE_MAP[fileExtension];
  }
  return null;
}
```
