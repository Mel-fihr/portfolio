import styles from './Home.module.css'; // Import your CSS module

export default function Home() {
  return (
    <>
      <main className={styles.mainContent}>
        <section className={`${styles.textCenter} section`}>
          <h1 className={`${styles.maintext} text-8xl font-bold mb-4`}>
            <span className={styles.hello}>Hello,</span> I'm Marwane El Fihri
          </h1>
          <p className={`${styles.maintext2} text-2xl mb-8`}>Digital Technology Architect Student At 1337 (42 Network, UM6P)</p>

          {/* Button Container */}
          <button type="button" className="rounded-md bg-white/5 px-6 py-5 ml-40 text-sm font-semibold text-white shadow-sm hover:bg-white/30">Button text</button>
          <button type="button" className="rounded-md bg-white/5 px-6 py-5 ml-40 mt-10 text-sm font-semibold text-white shadow-sm hover:bg-white/30">Button text</button>
          <button type="button" className="rounded-md bg-white/5 px-6 py-5 mr-40 ml-40 mt-10 text-sm font-semibold text-white shadow-sm hover:bg-white/30">Button text</button>

        </section>
        {/* Additional sections like 'Services' and 'Meet Our Team' would go here */}
      </main>
    </>
  );
}