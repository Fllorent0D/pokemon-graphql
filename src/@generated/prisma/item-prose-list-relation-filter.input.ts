import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_proseWhereInput } from '../item-prose/item-prose-where.input';

@InputType()
export class Item_proseListRelationFilter {

    @Field(() => item_proseWhereInput, {nullable:true})
    every?: item_proseWhereInput;

    @Field(() => item_proseWhereInput, {nullable:true})
    some?: item_proseWhereInput;

    @Field(() => item_proseWhereInput, {nullable:true})
    none?: item_proseWhereInput;
}
