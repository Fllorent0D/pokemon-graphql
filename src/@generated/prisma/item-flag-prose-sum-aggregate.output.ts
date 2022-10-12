import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Item_flag_proseSumAggregate {

    @Field(() => Int, {nullable:true})
    item_flag_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;
}
