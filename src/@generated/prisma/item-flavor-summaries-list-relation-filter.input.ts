import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_summariesWhereInput } from '../item-flavor-summaries/item-flavor-summaries-where.input';

@InputType()
export class Item_flavor_summariesListRelationFilter {

    @Field(() => item_flavor_summariesWhereInput, {nullable:true})
    every?: item_flavor_summariesWhereInput;

    @Field(() => item_flavor_summariesWhereInput, {nullable:true})
    some?: item_flavor_summariesWhereInput;

    @Field(() => item_flavor_summariesWhereInput, {nullable:true})
    none?: item_flavor_summariesWhereInput;
}
