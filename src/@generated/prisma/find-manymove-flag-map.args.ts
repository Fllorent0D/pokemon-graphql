import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flag_mapWhereInput } from '../move-flag-map/move-flag-map-where.input';
import { Type } from 'class-transformer';
import { move_flag_mapOrderByWithRelationInput } from '../move-flag-map/move-flag-map-order-by-with-relation.input';
import { move_flag_mapWhereUniqueInput } from '../move-flag-map/move-flag-map-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Move_flag_mapScalarFieldEnum } from './move-flag-map-scalar-field.enum';

@ArgsType()
export class FindManymoveFlagMapArgs {

    @Field(() => move_flag_mapWhereInput, {nullable:true})
    @Type(() => move_flag_mapWhereInput)
    where?: move_flag_mapWhereInput;

    @Field(() => [move_flag_mapOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_flag_mapOrderByWithRelationInput>;

    @Field(() => move_flag_mapWhereUniqueInput, {nullable:true})
    cursor?: move_flag_mapWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Move_flag_mapScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Move_flag_mapScalarFieldEnum>;
}
