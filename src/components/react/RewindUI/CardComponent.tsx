import React from 'react'
import { Badge, Button, Card, Ribbon } from '@rewind-ui/core'

export function CardComponent() {
  return (
    <>
      <Card className="max-w-[450px] relative">
        <Ribbon size="lg" shadow="base" color="purple" shadowColor="purple" className="z-20">City tour</Ribbon>
        <Card.Image caption="USA" mode="dark" src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&h=250&q=80" />
        <Card.Body>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xl text-gray-800 font-semibold">New York</span>
              <Badge size="sm" color="green" tone="outline">$1,500.00</Badge>
            </div>
            <span className="text-gray-600">Discover the magic of the city that never sleeps, as our experienced guides lead you through the vibrant streets of New York, showcasing its iconic landmarks, hidden gems and rich history.</span>
          </div>
        </Card.Body>
        <Card.Footer>
          <Button className="w-full" color="black">Book now!</Button>
        </Card.Footer>
      </Card>

      {/* <Card className="max-w-[450px] relative">
        <Ribbon size="lg" shadow="base" color="green" shadowColor="green" className="z-20">Boat tour</Ribbon>
        <CardImage caption="Greece" mode="dark" src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&h=250&q=80" />
        <CardBody>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xl text-gray-800 font-semibold">Milos island</span>
              <Badge size="sm" color="green" tone="outline">$2,500.00</Badge>
            </div>
            <span className="text-gray-600">Discover the stunning beauty of Milos Island on our unforgettable boat tour. Let our experienced captain take you on a journey to explore the crystal-clear waters of this idyllic Greek island.</span>
          </div>
        </CardBody>
        <CardFooter>
          <Button className="w-full" color="black">Book now!</Button>
        </CardFooter>
      </Card> */}
    </>
  )
}
