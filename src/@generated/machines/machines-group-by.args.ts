import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machinesWhereInput } from './machines-where.input';
import { Type } from 'class-transformer';
import { machinesOrderByWithAggregationInput } from './machines-order-by-with-aggregation.input';
import { MachinesScalarFieldEnum } from '../prisma/machines-scalar-field.enum';
import { machinesScalarWhereWithAggregatesInput } from './machines-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class machinesGroupByArgs {

    @Field(() => machinesWhereInput, {nullable:true})
    @Type(() => machinesWhereInput)
    where?: machinesWhereInput;

    @Field(() => [machinesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<machinesOrderByWithAggregationInput>;

    @Field(() => [MachinesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MachinesScalarFieldEnum>;

    @Field(() => machinesScalarWhereWithAggregatesInput, {nullable:true})
    having?: machinesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
