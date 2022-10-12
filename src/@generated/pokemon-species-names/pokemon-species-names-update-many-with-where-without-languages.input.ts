import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_namesScalarWhereInput } from './pokemon-species-names-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_species_namesUpdateManyMutationInput } from './pokemon-species-names-update-many-mutation.input';

@InputType()
export class pokemon_species_namesUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => pokemon_species_namesScalarWhereInput, {nullable:false})
    @Type(() => pokemon_species_namesScalarWhereInput)
    where!: pokemon_species_namesScalarWhereInput;

    @Field(() => pokemon_species_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_species_namesUpdateManyMutationInput)
    data!: pokemon_species_namesUpdateManyMutationInput;
}
