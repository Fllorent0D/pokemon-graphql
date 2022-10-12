import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesScalarWhereInput } from './pokemon-species-flavor-summaries-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_summariesUpdateManyMutationInput } from './pokemon-species-flavor-summaries-update-many-mutation.input';

@InputType()
export class pokemon_species_flavor_summariesUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => pokemon_species_flavor_summariesScalarWhereInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesScalarWhereInput)
    where!: pokemon_species_flavor_summariesScalarWhereInput;

    @Field(() => pokemon_species_flavor_summariesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesUpdateManyMutationInput)
    data!: pokemon_species_flavor_summariesUpdateManyMutationInput;
}
