import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserPlus, ArrowRight, CreditCard, Star } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertWaitlistEntrySchema, type InsertWaitlistEntry } from "@shared/schema";

export default function WaitlistForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertWaitlistEntry>({
    resolver: zodResolver(insertWaitlistEntrySchema),
    defaultValues: {
      parentName: "",
      email: "",
      childName: "",
      childAge: undefined,
      experience: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertWaitlistEntry) => {
      const response = await apiRequest("POST", "/api/waitlist", data);
      return response.json();
    },
    onSuccess: (data) => {
      setIsSubmitted(true);
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll contact you as soon as registration opens.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/waitlist"] });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertWaitlistEntry) => {
    mutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <section id="waitlist-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-olympic-blue to-fencing-navy rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="w-20 h-20 bg-olympic-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <UserPlus className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              You're On The List!
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Thank you for joining our waitlist. We'll contact you as soon as registration opens!
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-olympic-gold hover:bg-yellow-400 text-white font-bold py-3 px-6 rounded-full"
            >
              Add Another Child
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist-form" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-olympic-blue to-fencing-navy rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Join the Waitlist
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Be among the first to know when we open our doors. Reserve your spot today!
            </p>
          </div>

          {/* Priority Checkout Option */}
          <div className="mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-olympic-gold/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="bg-olympic-gold text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  PRIORITY
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Guarantee Your Priority Spot
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Pay a $25 refundable deposit to secure priority placement and early registration access. 
                  Full refund available anytime before classes begin.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-olympic-gold font-semibold mb-2">✓ Priority Access</div>
                    <div className="text-blue-100">First to register when we open</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-olympic-gold font-semibold mb-2">✓ Fully Refundable</div>
                    <div className="text-blue-100">100% refund anytime before start</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-olympic-gold font-semibold mb-2">✓ Secure Payment</div>
                    <div className="text-blue-100">Safe & encrypted via Stripe</div>
                  </div>
                </div>
                
                <Link href="/checkout">
                  <Button className="bg-olympic-gold hover:bg-yellow-400 text-white font-bold py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
                    <CreditCard className="w-5 h-5 mr-3" />
                    Reserve with $25 Deposit
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Button>
                </Link>
                
                <p className="text-xs text-blue-200 mt-4">
                  Secure checkout powered by Stripe • No commitment required
                </p>
              </div>
            </div>
          </div>

          {/* Regular Waitlist Form */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              Or Join Our Free Waitlist
            </h3>
            <p className="text-blue-100">
              No payment required - we'll notify you when registration opens
            </p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="parentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-100">Parent/Guardian Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your full name"
                          {...field}
                          className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:border-olympic-gold focus:ring-olympic-gold/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-100">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          {...field}
                          className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:border-olympic-gold focus:ring-olympic-gold/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="childName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-100">Child's Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Child's full name"
                          {...field}
                          className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:border-olympic-gold focus:ring-olympic-gold/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="childAge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-100">Child's Age</FormLabel>
                      <Select onValueChange={(value) => field.onChange(parseInt(value))} value={field.value?.toString()}>
                        <FormControl>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-olympic-gold focus:ring-olympic-gold/20">
                            <SelectValue placeholder="Select age" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => i + 7).map((age) => (
                            <SelectItem key={age} value={age.toString()}>
                              {age} years old
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-blue-100">Fencing Experience (Optional)</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value || ""}>
                      <FormControl>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-olympic-gold focus:ring-olympic-gold/20">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="none">No experience</SelectItem>
                        <SelectItem value="beginner">Beginner (some lessons)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (1-2 years)</SelectItem>
                        <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="text-center pt-4">
                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="bg-olympic-gold hover:bg-yellow-400 text-white font-bold py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
                >
                  {mutation.isPending ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Joining...
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-5 h-5 mr-3" />
                      Join Waitlist
                      <ArrowRight className="w-5 h-5 ml-3" />
                    </>
                  )}
                </Button>
                <p className="text-sm text-blue-200 mt-4">
                  We'll contact you as soon as registration opens!
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
