using System;

namespace hello
{
    class Program
    {
        static void Main(string[] args)
        {
            //Program.escrever();
            //Program.escreverString("teste");
           // Program.multiply(10, 20);
           // Program.escreverODigitado();
            Program.multiply();
        }
        static void escrever()
        {
            Console.WriteLine("Hello World!");
            string nome = "André";
            int idade = 30;
            double altura = 1.75;
            bool casado = false;

            Console.WriteLine(nome);
            Console.WriteLine(idade);
            Console.WriteLine(altura);
            Console.WriteLine(casado);

        }
        static void escreverString(string s)
        {
            Console.WriteLine(s);
        }
        static void multiply(int num1, int num2)
        {
            Console.WriteLine(num1 * num2);
        }
        static void escreverODigitado()
        {
            Console.WriteLine("Digite algo");
            string nome = Console.ReadLine();
            Console.WriteLine("Digite sua idade");
            int idade = int.Parse(Console.ReadLine());
            //Console.WriteLine("Olá" + nome+", seja bem vindo");
            Console.WriteLine("No seu próximo aniversario, você fará: " + (idade+1) + " anos");
        }
        static void multiply()
        {
            Console.WriteLine("Digite primeiro número");
            double num1 = double.Parse(Console.ReadLine());;
            Console.WriteLine("Digite segundo número");
            double num2 = double.Parse(Console.ReadLine());
            //Console.WriteLine("Olá" + nome+", seja bem vindo");
            Console.WriteLine("O resultaado da multiplicação é " + (num1*num2));
        }
    }
}
//Escrever uma função que some 2 números passados como parâmetro e imprima na tela. 
//use a função no método Program e use o dotnet run pra ver o resultado no console.

//Escreva uma função que obtenha do usuário 2 números e efetue a sua multiplicação.

//Complete a função que obtém do usuário dados para imputar os valores na função soma feita na primeira atividade. 
//Altere também para a função soma retornar o resultado e não mais escrevê-la na tela. 
//Use o Console.WriteLine chamando a soma para imprimir na tela.
