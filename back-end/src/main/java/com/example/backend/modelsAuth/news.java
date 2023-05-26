package com.example.backend.modelsAuth;


import io.hypersistence.utils.hibernate.type.array.ListArrayType;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.neo4j.driver.internal.shaded.reactor.util.annotation.Nullable;

import java.util.List;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Table(name = "news")
@TypeDef(name = "list-array", typeClass = ListArrayType.class)
public class news {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Nullable
    @Column(name = "title")
    private String title;
    @Nullable
    @Column(name = "description")
    private String description;

    @Nullable
    @Column(name = "image")

    private String image;
    @Nullable
    @Column(name = "dateOfCreated")

    private LocalDateTime dateOfCreated;
    @Nullable
    @Type(type = "list-array")
    @Column(name = "comments")

    private List<String> comments;
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public LocalDateTime getDateOfCreated() {
        return dateOfCreated;
    }

    public void setDateOfCreated(LocalDateTime dateOfCreated) {
        this.dateOfCreated = dateOfCreated;
    }

    public List<String> getComments() {
        return comments;
    }

    public void setComments(List<String> comments) {
        this.comments = comments;
    }
}