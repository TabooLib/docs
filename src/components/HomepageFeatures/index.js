import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        prefix: '测试',
        title: '专业',
        subtitle: '测试',
        description: (
            <>
                基于 TabooLib 开发，Adyeshach 并非传统意义的 NPC 插件，而是一种虚拟实体的解决方案。
                任何人都可以免费使用 Adyeshach。
            </>
        ),
    },
    {
        prefix: '测试',
        title: '友好',
        subtitle: '测试',
        description: (
            <>
                得益于强大的游戏内编辑器，Adyeshach (2.0) 可以友好且快速的控制所有虚拟实体，包括由其他
                插件创造的。
            </>
        ),
    },
    {
        prefix: '测试',
        title: '改变',
        subtitle: '测试',
        description: (
            <>
                得益于强大的游戏内编辑器，Adyeshach (2.0) 可以友好且快速的控制所有虚拟实体，包括由其他
                插件创造的。
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
