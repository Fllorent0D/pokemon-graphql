import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_namesScalarWhereInput } from './ability-names-scalar-where.input';
import { Type } from 'class-transformer';
import { ability_namesUpdateManyMutationInput } from './ability-names-update-many-mutation.input';

@InputType()
export class ability_namesUpdateManyWithWhereWithoutAbilitiesInput {

    @Field(() => ability_namesScalarWhereInput, {nullable:false})
    @Type(() => ability_namesScalarWhereInput)
    where!: ability_namesScalarWhereInput;

    @Field(() => ability_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => ability_namesUpdateManyMutationInput)
    data!: ability_namesUpdateManyMutationInput;
}
