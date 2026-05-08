# populate_db.py for Octofit Tracker
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'octofit_tracker.settings')
django.setup()

from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard

# Create Users
test_user1 = User.objects.create(username='alice', email='alice@example.com')
test_user2 = User.objects.create(username='bob', email='bob@example.com')

# Create Teams
team1 = Team.objects.create(name='Team Alpha')
team1.members.add(test_user1, test_user2)

# Create Activities
Activity.objects.create(user=test_user1, activity_type='Running', duration=30, calories_burned=250, date='2026-05-01')
Activity.objects.create(user=test_user2, activity_type='Cycling', duration=45, calories_burned=400, date='2026-05-02')

# Create Workouts
workout1 = Workout.objects.create(name='Push Ups', description='Do 20 push ups')
workout1.suggested_for.add(test_user1)

# Create Leaderboard
Leaderboard.objects.create(user=test_user1, score=100, rank=1)
Leaderboard.objects.create(user=test_user2, score=80, rank=2)

print('Test data created successfully!')
