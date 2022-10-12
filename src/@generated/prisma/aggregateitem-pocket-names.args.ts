import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_pocket_namesWhereInput } from '../item-pocket-names/item-pocket-names-where.input';
import { Type } from 'class-transformer';
import { item_pocket_namesOrderByWithRelationInput } from '../item-pocket-names/item-pocket-names-order-by-with-relation.input';
import { item_pocket_namesWhereUniqueInput } from '../item-pocket-names/item-pocket-names-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateitemPocketNamesArgs {

    @Field(() => item_pocket_namesWhereInput, {nullable:true})
    @Type(() => item_pocket_namesWhereInput)
    where?: item_pocket_namesWhereInput;

    @Field(() => [item_pocket_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<item_pocket_namesOrderByWithRelationInput>;

    @Field(() => item_pocket_namesWhereUniqueInput, {nullable:true})
    cursor?: item_pocket_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
