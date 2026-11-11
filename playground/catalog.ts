import { lazy, type ComponentType } from "react";

export const upstream = "https://github.com/cabralorenzo/bencho";
export const groups = ["全部", "悬停", "点击", "拖动", "滑动", "输入", "选择"] as const;
export type Group = typeof groups[number];

const demos = import.meta.glob<Record<string, ComponentType>>("../blocks/*/*.tsx");
const styles = import.meta.glob("../blocks/*/*.css");

function entry(id: string, name: string, file: string, label: string, group: Exclude<Group, "全部">, description: string) {
  const path = "../blocks/" + id + "/" + file;
  return {
    id, name, file, label, group, description,
    Demo: lazy(async () => {
      const [module] = await Promise.all([demos[path + ".tsx"](), styles[path + ".css"]()]);
      return { default: module[file] };
    }),
  };
}

export const blocks = [
  entry("card-stack", "Card stack", "Stack", "卡片堆叠", "悬停", "悬停展开卡片，点击翻看。"),
  entry("context-meter", "Context meter", "ContextMeter", "上下文用量", "悬停", "查看 AI 上下文窗口的用量分布。"),
  entry("slingshot", "Slingshot", "Slingshot", "弹射小球", "拖动", "拉伸、松手，感受小球弹射的力度。"),
  entry("ascii-wake", "ASCII wake", "AsciiWake", "字符尾迹", "悬停", "让指针穿过点阵，留下字符波纹。"),
  entry("card-swap", "Card swap", "CardSwap", "卡片切换", "滑动", "滑动堆叠卡片，将最前一张送到最后。"),
  entry("rolling-counter", "Rolling counter", "Counter", "滚动计数器", "拖动", "点按或拖动数字，像里程表一样滚动。"),
  entry("wake-slider", "Wake slider", "WakeSlider", "尾迹滑块", "滑动", "滑过一排刻度，留下回弹的尾迹。"),
  entry("stacked-bars", "Stacked bars", "StackedBars", "堆叠柱图", "悬停", "悬停查看每天的数据，切换日与周。"),
  entry("toast-stack", "Toast stack", "ToastStack", "堆叠通知", "悬停", "悬停展开堆叠的通知。"),
  entry("folding-bill", "Folding bill", "FoldingBill", "可折叠纸钞", "拖动", "抓住纸钞，拖拽出立体折痕。"),
  entry("emoji-reactions", "Emoji reactions", "Reactions", "表情回应", "悬停", "挑选表情，将回应添加到消息上。"),
  entry("asset-swap", "Asset swap", "Swap", "资产兑换", "点击", "对调兑换方向，点按切换资产。"),
  entry("heat-word", "Heat map", "HeatWord", "热力点阵", "悬停", "指针经过的位置会显现热力效果。"),
  entry("image-compare", "Image compare", "Compare", "图片对比", "拖动", "拖动分界线，对比两张图片。"),
  entry("like", "Like", "Like", "点赞", "点击", "点按心形，触发粒子动画与计数。"),
  entry("signature", "Signature pad", "Signature", "签名板", "拖动", "手写签名，笔触随书写速度变化。"),
  entry("voice-note", "Voice note", "VoiceNote", "语音便签", "点击", "长按体验录音波形和滑动取消。"),
  entry("eye-tracker", "Eye tracker", "Watcher", "视线跟踪", "悬停", "让小方块的目光跟随指针。"),
  entry("dynamic-island", "Dynamic island", "Island", "灵动岛", "点击", "点按胶囊，展开正在进行的活动。"),
  entry("time-scrubber", "Time scrubber", "Scrub", "时间刻度", "滑动", "滑动时间标尺，松手吸附到最近刻度。"),
  entry("upload-dropzone", "Upload dropzone", "Upload", "拖拽上传", "拖动", "拖入文件体验上传区域与大小校验。"),
  entry("particles", "Particles", "Particles", "交互粒子", "悬停", "移开点阵粒子，点击产生冲击波。"),
  entry("label-input", "Label input", "LabelInput", "浮动标签输入框", "输入", "聚焦时，标签上移到输入框边缘。"),
  entry("one-time-code", "One-time code", "Otp", "验证码输入", "输入", "六位验证码输入，支持粘贴和退格。"),
  entry("generate", "Generate", "Generate", "生成动效", "点击", "点击生成，观察图像逐步显现。"),
  entry("step-player", "Step player", "StepPlayer", "分步播放", "点击", "播放时逐段推进步骤与进度条。"),
  entry("todo-tower", "Todo tower", "Tower", "待办堆塔", "点击", "完成一项任务，让其余卡片落下。"),
  entry("image-accordion", "Image accordion", "Accordion", "图片手风琴", "悬停", "指向一张图片时展开对应面板。"),
  entry("glass-bubble", "Glass bubble", "LiquidGlass", "玻璃气泡", "拖动", "拖动玻璃气泡，观察下方图像折射。"),
  entry("action-node", "Action node", "ActionNode", "动作节点", "悬停", "悬停显示自动化步骤的操作控件。"),
  entry("magnet-select", "Magnetic select", "MagneticSelect", "磁吸选项", "选择", "选中的选项会扩展并推开相邻选项。"),
  entry("slide-confirm", "Slide to confirm", "SlideConfirm", "滑动确认", "拖动", "拖过阈值，滑块自动完成确认。"),
  entry("picker", "Assignees", "Picker", "指派人员", "选择", "从列表选择人员，将头像叠入选框。"),
  entry("checklist", "Checklist", "Checklist", "核对清单", "点击", "勾选任务，体验勾号与删除线动画。"),
  entry("carousel", "Carousel", "Carousel", "旋转木马", "滑动", "滑动旋转卡片，浏览不同内容。"),
  entry("palette", "Palette", "Palette", "配色板", "点击", "点按生成一组新的配色。"),
  entry("liq-toggle", "Liquid toggle", "Toggle", "液态开关", "点击", "切换开关时，圆点像液滴一样拉伸。"),
  entry("dock", "Magnifying dock", "GlassDock", "放大程序坞", "悬停", "最靠近指针的图标会放大。"),
  entry("sound", "Now playing", "Sound", "正在播放", "点击", "从播放条展开为完整播放器。"),
  entry("pull", "Pull to refresh", "Balance", "下拉刷新", "拖动", "下拉卡片并松手，体验刷新反馈。"),
  entry("escape", "Escape button", "Escape", "躲避按钮", "悬停", "按钮会随着指针接近而躲开。"),
  entry("aspect", "Aspect ratio", "Aspect", "宽高比切换", "选择", "在不同的图片裁切比例之间切换。"),
  entry("tilt", "Tilt card", "Tilt", "倾斜卡片", "悬停", "让卡片随着指针的位置倾斜。"),
  entry("drag-ball", "Dragging ball", "Ball", "拖拽弹力球", "拖动", "拖动小球，体验挤压和回弹。"),
  entry("seek", "Search", "Seek", "展开式搜索", "点击", "点按搜索图标，将其展开为输入框。"),
  entry("slosh", "Slosh slider", "Slosh", "液体滑块", "滑动", "快速拖动滑块，观察填充液体的惯性。"),
  entry("liq-create", "Create menu", "Create", "创建菜单", "点击", "点按按钮，展开液态过渡菜单。"),
];

export type Block = typeof blocks[number];

export const blockUrl = (id: string) => "#/component/" + id;
export const upstreamBlock = (id: string) => "https://bencho.dev/blocks/" + id;
