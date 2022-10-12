import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_species_flavor_summariesInput } from './languages-create-without-pokemon-species-flavor-summaries.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_species_flavor_summariesInput } from './languages-create-or-connect-without-pokemon-species-flavor-summaries.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutPokemon_species_flavor_summariesInput {

    @Field(() => languagesCreateWithoutPokemon_species_flavor_summariesInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_species_flavor_summariesInput)
    create?: languagesCreateWithoutPokemon_species_flavor_summariesInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_species_flavor_summariesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_species_flavor_summariesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_species_flavor_summariesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
