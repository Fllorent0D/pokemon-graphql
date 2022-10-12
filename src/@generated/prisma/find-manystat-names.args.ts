import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_namesWhereInput } from '../stat-names/stat-names-where.input';
import { Type } from 'class-transformer';
import { stat_namesOrderByWithRelationInput } from '../stat-names/stat-names-order-by-with-relation.input';
import { stat_namesWhereUniqueInput } from '../stat-names/stat-names-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Stat_namesScalarFieldEnum } from './stat-names-scalar-field.enum';

@ArgsType()
export class FindManystatNamesArgs {

    @Field(() => stat_namesWhereInput, {nullable:true})
    @Type(() => stat_namesWhereInput)
    where?: stat_namesWhereInput;

    @Field(() => [stat_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<stat_namesOrderByWithRelationInput>;

    @Field(() => stat_namesWhereUniqueInput, {nullable:true})
    cursor?: stat_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Stat_namesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Stat_namesScalarFieldEnum>;
}
