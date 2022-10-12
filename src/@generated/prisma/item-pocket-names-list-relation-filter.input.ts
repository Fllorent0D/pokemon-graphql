import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocket_namesWhereInput } from '../item-pocket-names/item-pocket-names-where.input';

@InputType()
export class Item_pocket_namesListRelationFilter {

    @Field(() => item_pocket_namesWhereInput, {nullable:true})
    every?: item_pocket_namesWhereInput;

    @Field(() => item_pocket_namesWhereInput, {nullable:true})
    some?: item_pocket_namesWhereInput;

    @Field(() => item_pocket_namesWhereInput, {nullable:true})
    none?: item_pocket_namesWhereInput;
}
