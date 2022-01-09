# Ex 3 - Tree shaking

Explique com suas palavras o que é tree shaking e como isso pode beneficiar os desenvolvedores que fazem uso de módulos no Javascript.



____

### Tree shaking

É uma técnica que analisa o código importado individualmente de um módulo, e o *bundler* vai remover os trechos que interpretar não serem necessários.

Com essa técnica, o código fica com uma melhor performance e o *bundle* com um tamanho menor, além de permitir o desenvolvedor importar só o que precisa. 