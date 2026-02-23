from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class UserModelTest(TestCase):
    def test_create_user(self):
        user = User.objects.create(username='testuser', email='test@example.com')
        self.assertEqual(user.username, 'testuser')

class TeamModelTest(TestCase):
    def test_create_team(self):
        user = User.objects.create(username='member1')
        team = Team.objects.create(name='Team A')
        team.members.add(user)
        self.assertEqual(team.name, 'Team A')
        self.assertIn(user, team.members.all())

class ActivityModelTest(TestCase):
    def test_create_activity(self):
        user = User.objects.create(username='activityuser')
        activity = Activity.objects.create(user=user, activity_type='Run', duration=30, calories_burned=300, date='2024-01-01')
        self.assertEqual(activity.activity_type, 'Run')

class WorkoutModelTest(TestCase):
    def test_create_workout(self):
        user = User.objects.create(username='workoutuser')
        workout = Workout.objects.create(name='Cardio', description='Cardio session', suggested_for='All', created_by=user)
        self.assertEqual(workout.name, 'Cardio')

class LeaderboardModelTest(TestCase):
    def test_create_leaderboard(self):
        team = Team.objects.create(name='Team B')
        leaderboard = Leaderboard.objects.create(team=team, total_points=100)
        self.assertEqual(leaderboard.total_points, 100)
