import Benefits1 from "/Price.png";
import Benefits2 from "/Phone.png";
import Benefits3 from "/Graduation.png";
import Module1 from "/Module1.jpg";
import Module2 from "/Module2.jpg";
import Module3 from "/Module3.jpg";
import Icon1 from "/Facebook-White.png";
import Icon2 from "/Instagram-White.png";
import Icon3 from "/Twitter-White.png";
import Icon4 from "/YouTube-White.png";
import Linear1 from '/Linear1.jpg';
import Linear2 from '/Linear2.jpg';
import Linear3 from '/Linear3.jpg';
import Linear4 from '/Linear4.jpg';
import Linear5 from '/Linear5.jpg';
import Kuadrat1 from '/Kuadrat1.jpg';
import Kuadrat2 from '/Kuadrat2.jpg';
import Kuadrat3 from '/Kuadrat3.jpg';
import Kuadrat4 from '/Kuadrat4.jpg';
import Kuadrat5 from '/Kuadrat5.jpg';
import Mutlak1 from '/Mutlak1.jpg';
import Mutlak2 from '/Mutlak1.jpg';
import Mutlak3 from '/Mutlak1.jpg';
import Mutlak4 from '/Mutlak1.jpg';
import Mutlak5 from '/Mutlak1.jpg';

export const navMenu = [
  {
    path: "#home",
    text: "Home",
  },
  {
    path: "#benefits",
    text: "Benefits",
  },
  {
    path: "#about",
    text: "About",
  },
  {
    path: "#module",
    text: "Module",
  },
  {
    path: "#operator",
    text: "Operators",
  },
  {
    path: "#support",
    text: "Support",
  },
];

export const benefitsCard = [
  {
    id: "1",
    image: Benefits1,
    tittle: "Tidak Ada Pembayaran",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit arcu a lectus aliquet, quis.",
  },
  {
    id: "2",
    image: Benefits2,
    tittle: "Device Apapun",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit arcu a lectus aliquet, quis.",
  },
  {
    id: "3",
    image: Benefits3,
    tittle: "Ilmu Perguruan Tinggi",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit arcu a lectus aliquet, quis.",
  },
];

