import React from 'react';
import { Demo } from './Demo';
import { DemoHeader } from './DemoHeader';
import { Header } from './Header';
import { MacroFeatures } from './MacroFeatures';
import { MicroFeatures } from './MicroFeatures';

export const HomeContent = () => (
  <>
    <Header />
    <main>
      <MacroFeatures />

      <DemoHeader />

      <section className="bg-gray-800 dark:bg-gray-900">
        <Demo />

        <MicroFeatures />
      </section>
    </main>
  </>
);
