import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_namesWhereInput } from '../item-names/item-names-where.input';
import { Type } from 'class-transformer';
import { item_namesOrderByWithRelationInput } from '../item-names/item-names-order-by-with-relation.input';
import { item_namesWhereUniqueInput } from '../item-names/item-names-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Item_namesScalarFieldEnum } from './item-names-scalar-field.enum';

@ArgsType()
export class FindFirstitemNamesArgs {

    @Field(() => item_namesWhereInput, {nullable:true})
    @Type(() => item_namesWhereInput)
    where?: item_namesWhereInput;

    @Field(() => [item_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<item_namesOrderByWithRelationInput>;

    @Field(() => item_namesWhereUniqueInput, {nullable:true})
    cursor?: item_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Item_namesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Item_namesScalarFieldEnum>;
}
