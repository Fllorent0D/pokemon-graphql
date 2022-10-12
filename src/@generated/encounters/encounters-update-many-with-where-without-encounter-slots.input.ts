import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersScalarWhereInput } from './encounters-scalar-where.input';
import { Type } from 'class-transformer';
import { encountersUpdateManyMutationInput } from './encounters-update-many-mutation.input';

@InputType()
export class encountersUpdateManyWithWhereWithoutEncounter_slotsInput {

    @Field(() => encountersScalarWhereInput, {nullable:false})
    @Type(() => encountersScalarWhereInput)
    where!: encountersScalarWhereInput;

    @Field(() => encountersUpdateManyMutationInput, {nullable:false})
    @Type(() => encountersUpdateManyMutationInput)
    data!: encountersUpdateManyMutationInput;
}
