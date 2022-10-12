import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machinesScalarWhereInput } from './machines-scalar-where.input';
import { Type } from 'class-transformer';
import { machinesUpdateManyMutationInput } from './machines-update-many-mutation.input';

@InputType()
export class machinesUpdateManyWithWhereWithoutMovesInput {

    @Field(() => machinesScalarWhereInput, {nullable:false})
    @Type(() => machinesScalarWhereInput)
    where!: machinesScalarWhereInput;

    @Field(() => machinesUpdateManyMutationInput, {nullable:false})
    @Type(() => machinesUpdateManyMutationInput)
    data!: machinesUpdateManyMutationInput;
}
