package com.example.backend.configuration;

import com.example.backend.modelsAuth.*;
import com.example.backend.photo.modelsPhot.*;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = "com.example.backend.photo.repositoryPhot",
        entityManagerFactoryRef = "photEntityManagerFactory",
        transactionManagerRef = "photTransactionManager")
public class PhotoDataSourceConfiguration {
    @Bean
    @ConfigurationProperties("spring.datasource.phot")
    public DataSourceProperties photDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    @ConfigurationProperties("spring.datasource.phot.configuration")
    public DataSource photDataSource() {
        return photDataSourceProperties().initializeDataSourceBuilder()
                .type( HikariDataSource.class).build();
    }

    @Bean(name = "photEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean photEntityManagerFactory(
            EntityManagerFactoryBuilder builder) {
        return builder
                .dataSource(photDataSource())
                .packages(photoDb.class, omn.class,dormant.class, equipment.class,orphans.class, mv_fl.class, fl_relatives.class, mv_rn_old.class,fl_pension_contr.class, mv_ul.class,adm.class,pdl.class, immoral_lifestyle.class, lawyers.class, bankrot.class, block_esf.class, mv_iin_doc.class)
                .build();
    }

    @Bean(name = "photTransactionManager")
    public PlatformTransactionManager photTransactionManager(
            final @Qualifier("photEntityManagerFactory") LocalContainerEntityManagerFactoryBean photEntityManagerFactory) {
        return new JpaTransactionManager(photEntityManagerFactory.getObject());
    }
}
