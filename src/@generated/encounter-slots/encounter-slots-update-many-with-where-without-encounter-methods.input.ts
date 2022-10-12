import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_slotsScalarWhereInput } from './encounter-slots-scalar-where.input';
import { Type } from 'class-transformer';
import { encounter_slotsUpdateManyMutationInput } from './encounter-slots-update-many-mutation.input';

@InputType()
export class encounter_slotsUpdateManyWithWhereWithoutEncounter_methodsInput {

    @Field(() => encounter_slotsScalarWhereInput, {nullable:false})
    @Type(() => encounter_slotsScalarWhereInput)
    where!: encounter_slotsScalarWhereInput;

    @Field(() => encounter_slotsUpdateManyMutationInput, {nullable:false})
    @Type(() => encounter_slotsUpdateManyMutationInput)
    data!: encounter_slotsUpdateManyMutationInput;
}
