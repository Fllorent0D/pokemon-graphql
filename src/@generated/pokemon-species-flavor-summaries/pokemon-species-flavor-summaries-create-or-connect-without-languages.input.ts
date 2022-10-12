import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesWhereUniqueInput } from './pokemon-species-flavor-summaries-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_summariesCreateWithoutLanguagesInput } from './pokemon-species-flavor-summaries-create-without-languages.input';

@InputType()
export class pokemon_species_flavor_summariesCreateOrConnectWithoutLanguagesInput {

    @Field(() => pokemon_species_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesWhereUniqueInput)
    where!: pokemon_species_flavor_summariesWhereUniqueInput;

    @Field(() => pokemon_species_flavor_summariesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesCreateWithoutLanguagesInput)
    create!: pokemon_species_flavor_summariesCreateWithoutLanguagesInput;
}
