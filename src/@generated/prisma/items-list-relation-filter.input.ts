import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereInput } from '../items/items-where.input';

@InputType()
export class ItemsListRelationFilter {

    @Field(() => itemsWhereInput, {nullable:true})
    every?: itemsWhereInput;

    @Field(() => itemsWhereInput, {nullable:true})
    some?: itemsWhereInput;

    @Field(() => itemsWhereInput, {nullable:true})
    none?: itemsWhereInput;
}
