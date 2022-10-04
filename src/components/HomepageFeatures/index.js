import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        prefix: 'EXPERIENCE',
        title: '「沉淀」',
        subtitle: '多年迭代 & 汰劣留良',
        description: (
            <>
                自 TabooLib 诞生以来，从最初的私有库到如今由社区共同维护，经历了无数个版本的迭代，我们清楚大家的需求。
            </>
        ),
    },
    {
        prefix: 'FRIENDLY',
        title: '「友好」',
        subtitle: '开箱即用 & 拒绝繁琐',
        description: (
            <>
                基于 <a href="https://tabooproject.org/quickstart.html">QuickStart</a> 工具，创建项目仅需 30 秒
                <br></br>在 TabooLib 中，任何工具的设计初衷都是为了能够更便捷的使用。
            </>
        ),
    },
    {
        prefix: 'LIBERAL',
        title: '「开放」',
        subtitle: '宽松协议 & 自由创作',
        description: (
            <>
                我们使用 <a href="https://github.com/TabooLib/taboolib/blob/master/LICENSE">MIT License</a> 协议开源
                <br></br>无论它是何种形态 🥵
            </>
        ),
    },
];

function Feature({prefix, title, subtitle, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <span className="font-light">{prefix}</span>
                <h1>{title}</h1>
                <span className="font-dark">{subtitle}</span>
                <p style={{marginTop: "4px"}}>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
