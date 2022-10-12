import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_flavor_textScalarWhereInput } from './ability-flavor-text-scalar-where.input';
import { Type } from 'class-transformer';
import { ability_flavor_textUpdateManyMutationInput } from './ability-flavor-text-update-many-mutation.input';

@InputType()
export class ability_flavor_textUpdateManyWithWhereWithoutAbilitiesInput {

    @Field(() => ability_flavor_textScalarWhereInput, {nullable:false})
    @Type(() => ability_flavor_textScalarWhereInput)
    where!: ability_flavor_textScalarWhereInput;

    @Field(() => ability_flavor_textUpdateManyMutationInput, {nullable:false})
    @Type(() => ability_flavor_textUpdateManyMutationInput)
    data!: ability_flavor_textUpdateManyMutationInput;
}
