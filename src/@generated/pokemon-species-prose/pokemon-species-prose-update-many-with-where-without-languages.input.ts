import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_proseScalarWhereInput } from './pokemon-species-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_species_proseUpdateManyMutationInput } from './pokemon-species-prose-update-many-mutation.input';

@InputType()
export class pokemon_species_proseUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => pokemon_species_proseScalarWhereInput, {nullable:false})
    @Type(() => pokemon_species_proseScalarWhereInput)
    where!: pokemon_species_proseScalarWhereInput;

    @Field(() => pokemon_species_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_species_proseUpdateManyMutationInput)
    data!: pokemon_species_proseUpdateManyMutationInput;
}
