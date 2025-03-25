---
createTime: 2025-03-25
---

# Element Plus

## 1、ElTable 表格自动流体高度

> ElTable 自动撑满页面剩余空间(高度)且自动适应流体高度；
>
> 借助`flex`、`flex-1`、`overflow-hidden`实现；

![PixPin_2024-11-01_12-41-53](https://upyun-oss.mu00.cn/202411011845948.gif)

- `template`结构

```html
<template>
  <!-- 弹性布局 flex -->
  <div class="p-4 h-screen flex flex-col">
    <div class="search-tools bg-white p-4 rounded-md">
      <!-- 搜索 -->
      <el-form inline :model="queryForm">
        <el-form-item label="名称">
          <el-input v-model="queryForm.name" placeholder="请输入名称" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 第一个 flex:1; 元素，必须设置 overflow: hidden; -->
    <div
      class="my-2 bg-white p-4 rounded-md flex-1 flex flex-col overflow-hidden"
    >
      <!-- 工具栏 -->
      <div class="table-tools">
        <el-button type="primary">新增</el-button>
        <el-button type="danger">删除</el-button>
      </div>

      <!-- 表格 -->
      <el-table :data="tableData" border stripe class="my-4 flex-1">
        <el-table-column type="index" label="序号" width="80" />
        <el-table-column label="名称" prop="name" />
        <el-table-column label="性别" prop="sex" />
        <el-table-column label="年龄" prop="age" />
      </el-table>

      <!-- 分页 -->
      <div class="pagination-tools flex justify-center items-center">
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :page-sizes="[10, 20, 50, 100]"
          :total="total"
          v-model:page-size="pageSize"
          v-model:current-page="currentPage"
          @change="loadTableData"
        />
      </div>
    </div>
  </div>
</template>
```

- `script setup`逻辑（其实没啥用···）

```js
import { ref } from "vue";

const queryForm = ref({
  name: "",
});

const tableData = ref([]);
const total = ref(100);
const currentPage = ref(1);
const pageSize = ref(10);

const loadTableData = () => {
  console.log(currentPage.value, pageSize.value);

  tableData.value = Array.from({ length: pageSize.value }, (v, k) => {
    return {
      id: k + 1,
      name: `name${k + 1}`,
      sex: ["男", "女"][Math.floor(Math.random() * 2)],
      age: Math.floor(Math.random() * 100),
    };
  });
};
loadTableData();
```

## 2、ElTable 表格编辑与表单校验

在表格中可以进行单条数据的新增、编辑、删除操作，并能对数据进行校验。

![表格编辑与表单校验](https://upyun-oss.mu00.cn/202410301906845.png)

### 1、功能解析

- `ElForm`表单嵌套`ElTable`，`ElTableColumn`默认插槽嵌套`ElFormItem`及表单组件；
- 从`ElTableColumn`默认插槽中解构出：`#default="{row, $index}"`；
- 在`ElFormItem`的`rule`属性填写校验规则；`prop`属性填写：`表单项.索引.属性名`（`tableData.0.name`）

### 2、功能实现

1. `template`

```html
<div class="p-4 bg-[#f5f5f5]">
  <el-form :model="form" ref="formRef">
    <el-table :data="form.tableData" border stripe>
      <el-table-column type="index" label="序号" width="80" />
      <el-table-column label="名称" prop="name">
        <template #default="{ row, $index }">
          <el-form-item
            class="mt-4"
            label=" "
            :prop="`tableData.${$index}.name`"
            :rules="[
              { required: true, message: '请输入名称', trigger: 'blur' },
            ]"
          >
            <el-input v-model="row.name" placeholder="请输入名称" />
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column label="性别" prop="sex">
        <template #default="{ row, $index }">
          <el-form-item
            class="mt-4"
            label=" "
            :prop="`tableData.${$index}.sex`"
            :rules="[
              { required: true, message: '请选择性别', trigger: 'change' },
            ]"
          >
            <el-select v-model="row.sex" placeholder="请选择性别">
              <el-option label="男" value="男" />
              <el-option label="女" value="女" />
            </el-select>
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ $index }">
          <el-button
            v-if="$index === 0"
            size="small"
            type="primary"
            @click="addRow"
            circle
            :icon="Plus"
          />
          <el-button
            v-else
            size="small"
            type="danger"
            @click="removeRow($index)"
            circle
            :icon="Delete"
          />
        </template>
      </el-table-column>
    </el-table>
    <div class="mt-4 text-right">
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </el-form>
</div>
```

2. `script setup`

```js
import { Delete, Plus } from "@element-plus/icons-vue";
import { onMounted, ref } from "vue";

/** 表单及表格数据，必须这样写，否则无法触发表单校验 */
const form = ref({
  tableData: [],
});

/** 表单实例 */
const formRef = ref(null);

/** 添加一行 */
const addRow = () => {
  form.value.tableData.push({ name: "", sex: "" });
};

/** 添加某行 */
const removeRow = (index) => {
  form.value.tableData.splice(index, 1);
};

/** 保存数据，触发表单校验 */
const save = () => {
  formRef.value.validate((valid) => {
    if (!valid) return;
    console.log(form.value.tableData);
  });
};

/** 挂载时，生成第一行数据 */
onMounted(() => {
  form.value.tableData = [];
  addRow();
});
```

---

### 3、详细解析

```html
<el-table-column label="名称" prop="name">
  <template #default="{ row, $index }">
    <el-form-item
      class="mt-4"
      label=" "
      :prop="`tableData.${$index}.name`"
      :rules="[{ required: true, message: '请输入名称', trigger: 'blur' }]"
    >
      <el-input v-model="row.name" placeholder="请输入名称" />
    </el-form-item>
  </template>
</el-table-column>
```

- #default="{ row, $index }"：结构当前行数据 row 和索引 $index；
- label=" "：实现页面中展示必填校验`*`，可不写；
- :prop="\`tableData.${$index}.name\`"：绑定具体行的某个数据；
- :rules="[{ required: true, message: '请输入名称', trigger: 'blur' }]"：表单项校验规则；
