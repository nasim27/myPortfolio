from django.db import models

class Education(models.Model):
    degree = models.CharField(max_length=200)
    institution = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    date = models.CharField(max_length=50)  # e.g. "2020–2022"

    def __str__(self):
        return f"{self.degree} at {self.institution}"


class Award(models.Model):
    title = models.CharField(max_length=200)
    organization = models.CharField(max_length=200)
    year = models.CharField(max_length=50)  # e.g. "2022"

    def __str__(self):
        return f"{self.title} ({self.year})"


class WorkExperience(models.Model):
    role = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)  # blank if still working

    def __str__(self):
        return f"{self.role} at {self.company}"


class Skill(models.Model):
    name = models.CharField(max_length=100)
    level = models.CharField(max_length=50)  # e.g. Beginner, Intermediate, Expert

    def __str__(self):
        return f"{self.name} ({self.level})"
