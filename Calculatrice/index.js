function insert(num)
		{
			document.form.textview.value=document.form.textview.value+num;
		}
		function egal()
		{
			var exp=document.form.textview.value;
			if(exp)
			{
				document.form.textview.value=eval(document.form.textview.value)
			}
		}
		function retour()
		{
				var exp=document.form.textview.value;
					document.form.textview.value=exp.substring(0,exp.length-1);
		}
		function clean()
		{
			document.form.textview.value="";
		}
		function sqrt()
		{
			document.form.textview.value=Math.sqrt(document.form.textview.value);
		}
		function sqr()
		{
			document.form.textview.value=Math.pow(document.form.textview.value,2);
		}
		function fntan()
		{
			document.form.textview.value=Math.tan(document.form.textview.value);
		}
		function fncos()
		{
			document.form.textview.value=Math.cos(document.form.textview.value);
		}