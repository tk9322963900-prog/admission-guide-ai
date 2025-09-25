import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface Course {
  id: string;
  name: string;
  duration: string;
  eligibility: string;
  fee: string;
  rating: number;
  students: number;
  highlights: string[];
}

const courses: Course[] = [
  {
    id: '1',
    name: 'Computer Science & Engineering',
    duration: '4 Years',
    eligibility: '10+2 with PCM (75%+)',
    fee: '₹1,25,000/year',
    rating: 4.8,
    students: 1200,
    highlights: ['AI & ML Specialization', 'Industry Projects', 'High Placement Rate'],
  },
  {
    id: '2',
    name: 'Business Administration (MBA)',
    duration: '2 Years',
    eligibility: 'Bachelor\'s Degree (60%+)',
    fee: '₹1,00,000/year',
    rating: 4.7,
    students: 800,
    highlights: ['Case Studies', 'Global Internships', 'Leadership Program'],
  },
  {
    id: '3',
    name: 'Mechanical Engineering',
    duration: '4 Years',
    eligibility: '10+2 with PCM (70%+)',
    fee: '₹1,15,000/year',
    rating: 4.6,
    students: 950,
    highlights: ['Modern Labs', 'Industry Tie-ups', 'Research Opportunities'],
  },
  {
    id: '4',
    name: 'Data Science & Analytics',
    duration: '3 Years',
    eligibility: '10+2 with Math (80%+)',
    fee: '₹1,35,000/year',
    rating: 4.9,
    students: 600,
    highlights: ['Hands-on Projects', 'Industry Mentors', 'Job Guarantee'],
  },
  {
    id: '5',
    name: 'Digital Marketing',
    duration: '1 Year',
    eligibility: 'Any Graduate',
    fee: '₹65,000/year',
    rating: 4.5,
    students: 400,
    highlights: ['Live Campaigns', 'Certification', 'Portfolio Building'],
  },
  {
    id: '6',
    name: 'Biotechnology',
    duration: '4 Years',
    eligibility: '10+2 with PCB (75%+)',
    fee: '₹1,10,000/year',
    rating: 4.4,
    students: 300,
    highlights: ['Research Focus', 'Lab Experience', 'Industry Connect'],
  },
];

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Card className="group glass hover-glow transition-all duration-300 border-border hover:border-accent/50">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
              {course.name}
            </h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-warning text-warning" />
                <span>{course.rating}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <span className="text-sm font-medium text-muted-foreground">Eligibility:</span>
            <p className="text-sm text-foreground">{course.eligibility}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-muted-foreground">Fee Structure:</span>
            <p className="text-lg font-semibold text-success">{course.fee}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div>
          <span className="text-sm font-medium text-muted-foreground mb-3 block">Key Highlights:</span>
          <div className="flex flex-wrap gap-2">
            {course.highlights.map((highlight, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full bg-gradient-primary hover:shadow-floating transition-all duration-300 group">
          Apply Now
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-primary">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of programs designed to prepare you for tomorrow's challenges. 
            Each course is crafted with industry insights and academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            View All Courses
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;