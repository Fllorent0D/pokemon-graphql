import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesScalarWhereInput } from './berries-scalar-where.input';
import { Type } from 'class-transformer';
import { berriesUpdateManyMutationInput } from './berries-update-many-mutation.input';

@InputType()
export class berriesUpdateManyWithWhereWithoutBerry_firmnessInput {

    @Field(() => berriesScalarWhereInput, {nullable:false})
    @Type(() => berriesScalarWhereInput)
    where!: berriesScalarWhereInput;

    @Field(() => berriesUpdateManyMutationInput, {nullable:false})
    @Type(() => berriesUpdateManyMutationInput)
    data!: berriesUpdateManyMutationInput;
}
