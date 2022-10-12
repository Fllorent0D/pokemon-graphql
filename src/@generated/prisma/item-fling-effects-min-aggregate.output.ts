import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Item_fling_effectsMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;
}
