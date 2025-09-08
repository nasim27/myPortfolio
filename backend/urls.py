from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from blog.views import ProjectViewSet, BlogPostViewSet
from cv.views import EducationViewSet, AwardViewSet, WorkExperienceViewSet, SkillViewSet

router = routers.DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'blogposts', BlogPostViewSet)
router.register(r'education', EducationViewSet)
router.register(r'awards', AwardViewSet)
router.register(r'work-experience', WorkExperienceViewSet)
router.register(r'skills', SkillViewSet)

urlpatterns = [
    
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
     path("api/login/", obtain_auth_token, name="api_token_auth"),  # ✅ add this
]
