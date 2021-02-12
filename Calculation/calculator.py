import sys
from sympy import *
from sympy.abc import i,k,m,n,x
from sympy.parsing.latex import parse_latex
import math

data = str(sys.argv[1])
d = repr(data).strip("'")
raw_data = d.replace('\\\\','\\')
expr = parse_latex(raw_data)
result = expr.doit()
print(result.evalf(4))


