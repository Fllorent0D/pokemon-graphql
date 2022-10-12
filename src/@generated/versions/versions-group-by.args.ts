import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { versionsWhereInput } from './versions-where.input';
import { Type } from 'class-transformer';
import { versionsOrderByWithAggregationInput } from './versions-order-by-with-aggregation.input';
import { VersionsScalarFieldEnum } from '../prisma/versions-scalar-field.enum';
import { versionsScalarWhereWithAggregatesInput } from './versions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class versionsGroupByArgs {

    @Field(() => versionsWhereInput, {nullable:true})
    @Type(() => versionsWhereInput)
    where?: versionsWhereInput;

    @Field(() => [versionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<versionsOrderByWithAggregationInput>;

    @Field(() => [VersionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof VersionsScalarFieldEnum>;

    @Field(() => versionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: versionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
