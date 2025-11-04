export interface Course {
  id: string;
  title: string;
  image: string;
  originalPrice: number;
  discountPrice: number;
  hours: number;
  description: string;
  instructor: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  requirements: string[];
  syllabus: {
    title: string;
    content: string;
    duration: string;
  }[];
  features: string[];
}

export const courses: Course[] = [
  {
    id: '1',
    title: '三代基因组测序的组装和校正',
    image: 'https://ext.same-assets.com/265941385/1324178364.jpeg',
    originalPrice: 99,
    discountPrice: 39,
    hours: 11,
    description: '本课程详细介绍了三代基因组测序技术的原理和应用，特别是在组装和校正方面的关键步骤。学习者将掌握从原始数据到高质量基因组的全过程技术路线。',
    instructor: '张教授',
    category: '生物信息学',
    level: 'intermediate',
    requirements: [
      '掌握基础的生物学知识',
      '了解基因组测序的基本概念',
      '有Linux基础操作能力'
    ],
    syllabus: [
      {
        title: '第1章: 三代测序技术介绍',
        content: '介绍PacBio和Nanopore等三代测序技术的原理、优缺点及应用场景',
        duration: '1小时'
      },
      {
        title: '第2章: 测序数据质量控制',
        content: '原始数据的质检方法，过滤低质量读段，数据预处理',
        duration: '2小时'
      },
      {
        title: '第3章: 基因组组装策略',
        content: '不同组装器的原理与比较，参数优化，组装结果评估',
        duration: '3小时'
      },
      {
        title: '第4章: 基因组校正方法',
        content: '使用二代数据对三代组装结果进行校正，提高准确性',
        duration: '3小时'
      },
      {
        title: '第5章: 组装后分析与评估',
        content: '基因组完整性评估，基因注释，组装结果可视化',
        duration: '2小时'
      }
    ],
    features: [
      '提供完整的实操案例',
      '包含详细的代码和命令说明',
      '配套测试数据集',
      '终身技术支持'
    ]
  },
  {
    id: '2',
    title: 'Snakemake生信分析流程自动化系统教程',
    image: 'https://ext.same-assets.com/265941385/3489377699.jpeg',
    originalPrice: 199,
    discountPrice: 90,
    hours: 50,
    description: '全面学习Snakemake工作流管理系统，构建可重复、可扩展的生物信息学分析流程。从基础语法到高级应用，掌握自动化分析的核心技能。',
    instructor: '李博士',
    category: '生物信息学',
    level: 'advanced',
    requirements: [
      'Python基础知识',
      '了解Linux系统基本操作',
      '具有生物信息学分析基础'
    ],
    syllabus: [
      {
        title: '第1章: Snakemake基础',
        content: '工作流概念，安装配置，基本语法规则',
        duration: '5小时'
      },
      {
        title: '第2章: 规则编写',
        content: '输入输出定义，Shell命令，Python代码集成',
        duration: '10小时'
      },
      {
        title: '第3章: 配置管理',
        content: 'Config文件，参数传递，环境变量设置',
        duration: '8小时'
      },
      {
        title: '第4章: 并行计算',
        content: '任务调度，集群整合，资源分配',
        duration: '12小时'
      },
      {
        title: '第5章: 实战案例',
        content: '构建RNA-seq，ChIP-seq，全基因组分析流程',
        duration: '15小时'
      }
    ],
    features: [
      '包含20个实际工作流示例',
      '提供完整项目源代码',
      '可在不同计算环境中部署',
      '包含性能优化指南'
    ]
  },
  {
    id: '3',
    title: 'antiSMASH-7批量预测真细菌次级代谢产物及可视化',
    image: 'https://ext.same-assets.com/265941385/367901544.jpeg',
    originalPrice: 0,
    discountPrice: 0,
    hours: 6,
    description: '学习使用antiSMASH-7工具进行细菌次级代谢产物的批量预测和分析，包括结果解读和可视化方法。适合微生物学和生物信息学研究人员。',
    instructor: '王研究员',
    category: '微生物学',
    level: 'intermediate',
    requirements: [
      '基础的微生物学知识',
      '简单的生物信息学分析经验',
      '了解基因组学基本概念'
    ],
    syllabus: [
      {
        title: '第1章: antiSMASH-7简介',
        content: '软件原理、功能特性和应用场景',
        duration: '1小时'
      },
      {
        title: '第2章: 安装与配置',
        content: '本地安装、网络服务使用、参数设置',
        duration: '1小时'
      },
      {
        title: '第3章: 批量分析流程',
        content: '数据准备、批处理脚本、结果收集',
        duration: '2小时'
      },
      {
        title: '第4章: 结果解读',
        content: '输出文件格式、生物合成基因簇分析、化合物预测',
        duration: '1小时'
      },
      {
        title: '第5章: 数据可视化',
        content: '结果可视化方法、比较分析、报告生成',
        duration: '1小时'
      }
    ],
    features: [
      '提供实例数据集',
      '包含批处理脚本模板',
      '结果解读指南',
      '可视化工具推荐'
    ]
  },
  {
    id: '4',
    title: '细菌二代基因组测序的组装和功能注释',
    image: 'https://ext.same-assets.com/265941385/1375128244.jpeg',
    originalPrice: 99,
    discountPrice: 39,
    hours: 15,
    description: '从原始测序数据到完整基因组组装及功能注释的全流程培训，适合微生物研究人员和生信分析初学者。理论与实践相结合，掌握实用技能。',
    instructor: '陈教授',
    category: '微生物学',
    level: 'beginner',
    requirements: [
      '基础的微生物学知识',
      '简单的Linux操作能力',
      '对基因组学有基本了解'
    ],
    syllabus: [
      {
        title: '第1章: 细菌基因组测序概述',
        content: '测序技术选择、实验设计、数据质量控制',
        duration: '2小时'
      },
      {
        title: '第2章: 测序数据预处理',
        content: '质量评估、数据过滤、错误校正',
        duration: '3小时'
      },
      {
        title: '第3章: 基因组组装',
        content: 'De novo组装方法、参数优化、组装质量评估',
        duration: '4小时'
      },
      {
        title: '第4章: 基因组注释',
        content: '基因预测、功能注释、比较分析',
        duration: '4小时'
      },
      {
        title: '第5章: 结果分析与可视化',
        content: '基因组浏览器、注释展示、比较基因组学',
        duration: '2小时'
      }
    ],
    features: [
      '提供完整分析流程',
      '包含示例数据集',
      '详细的命令和参数解释',
      '常见问题排查指南'
    ]
  },
];

// Helper function to get course by ID
export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}
