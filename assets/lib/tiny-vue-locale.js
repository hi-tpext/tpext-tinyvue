function X(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function T(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? X(Object(t), !0).forEach(function(n) {
      Ie(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function Re(r, e) {
  if (typeof r != "object" || !r)
    return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function me(r) {
  var e = Re(r, "string");
  return typeof e == "symbol" ? e : String(e);
}
function j(r) {
  "@babel/helpers - typeof";
  return j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, j(r);
}
function fe(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ee(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, me(n.key), n);
  }
}
function pe(r, e, t) {
  return e && ee(r.prototype, e), t && ee(r, t), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Ie(r, e, t) {
  return e = me(e), e in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
const R = {
  "en-US": "English",
  "zh-CN": "中文",
  "zh-TW": "中国台湾",
  hello: "你好 {name}",
  code: "zh-CN",
  yes: "是",
  no: "否",
  ui: {
    input: {
      close: "关闭",
      more: "更多",
      detail: "详细信息"
    },
    numeric: {
      equalTo: "等于",
      notEqualTo: "不等于",
      moreThan: "大于",
      moreThanOrEqualTo: "大于等于",
      lessThan: "小于",
      lessThanOrEqualTo: "小于等于",
      empty: "为空",
      nonEmpty: "不为空"
    },
    queryBuilder: {
      addItem: "新增条件",
      addGroup: "新增子条件组",
      removeGroup: "移除条件组"
    },
    wizard: {
      previousStep: "上一步",
      nextStep: "下一步",
      save: "保存",
      submit: "提交"
    },
    linkMenu: {
      title: "消息",
      placeholder: "请输入关键字过滤...",
      sure: "确定",
      cancel: "取消"
    },
    todoList: {
      add: "提交",
      placeholder: "请输入内容..."
    },
    alert: {
      error: "错误",
      info: "消息",
      success: "成功",
      title: "消息提示",
      warning: "警告"
    },
    amount: {
      currency: "币种",
      amount: "金额",
      date: "日期",
      equalTo: "等于",
      notEqualTo: "不等于",
      moreThan: "大于",
      moreThanOrEqualTo: "大于等于",
      lessThan: "小于",
      lessThanOrEqualTo: "小于等于",
      empty: "为空",
      nonEmpty: "不为空"
    },
    actionMenu: {
      moreText: "更多"
    },
    base: {
      all: "全部",
      cancel: "取消",
      confirm: "确定",
      delete: "删除",
      edit: "编辑",
      more: "更多",
      reset: "重置",
      clear: "清空",
      comma: "，"
    },
    button: {
      cancel: "取消",
      confirm: "确定"
    },
    buttonGroup: {
      noData: "暂无数据"
    },
    buttonMessage: {
      cancel: "取消",
      confirm: "确定"
    },
    cell: {
      placeholder: "请选择"
    },
    cascader: {
      noMatch: "无匹配数据",
      loading: "加载中",
      placeholder: "请选择",
      noData: "暂无数据"
    },
    chart: {
      auxiliary: "辅助",
      emptyText: "暂无数据",
      kName: "日K",
      other: "其他",
      summation: "总量",
      total: "总计",
      value: "数值"
    },
    colorSelectPanel: {
      confirm: "选择",
      cancel: "取消",
      predefine: "预定义颜色",
      history: "历史记录",
      empty: "暂无"
    },
    crop: {
      cropImage: "图片裁剪",
      croppedImage: "裁剪后图像"
    },
    datepicker: {
      clear: "清空",
      cancel: "取消",
      endDate: "结束日期",
      confirm: "确定",
      month: "月",
      endTime: "结束时间",
      month2: "2 月",
      month1: "1 月",
      month4: "4 月",
      month3: "3 月",
      month6: "6 月",
      month5: "5 月",
      month8: "8 月",
      month7: "7 月",
      month10: "10 月",
      month9: "9 月",
      month12: "12 月",
      month11: "11 月",
      months: {
        feb: "二月",
        jan: "一月",
        apr: "四月",
        mar: "三月",
        jun: "六月",
        may: "五月",
        aug: "八月",
        jul: "七月",
        oct: "十月",
        sep: "九月",
        dec: "十二月",
        nov: "十一月"
      },
      nextYear: "后一年",
      nextMonth: "下个月",
      prevMonth: "上个月",
      now: "此刻",
      selectDate: "选择日期",
      prevYear: "前一年",
      startDate: "开始日期",
      selectTime: "选择时间",
      today: "今天",
      currentMonth: "本月",
      startTime: "开始时间",
      week: "周次",
      weeks: {
        mon: "一",
        sun: "日",
        wed: "三",
        tue: "二",
        fri: "五",
        thu: "四",
        sat: "六"
      },
      timezone: "选择时区",
      year: "年",
      to: "至",
      yearMonth: "{year}年{month}月",
      yearMonthDay: "{year}年{month}月{day}日"
    },
    richTextEditor: {
      bold: "加粗",
      italic: "斜体",
      link: "链接",
      unlink: "移除链接",
      highlight: "高亮",
      underline: "下划线",
      strike: "中划线",
      subscript: "下标",
      superscript: "上标",
      code: "代码",
      unorderedlist: "无序列表",
      orderedlist: "有序列表",
      taskList: "任务列表",
      quote: "引用",
      codeBlock: "代码块",
      formatClear: "清除标记",
      nodeDelete: "删除节点",
      undo: "回退",
      redo: "前进",
      left: "左对齐",
      center: "居中",
      right: "右对齐",
      fontSize: "字号",
      lineHeight: "行高",
      hBox: "段落标题",
      img: "图片",
      color: "颜色",
      table: "表格",
      backgroundColor: "文字背景色"
    },
    calendar: {
      showType: {
        year: "年"
      }
    },
    dept: {
      code: "编码",
      company: "公司",
      dept1: "一级部门",
      dept2: "二级部门",
      dept3: "三级部门",
      dept4: "四级部门",
      dept5: "五级部门",
      dept6: "六级部门",
      dept7: "七级部门",
      dept8: "八级部门",
      input: "可输入部门编码或名称",
      name: "名称",
      search: "辅助查询",
      selected: "已选"
    },
    dialogBox: {
      confirm: "确定",
      cancel: "取消"
    },
    load: {
      dot: "加载中"
    },
    exception: {
      build: "模块正在建设中",
      busy: "系统繁忙，请稍等一下",
      noperm: "茫茫大海，找不到页面",
      weaknet: "网络不给力",
      pcview: "请到PC上查看文件",
      nodata: "休息一下",
      create: "创建",
      provide: "TINY 开发团队提供",
      nodatamf: "暂无数据",
      nopermmf: "无访问权限",
      weaknetmf: "网络异常",
      noresult: "无相关搜索结果",
      nonews: "暂无最新消息",
      pagenoperm: "403:无访问权限",
      pageweaknet: "网络异常",
      pagenothing: "404:你访问的页面不存在",
      pageservererror: "500:服务器异常"
    },
    fileUpload: {
      largefile: "文件过大，将会分片上传，请耐心等待!",
      folder: "文件所在文件夹层数已超过 5 层，将不会上传该文件",
      init: "服务报错，请重试",
      token: "请先进行 EDM 鉴权，获取 token",
      exceed: "文件大小超过限制（{maxSize}）",
      largeFile: "文件大小超出限制 2G ！！",
      fileSize: "文件大小低于限制（{minSize}{sizeUnit}）",
      deleteTip: "按 delete 键可删除",
      downloadFile: "下载文件",
      previewFile: "预览文件",
      updateFile: "更新文件",
      reUploadFile: "重新上传",
      cancelFile: "取消上传",
      deleteFile: "删除文件",
      empty: "是空文件！",
      kiaScanTip: "抱歉，从公网接入下载文档，需要通过KIA检测；当前文档正在KIA检测中，请稍后几分钟后再下载！",
      fileNameExceeds: "超过255个字符，请修改文件名。",
      fileName: "该文件名",
      calcHash: "文档正在计算加密中",
      uploadFile: "文件上传",
      downloadAll: "全部下载",
      onlySupport: "仅支持{type}格式文件",
      fileNotLessThan: "单个文件不能小于",
      fileNotMoreThan: "单个文件不能超过",
      notSupport: "格式（.{format}）暂不支持",
      notSupportNoSuffix: "暂不支持无后缀文件",
      notSupportSpecialCharacters: "文件名包含特殊字符，请重命名后上传",
      attachment: "附件",
      uploadList: "上传列表",
      numberExceed: "批量上传个数超过限制（{number}）",
      numberLimit: "最多上传{number}个文件",
      encryptDialogTitle: "水印及加密设置",
      addWatermark: "添加水印",
      encrypted: "加密",
      docPreview: "文档预览",
      networkError: "网络出错",
      pictureNetworkError: "网络出错，上传失败",
      reUploadTip: "{number}个文件上传失败！"
    },
    uploadList: {
      pictureUploading: "图片上传中",
      uploadFailed: "上传失败",
      uploading: "上传中",
      download: "下载",
      reUpload: "重新上传",
      delete: "删除",
      noAttachments: "暂无附件",
      cancel: "取消",
      preview: "预览",
      releaseAndUpload: "释放鼠标，上传文件",
      dragOrClickImport: "将文件拖到此处，或点击导入",
      shoot: "拍摄",
      selectFromAlbum: "从相册选择",
      uploadFailedAndReupload: "上传失败，点击重新上传"
    },
    upload: {
      addPicture: "添加图片",
      addAudio: "添加音频",
      addVideo: "添加视频"
    },
    grid: {
      dataUnchanged: "数据未改动！",
      deleteSelectRecord: "您确定要删除所选记录吗？",
      emptyText: "暂无数据",
      error: {
        cellEditRender: "渲染器 cell-render 和 edit-render 不能同时使用",
        delGetAllRecords: "方法 getAllRecords 已废弃，请使用 getRecordset",
        delGetRecords: "方法 getRecords 已废弃，请使用 getData",
        delLabel: "参数 label 已废弃，请使用 title",
        delProp: "参数 prop 已废弃，请使用 field",
        delRevert: "方法 revert 已废弃，请使用 revertData",
        groupFixed: "如果使用分组表头，固定列必须在左右两侧",
        notDelete: "Delete 方法不存在",
        notMouse: "虚拟滚动不支持 mouse-config",
        notQuery: "query 方法不存在",
        notResizable: "横向虚拟滚动不支持 resizable",
        notSave: "save 方法不存在",
        reqModule: "缺少 {{name}} 模块",
        rowIdEmpty: "参数 row-id 不允许为空",
        scrollOriginal: "虚拟滚动启用后只能导出源数据，请将设置 original=true",
        scrollYHeight: "启用虚拟滚动必须要设置 height 或 max-height",
        toolbarId: "工具栏需要设置唯一 id",
        treeFixedExpand: "树结构的固定列与展开行功能有冲突",
        treeInsert: "树结构不支持 insert 操作",
        treeRemove: "树结构不支持 remove 操作",
        unableInsert: "无法插入到指定位置",
        dargSelf: "不允许自己给自己拖动",
        dargFixed: "固定列不允许拖动",
        remoteMethod: "个性化模板管理远端存储需要设置 multipleHistory.remoteMethod",
        remoteSelectedMethod: "个性化模板管理远端存储需要设置 multipleHistory.remoteSelectedMethod",
        chainCallError: "列的默认插槽中存在语法错误，请检查。",
        renderParamError: "期望配置一个生成 VNode 的渲染方法。",
        classComponentError: "类组件渲染出错。",
        groupColumnFixedError: "同一个分组内不能设置不同的固定类型。",
        missingValueFormat: "渲染器无法格式化日期字符串，需要提供 valueFormat 源日期格式配置。",
        clipboardWriteError: "剪切板写入错误"
      },
      filter: {
        allFilter: "全部",
        allSelect: "(全选)",
        endDate: "结束日期",
        startDate: "开始日期",
        dateTips: "请至少输入一个日期",
        clear: "清除当前列筛选",
        clearAll: "清除所有列筛选",
        confirmFilter: "筛选",
        empty: "为空",
        emptyText: "暂无数据",
        equal: "等于",
        include: "包含",
        prefix: "开头是",
        resetFilter: "重置",
        unempty: "不为空"
      },
      individuation: {
        cancelBtn: "取消",
        colConfigs: {
          visible: "显示",
          invisible: "隐藏",
          asc: "正序",
          desc: "倒序",
          unsorted: "未排序",
          frozenLeft: "左冻结",
          frozenRight: "右冻结",
          unfrozen: "未冻结",
          unfreeze: "取消冻结",
          unsort: "取消排序"
        },
        toolbar: {
          set: "设置",
          selected: "已选",
          freeze: "冻结",
          sort: "排序",
          clear: "清空",
          search: "搜索",
          all: "全选"
        },
        columnSet: "列设置",
        overwriteSave: "覆盖保存",
        saveAs: "另存为",
        saveTemplate: "存模板",
        selectTemplate: "选择模板",
        hideMsg: "至少保留一列显示",
        maxFreezeNumMsg: "冻结列不可超过6项",
        defaultTemplateName: "请输入名称，如未填写由系统按时间生成",
        reserveTemplateName: "如未填写名称将保留之前的名称",
        resetBtn: "重置",
        saveBtn: "确定",
        hideAll: "全部隐藏",
        showAll: "全部显示",
        tabs: {
          base: {
            title: "基础设置",
            tips: "点击图标按钮设置个性化"
          },
          other: {
            title: "其他设置",
            tips: "设置服务器排序或客户端排序、每页条数大小。",
            sortType: "排序类型",
            currPageSort: "当前页数据排序",
            allDataSort: "所有数据排序",
            pageSize: "每页条数"
          }
        },
        title: "个性化设置",
        switchtitle: "模板管理",
        switchsave: "保存配置",
        switchlabel: "配置列表：",
        switchapply: "使用",
        switchedit: "编辑",
        switchdel: "删除",
        switchconfirm: "确定",
        switchonlytemp: "保存模板",
        switchtempapply: "保存并使用模板",
        switchtempoverwrite: "覆盖并使用模板",
        switchdelcon: "确定要删除这个模板？",
        switchdelyes: "确定",
        switchdelno: "取消",
        switchapplycon: "确定要使用这个模板？"
      },
      removeSelectRecord: "您确定要移除所选记录吗？",
      saveSuccess: "保存成功",
      selectOneRecord: "请至少选择一条记录！",
      isSaveMsg: "有修改的数据，是否要保存？"
    },
    hrapprover: {
      approver: "权签人",
      noselected: "没有选择权签人",
      noapprover: "没有权签人",
      remark: "备注"
    },
    imageViewer: {
      loadErrorAlt: "加载失败",
      save: "保存图片",
      del: "删除图片",
      thumbnail: "缩略图",
      menu: "目录",
      hide: "隐藏侧边栏",
      show: "显示侧边栏"
    },
    navMenu: {
      moreText: "更多"
    },
    logout: {
      in: "登录",
      out: "注销"
    },
    page: {
      goto: "前往",
      item: "条",
      next: "下一页",
      page: "条/页",
      pageClassifier: "页",
      pagesize: "条/页",
      prev: "上一页",
      total: "共",
      totals: "总条数：",
      jump: "跳至",
      hundredThousand: "10万+",
      million: "100万+",
      tenMillion: "1千万+",
      loadingTotals: "加载总条数…"
    },
    popeditor: {
      cancel: "取 消",
      confirm: "确 认",
      historyLists: "历史数据列表",
      reset: "重 置",
      search: "查 询",
      selectionLists: "选择数据列表",
      sourceLists: "所有数据列表",
      title: "选择",
      filterNode: "输入内容进行筛选"
    },
    popupload: {
      fileName: "文件名",
      fileSize: "文件大小",
      fileStatus: "文件状态",
      uploadError: "上传失败",
      dialogTitle: "文件上传",
      cancelButtonText: "取消",
      tipsFileText: "上传提示",
      saveButtonText: "开始上传",
      uploadSuccess: "上传成功！",
      uploadButtonText: "选择文件",
      uploadsButtonText: "选择批量文件",
      errorTypeTips: "上传文件类型不匹配",
      errorNumTips: "上传文件数量超出限制,已取消该操作",
      errorSizeTips: "上传文件大小超出限制",
      limitUploadFileNumber: "上传文件数限制为",
      limitUploadFileType: "上传文件类型限制为",
      limitUploadFileSize: "上传文件大小不超过"
    },
    rate: {
      level: {
        average: "一般",
        excellent: "很好",
        fair: "差",
        good: "好",
        poor: "很差"
      }
    },
    select: {
      loading: "加载中",
      noMatch: "无匹配数据",
      noData: "暂无相关数据",
      placeholder: "请选择",
      pleaseSearch: "请搜索",
      search: "搜索",
      selected: "已选",
      selectedNum: "已选 {num} 个",
      noSearchData: "无相关搜索结果，请重新输入",
      add: "新增",
      collapse: "收起"
    },
    search: {
      placeholder: "搜索"
    },
    signature: {
      confirm: "确认",
      rewrite: "重写",
      cancel: "取消",
      tips: "请手写签名",
      resign: "重新签名",
      placeholder: "请在此签名（必填）"
    },
    tabs: {
      moreItem: "更多"
    },
    tag: {
      add: "添加"
    },
    toggleMenu: {
      placeholder: "请输入内容进行筛选"
    },
    treeMenu: {
      placeholder: "请输入内容进行筛选"
    },
    transfer: {
      filterPlaceholder: "请输入搜索内容",
      hasCheckedFormat: "已选 {checked}/{total} 项",
      noCheckedFormat: "共 {total} 项",
      noData: "无数据",
      noMatch: "无匹配数据",
      titles: ["列表 1", "列表 2"]
    },
    tree: {
      loading: "加载中",
      emptyText: "暂无数据",
      switchText: "同时勾选下级",
      edit: "编辑",
      delete: "删除",
      addChild: "新增下级",
      newNodeTitle: "新增下级",
      deleteTip1: "删除后数据不可恢复，确定删除吗？",
      deleteTip2: "该节点存在下级节点，是否保留下级节点数据？",
      deleteTip3: "保留下级节点数据"
    },
    usercard: {
      address: "地址",
      collapse: "收起",
      department: "部门",
      email: "邮箱",
      employeeId: "员工 ID",
      employee_id: "员工 ID",
      empno: "工号",
      expand: "展开",
      fax: "传真",
      internal: "内线",
      manager: "主管",
      mobile: "手机",
      other: "其他",
      phone: "固定电话",
      timezone: "时区",
      title: "用户信息: {0}",
      travelcode: "出差联系信息",
      viop: "VIOP",
      zipcode: "邮编"
    },
    richText: {
      bold: "加粗",
      italic: "倾斜",
      underline: "下划线",
      header: "段落格式",
      strike: "删除线",
      blockquote: "块引用",
      codeBlock: "插入代码段",
      size: "字体大小",
      listOrdered: "编号列表",
      listBullet: "项目列表",
      header1: "h1",
      header2: "h2",
      align: "对齐方式",
      color: "字体颜色",
      background: "背景颜色",
      image: "图像",
      video: "视频",
      link: "添加链接",
      formula: "插入公式",
      clean: "清除格式",
      indent1: "向左缩进",
      indent2: "向右缩进",
      pickerLabel: "标题大小",
      headerPicker1: "标题一",
      headerPicker2: "标题二",
      headerPicker3: "标题三",
      headerPicker4: "标题四",
      headerPicker5: "标题五",
      headerPicker6: "标题六",
      normal: "标准",
      sizeSmall: "小号",
      sizeLarge: "大号",
      sizeHuge: "超大号",
      alignPicker1: "居左对齐",
      alignPicker2: "居中对齐",
      alignPicker3: "居右对齐",
      alignPicker4: "两端对齐",
      subScript: "下标",
      superScript: "上标",
      directionRTL: "从右到左",
      font: "字体",
      file: "文件",
      betterTable: "表格",
      fullscreen: "全屏",
      insertColumnRight: "右插入列",
      insertColumnLeft: "左插入列",
      insertRowUp: "上插入行",
      insertRowDown: "下插入行",
      mergeCells: "合并单元格",
      unmergeCells: "拆分单元格",
      deleteColumn: "删除当前列",
      deleteRow: "删除当前行",
      deleteTable: "删除表格",
      colorPicker: "背景颜色",
      placeholder: "在此处插入文本...",
      maxLength: "文本长度超过限制，支持的最大长度是 "
    },
    steps: {
      done: "已完成",
      doing: "进行中",
      wait: "等待中"
    },
    actionSheet: {
      cancel: "取消"
    },
    image: {
      loadFail: "加载失败"
    },
    miniPicker: {
      cancel: "取消",
      confirm: "确定"
    },
    pullRefresh: {
      pullingDown: "下拉即可刷新",
      pullingUp: "上拉即可刷新",
      pulling: "下拉即可刷新",
      loosing: "释放即可刷新",
      success: "刷新成功",
      failed: "刷新失败",
      noMore: "没有更多了"
    },
    currency: {
      defaultCurrency: "默认币种",
      setDefault: "设为默认",
      chooseCurrency: "选择币种"
    },
    calendarBar: {
      week: {
        0: "日",
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六"
      },
      year: "%s年",
      yearMonth: "%y年%m月",
      month: {
        1: "1月",
        2: "2月",
        3: "3月",
        4: "4月",
        5: "5月",
        6: "6月",
        7: "7月",
        8: "8月",
        9: "9月",
        10: "10月",
        11: "11月",
        12: "12月"
      },
      monthAbbr: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12"
      }
    },
    calendarView: {
      week: {
        0: "日",
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六"
      },
      weekDays: {
        0: "周日",
        1: "周一",
        2: "周二",
        3: "周三",
        4: "周四",
        5: "周五",
        6: "周六"
      },
      backToday: "回今天",
      new: "新增",
      noSchedule: "暂无日程",
      year: "年",
      month: "月",
      dateFormat: "yyyy 年 MM 月"
    },
    selectedBox: {
      select: "已选（%s）",
      allSelect: "已全选（%s）",
      clear: "清空"
    },
    record: {
      record: "录音",
      cancel: "取消",
      confirm: "确定",
      clickToStartRecording: "点击开始录音",
      clickToResumeRecording: "点击继续录音"
    },
    dialogSelect: {
      treeSearch: "请输入关键字并回车"
    }
  },
  validation: {
    array: {
      len: "%s 的长度必须为 %s",
      min: "%s 长度不能小于 %s",
      max: "%s 的长度不能大于 %s",
      range: "%s 的长度必须介于 %s 和 %s 之间"
    },
    date: {
      format: "%s 日期 %s 对于格式 %s 无效",
      invalid: "%s 日期 %s 无效",
      parse: "无法分析 %s 日期， %s 无效"
    },
    default: "%s 字段校验错误",
    enum: "%s 必须是 %s 中的一个",
    number: {
      len: "%s 必须等于 %s",
      min: "%s 不能小于 %s",
      max: "%s 不能大于 %s",
      range: "%s 必须介于 %s 和 %s 之间"
    },
    pattern: {
      mismatch: "%s 值%s 与模式 %s 不匹配"
    },
    required: "必填",
    string: {
      len: "%s 必须是 %s 个字符",
      min: "%s 必须至少为 %s 个字符",
      max: "%s 不能大于 %s 个字符",
      range: "%s 必须介于 %s 和 %s 个字符之间"
    },
    types: {
      acceptFile: "只接受文件",
      acceptImg: "只接受图片格式",
      array: "非法数组",
      boolean: "非法布尔值",
      date: "不符合规则的日期格式",
      dateTime: "不符合规则的日期时间格式",
      dateYM: "不符合规则的日期格式(yyyy-mm)",
      dateYMD: "不符合规则的日期格式(yyyy-MM-dd)",
      digits: "非法纯数字",
      email: "非法邮件地址",
      fileSize: "文件大小的格式不正确,应如 3kb",
      float: "非法浮点数",
      hex: "非法十六进制",
      integer: "非法整数",
      longDateTime: "不符合规则的长日期格式",
      method: "必须是函数（Function）",
      number: "非法数字",
      object: "非法对象",
      regexp: "非法正则表达式",
      specialch: "只能包含数字、字母、下划线、横杠、点号",
      specialch2: "只能包含数字、字母、下划线、横杠",
      speczh: "只能包含数字、字母、下划线、汉",
      string: "非法字符串",
      time: "不符合规则的时间格式",
      url: "非法 URL 地址",
      version: "非法版本格式"
    },
    whitespace: "%s 不能为空"
  }
}, Y = {
  "en-US": "English",
  "zh-CN": "中文",
  "zh-TW": "中国台湾",
  hello: "Hello {name}",
  code: "en-US",
  yes: "Yes",
  no: "No",
  ui: {
    input: {
      close: "Close",
      more: "More",
      detail: "Detailed Info"
    },
    numeric: {
      equalTo: "Equal to",
      notEqualTo: "Not equal to",
      moreThan: "More than",
      moreThanOrEqualTo: "More than or equal to",
      lessThan: "Less than",
      lessThanOrEqualTo: "Less than or equal to",
      empty: "Empty",
      nonEmpty: "Non-empty"
    },
    queryBuilder: {
      addItem: "Add Rule",
      addGroup: "Add Rule Group",
      removeGroup: "Del Rule Group"
    },
    wizard: {
      previousStep: "LastStep",
      nextStep: "NextStep",
      save: "Save",
      submit: "Submit"
    },
    linkMenu: {
      title: "news",
      placeholder: "Please enter keywords to filter...",
      sure: "Determine",
      cancel: "cancel"
    },
    todoList: {
      add: "Add",
      placeholder: "please input your todo things"
    },
    alert: {
      error: "Error",
      info: "Info",
      success: "Success",
      title: "Message notification",
      warning: "Warning"
    },
    amount: {
      currency: "Currency",
      amount: "Amount",
      date: "Date",
      equalTo: "Equal to",
      notEqualTo: "Not equal to",
      moreThan: "More than",
      moreThanOrEqualTo: "More than or equal to",
      lessThan: "Less than",
      lessThanOrEqualTo: "Less than or equal to",
      empty: "Empty",
      nonEmpty: "Non-empty"
    },
    base: {
      all: "All",
      cancel: "Cancel",
      confirm: "OK",
      delete: "Delete",
      edit: "Edit",
      more: "More",
      reset: "Reset",
      clear: "Clear",
      comma: ","
    },
    button: {
      cancel: "Cancel",
      confirm: "Confirm"
    },
    buttonGroup: {
      noData: "No data"
    },
    buttonMessage: {
      cancel: "Cancel",
      confirm: "Confirm"
    },
    cell: {
      placeholder: "Select"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    chart: {
      auxiliary: "Auxiliary",
      emptyText: "No Data",
      kName: "Day K",
      other: "Other",
      summation: "Summation",
      total: "Total",
      value: "Value"
    },
    colorSelectPanel: {
      confirm: "Ok",
      cancel: "Cancel",
      predefine: "Predefine Color",
      history: "History",
      empty: "Empty"
    },
    crop: {
      cropImage: "crop image",
      croppedImage: "Post-Crop Image"
    },
    datepicker: {
      clear: "Clear",
      cancel: "Cancel",
      endDate: "End Date",
      confirm: "OK",
      month: "month",
      endTime: "End Time",
      month2: "February",
      month1: "January",
      month4: "April",
      month3: "March",
      month6: "June",
      month5: "May",
      month8: "August",
      month7: "July",
      month10: "October",
      month9: "September",
      month12: "December",
      month11: "November",
      months: {
        feb: "Feb",
        jan: "Jan",
        apr: "Apr",
        mar: "Mar",
        jun: "Jun",
        may: "May",
        aug: "Aug",
        jul: "Jul",
        oct: "Oct",
        sep: "Sep",
        dec: "Dec",
        nov: "Nov"
      },
      nextYear: "Next Year",
      nextMonth: "Next Month",
      prevMonth: "Previous Month",
      now: "Now",
      selectDate: "Select date",
      prevYear: "Previous Year",
      startDate: "Start Date",
      selectTime: "Select time",
      today: "Today",
      currentMonth: "Current Month",
      startTime: "Start Time",
      week: "week",
      weeks: {
        mon: "Mon",
        sun: "Sun",
        wed: "Wed",
        tue: "Tue",
        thu: "Thu",
        sat: "Sat",
        fri: "Fri"
      },
      timezone: "selecting a timezone",
      year: "",
      to: "to",
      yearMonth: "{year} / {month}",
      yearMonthDay: "{year} / {month} / {day}"
    },
    richTextEditor: {
      bold: "bold",
      italic: "italic",
      link: "link",
      unlink: "unlink",
      highlight: "high light",
      underline: "underline",
      strike: "strike",
      subscript: "subscript",
      superscript: "superscript",
      code: "code",
      unorderedlist: "unorderedlist",
      orderedlist: "orderedlist",
      taskList: "taskList",
      quote: "quote",
      codeBlock: "code block",
      formatClear: "format clear",
      nodeDelete: "node delete",
      undo: "undo",
      redo: "redo",
      left: "left",
      center: "center",
      right: "right",
      fontSize: "font size",
      lineHeight: "line height",
      hBox: "h box",
      img: "img",
      color: "color",
      table: "table",
      backgroundColor: "backgroundColor"
    },
    calendar: {
      showType: {
        year: "year"
      }
    },
    dept: {
      code: "Code",
      company: "Company",
      dept1: "First Level Department",
      dept2: "Second Level Department",
      dept3: "Third Level Department",
      dept4: "Fourth Level Department",
      dept5: "Fifth Level Department",
      dept6: "Sixth Level Department",
      dept7: "Seventh Level Department",
      dept8: "Eighth Level Department",
      input: "Input Dept Code or Name is available",
      name: "Name",
      search: "Quick Search",
      selected: "Selected"
    },
    dialogBox: {
      confirm: "confirm",
      cancel: "cancel"
    },
    load: {
      dot: "Loading"
    },
    exception: {
      build: "Building",
      busy: "The network is busy. Please wait",
      noperm: "Not find the page",
      weaknet: "Poor network performance",
      pcview: "View the file on the PC",
      nodata: "Get some rest",
      create: "Create",
      provide: "Provided by the TINY Team DEV",
      nodatamf: "No data",
      nopermmf: "No access",
      weaknetmf: "Network anomaly",
      noresult: "No result",
      nonews: "No latest news",
      pagenoperm: "403:No access",
      pageweaknet: "Network anomaly",
      pagenothing: "404:The page you visited does not exist",
      pageservererror: "500:Server exception"
    },
    fileUpload: {
      largefile: " is too large and will be uploaded in segments. Please wait.",
      folder: " has more than five layers of folders. The file will not be uploaded",
      init: "Service error. Please try again.",
      token: "Perform EDM authentication first and obtain the token",
      exceed: "The file size exceeds the limit of {maxSize}.",
      largeFile: "The file size exceeds the upper limit by 2 GB !!",
      fileSize: "The file size is lower than the limit of {minSize}{sizeUnit}",
      deleteTip: "Press delete to remove",
      downloadFile: "DownLoad file",
      previewFile: "Preview file",
      updateFile: "Update file",
      reUploadFile: "refresh upload file",
      cancelFile: "Cancel Upload",
      deleteFile: "Delete file",
      empty: "is empty!",
      kiaScanTip: "Sorry, unable to download. Please pass the KIA test first to download a file using public network. Current document is being checked by the KIA, Please wait a while then redownload.",
      fileNameExceeds: "exceeds 255 characters. Please change the file name.",
      fileName: "The file name",
      calcHash: "Document is calculating encryption",
      uploadFile: "Upload file",
      downloadAll: "Download all",
      onlySupport: "Only support {type} file",
      fileNotLessThan: "The size of single file cannot be less than ",
      fileNotMoreThan: "The size of single file cannot be more than ",
      notSupport: "The format (.{format}) is not allowed.",
      notSupportNoSuffix: "Files without suffixes are not supported currently",
      notSupportSpecialCharacters: "The file name contains special characters, please rename the file and upload again",
      attachment: "Attachment",
      uploadList: "Upload List",
      numberExceed: "The number of files exceeds the limit of {number}",
      numberLimit: "Maximum upload of {number} files.",
      encryptDialogTitle: "Watermark and encryption settings",
      addWatermark: "Add Watermark",
      encrypted: "Encrypted",
      docPreview: "Document Preview",
      networkError: "Network Error",
      pictureNetworkError: "Network error, upload failed",
      reUploadTip: "{number} files failed to upload!"
    },
    uploadList: {
      pictureUploading: "Picture uploading",
      uploadFailed: "Upload failed",
      uploading: "Uploading",
      download: "Download",
      reUpload: "Re-upload",
      delete: "Delete",
      noAttachments: "No attachments",
      cancel: "Cancel",
      preview: "Preview",
      releaseAndUpload: "Release the mouse and upload the file",
      dragOrClickImport: "Drag the file here, or click Import",
      shoot: "Shoot",
      selectFromAlbum: "Select from album",
      uploadFailedAndReupload: "Upload failed, click to reupload"
    },
    upload: {
      addPicture: "Add picture",
      addAudio: "Add audio",
      addVideo: "Add video"
    },
    grid: {
      dataUnchanged: "Data unchanged!",
      deleteSelectRecord: "Are you sure you want to delete the selected record?",
      emptyText: "No Data",
      error: {
        cellEditRender: "The renderer cell-render and edit-render cannot be used together.",
        delGetAllRecords: "The function getAllRecords is deprecated, please use getRecordset.",
        delGetRecords: "The function getRecords is deprecated, please use getData.",
        delLabel: "The property label is deprecated, please use title.",
        delProp: "The property prop is deprecated, please use field.",
        delRevert: "The function revert is deprecated, please use revertData.",
        groupFixed: "If grouping headers are used, fixed columns must be on the left and right sides.",
        notDelete: "delete method not exist.",
        notMouse: "Horizontal virtual scrolling does not support mouse-config.",
        notQuery: "query method not exist.",
        notResizable: "Horizontal virtual scrolling does not support resizable.",
        notSave: "save method not exist.",
        reqModule: "require {{name}} module.",
        rowIdEmpty: "The property row-id is not allowed to be empty.",
        scrollOriginal: "Virtual scrolling can only export source data, please set original=true.",
        scrollYHeight: "You must set the height or max-height to enable virtual scrolling.",
        toolbarId: "Toolbar must have a unique id",
        treeFixedExpand: "The fixed columns of the tree structure conflict with the expanded row.",
        treeInsert: "The tree structure does not support insert operations.",
        treeRemove: "The tree structure does not support remove operations.",
        unableInsert: "Unable to insert to the specified location.",
        dargSelf: "Self dragging is not allowed.",
        dargFixed: "Fixed columns cannot be dragged.",
        remoteMethod: '"remoteMethod" needs to be set for remote storage for personalized template management.',
        remoteSelectedMethod: '"remoteSelectedMethod" needs to be set for remote storage for personalized template management.',
        chainCallError: "There is a syntax error in the default slot for the column, please check.",
        renderParamError: "Expect to configure a rendering method for generating a VNode.",
        classComponentError: "Class component rendering error.",
        groupColumnFixedError: "Different fixed types cannot be set in the same group.",
        missingValueFormat: 'The renderer cannot format the date string. You should provide the "valueFormat" source date format configuration.',
        clipboardWriteError: "clipboard write error"
      },
      filter: {
        allFilter: "All",
        allSelect: "(All)",
        endDate: "End Date",
        startDate: "Start Date",
        dateTips: "Please enter at least one date",
        clear: "Clear Current Filter",
        clearAll: "Clear All Filters",
        confirmFilter: "OK",
        empty: "Is Empty",
        emptyText: "No Data",
        equal: "Equal",
        include: "Include",
        prefix: "Starts With",
        resetFilter: "Reset",
        unempty: "Is not Empty"
      },
      individuation: {
        cancelBtn: "Cancel",
        colConfigs: {
          asc: "Ascending",
          desc: "Descending",
          frozenLeft: "Frozen on the left",
          frozenRight: "Frozen on the right",
          invisible: "Invisible",
          unsorted: "No sortting",
          unfrozen: "Unfrozen",
          visible: "Visible",
          unfreeze: "Unfrozen",
          unsort: "Unsort"
        },
        toolbar: {
          set: "Set",
          selected: "Selected",
          freeze: "Freeze",
          sort: "Sort",
          clear: "Clear",
          search: "Search",
          all: "All"
        },
        columnSet: "Column Setting",
        overwriteSave: "Overwrite Save",
        saveAs: "Save as",
        saveTemplate: "Save Template",
        selectTemplate: "Select Template",
        hideMsg: "Leave one column to show at least.",
        maxFreezeNumMsg: "Maxium number of frozen columns is 6",
        defaultTemplateName: "Please enter a name, if not filled in, it will be generated by the system according to time",
        reserveTemplateName: "If the name is not filled in, the previous name will be retained",
        resetBtn: "Reset",
        saveBtn: "OK",
        hideAll: "Hide All",
        showAll: "Show All",
        tabs: {
          base: {
            title: "Base Setting",
            tips: "Click the icon to set personalized."
          },
          other: {
            allDataSort: "Remote Data Sorting",
            currPageSort: "Current Page Data Sorting",
            pageSize: "Page Size",
            title: "Other Setting",
            tips: "Settings for Sorting and Pagesize.",
            sortType: "Sorting Type"
          }
        },
        title: "Personalized Settings",
        switchtitle: "Template Management",
        switchsave: "Save configuration",
        switchlabel: "List:",
        switchapply: "Apply",
        switchedit: "Edit",
        switchdel: "Delete",
        switchconfirm: "Confirm",
        switchonlytemp: "Save as template only",
        switchtempapply: "Save as template and use",
        switchtempoverwrite: "Overwrite template and use",
        switchdelcon: "Are you sure to delete this template?",
        switchdelyes: "Yes",
        switchdelno: "No",
        switchapplycon: "Are you sure to use this template?"
      },
      removeSelectRecord: "Are you sure you want to remove the selected record?",
      saveSuccess: "Save successfully.",
      selectOneRecord: "Please choose at least one piece of record!",
      isSaveMsg: "There are change records, do you want to save them?"
    },
    hrapprover: {
      approver: "Approver",
      noapprover: "There is no approver",
      noselected: "Select one record!",
      remark: "Remarks"
    },
    imageViewer: {
      loadErrorAlt: "Load Error",
      save: "Save picture",
      del: "Delete Picture",
      thumbnail: "Thumbnail",
      menu: "Menu",
      hide: "Hide Sidebar",
      show: "Show Sidebar"
    },
    navMenu: {
      moreText: "more"
    },
    logout: {
      in: "Login",
      out: "Logout"
    },
    page: {
      goto: "Go to",
      item: "",
      next: "Next",
      page: "Records/Page",
      pageClassifier: "",
      pagesize: "Records/Page",
      prev: "Prev",
      total: "Total ",
      totals: "Total: ",
      jump: "Go to",
      hundredThousand: "100K+",
      million: "1M+",
      tenMillion: "10M+",
      loadingTotals: "Loading Totals..."
    },
    popeditor: {
      cancel: "Cancel",
      confirm: "OK",
      historyLists: "History options",
      reset: "Reset",
      search: "Search",
      selectionLists: "Selected Items",
      sourceLists: "Available Items",
      title: "Select",
      filterNode: "input text to filter node"
    },
    popupload: {
      fileName: "File Name",
      fileSize: "File Size",
      fileStatus: "File Status",
      dialogTitle: "File Upload",
      cancelButtonText: "Cancel",
      tipsFileText: "upload hints",
      uploadError: "Upload failure!",
      uploadButtonText: "select file",
      uploadSuccess: "Upload Success!",
      saveButtonText: "Click To Upload",
      uploadsButtonText: "select files",
      errorTypeTips: "Upload file type mismatch",
      errorSizeTips: "Upload file size exceeds limit",
      limitUploadFileType: "Upload file type is limited to",
      limitUploadFileNumber: "Limit the number of uploaded files to",
      limitUploadFileSize: "The size of the uploaded file does not exceed",
      errorNumTips: "The number of uploaded files exceeds the limit. The operation has been cancelled"
    },
    rate: {
      level: {
        average: "Average",
        excellent: "Excellent",
        fair: "Fair",
        good: "Good",
        poor: "Poor"
      }
    },
    select: {
      loading: "Loading",
      noData: "No data",
      noMatch: "No matching data",
      placeholder: "Select",
      pleaseSearch: "Please search",
      search: "Search",
      selected: "Selected",
      selectedNum: "{num} selected",
      noSearchData: "No search results. Please try again",
      add: "Add",
      collapse: "Collapse"
    },
    search: {
      placeholder: "search"
    },
    signature: {
      confirm: "Confirm",
      rewrite: "Rewrite",
      cancel: "Cancel",
      tips: "Please sign by hand",
      resign: "Resign",
      placeholder: "Please sign here (required)"
    },
    tabs: {
      moreItem: "more"
    },
    tag: {
      add: "Add"
    },
    toggleMenu: {
      placeholder: "please input filter content"
    },
    treeMenu: {
      placeholder: "please input filter content"
    },
    transfer: {
      filterPlaceholder: "Enter keyword",
      hasCheckedFormat: "{checked}/{total} checked",
      noData: "No data",
      noMatch: "No matching data",
      noCheckedFormat: "{total} items",
      titles: ["List 1", "List 2"]
    },
    tree: {
      loading: "Loading",
      emptyText: "No data",
      switchText: "check easily",
      edit: "Edit",
      delete: "Delete",
      addChild: "Add Child",
      newNodeTitle: "Add Child Nodes",
      deleteTip1: "The deleted data cannot be restored. Are you sure you want to delete it?",
      deleteTip2: "This node has lower-level nodes. Do you want to retain the lower-level node data?",
      deleteTip3: "Retain the lower-level node data"
    },
    usercard: {
      address: "Address",
      collapse: "Collapse",
      department: "Department",
      email: "email",
      employeeId: "Employee ID",
      employee_id: "Employee ID",
      empno: "Employee Number",
      expand: "Expand",
      fax: "Fax",
      internal: "Internal",
      manager: "Manager",
      mobile: "Mobile",
      other: "Other",
      phone: "Telephone",
      timezone: "Time zone",
      title: "User information: {0}",
      travelcode: "Travel code",
      viop: "VIOP",
      zipcode: "Postal Code"
    },
    richText: {
      bold: "Bold",
      italic: "Tilt",
      underline: "Underline",
      header: "Paragraph Format",
      strike: "Delete Line",
      blockquote: "Block Reference",
      codeBlock: "Insert Code Segment",
      size: "Font Size",
      listOrdered: "No. List",
      listBullet: "Project List",
      header1: "H1",
      header2: "H2",
      align: "Alignment Mode",
      color: "Font Color",
      background: "Background Color",
      image: "Image",
      video: "Video",
      link: "Add Link",
      formula: "Insert Function",
      clean: "Clear Format",
      indent1: "Indent To The Left",
      indent2: "Indent To The Right",
      pickerLabel: "Title Size",
      headerPicker1: "Title 1",
      headerPicker2: "Title 2",
      headerPicker3: "Title 3",
      headerPicker4: "Title 4",
      headerPicker5: "Title 5",
      headerPicker6: "Title 6",
      normal: "Normal",
      sizeSmall: "Small",
      sizeLarge: "Large",
      sizeHuge: "Super Large Size",
      alignPicker1: "Align To The Left",
      alignPicker2: "Align In The Center",
      alignPicker3: "Align To The Right",
      alignPicker4: "Align The Two Ends",
      subScript: "Subscript",
      superScript: "Superscript",
      directionRTL: "Right To Left",
      font: "Font",
      file: "File",
      betterTable: "Table",
      fullscreen: "Fullscreen",
      insertColumnRight: "Insert Column Right",
      insertColumnLeft: "Insert Column Left",
      insertRowUp: "Insert Row Up",
      insertRowDown: "Insert Row Down",
      mergeCells: "Merge Cells",
      unmergeCells: "Split Cells",
      deleteColumn: "Delete Current Column",
      deleteRow: "Delete Current Row",
      deleteTable: "Delete Table",
      colorPicker: "Background Color",
      placeholder: "Insert text here...",
      maxLength: "Text Length exceeds the Limit, max Length config is "
    },
    steps: {
      done: "Completed",
      doing: "Ongoing",
      wait: "Waiting"
    },
    actionSheet: {
      cancel: "Cancel"
    },
    image: {
      loadFail: "Loading failed"
    },
    miniPicker: {
      cancel: "Cancel",
      confirm: "Confirm"
    },
    pullRefresh: {
      pullingDown: "Pull down to refresh",
      pullingUp: "Pull up to refresh",
      pulling: "Pull down to refresh",
      loosing: "Release to refresh",
      success: "Refresh success",
      failed: "Refresh failed",
      noMore: "There is no more"
    },
    currency: {
      defaultCurrency: "Default currency",
      setDefault: "Set as default",
      chooseCurrency: "Choose currency"
    },
    calendarBar: {
      week: {
        0: "SUN",
        1: "MON",
        2: "TUE",
        3: "WED",
        4: "THU",
        5: "FRI",
        6: "SAT"
      },
      year: "Year %s",
      yearMonth: "%m %y",
      month: {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
      },
      monthAbbr: {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sept",
        10: "Oct",
        11: "Nov",
        12: "Dec"
      }
    },
    calendarView: {
      week: {
        0: "SUN",
        1: "MON",
        2: "TUE",
        3: "WED",
        4: "THU",
        5: "FRI",
        6: "SAT"
      },
      weekDays: {
        0: "SUN",
        1: "MON",
        2: "TUE",
        3: "WED",
        4: "THU",
        5: "FRI",
        6: "SAT"
      },
      backToday: "back to today",
      new: "New",
      noSchedule: "No Schedule",
      year: "year",
      month: "month",
      dateFormat: "yyyy-MM"
    },
    selectedBox: {
      select: "Selected (%s)",
      allSelect: "All selected (%s)",
      clear: "Clear"
    },
    record: {
      record: "Record",
      cancel: "Cancel",
      confirm: "Confirm",
      clickToStartRecording: "Click to start recording",
      clickToResumeRecording: "Click to resume recording"
    },
    dialogSelect: {
      treeSearch: "Enter a keyword and press Enter"
    }
  },
  validation: {
    array: {
      len: "must be exactly %s in length",
      min: "cannot be less than %s in length",
      max: "cannot be greater than %s in length",
      range: "must be between %s and %s in length"
    },
    date: {
      format: "date %s is invalid for format %s",
      invalid: "date %s is invalid",
      parse: "date could not be parsed, %s is invalid "
    },
    default: "Validation error on field %s",
    enum: "must be one of %s",
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    pattern: {
      mismatch: "value %s does not match pattern %s"
    },
    required: "required",
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    types: {
      acceptFile: "not a valid %s",
      acceptImg: "not a valid %s",
      array: "not an %s",
      boolean: "not a %s",
      date: "not a %s",
      dateTime: "not a valid %s",
      dateYM: "not a valid %s",
      dateYMD: "not a valid %s",
      digits: "not a valid %s",
      email: "not a valid %s",
      fileSize: "not a valid %s",
      float: "not a %s",
      hex: "not a valid %s",
      integer: "not an %s",
      longDateTime: "not a valid %s",
      method: "not a %s (function)",
      number: "not a %s",
      object: "not an %s",
      regexp: "not a valid %s",
      specialch: "not a valid %s",
      specialch2: "not a valid %s",
      speczh: "not a valid %s",
      string: "not a %s",
      time: "not a valid %s",
      url: "not a valid %s",
      version: "not a valid %s"
    },
    whitespace: "cannot be empty"
  }
};
var Le = /(%|)\{([0-9a-zA-Z_]+)\}/g;
function Ue(r) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  return t.length === 1 && j(t[0]) === "object" && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), r.replace(Le, function(o, a, i, l) {
    var s;
    return r[l - 1] === "{" && r[l + o.length] === "}" ? i : (s = Object.prototype.hasOwnProperty.call(t, i) ? t[i] : null, s ?? "");
  });
}
var he = Object.prototype.toString, W = Object.prototype.hasOwnProperty, He = Object.getPrototypeOf, ge = W.toString, qe = ge.call(Object), je = {
  "[object Error]": "error",
  "[object Object]": "object",
  "[object RegExp]": "regExp",
  "[object Date]": "date",
  "[object Array]": "array",
  "[object Function]": "function",
  "[object AsyncFunction]": "asyncFunction",
  "[object String]": "string",
  "[object Number]": "number",
  "[object Boolean]": "boolean"
}, x = function(e) {
  return e == null;
}, A = function(e) {
  return x(e) ? String(e) : je[he.call(e)] || "object";
}, te = function(e) {
  return A(e) === "object";
}, y = function(e) {
  if (!e || he.call(e) !== "[object Object]")
    return !1;
  var t = He(e);
  if (!t)
    return !0;
  var n = W.call(t, "constructor") && t.constructor;
  return typeof n == "function" && ge.call(n) === qe;
}, V = function(e) {
  return typeof e == "number" && isFinite(e);
}, L = function(e) {
  return e - parseFloat(e) >= 0;
}, O = function(e) {
  return A(e) === "date";
}, re = function(e, t) {
  if (typeof t == "function") {
    for (var n in e)
      if (W.call(e, n) && t(n, e[n]) === !1)
        break;
  }
}, k, U = function(e, t, n) {
  if (!(!e || !y(e) || !t || typeof t != "string")) {
    var o = t.split("."), a = e, i = o.length;
    if (i > 1) {
      for (var l = n ? 1 : 0, s = l; s < i; s++)
        if (a = a[o[s]], x(a))
          return a;
      return a;
    } else
      return a[o[0]];
  }
}, ne = function(e, t, n, o) {
  if (!e || !y(e) || !t || typeof t != "string")
    return e;
  var a = t.split("."), i = e, l = a.length, s = a[0];
  if (l > 1) {
    l--;
    for (var u = i, c, d, m = 0; m < l; m++)
      c = a[m], d = u[c], (d === null || !y(d)) && (u[c] = {}, d = u[c]), u = d;
    s = a[l], o && y(u[s]) ? k(!0, u[s], n) : u[s] = n;
  } else
    o && y(i[s]) ? k(!0, i[s], n) : i[s] = n;
  return i;
}, Be = function(e, t, n, o) {
  var a = function l(s, u, c, d, m) {
    var f = d.indexOf(c) === 0, p = d.split(c), v = p[1] && p[1].indexOf(".") === 0;
    c === d || f && v ? c !== d && re(U(s, c), function(N) {
      return l(s, u, "".concat(c, ".").concat(N), d), !0;
    }) : t && !t.includes(c) && ne(u, c, U(s, c), m);
  }, i = function(s, u, c, d) {
    var m = {};
    return d ? re(s, function(f) {
      return u.forEach(function(p) {
        return a(s, m, f, p, c);
      });
    }) : u.forEach(function(f) {
      return ne(m, f, U(s, f), c);
    }), m;
  };
  return y(e) ? Array.isArray(t) ? i(e, t, n, o) : k(n !== !1, {}, e) : e;
}, $e = function(e) {
  return Array.isArray(e) ? e.map(function(t) {
    return Be(t);
  }) : e;
}, Ge = function(e, t, n, o, a) {
  var i;
  if (n && o && (y(o) || (i = Array.isArray(o))))
    if (i)
      i = !1, e[t] = $e(o);
    else {
      var l = a && y(a) ? a : {};
      e[t] = k(n, l, o);
    }
  else if (o !== void 0)
    try {
      e[t] = o;
    } catch {
    }
};
k = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var o = t.length, a = t[0] || {}, i = 1, l = !1;
  for (A(a) === "boolean" && (l = a, a = t[i] || {}, i++), !te(a) && A(a) !== "function" && (a = {}); i < o; i++) {
    var s = t[i];
    if (s !== null && te(s))
      for (var u = Object.keys(s), c = 0, d = u; c < d.length; c++) {
        var m = d[c], f = a[m], p = s[m];
        a !== p && Ge(a, m, l, p, f);
      }
  }
  return a;
};
var F = R, P = null, I = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  if (P)
    return P.apply(this, arguments);
  for (var n = e.split("."), o = null, a = F, i = 0, l = n.length; i < l; i++) {
    var s = n[i];
    if (o = a[s] || "", i === l - 1)
      return Ue(o, t);
    if (!o)
      return "";
    a = o;
  }
  return "";
}, ve = function(e) {
  return F = e || F, F;
}, Ye = function() {
  return F.code;
}, ye = function(e) {
  return P = e || I, P;
}, K = k, be = function(e) {
  var t = e.app, n = e.createI18n, o = e.messages, a = o === void 0 ? {} : o, i = e.i18n, l = i === void 0 ? {} : i, s = e.merge;
  typeof s != "function" && (s = function(m) {
    var f = m.lang, p = m.i18n, v = m.messages;
    return K(!0, f, p.messages, v);
  });
  var u = {
    zhCN: R,
    enUS: Y
  };
  if (typeof n == "function") {
    var c = n({
      locale: l.locale || "zhCN",
      messages: s({
        lang: u,
        i18n: l,
        messages: a
      })
    });
    return P = function(m, f) {
      return c.global.t(m, f);
    }, c;
  }
  return t && t.config && t.config.globalProperties && (t.config.globalProperties.$t = I), s({
    lang: u,
    i18n: l,
    messages: a
  });
}, We = !0, Ve = !1;
const Ke = {
  isVue2: We,
  isVue3: Ve,
  use: ve,
  t: I,
  i18n: ye,
  initI18n: be,
  extend: K,
  zhCN: R,
  enUS: Y
};
var ae = function(e, t, n) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "0";
  if (typeof e == "string" && typeof o == "string" && V(t)) {
    var a = e.length - t;
    if (a > 0)
      return n ? e.substr(0, t) : e.substr(a, t);
    var i = [];
    for (a = Math.abs(a) / o.length; a > 0; a--)
      i.push(o);
    var l = i.join("");
    return n ? e + l : l + e;
  }
}, Je = function() {
  var e = 8;
  return document.addEventListener && window.performance && (e = 9, window.atob && window.matchMedia && (e = 10, !window.attachEvent && !document.all && (e = 11))), e;
}, Ze = function(e) {
  e.chrome && ~navigator.userAgent.indexOf("Edg") ? (e.name = "edge", e.edge = !0, delete e.chrome) : !document.documentMode && window.StyleMedia && (e.name = "edge", e.edge = !0);
}, Se = typeof window < "u" && typeof document < "u" && window.document === document;
(function() {
  var r = {
    name: void 0,
    version: void 0,
    isDoc: typeof document < "u",
    isMobile: !1,
    isPC: !0,
    isNode: typeof window > "u"
  };
  if (Se) {
    var e = /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(navigator.userAgent);
    r.isMobile = e, r.isPC = !e;
    var t;
    if (window.chrome && (window.chrome.webstore || /^Google\b/.test(window.navigator.vendor)) ? (r.name = "chrome", r.chrome = !0, t = navigator.userAgent.match(/chrome\/(\d+)/i), r.version = !!t && !!t[1] && parseInt(t[1], 10), t = void 0) : document.all || document.documentMode ? (r.name = "ie", r.version = Je(), r.ie = !0) : typeof window.InstallTrigger < "u" ? (r.name = "firefox", r.firefox = !0) : Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? (r.name = "safari", r.safari = !0) : (window.opr && window.opr.addons || window.opera) && (r.name = "opera", r.opera = !0), Ze(r), !~["ie", "chrome"].indexOf(r.name)) {
      var n = r.name + "/(\\d+)";
      t = navigator.userAgent.match(new RegExp(n, "i")), r.version = !!t && !!t[1] && parseInt(t[1], 10), t = void 0;
    }
    if (r.isDoc) {
      var o = document.body || document.documentElement;
      ["webkit", "khtml", "moz", "ms", "o"].forEach(function(a) {
        r["-" + a] = !!o[a + "MatchesSelector"];
      });
    }
  }
  return r;
})();
var M = Se ? window.BigInt : global.BigInt;
function B() {
  return typeof M == "function";
}
function C(r) {
  var e = r.toString().trim(), t = e.startsWith("-");
  t && (e = e.slice(1)), e = e.replace(/(\.\d*[^0])0*$/, "$1").replace(/\.0*$/, "").replace(/^0+/, ""), e.startsWith(".") && (e = "0".concat(e));
  var n = e || "0", o = n.split("."), a = o[0] || "0", i = o[1] || "0";
  a === "0" && i === "0" && (t = !1);
  var l = t ? "-" : "";
  return {
    negative: t,
    negativeStr: l,
    trimStr: n,
    integerStr: a,
    decimalStr: i,
    fullStr: "".concat(l).concat(n)
  };
}
function J(r) {
  var e = String(r);
  return !isNaN(Number(e)) && ~e.indexOf("e");
}
function Te(r) {
  return typeof r == "number" ? !isNaN(r) : r ? (
    // Normal type: 11.28
    /^\s*-?\d+(\.\d+)?\s*$/.test(r) || // Pre-number: 1.
    /^\s*-?\d+\.\s*$/.test(r) || // Post-number: .1
    /^\s*-?\.\d+\s*$/.test(r)
  ) : !1;
}
function $(r) {
  var e = String(r);
  if (J(r)) {
    var t = Number(e.slice(e.indexOf("e-") + 2)), n = e.match(/\.(\d+)/);
    return n != null && n[1] && (t += n[1].length), t;
  }
  return ~e.indexOf(".") && Te(e) ? e.length - e.indexOf(".") - 1 : 0;
}
function we(r) {
  var e = String(r);
  if (J(r)) {
    if (r > Number.MAX_SAFE_INTEGER)
      return String(B() ? M(r).toString() : Number.MAX_SAFE_INTEGER);
    if (r < Number.MIN_SAFE_INTEGER)
      return String(B() ? M(r).toString() : Number.MIN_SAFE_INTEGER);
    e = r.toFixed($(e));
  }
  return C(e).fullStr;
}
function _e(r) {
  return r.add || Object.assign(r, {
    add: r.plus,
    lessEquals: r.isLessThan,
    equals: r.isEqualTo
  }), r;
}
var G = {
  CLS: null
}, Ne;
function Z(r, e) {
  return G.CLS || Ne(e), _e(new G.CLS(r));
}
var Qe = /* @__PURE__ */ function() {
  function r(e) {
    if (fe(this, r), !e && e !== 0 || !String(e).trim()) {
      this.empty = !0;
      return;
    }
    if (this.origin = String(e), this.negative = void 0, this.integer = void 0, this.decimal = void 0, this.decimalLen = void 0, this.empty = void 0, this.nan = void 0, e === "-") {
      this.nan = !0;
      return;
    }
    var t = J(e) ? Number(e) : e;
    typeof t != "string" && we(t);
    var n = Function, o = function(u) {
      var c = u.replace(/^0+/, "") || "0";
      return n("return BigInt('".concat(c, "')"))();
    };
    if (Te(t)) {
      var a = C(t);
      this.negative = a.negative;
      var i = a.trimStr.split(".");
      this.integer = i[0].includes("e") ? i[0] : M(i[0]);
      var l = i[1] || "0";
      this.decimal = l.includes("e") ? o(l) : M(l), this.decimalLen = l.length;
    } else
      this.nan = !0;
  }
  return pe(r, [{
    key: "getDecimalStr",
    value: function() {
      return this.decimal.toString().padStart(this.decimalLen, "0");
    }
  }, {
    key: "getIntegerStr",
    value: function() {
      return this.integer.toString();
    }
  }, {
    key: "getMark",
    value: function() {
      return this.negative ? "-" : "";
    }
    /**
     * Align BigIntDecimal with same decimal length. e.g. 12.3 + 5 = 1230000
     * This is used for add function only.
     */
  }, {
    key: "alignDecimal",
    value: function(t) {
      var n = "".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t, "0"));
      return M(n);
    }
  }, {
    key: "add",
    value: function(t) {
      if (this.isInvalidate())
        return new r(t);
      var n = new r(t);
      if (n.isInvalidate())
        return this;
      var o = Math.max(this.getDecimalStr().length, n.getDecimalStr().length), a = n.alignDecimal(o), i = this.alignDecimal(o), l = "".concat(i + a), s = C(l), u = s.negativeStr, c = s.trimStr, d = "".concat(u).concat(c.padStart(o + 1, "0"));
      return Z("".concat(d.slice(0, -o), ".").concat(d.slice(-o)));
    }
  }, {
    key: "negate",
    value: function() {
      var t = new r(this.toString());
      return t.negative = !t.negative, t;
    }
  }, {
    key: "isNaN",
    value: function() {
      return this.nan;
    }
  }, {
    key: "isEmpty",
    value: function() {
      return this.empty;
    }
  }, {
    key: "isInvalidate",
    value: function() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "lessEquals",
    value: function(t) {
      return this.add(t.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "equals",
    value: function(t) {
      return this.toString() === (t && t.toString());
    }
  }, {
    key: "toNumber",
    value: function() {
      return this.isNaN() ? NaN : Number(this.toString());
    }
  }, {
    key: "toString",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return t ? this.isInvalidate() ? "" : C("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr : this.origin;
    }
  }]), r;
}(), Xe = /* @__PURE__ */ function() {
  function r() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    if (fe(this, r), !e && e !== 0 || !String(e).trim()) {
      this.empty = !0;
      return;
    }
    this.origin = "", this.number = void 0, this.empty = void 0, this.origin = String(e), this.number = Number(e);
  }
  return pe(r, [{
    key: "negate",
    value: function() {
      return new r(-this.toNumber());
    }
  }, {
    key: "add",
    value: function(t) {
      if (this.isInvalidate())
        return new r(t);
      var n = Number(t);
      if (isNaN(n))
        return this;
      var o = this.number + n;
      if (o < Number.MIN_SAFE_INTEGER)
        return new r(Number.MIN_SAFE_INTEGER);
      if (o > Number.MAX_SAFE_INTEGER)
        return new r(Number.MAX_SAFE_INTEGER);
      var a = Math.max($(n), $(this.number));
      return new r(o.toFixed(a));
    }
  }, {
    key: "isNaN",
    value: function(e) {
      function t() {
        return e.apply(this, arguments);
      }
      return t.toString = function() {
        return e.toString();
      }, t;
    }(function() {
      return isNaN(this.number);
    })
  }, {
    key: "isEmpty",
    value: function() {
      return this.empty;
    }
  }, {
    key: "isInvalidate",
    value: function() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function(t) {
      return this.toNumber() === (t && t.toNumber());
    }
  }, {
    key: "lessEquals",
    value: function(t) {
      return this.add(t.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function() {
      return this.number;
    }
  }, {
    key: "toString",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return t ? this.isInvalidate() ? "" : we(this.number) : this.origin;
    }
  }]), r;
}();
Ne = function(e) {
  G.CLS = B() ? Qe : typeof e == "function" ? e : Xe;
};
function De(r, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;
  if (r === "")
    return "";
  var n = ".", o = C(r), a = o.negativeStr, i = o.integerStr, l = o.decimalStr, s = "".concat(n).concat(l), u = "".concat(a).concat(i);
  if (e >= 0) {
    var c = Number(l[e]);
    if (c >= t && t !== 0) {
      var d = Z("".concat(i).concat(n).concat(l)).add("0.".concat(ae("", e, !0)).concat(10 - c));
      return De(a + d.toString(), e, 0);
    }
    return e === 0 ? u : "".concat(u).concat(n).concat(ae(l, e, !0).slice(0, e));
  }
  return s === ".0" ? u : "".concat(u).concat(s);
}
var et = function(e, t) {
  var n = t.secondaryGroupSize, o = n === void 0 ? 3 : n, a = t.groupSize, i = a === void 0 ? 0 : a, l = t.groupSeparator, s = l === void 0 ? "," : l, u = /^-\d+/.test(e), c = u ? e.slice(1) : e, d = o || i;
  if (i && c.length > i) {
    var m = c.slice(0, 0 - i), f = c.slice(0 - i);
    m = m.replace(new RegExp("\\B(?=(\\d{".concat(d, "})+(?!\\d))"), "g"), s), c = "".concat(m).concat(s).concat(f);
  }
  return "".concat(u ? "-" : "").concat(c);
}, oe = function(e) {
  for (var t = [], n = 0; n < e.length; n++)
    t.push(e[n]);
  return t.reverse().join("");
}, tt = function(e, t) {
  var n = t.fractionGroupSize, o = n === void 0 ? 0 : n, a = t.fractionGroupSeparator, i = a === void 0 ? " " : a, l = new RegExp("\\B(?=(\\d{".concat(o, "})+(?!\\d))"), "g");
  return oe(oe(e).replace(l, i));
}, rt = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.fraction, o = t.rounding, a = t.prefix, i = a === void 0 ? "" : a, l = t.decimalSeparator, s = l === void 0 ? "." : l, u = t.suffix, c = u === void 0 ? "" : u, d = Z(e);
  if (d.isNaN() || !d.toString())
    return e;
  d = De(d.toString(), n, o), t.zeroize === !1 && d.match(/\./) && (d = d.replace(/\.?0+$/g, ""));
  var m = d.toString().split(".").slice(0, 2).map(function(f, p) {
    return p ? tt(f, t) : et(f, t);
  }).join(s);
  return "".concat(i).concat(m).concat(c);
}, nt = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.prefix, o = n === void 0 ? "" : n, a = t.suffix, i = a === void 0 ? "" : a, l = t.decimalSeparator, s = l === void 0 ? "." : l, u = e;
  return typeof e == "string" && (u = e.replace(new RegExp("^".concat(o, "(.+)").concat(i, "$")), function(c, d) {
    return d;
  }).split(s).map(function(c) {
    return c.replace(/[^\d]/g, "");
  }).join(".")), Number(u);
}, Me = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], at = new RegExp("^(\\d{4})(/|-)(((0)?[1-9])|(1[0-2]))((/|-)(((0)?[1-9])|([1-2][0-9])|(3[0-1])))?( ((0)?[0-9]|1[0-9]|20|21|22|23):([0-5]?[0-9])((:([0-5]?[0-9]))?(.([0-9]{1,6}))?)?)?$"), ot = new RegExp("^(((0)?[1-9])|(1[0-2]))(/|-)(((0)?[1-9])|([1-2][0-9])|(3[0-1]))?(/|-)?(\\d{4})( ((0)?[0-9]|1[0-9]|20|21|22|23):([0-5]?[0-9])((:([0-5]?[0-9]))?(.([0-9]{1,6}))?)?)?$"), it = new RegExp("^(\\d{4})-(((0)?[1-9])|(1[0-2]))-(((0)?[1-9])|([1-2][0-9])|(3[0-1]))T(((0)?[0-9]|1[0-9]|20|21|22|23):([0-5]?[0-9])((:([0-5]?[0-9]))?(.([0-9]{1,6}))?)?)?(Z|([+-])((0)?[0-9]|1[0-9]|20|21|22|23):?([0-5]?[0-9]))$"), S = {
  YEAR: 9999,
  MONTH: 11,
  DATE: 31,
  HOUR: 23,
  MINUTE: 59,
  SECOND: 59,
  MILLISECOND: 999
}, lt = "-12:00,-11:00,-10:00,-09:30,-08:00,-07:00,-06:00,-05:00,-04:30,-04:00,-03:30,-02:00,-01:00", st = "-00:00,+00:00,+01:00,+02:00,+03:00,+03:30,+04:00,+04:30,+05:00,+05:30,+05:45,+06:00", ct = "+06:30,+07:00,+08:00,+09:00,+10:00,+10:30,+11:00,+11:30,+12:00,+12:45,+13:00,+14:00", ut = [].concat(lt.split(","), st.split(","), ct.split(",")), ke = function(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}, xe = function(e) {
  return e > S.MILLISECOND ? Number(String(e).substring(0, 3)) : e;
}, _ = function(e) {
  var t = e.year, n = e.month, o = e.date, a = e.hours, i = e.minutes, l = e.seconds, s = e.milliseconds, u = Me[n];
  if (ke(t) && n === 1 && (u += 1), o <= u)
    return new Date(t, n, o, a, i, l, xe(s));
}, dt = function(e) {
  if (e.length === 23) {
    var t = Number(e[1]), n = e[3] - 1, o = Number(e[9] || 1), a = e[15] || 0, i = e[17] || 0, l = e[20] || 0, s = e[22] || 0;
    return _({
      date: o,
      year: t,
      hours: a,
      month: n,
      seconds: l,
      minutes: i,
      milliseconds: s
    });
  }
}, mt = function(e) {
  if (e.length === 22) {
    var t = Number(e[12]), n = e[1] - 1, o = Number(e[6] || 1), a = e[14] || 0, i = e[16] || 0, l = e[19] || 0, s = e[21] || 0;
    return _({
      year: t,
      month: n,
      date: o,
      hours: a,
      minutes: i,
      seconds: l,
      milliseconds: s
    });
  }
}, ft = function(e) {
  if (e.length === 25) {
    var t = Number(e[1]), n = e[2] - 1, o = Number(e[6]), a = new Date(t, n, o).getTimezoneOffset(), i = e[12] || 0, l = e[14] || 0, s = e[17] || 0, u = e[19] || 0, c = e[20], d = e[21], m = e[22] || 0, f = e[24] || 0, p = Me[n], v, N;
    if (ke(t) && n === 1 && (p += 1), o <= p) {
      if (c === "Z")
        v = i - a / 60, N = l;
      else {
        if (c.includes(":") || (c = c.substr(0, 3) + ":" + c.substr(3)), !ut.includes(c))
          return;
        v = d === "+" ? i - m - a / 60 : Number(i) + Number(m) - a / 60, N = d === "+" ? l - f : Number(l) + Number(f);
      }
      return new Date(t, n, o, v, N, s, xe(u));
    }
  }
}, H = [[at, dt], [ot, mt], [it, ft]], pt = function(e) {
  for (var t = 0, n = H.length; t < n; t++) {
    var o = H[t][0].exec(e);
    if (o && o.length > 0)
      return H[t][1](o);
  }
}, ht = function(e, t, n) {
  if (n)
    switch (n) {
      case "yyyy":
      case "yy":
        e[0] = t;
        break;
      case "M":
      case "MM":
        e[1] = t - 1;
        break;
      case "d":
      case "dd":
        e[2] = t;
        break;
      case "h":
      case "hh":
        e[3] = t;
        break;
      case "m":
      case "mm":
        e[4] = t;
        break;
      case "s":
      case "ss":
        e[5] = t;
        break;
      case "S":
      case "SS":
      case "SSS":
        e[6] = t;
        break;
    }
}, gt = function(e, t) {
  var n = [0, -1, 0, 0, 0, 0];
  if (e.length !== t.length)
    return n;
  for (var o = 0, a = 0, i = 0, l = e.length; i < l; i++) {
    var s = e.substr(i, 1), u = isNaN(Number(s)) || s.trim() === "";
    if (u && s === t.substr(i, 1) || i === l - 1) {
      var c = void 0, d = void 0;
      if (u) {
        c = e.substring(o, i), o = i + 1;
        var m = t.indexOf(s, a);
        d = t.substring(a, m === -1 ? t.length : m), a = m + 1;
      } else
        c = e.substring(o, l), d = t.substring(a, l);
      (c.length === d.length || c) && ht(n, c, d);
    }
  }
  return n;
}, D = function(e, t, n) {
  return isNaN(e) || e < t || e > n;
}, vt = function(e) {
  var t = e.year, n = e.month, o = e.date, a = e.hours, i = e.minutes, l = e.seconds, s = e.milliseconds;
  return D(t, 0, S.YEAR) || D(n, 0, S.MONTH) || D(o, 0, S.DATE) || D(a, 0, S.HOUR) || D(i, 0, S.MINUTE) || D(l, 0, S.SECOND) || D(s, 0, S.MILLISECOND);
}, yt = function(e, t) {
  if (typeof t == "string") {
    var n = gt(e, t), o = Number(n[0]), a = Number(n[1]), i = Number(n[2] || 1), l = Number(n[3] || 0), s = Number(n[4] || 0), u = Number(n[5] || 0), c = Number(n[6] || 0);
    return vt({
      year: o,
      month: a,
      date: i,
      hours: l,
      minutes: s,
      seconds: u,
      milliseconds: c
    }) ? void 0 : _({
      year: o,
      date: i,
      month: a,
      minutes: s,
      hours: l,
      milliseconds: c,
      seconds: u
    });
  } else
    return pt(e);
}, ie = function r(e, t, n) {
  var o;
  if (V(e) ? o = new Date(e) : typeof e == "string" && (o = yt(e, t)), n) {
    var a = n && r(n) || new Date(1, 1, 1, 0, 0, 0);
    return o && o < a ? a : o;
  }
  return o;
}, bt = function(e, t, n) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  if (!(!O(e) || !L(t) || !L(n) || !L(o))) {
    var a = -t * 60, i = -n * 60, l = o * 60, s = e.getTime() + a * 6e4;
    return new Date(s - (i - l) * 6e4);
  }
}, St = "date,datetime,time,time-select,week,month,year,years,yearrange,daterange,monthrange,timerange,datetimerange,dates,quarter", z = {
  Day: "day",
  Date: "date",
  Dates: "dates",
  Year: "year",
  Years: "years",
  YearRange: "yearrange",
  PanelYearNum: 12,
  Month: "month",
  Week: "week",
  Normal: "normal",
  Today: "today",
  PreMonth: "pre-month",
  NextMonth: "next-month",
  YearI18n: "ui.datepicker.year",
  List: [38, 40, 37, 39],
  YearObj: {
    38: -4,
    40: 4,
    37: -1,
    39: 1
  },
  WeekObj: {
    38: -1,
    40: 1,
    37: -1,
    39: 1
  },
  DayObj: {
    38: -7,
    40: 7,
    37: -1,
    39: 1
  },
  Aviailable: "available",
  Default: "default",
  Current: "current",
  InRange: "in-range",
  StartDate: "start-date",
  EndDate: "end-date",
  Selected: "selected",
  Disabled: "disabled",
  Range: "range",
  fullMonths: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
  fullWeeks: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  MonhtList: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
  Weeks: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
  PlacementMap: {
    left: "bottom-start",
    center: "bottom",
    right: "bottom-end"
  },
  QuarterMap: {
    0: 0,
    1: 3,
    2: 6,
    3: 9
  },
  MonthQuarterMap: {
    0: 1,
    3: 2,
    6: 3,
    9: 4
  },
  TriggerTypes: St.split(","),
  DateFormats: {
    year: "yyyy",
    years: "yyyy",
    yearrange: "yyyy",
    month: "yyyy-MM",
    time: "HH:mm:ss",
    week: "yyyywWW",
    date: "yyyy-MM-dd",
    timerange: "HH:mm:ss",
    monthrange: "yyyy-MM",
    daterange: "yyyy-MM-dd",
    datetime: "yyyy-MM-dd HH:mm:ss",
    datetimerange: "yyyy-MM-dd HH:mm:ss"
  },
  Time: "time",
  TimeRange: "timerange",
  Quarter: "quarter",
  IconTime: "icon-time",
  IconDate: "icon-Calendar",
  DateRange: "daterange",
  DateTimeRange: "datetimerange",
  MonthRange: "monthrange",
  TimeSelect: "time-select",
  TimesTamp: "timestamp",
  DateTime: "datetime",
  SelectbaleRange: "selectableRange",
  Start: "09:00",
  End: "18:00",
  Step: "00:30",
  CompareOne: "-1:-1",
  CompareHundred: "100:100",
  selClass: ".selected",
  queryClass: ".tiny-picker-panel__content",
  disableClass: ".time-select-item:not(.disabled)",
  defaultClass: ".default",
  Qurtyli: '[data-tag="li"]',
  MappingKeyCode: {
    40: 1,
    38: -1
  },
  DatePicker: "DatePicker",
  TimePicker: "TimePicker"
}, g = {}, Q = ["\\d\\d?", "\\d{3}", "\\d{4}"], b = Q[0], Tt = Q[1], wt = Q[2], E = "[^\\s]+", Ee = /\[([^]*?)\]/gm, le = function() {
}, Nt = {
  shortDate: "M/D/yy",
  mediumDate: "MMM d, yyyy",
  longDate: "MMMM d, yyyy",
  fullDate: "dddd, MMMM d, yyyy",
  default: "ddd MMM dd yyyy HH:mm:ss",
  shortTime: "HH:mm",
  mediumTime: "HH:mm:ss",
  longTime: "HH:mm:ss.SSS"
}, Fe = function(e, t) {
  for (var n = [], o = 0, a = e.length; o < a; o++)
    n.push(e[o].substr(0, t));
  return n;
}, se = function(e) {
  return function(t, n, o) {
    var a = o[e].indexOf(n.charAt(0).toUpperCase() + n.substr(1).toLowerCase());
    ~a && (t.month = a);
  };
}, h = function(e, t) {
  for (e = String(e), t = t || 2; e.length < t; )
    e = "0" + e;
  return e;
}, Dt = function(e) {
  return e.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
}, Ce = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, Pe = z.fullWeeks, ze = z.fullMonths, Mt = Fe(ze, 3), kt = Fe(Pe, 3), xt = ["th", "st", "nd", "rd"];
g.i18n = {
  dayNames: Pe,
  monthNames: ze,
  dayNamesShort: kt,
  monthNamesShort: Mt,
  amPm: ["am", "pm"],
  doFn: function(e) {
    return e + xt[e % 10 > 3 ? 0 : (e - e % 10 !== 10) * e % 10];
  }
};
var ce = {
  D: function(e) {
    return e.getDay();
  },
  DD: function(e) {
    return h(e.getDay());
  },
  Do: function(e, t) {
    return t.doFn(e.getDate());
  },
  d: function(e) {
    return e.getDate();
  },
  dd: function(e) {
    return h(e.getDate());
  },
  ddd: function(e, t) {
    return t.dayNamesShort[e.getDay()];
  },
  dddd: function(e, t) {
    return t.dayNames[e.getDay()];
  },
  M: function(e) {
    return e.getMonth() + 1;
  },
  MM: function(e) {
    return h(e.getMonth() + 1);
  },
  MMM: function(e, t) {
    return t.monthNamesShort[e.getMonth()];
  },
  MMMM: function(e, t) {
    return t.monthNames[e.getMonth()];
  },
  yy: function(e) {
    return h(String(e.getFullYear()), 4).substr(2);
  },
  yyyy: function(e) {
    return h(e.getFullYear(), 4);
  },
  h: function(e) {
    return e.getHours() % 12 || 12;
  },
  hh: function(e) {
    return h(e.getHours() % 12 || 12);
  },
  H: function(e) {
    return e.getHours();
  },
  HH: function(e) {
    return h(e.getHours());
  },
  m: function(e) {
    return e.getMinutes();
  },
  mm: function(e) {
    return h(e.getMinutes());
  },
  s: function(e) {
    return e.getSeconds();
  },
  ss: function(e) {
    return h(e.getSeconds());
  },
  S: function(e) {
    return Math.round(e.getMilliseconds() / 100);
  },
  SS: function(e) {
    return h(Math.round(e.getMilliseconds() / 10), 2);
  },
  SSS: function(e) {
    return h(e.getMilliseconds(), 3);
  },
  a: function(e, t) {
    return e.getHours() < 12 ? t.amPm[0] : t.amPm[1];
  },
  A: function(e, t) {
    return e.getHours() < 12 ? t.amPm[0].toUpperCase() : t.amPm[1].toUpperCase();
  },
  ZZ: function(e) {
    var t = e.getTimezoneOffset();
    return (t > 0 ? "-" : "+") + h(Math.floor(Math.abs(t) / 60) * 100 + Math.abs(t) % 60, 4);
  }
}, w = {
  d: [b, function(r, e) {
    r.day = e;
  }],
  Do: [b + E, function(r, e) {
    r.day = parseInt(e, 10);
  }],
  M: [b, function(r, e) {
    r.month = e - 1;
  }],
  yy: [b, function(r, e) {
    var t = /* @__PURE__ */ new Date(), n = Number(String(t.getFullYear()).substr(0, 2));
    r.year = String(e > 68 ? n - 1 : n) + e;
  }],
  h: [b, function(r, e) {
    r.hour = e;
  }],
  m: [b, function(r, e) {
    r.minute = e;
  }],
  s: [b, function(r, e) {
    r.second = e;
  }],
  yyyy: [wt, function(r, e) {
    r.year = e;
  }],
  S: ["\\d", function(r, e) {
    r.millisecond = e * 100;
  }],
  SS: ["\\d{2}", function(r, e) {
    r.millisecond = e * 10;
  }],
  SSS: [Tt, function(r, e) {
    r.millisecond = e;
  }],
  D: [b, le],
  ddd: [E, le],
  MMM: [E, se("monthNamesShort")],
  MMMM: [E, se("monthNames")],
  a: [E, function(r, e, t) {
    var n = e.toLowerCase();
    n === t.amPm[0] ? r.isPm = !1 : n === t.amPm[1] && (r.isPm = !0);
  }],
  ZZ: ["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z", function(r, e) {
    var t = String(e).match(/([+-]|\d\d)/gi), n;
    t && (n = Number(t[1] * 60) + parseInt(t[2], 10), r.timezoneOffset = t[0] === "+" ? n : -n);
  }]
}, Et = ["A", "DD", "dd", "mm", "hh", "MM", "ss", "hh", "H", "HH"];
g.masks = Nt;
w.dddd = w.ddd;
Et.forEach(function(r) {
  r === "MM" ? w[r] = w[r.substr(0, 1)] : w[r] = w[r.substr(0, 1).toLowerCase()];
});
g.format = function(r, e, t) {
  var n = t || g.i18n;
  if (typeof r == "number" && (r = new Date(r)), !O(r) || isNaN(r.getTime()))
    throw new Error("Invalid Date in fecha.format");
  e = g.masks[e] || e || g.masks.default;
  var o = [];
  return e = e.replace(Ee, function(a, i) {
    return o.push(i), "@@@";
  }), e = e.replace(Ce, function(a) {
    return a in ce ? ce[a](r, n) : a.slice(1, a.length - 1);
  }), e.replace(/@@@/g, function() {
    return o.shift();
  });
};
var Ft = function(e, t) {
  var n = [], o = Dt(e).replace(Ce, function(a) {
    if (w[a]) {
      var i = w[a];
      return t.push(i[1]), "(" + i[0] + ")";
    }
    return a;
  });
  return o = o.replace(/@@@/g, function() {
    return n.shift();
  }), o;
}, Ct = function(e) {
  var t, n = /* @__PURE__ */ new Date();
  if (x(e.timezoneOffset)) {
    var d = e.year, m = e.month, f = e.day, p = e.hour, v = e.minute, N = e.second, Oe = e.millisecond;
    t = new Date(d || n.getFullYear(), m || 0, f || 1, p || 0, v || 0, N || 0, Oe || 0);
  } else {
    e.minute = Number(e.minute || 0) - Number(e.timezoneOffset);
    var o = e.year, a = e.month, i = e.day, l = e.hour, s = e.minute, u = e.second, c = e.millisecond;
    t = new Date(Date.UTC(o || n.getFullYear(), a || 0, i || 1, l || 0, s || 0, u || 0, c || 0));
  }
  return t;
};
g.parse = function(r, e, t) {
  var n = t || g.i18n;
  if (typeof e != "string")
    throw new TypeError("Invalid format in fecha.parse");
  if (e = g.masks[e] || e, r.length > 1e3)
    return null;
  var o = {}, a = [];
  e = e.replace(Ee, function(c, d) {
    return "@@@";
  });
  var i = Ft(e, a), l = r.match(new RegExp(i, "i"));
  if (!l)
    return null;
  for (var s = 1, u = l.length; s < u; s++)
    a[s - 1](o, l[s], n);
  return o.isPm === !0 && !x(o.hour) && Number(o.hour) !== 12 ? o.hour = Number(o.hour) + 12 : o.isPm === !1 && Number(o.hour) === 12 && (o.hour = 0), Ct(o);
};
const Pt = g;
var ue = z.Weeks, de = z.MonhtList, zt = z.DateFormats.date, At = function(e) {
  return {
    dayNamesShort: ue.map(function(t) {
      return e("ui.datepicker.weeks.".concat(t));
    }),
    dayNames: ue.map(function(t) {
      return e("ui.datepicker.weeks.".concat(t));
    }),
    monthNamesShort: de.map(function(t) {
      return e("ui.datepicker.months.".concat(t));
    }),
    monthNames: de.map(function(t, n) {
      return e("ui.datepicker.month".concat(n + 1));
    }),
    amPm: ["am", "pm"]
  };
}, Ot = function(e) {
  return !(x(e) || isNaN(new Date(e).getTime()) || Array.isArray(e));
}, Rt = function(e) {
  return Ot(e) ? new Date(e) : null;
}, It = function(e, t, n) {
  return e = Rt(e), e ? Pt.format(e, t || zt, At(n)) : "";
}, Lt = function(e) {
  var t = 3, n = ",", o = ".";
  if (y(e))
    return e;
  if (typeof e == "string") {
    var a = e.match(/\d{2}([^\d]?)\d{3}([^\d]?)\d{2}/);
    a && a.length === 3 && (n = a[1], o = a[2]);
  }
  return {
    groupSeparator: n,
    groupSize: t,
    decimalSeparator: o
  };
}, Ut = function(e) {
  var t = e.DateFormat, n = t === void 0 ? "yyyy-MM-dd" : t, o = e.TimeFormat, a = o === void 0 ? "HH:mm:ss" : o;
  return {
    DateFormat: n,
    DateTimeFormat: "".concat(n, " ").concat(a),
    TimeFormat: a
  };
}, Ae = /(-|\+)(\d{2}):?(\d{2})$/, q = function(e) {
  var t = 0 - (/* @__PURE__ */ new Date()).getTimezoneOffset() / 60, n = typeof e == "string" && e.match(Ae);
  if (n) {
    var o = n[2] * 1 + n[3] * 1 / 60;
    e = o * "".concat(n[1], "1");
  }
  return V(e) && e >= -12 && e <= 12 ? e : t;
};
function Ht(r) {
  return function(e) {
    var t = T(T({}, Ut(e)), {}, {
      NumberFormat: Lt(e.NumberFormat),
      DbTimezone: q(e.DbTimezone),
      Timezone: q(e.Timezone),
      TimezoneOffset: e.TimezoneOffset
    }), n = {
      getFormatConfig: function() {
        return t;
      },
      setFormatConfig: function(a) {
        Object.assign(t, a);
      },
      getNumberFormat: function() {
        return t.NumberFormat;
      },
      getDateFormat: function() {
        return {
          DateTimeFormat: t.DateTimeFormat,
          TimeFormat: t.TimeFormat,
          Timezone: t.Timezone,
          DateFormat: t.DateFormat,
          DbTimezone: t.DbTimezone,
          TimezoneOffset: t.TimezoneOffset
        };
      },
      /**
       *
       * @param {Date|String} value 日期或日期字符串
       * @param {String} format 格式化模式
       * @returns {String}
       */
      formatDate: function(a, i) {
        if (x(a))
          return a;
        var l = O(a) ? a : ie(a), s = t.DbTimezone, u = a.match && a.match(Ae), c = i === !1 || arguments[2] === !1;
        return u && (s = q(a), l = ie(a.replace("T", " ").slice(0, -5))), c || (l = this.getDateWithNewTimezone(l, s, t.Timezone, t.TimezoneOffset)), O(l) ? It(l, i || t.DateFormat, r) : null;
      },
      /**
       *
       * @param {Number} value 数字
       * @param {Object} format 格式化选项
       * @returns {String}
       */
      formatNumber: function(a, i) {
        return rt(a, T(T({}, t.NumberFormat), i));
      },
      /**
       *
       * @param {String} value 格式化后的字符串
       * @param {Object} format 格式化选项
       * @returns {Number}
       */
      recoverNumber: function(a, i) {
        return nt(a, T(T({}, t.NumberFormat), i));
      },
      /**
       *
       * @param {Date} value Date
       * @param {Number} from
       * @param {Number} to
       * @returns {String}
       */
      getDateWithNewTimezone: function(a, i, l, s) {
        return i = i === 0 ? i : i || t.DbTimezone, l = l === 0 ? l : l || t.Timezone, s = s === 0 ? s : s || t.TimezoneOffset, bt(a, i, l, s);
      }
    };
    return n;
  };
}
const $t = "3.17.0";
var Gt = ve, qt = I, Yt = ye, Wt = be, Vt = K, Kt = R, Jt = Y, jt = Ye, Bt = Ht(qt);
const Zt = T(T({}, Ke), {}, {
  language: jt,
  globalization: Bt
});
export {
  Zt as default,
  Jt as enUS,
  Vt as extend,
  Bt as globalization,
  Yt as i18n,
  Wt as initI18n,
  jt as language,
  qt as t,
  Gt as use,
  $t as version,
  Kt as zhCN
};
