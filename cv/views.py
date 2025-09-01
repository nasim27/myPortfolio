from rest_framework import viewsets
from .models import Education, Award, WorkExperience, Skill
from .serializers import (
    EducationSerializer,
    AwardSerializer,
    WorkExperienceSerializer,
    SkillSerializer
)

class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all().order_by("-date")
    serializer_class = EducationSerializer

class AwardViewSet(viewsets.ModelViewSet):
    queryset = Award.objects.all().order_by("-year")
    serializer_class = AwardSerializer

class WorkExperienceViewSet(viewsets.ModelViewSet):
    queryset = WorkExperience.objects.all().order_by("-start_date")
    serializer_class = WorkExperienceSerializer

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all().order_by("name")
    serializer_class = SkillSerializer
