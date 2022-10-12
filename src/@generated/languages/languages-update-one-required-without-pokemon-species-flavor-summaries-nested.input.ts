import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_species_flavor_summariesInput } from './languages-create-without-pokemon-species-flavor-summaries.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_species_flavor_summariesInput } from './languages-create-or-connect-without-pokemon-species-flavor-summaries.input';
import { languagesUpsertWithoutPokemon_species_flavor_summariesInput } from './languages-upsert-without-pokemon-species-flavor-summaries.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutPokemon_species_flavor_summariesInput } from './languages-update-without-pokemon-species-flavor-summaries.input';

@InputType()
export class languagesUpdateOneRequiredWithoutPokemon_species_flavor_summariesNestedInput {

    @Field(() => languagesCreateWithoutPokemon_species_flavor_summariesInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_species_flavor_summariesInput)
    create?: languagesCreateWithoutPokemon_species_flavor_summariesInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_species_flavor_summariesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_species_flavor_summariesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_species_flavor_summariesInput;

    @Field(() => languagesUpsertWithoutPokemon_species_flavor_summariesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutPokemon_species_flavor_summariesInput)
    upsert?: languagesUpsertWithoutPokemon_species_flavor_summariesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutPokemon_species_flavor_summariesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutPokemon_species_flavor_summariesInput)
    update?: languagesUpdateWithoutPokemon_species_flavor_summariesInput;
}
