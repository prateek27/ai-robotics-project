import numpy as NP
measurement=[1.,4.,7]
x=NP.matrix("0.; 0.")
p=NP.matrix("1000.0 0.0 ; 0.0 1000.0")
u=NP.matrix("0.; 0.")
F=NP.matrix("1. 1. ; 0. 1.")
H=NP.matrix("1. 0.")
r=NP.matrix("1.")
I=NP.matrix("1. 0. ; 0. 1.")

def func1():
	filter(x,p)
	
def filter(x,p):

	for i in range(len(measurement)):
	#measurement update 
	
		Z=NP.matrix(measurement[i])
		y=Z-H*x
		S=H*p*(H.T)+r
		K=p*(H.T)*(S.I)
		x=x+(K*y)
		p=(I-(K*H))*p
		print ' measurement update '
		print 'x= '
		print x
		print 'p= '
		print p
	#prediction update
			
		x=(F*x)+u
		p=F*p*(F.T)
		print ' motion update '
		print 'x= '
		print x
		print 'p= '
		print p
func1()
