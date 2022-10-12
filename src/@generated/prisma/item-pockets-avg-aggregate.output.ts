import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Item_pocketsAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;
}
