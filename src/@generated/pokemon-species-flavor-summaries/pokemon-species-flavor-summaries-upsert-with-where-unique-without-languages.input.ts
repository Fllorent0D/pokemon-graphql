import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesWhereUniqueInput } from './pokemon-species-flavor-summaries-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_summariesUpdateWithoutLanguagesInput } from './pokemon-species-flavor-summaries-update-without-languages.input';
import { pokemon_species_flavor_summariesCreateWithoutLanguagesInput } from './pokemon-species-flavor-summaries-create-without-languages.input';

@InputType()
export class pokemon_species_flavor_summariesUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => pokemon_species_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesWhereUniqueInput)
    where!: pokemon_species_flavor_summariesWhereUniqueInput;

    @Field(() => pokemon_species_flavor_summariesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesUpdateWithoutLanguagesInput)
    update!: pokemon_species_flavor_summariesUpdateWithoutLanguagesInput;

    @Field(() => pokemon_species_flavor_summariesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesCreateWithoutLanguagesInput)
    create!: pokemon_species_flavor_summariesCreateWithoutLanguagesInput;
}
