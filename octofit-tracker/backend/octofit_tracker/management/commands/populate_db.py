from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Clean existing data
        Leaderboard.objects.all().delete()
        Activity.objects.all().delete()
        Workout.objects.all().delete()
        Team.objects.all().delete()
        User.objects.all().delete()

        # Create sample users
        marvel_user = User.objects.create(username='ironman', email='ironman@marvel.com')
        marvel_user2 = User.objects.create(username='captainamerica', email='captain@marvel.com')
        dc_user = User.objects.create(username='superman', email='superman@dc.com')
        dc_user2 = User.objects.create(username='batman', email='batman@dc.com')

        # Create teams
        marvel_team = Team.objects.create(name='Team Marvel')
        marvel_team.members.add(marvel_user, marvel_user2)

        dc_team = Team.objects.create(name='Team DC')
        dc_team.members.add(dc_user, dc_user2)

        # Activities
        Activity.objects.create(user=marvel_user, activity_type='Flying', duration=60, calories_burned=500, date='2026-05-01')
        Activity.objects.create(user=dc_user, activity_type='Running', duration=45, calories_burned=450, date='2026-05-02')
        Activity.objects.create(user=marvel_user2, activity_type='Swimming', duration=30, calories_burned=300, date='2026-05-03')
        Activity.objects.create(user=dc_user2, activity_type='Training', duration=40, calories_burned=350, date='2026-05-04')

        # Workouts
        workout1 = Workout.objects.create(name='Avengers Circuit', description='High intensity circuit training for heroes.')
        workout1.suggested_for.add(marvel_user, marvel_user2)

        workout2 = Workout.objects.create(name='Justice League Strength', description='Strength training for elite heroes.')
        workout2.suggested_for.add(dc_user, dc_user2)

        # Leaderboard
        Leaderboard.objects.create(user=marvel_user, score=150, rank=1)
        Leaderboard.objects.create(user=dc_user, score=140, rank=2)
        Leaderboard.objects.create(user=marvel_user2, score=130, rank=3)
        Leaderboard.objects.create(user=dc_user2, score=120, rank=4)

        self.stdout.write(self.style.SUCCESS('Test data created successfully!'))
