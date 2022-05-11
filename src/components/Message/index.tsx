import React from 'react';

import { Container } from './styles';

interface MessageProps {
  name: string
  message: string
  
}

export const Message: React.FC<MessageProps> = ({ message, name }) => {
  return (
    <Container>
      <img src="data:image/webp;base64,UklGRoAEAABXRUJQVlA4IHQEAABQIQCdASoTAbcAPpFIoEulpKMhpHd4QLASCWdu4Xaw/pTf6rXJ/QcLPzJCjeG2x/OtabxTyfkaz1zdQyuy4MUVfI9/Qhzsv1oZudDTPhl8gqc6Gmcx7qFDJyCpzoaZyjYLVLfDCSypAs5z0nfntmlJAepfIKknf9DmsrDKwpi5cMvkFThd9iWIoWiufpx+AcNM+GXttTwTlPcQ/NcMAS7gPUvjZz5CJzmeIMoIueZDTPhl8cMvIkktzT391JYUYpDTPhl8cJsT1Rpc5ZW1RMSDF48MvkFSZWb18/p5DGxZc0KagakB/5XMPJyBEVqEv/8maOoQzdJQXd4JYS41vq386120/B2QoKnOjE7EtbHg+IznAAD+/0yX5rKQ1VqQDuEiXsATvololMRYfhlRM0BgwR/gIn7yw7OEqJ+8F38SzXmZ6ZwGW0eNS62hG71H+R5HW4hhuES7i/yQVq13BRCEo5xt4T4+okyfom8nAoJyYlOpP5o/oO6Sc5afqH0DRS8kAvdtxNRt0cwaSNPRw1+b8hCTPmb+RWXR7Uvg1oSY09uuxOxN9YBbM3ALSBn9M4EHkZamxGqj6JsjvMMWYTMreh6Qbw+BUUfn7d60srtWEd7gBayd3L0qvESJPQowYwAa1fEzi8df8pYnJCGRDdUcsovxVEn63lM/ozGfic8mWMgviD5CSG8QVIAjsi1LErHEcI+9N12yfZYChC0YtwFnhAlLDxpyjZv5kdDjAEoc0jB0JAdNrn05A+DTil2MztixsHuJt63/sIMPpg9hJyx+4khpsNgehxRmMg25KfunJvIxxi3xfo1X7qv4AAOqZAn/4f7XvFiGLgTST3iIhfd5xL7pI3/cxeNa3JyRh+2SkM69nXNioof8ZKerfnL5RE/u+j4Og+9F/HgGIopXuRTbXPLFmgdXRK3SbS4xgiT+0KXH60SvlK1JUYUe35I2rnd79pcVVH2giQMFWkZKHP8mB82nIfFyZ4wR38vADXT0On8GMIn0RruZ22suypvQojLus3bWK/x/GapiZGTdSTy6Z7yk9bcfzzyJljJndusafYT/eQ8QjvmHFFZYrZJYP08MifGQ2V62weB+NuYwuFOM+vdVVGoFkhyV1u/OjqtjBiBl8t1SjWmsjuJs5s/SySQwtHR1X2CCac04SsmnIdVHcsa6RA3nktl3cqYx1Prve3UkodYfXS2eaxRLQcAU7xuoxhfQnBOexiqxFWZPVt4DKUMdLc1KV51uCqJqMat+dk+O9qy4XoDIw3e/LooDbU4AG17nNodsqrANwWi9D0kVS57iX+vNw7hUKvDZtBSXGJqqdhBSX8EiKSplVnwhZrji4kDoKso1FfCjCiAz089hs2MA69ZeDpO4IT+veLL4nH2T0PpHhrPVmRk5KlxsNaisGkgKNEkcv42ZucqMSXlm7LuLxc6FdFLNnVHtdpBVuKthK9q+fmdx5YGLHzaHyGP2ZE228z3XPwdlVSPd2d+lSWW5W8p4+1btIKyJ8+VcQgGAAAA=" alt="imagem de perfil" />
      <h2>{ name }:</h2>
      <p>{ message }</p>
    </Container>
  )
}
