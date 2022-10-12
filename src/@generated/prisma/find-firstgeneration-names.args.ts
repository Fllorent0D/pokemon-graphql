import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { generation_namesWhereInput } from '../generation-names/generation-names-where.input';
import { Type } from 'class-transformer';
import { generation_namesOrderByWithRelationInput } from '../generation-names/generation-names-order-by-with-relation.input';
import { generation_namesWhereUniqueInput } from '../generation-names/generation-names-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Generation_namesScalarFieldEnum } from './generation-names-scalar-field.enum';

@ArgsType()
export class FindFirstgenerationNamesArgs {

    @Field(() => generation_namesWhereInput, {nullable:true})
    @Type(() => generation_namesWhereInput)
    where?: generation_namesWhereInput;

    @Field(() => [generation_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<generation_namesOrderByWithRelationInput>;

    @Field(() => generation_namesWhereUniqueInput, {nullable:true})
    cursor?: generation_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Generation_namesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Generation_namesScalarFieldEnum>;
}
