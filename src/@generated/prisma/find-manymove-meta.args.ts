import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_metaWhereInput } from '../move-meta/move-meta-where.input';
import { Type } from 'class-transformer';
import { move_metaOrderByWithRelationInput } from '../move-meta/move-meta-order-by-with-relation.input';
import { move_metaWhereUniqueInput } from '../move-meta/move-meta-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Move_metaScalarFieldEnum } from './move-meta-scalar-field.enum';

@ArgsType()
export class FindManymoveMetaArgs {

    @Field(() => move_metaWhereInput, {nullable:true})
    @Type(() => move_metaWhereInput)
    where?: move_metaWhereInput;

    @Field(() => [move_metaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_metaOrderByWithRelationInput>;

    @Field(() => move_metaWhereUniqueInput, {nullable:true})
    cursor?: move_metaWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Move_metaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Move_metaScalarFieldEnum>;
}
