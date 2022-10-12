import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Item_fling_effectsSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;
}
