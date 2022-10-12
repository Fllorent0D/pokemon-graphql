import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flavor_textWhereInput } from '../move-flavor-text/move-flavor-text-where.input';
import { Type } from 'class-transformer';
import { move_flavor_textOrderByWithRelationInput } from '../move-flavor-text/move-flavor-text-order-by-with-relation.input';
import { move_flavor_textWhereUniqueInput } from '../move-flavor-text/move-flavor-text-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatemoveFlavorTextArgs {

    @Field(() => move_flavor_textWhereInput, {nullable:true})
    @Type(() => move_flavor_textWhereInput)
    where?: move_flavor_textWhereInput;

    @Field(() => [move_flavor_textOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_flavor_textOrderByWithRelationInput>;

    @Field(() => move_flavor_textWhereUniqueInput, {nullable:true})
    cursor?: move_flavor_textWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
