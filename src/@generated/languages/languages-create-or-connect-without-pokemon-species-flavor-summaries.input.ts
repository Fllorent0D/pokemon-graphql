import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_species_flavor_summariesInput } from './languages-create-without-pokemon-species-flavor-summaries.input';

@InputType()
export class languagesCreateOrConnectWithoutPokemon_species_flavor_summariesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutPokemon_species_flavor_summariesInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_species_flavor_summariesInput)
    create!: languagesCreateWithoutPokemon_species_flavor_summariesInput;
}
