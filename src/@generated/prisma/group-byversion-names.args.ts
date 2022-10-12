import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_namesWhereInput } from '../version-names/version-names-where.input';
import { Type } from 'class-transformer';
import { version_namesOrderByWithAggregationInput } from '../version-names/version-names-order-by-with-aggregation.input';
import { Version_namesScalarFieldEnum } from './version-names-scalar-field.enum';
import { version_namesScalarWhereWithAggregatesInput } from '../version-names/version-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByversionNamesArgs {

    @Field(() => version_namesWhereInput, {nullable:true})
    @Type(() => version_namesWhereInput)
    where?: version_namesWhereInput;

    @Field(() => [version_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<version_namesOrderByWithAggregationInput>;

    @Field(() => [Version_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Version_namesScalarFieldEnum>;

    @Field(() => version_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: version_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
