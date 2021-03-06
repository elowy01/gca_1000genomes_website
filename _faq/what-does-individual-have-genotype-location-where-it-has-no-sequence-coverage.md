---
title: "How does an individual have a genotype in a location where it has no sequence coverage?"
faq_tags:
  - data-analysis
  - imputation
  - variants
faq_related:
  - what-does-genotype-dosage-mean-phase1-integrated-call-set
  - which-your-phase1-variant-sites-have-imputed-genotypes
  - why-allele-frequency-different-allele-countallele-number
---
                    
Our released genotypes are created not just using sequence evidence but also imputation. If an individual has no coverage at a particular location but overall we have been able to determine there is variation at that location then we can statistically infer the genotype for that variant in that individual using haplotype information. This means we are able to provide complete haplotypes for all the variation we discover. For more information about how the genotype calling was done please refer to our [phase 1 publication](http://www.nature.com/nature/journal/v491/n7422/full/nature11632.html).
