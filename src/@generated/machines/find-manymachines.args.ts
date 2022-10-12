import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machinesWhereInput } from './machines-where.input';
import { Type } from 'class-transformer';
import { machinesOrderByWithRelationInput } from './machines-order-by-with-relation.input';
import { machinesWhereUniqueInput } from './machines-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MachinesScalarFieldEnum } from '../prisma/machines-scalar-field.enum';

@ArgsType()
export class FindManymachinesArgs {

    @Field(() => machinesWhereInput, {nullable:true})
    @Type(() => machinesWhereInput)
    where?: machinesWhereInput;

    @Field(() => [machinesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<machinesOrderByWithRelationInput>;

    @Field(() => machinesWhereUniqueInput, {nullable:true})
    cursor?: machinesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MachinesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MachinesScalarFieldEnum>;
}
