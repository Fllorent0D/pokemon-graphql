import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { experienceWhereInput } from './experience-where.input';
import { Type } from 'class-transformer';
import { experienceOrderByWithAggregationInput } from './experience-order-by-with-aggregation.input';
import { ExperienceScalarFieldEnum } from '../prisma/experience-scalar-field.enum';
import { experienceScalarWhereWithAggregatesInput } from './experience-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class experienceGroupByArgs {

    @Field(() => experienceWhereInput, {nullable:true})
    @Type(() => experienceWhereInput)
    where?: experienceWhereInput;

    @Field(() => [experienceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<experienceOrderByWithAggregationInput>;

    @Field(() => [ExperienceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ExperienceScalarFieldEnum>;

    @Field(() => experienceScalarWhereWithAggregatesInput, {nullable:true})
    having?: experienceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
