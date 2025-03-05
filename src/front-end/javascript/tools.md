---
createTime: 2025/02/13 16:19:36
permalink: /front-end/javascript/tools/
---
# Tools 工具函数

## Calendar 日历生成

```js :collapsed-lines
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
