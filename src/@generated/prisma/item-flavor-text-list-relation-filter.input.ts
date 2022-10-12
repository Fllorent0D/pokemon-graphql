import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_textWhereInput } from '../item-flavor-text/item-flavor-text-where.input';

@InputType()
export class Item_flavor_textListRelationFilter {

    @Field(() => item_flavor_textWhereInput, {nullable:true})
    every?: item_flavor_textWhereInput;

    @Field(() => item_flavor_textWhereInput, {nullable:true})
    some?: item_flavor_textWhereInput;

    @Field(() => item_flavor_textWhereInput, {nullable:true})
    none?: item_flavor_textWhereInput;
}
