import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Item_flavor_summariesMinAggregate {

    @Field(() => Int, {nullable:true})
    item_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;

    @Field(() => String, {nullable:true})
    flavor_summary?: string;
}