import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_namesWhereInput } from '../item-names/item-names-where.input';

@InputType()
export class Item_namesListRelationFilter {

    @Field(() => item_namesWhereInput, {nullable:true})
    every?: item_namesWhereInput;

    @Field(() => item_namesWhereInput, {nullable:true})
    some?: item_namesWhereInput;

    @Field(() => item_namesWhereInput, {nullable:true})
    none?: item_namesWhereInput;
}
