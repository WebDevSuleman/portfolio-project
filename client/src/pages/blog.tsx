import { useQuery } from "@tanstack/react-query";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200">
      <Navigation />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">All Articles</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Insights, tutorials, and thoughts on modern web development
            </p>
          </div>

          {isLoading ? (
            <div className="space-y-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Skeleton className="w-full h-48 md:h-full" />
                    </div>
                    <CardContent className="p-6 md:w-2/3">
                      <Skeleton className="h-4 w-24 mb-3" />
                      <Skeleton className="h-6 w-full mb-3" />
                      <Skeleton className="h-4 w-full mb-4" />
                      <div className="flex space-x-2 mb-4">
                        <Skeleton className="h-5 w-12" />
                        <Skeleton className="h-5 w-16" />
                      </div>
                      <Skeleton className="h-4 w-20" />
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {posts?.map((post) => (
                <Card key={post.id} className="bg-white dark:bg-slate-800 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 md:w-2/3">
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{new Date(post.createdAt || '').toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime} min read</span>
                      </div>
                      
                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100 hover:text-primary transition-colors cursor-pointer">
                          {post.title}
                        </h2>
                      </Link>
                      
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Link href={`/blog/${post.slug}`}>
                          <a className="text-primary hover:text-blue-600 transition-colors font-medium">
                            Read More →
                          </a>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