export const moduleCard = [
  {
    id: "1",
    image: Module1,
    tittle: "Module Linear",
    subTittle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia purus mi, vitae laoreet ipsum.",
    paragraps: 'Persamaan linear adalah persamaan aljabar yang tiap sukunya mengandung konstanta atau perkalian konstanta dengan variabel tunggal. Persamaan ini dikatakan linear karena hubungan matematis ini dapat digambarkan sebagai garis lurus dalam sistem koordinat Kartesius. Persamaan linear juga bisa kita artikan sebagai persamaan yang memiliki pangkat tertinggi dari variabelnya selalu satu. Dalam persamaan linear akan ada beberapa hal penting seperti variable, koefisien dan juga konstanta. Variabel adalah simbol pengganti nilai numerik dalam kondisi tidak diketahui yang ada di suatu persamaan. Nilai dalam variabel juga tidak selalu tetap dan bisa diubah. Persamaan linear biasanya akan terdiri dari dua ruas yang akan dihubungkan dengan tanda sama dengan (=). Penjumlahan, pengurangan, perkalian dan pembagian pada kedua ruas persamaan linear tidak akan mengubah bentuk nilai persamaan. Persamaan linear akan memiliki pangkat satu dan tidak memiliki perkalian variabel. Persamaan linear juga kerap disebut sebagai persamaan satu derajat.',
    questions: [
      {
        id: "1",
        question: "Tentukan penyelesaian dari persamaan berikut! 2x + 4 = 8",
        image: Linear1,
        answer: "Jadi, penyelesaian persamaan 2x + 4 adalah x = 2.",
      },
      {
        id: "2",
        question: "Tentukan penyelesaian dari persamaan berikut! 9x + 4 = 3x + 22",
        image: Linear2,
        answer: "Jadi, penyelesaian persamaan 9x + 4 = 3x + 22 adalah x = 3.",
      },
      {
        id: "3",
        question: "Tentukan penyelesaian dari persamaan linear satu variabel berikut! 9y - 15 = 2y - 8",
        image: Linear3,
        answer: "Jadi, penyelesaian persamaan linear 9y - 15 = 2y - 8 adalah y = 1.",
      },
      {
        id: "4",
        question: "Tentukan penyelesaian dari persamaan linear satu variabel berikut! 5u - 4u + 7 = 19",
        image: Linear4,
        answer: "Jadi, penyelesaian persamaan linear 5u - 4u + 7 = 19 adalah u = 12.",
      },
      {
        id: "5",
        question: "Tentukan penyelesaian dari setiap persamaan berikut ini! 5w + (w + 15) - 3(w + 2) = 0",
        image: Linear5,
        answer: "Jadi, penyelesaian persamaan linear 5w + (w + 15) - 3(w + 2) = 0 adalah w = -3.",
      },
    ],
  },
  {
    id: "2",
    image: Module2,
    tittle: "Module Kuadrat",
    subTittle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia purus mi, vitae laoreet ipsum.",
    paragraps: 'Persamaan kuadrat adalah persamaan matematika yang memiliki variabel berpangkat dua atau aljabar derajat dua dan berbentuk ax² + bx + c = 0. Persamaan ini disebut kuadrat karena pangkat tertinggi dari variabelnya adalah dua. Persamaan kuadrat sering digunakan untuk menggambarkan hubungan antara dua variabel dalam bentuk parabola. Persamaan kuadrat memiliki beberapa sifat, seperti diskriminan, akar-akar, dan bentuk umum. Diskriminan adalah nilai yang terdapat di dalam akar kuadrat pada rumus mencari akar-akar persamaan kuadrat. Nilai diskriminan dapat digunakan untuk menentukan sifat akar-akar persamaan kuadrat. Jika diskriminan bernilai positif, maka persamaan kuadrat memiliki dua akar real yang berbeda. Jika diskriminan bernilai nol, maka persamaan kuadrat memiliki satu akar real yang berulang. Sedangkan jika diskriminan bernilai negatif, maka persamaan kuadrat memiliki dua akar imajiner. Untuk menyelesaikan persamaan kuadrat, kita dapat menggunakan beberapa metode, seperti faktorisasi, kuadrat sempurna, dan rumus ABC. Metode faktorisasi digunakan untuk memfaktorkan persamaan kuadrat menjadi bentuk perkalian dua binomial. Metode kuadrat sempurna digunakan untuk menyelesaikan persamaan kuadrat yang memiliki bentuk x² + 2ax + a² atau x² - 2ax + a². Sedangkan metode rumus ABC digunakan untuk menyelesaikan persamaan kuadrat yang memiliki bentuk ax² + bx + c = 0 dengan menggunakan rumus x = (-b ± √b² - 4ac) / 2a. Semoga penjelasan ini dapat membantu Anda memahami persamaan kuadrat dengan lebih baik. Jika Anda memerlukan informasi lebih lanjut, jangan ragu untuk bertanya lagi.',
    questions: [
      {
        id: "1",
        question: "Tentukan akar-akar dari persamaan kuadrat berikut! x^2 + 5x + 6 = 0",
        image: Kuadrat1,
        answer: "Jadi, akar-akar dari persamaan kuadrat x^2 + 5x + 6 = 0 adalah x = -2, -3.",
      },
      {
        id: "2",
        question: "Tentukan akar-akar dari persamaan kuadrat berikut! 2x^2 - 7x + 3 = 0",
        image: Kuadrat2,
        answer: "Jadi, akar-akar dari persamaan kuadrat 2x^2 - 7x + 3 = 0 adalah x = 1/2, 3.",
      },
      {
        id: "3",
        question: "Tentukan akar-akar dari persamaan kuadrat berikut! 3x^2 - 4x - 4 = 0",
        image: Kuadrat3,
        answer: "Jadi, akar-akar dari persamaan kuadrat 3x^2 - 4x - 4 = 0 adalah x = (2 + sqrt(13))/3, (2 - sqrt(13))/3.",
      },
      {
        id: "4",
        question: "Tentukan akar-akar dari persamaan kuadrat berikut! 4x^2 + 8x + 3 = 0",
        image: Kuadrat4,
        answer: "Jadi, akar-akar dari persamaan kuadrat 4x^2 + 8x + 3 = 0 adalah x = -1/2, -3/2.",
      },
      {
        id: "5",
        question: "Tentukan akar-akar dari persamaan kuadrat berikut! 5x^2 - 6x + 1 = 0",
        image: Kuadrat5,
        answer: "Jadi, akar-akar dari persamaan kuadrat 5x^2 - 6x + 1 = 0 adalah x = 1/5, 1.",
      },
    ],
  },
  {
    id: "3",
    image: Module3,
    tittle: "Module Himpunan",
    subTittle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia purus mi, vitae laoreet ipsum.",
    paragraps: 'Persamaan nilai mutlak adalah persamaan yang memuat variabel di dalam tanda mutlak. Masalah muncul ketika ditanya penyelesaian persamaan nilai mutlak. Penyelesaian yang dimaksud di sini adalah nilai-nilai variabel yang membuat persamaan menjadi benar. Penyelesaian persamaan nilai mutlak dapat dilakukan dengan menerapkan definisi dan sejumlah sifat (teorema) nilai mutlak. Keterampilan aljabar dan logika (konjungtif-disjungtif) harus diasah untuk memahami materi ini dengan baik.',
    questions: [
      {
        id: "1",
        question: "Tentukan nilai mutlak dari -5.",
        image: Mutlak1,
        answer: "Jadi, nilai mutlak dari -5 adalah 5.",
      },
      {
        id: "2",
        question: "Tentukan nilai mutlak dari 0.",
        image: Mutlak2,
        answer: "Jadi, nilai mutlak dari 0 adalah 0.",
      },
      {
        id: "3",
        question: "Tentukan nilai mutlak dari 3.",
        image: Mutlak3,
        answer: "Jadi, nilai mutlak dari 3 adalah 3.",
      },
      {
        id: "4",
        question: "Tentukan nilai mutlak dari -7.",
        image: Mutlak4,
        answer: "Jadi, nilai mutlak dari -7 adalah 7.",
      },
      {
        id: "5",
        question: "Tentukan nilai mutlak dari 2/3.",
        image: Mutlak5,
        answer: "Jadi, nilai mutlak dari 2/3 adalah 2/3.",
      },
    ],
  },
];

export const operatorCard = [
  {
    id: "1",
    tittle: "Operator Linear",
    subTittle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    path: "linear",
  },
  {
    id: "2",
    tittle: "Operator Kuadrat",
    subTittle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    path: "kuadrat",
  },
];

export const logoIcon = [
  {
    path: Icon1,
  },
  {
    path: Icon2,
  },
  {
    path: Icon3,
  },
  {
    path: Icon4,
  },
];