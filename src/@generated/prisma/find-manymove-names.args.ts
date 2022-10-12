import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_namesWhereInput } from '../move-names/move-names-where.input';
import { Type } from 'class-transformer';
import { move_namesOrderByWithRelationInput } from '../move-names/move-names-order-by-with-relation.input';
import { move_namesWhereUniqueInput } from '../move-names/move-names-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Move_namesScalarFieldEnum } from './move-names-scalar-field.enum';

@ArgsType()
export class FindManymoveNamesArgs {

    @Field(() => move_namesWhereInput, {nullable:true})
    @Type(() => move_namesWhereInput)
    where?: move_namesWhereInput;

    @Field(() => [move_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_namesOrderByWithRelationInput>;

    @Field(() => move_namesWhereUniqueInput, {nullable:true})
    cursor?: move_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Move_namesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Move_namesScalarFieldEnum>;
}
