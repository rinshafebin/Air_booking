from rest_framework import serializers
from users.models import User
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import authenticate


class RegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True, min_length=3, max_length=150)
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'confirm_password')

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({"password": "Password and Confirm Password must match."})
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')  
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user



class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            raise serializers.ValidationError({"detail": "Email and password are required."})
        user = authenticate(request=self.context.get('request'), email=email, password=password)

        if not user:
            raise serializers.ValidationError({"detail": "Invalid credentials."})

        if not user.is_approved:
            raise serializers.ValidationError({"detail": "User not approved by admin yet."})

        data['user'] = user
        return data

class AdminUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =['id','email','username','created_at']
        

class AdminUserActionSerializer(serializers.Serializer):
    action = serializers.ChoiceField(choices=['approve','reject'])


class AdminUserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','approval_status','is_active','created_at','updated_at']
