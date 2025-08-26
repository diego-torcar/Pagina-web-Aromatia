
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create test user
  const hashedPassword = await bcrypt.hash('johndoe123', 10)
  
  const user = await prisma.user.upsert({
    where: { email: 'john@doe.com' },
    update: {},
    create: {
      email: 'john@doe.com',
      password: hashedPassword,
      name: 'John Doe',
    },
  })

  console.log('Created user:', user)

  // Create admin user
  const adminHashedPassword = await bcrypt.hash('aromatia123', 10)
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@aromatia.com' },
    update: {},
    create: {
      email: 'admin@aromatia.com',
      password: adminHashedPassword,
      name: 'Alejandra Cardenas',
    },
  })

  console.log('Created admin user:', adminUser)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
