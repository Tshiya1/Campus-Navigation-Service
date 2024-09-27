provider "aws" {
  region = "us-west-1"  # Replace with your preferred region
}

data "aws_security_group" "existing_sg" {
  name = "launch-wizard-1"  # Replace with your security group name
}

resource "aws_instance" "app_server" {
  ami           = "ami-025258b26b492aec6"  # Amazon Linux 2 AMI
  instance_type = "t2.micro"

  key_name = var.key_name  # Replace with your SSH key name

  vpc_security_group_ids = [data.aws_security_group.existing_sg.id]

  user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y

              # Install Docker
              sudo yum install docker -y
              sudo service docker start
              sudo usermod -a -G docker ec2-user

              # Enable Docker to start on boot
              sudo systemctl enable docker

              # Install git
              sudo yum install -y git

              # Clone your private repository using PAT
              git clone https://Tshiya1:${var.github_token}@github.com/Tshiya1/Campus-Navigation-Service.git /home/ec2-user/app

              # Change to the app directory
              cd /home/ec2-user/app

              # Build Docker image from Dockerfile
              sudo docker build -t campus-nav-server .

              # Run the Docker container with auto-restart
              sudo docker run -d --restart unless-stopped -p 80:3000 campus-nav-server
              EOF

  tags = {
    Name = "NavigationServer"
  }

  lifecycle {
    create_before_destroy = true  # Create new instance before destroying old one
  }
}

# Associate an existing Elastic IP with the instance
resource "aws_eip_association" "eip_assoc" {
  instance_id   = aws_instance.app_server.id
  allocation_id = "eipalloc-0b6d6a7a4aca6eb0a"  # Use your actual Elastic IP allocation ID
}

output "instance_ip" {
  value = aws_instance.app_server.public_ip
}
