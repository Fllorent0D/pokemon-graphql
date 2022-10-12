import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_textScalarWhereInput } from './move-flavor-text-scalar-where.input';
import { Type } from 'class-transformer';
import { move_flavor_textUpdateManyMutationInput } from './move-flavor-text-update-many-mutation.input';

@InputType()
export class move_flavor_textUpdateManyWithWhereWithoutVersion_groupsInput {

    @Field(() => move_flavor_textScalarWhereInput, {nullable:false})
    @Type(() => move_flavor_textScalarWhereInput)
    where!: move_flavor_textScalarWhereInput;

    @Field(() => move_flavor_textUpdateManyMutationInput, {nullable:false})
    @Type(() => move_flavor_textUpdateManyMutationInput)
    data!: move_flavor_textUpdateManyMutationInput;
}
