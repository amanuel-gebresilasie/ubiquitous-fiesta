from django.db import models

# Create your models here.
class Project(models.Model):
    title=models.CharField(max_length=50)
    description=models.TextField(blank=True)
    thumbnail=models.ImageField(upload_to='projects_thumbnails/')
    link_github=models.URLField(blank=True)
    link_live=models.URLField(blank=True)

    def __str__(self):
        return self.title