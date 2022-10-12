import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flagsWhereInput } from '../move-flags/move-flags-where.input';
import { Type } from 'class-transformer';
import { move_flagsOrderByWithRelationInput } from '../move-flags/move-flags-order-by-with-relation.input';
import { move_flagsWhereUniqueInput } from '../move-flags/move-flags-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Move_flagsScalarFieldEnum } from './move-flags-scalar-field.enum';

@ArgsType()
export class FindFirstmoveFlagsArgs {

    @Field(() => move_flagsWhereInput, {nullable:true})
    @Type(() => move_flagsWhereInput)
    where?: move_flagsWhereInput;

    @Field(() => [move_flagsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_flagsOrderByWithRelationInput>;

    @Field(() => move_flagsWhereUniqueInput, {nullable:true})
    cursor?: move_flagsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Move_flagsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Move_flagsScalarFieldEnum>;
}
